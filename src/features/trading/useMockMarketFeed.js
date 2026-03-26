import { startTransition, useEffect, useMemo, useState } from "react";
import {
  initialIndices,
  initialNews,
  initialPortfolio,
  initialStocks,
  initialWatchlist,
  timeframeSeries,
} from "./mockTradingData";

function createMockSocket(onMessage) {
  const intervalId = window.setInterval(() => {
    onMessage({
      type: "MARKET_TICK",
      payload: {
        timestamp: Date.now(),
      },
    });
  }, 1600);

  return {
    close() {
      window.clearInterval(intervalId);
    },
  };
}

export function useMockMarketFeed(timeframe, selectedSymbol) {
  const [marketState, setMarketState] = useState(() => buildInitialState(timeframe));

  useEffect(() => {
    setMarketState((current) => ({
      ...current,
      timeframe,
      chartData: timeframeSeries[timeframe],
    }));
  }, [timeframe]);

  useEffect(() => {
    setMarketState((current) => {
      const stock = current.stocks.find((item) => item.symbol === selectedSymbol) || current.stocks[0];

      return {
        ...current,
        selectedSymbol: selectedSymbol || current.selectedSymbol,
        orderBook: buildOrderBook(stock.price),
        chartData: timeframeSeries[timeframe].map((entry, index) =>
          index === timeframeSeries[timeframe].length - 1
            ? { ...entry, close: round(stock.price), ma: round((entry.ma + stock.price) / 2) }
            : entry
        ),
      };
    });
  }, [selectedSymbol, timeframe]);

  useEffect(() => {
    const socket = createMockSocket((message) => {
      startTransition(() => {
        setMarketState((current) => applyTick(current, message.payload, timeframe));
      });
    });

    return () => socket.close();
  }, [timeframe]);

  return useMemo(
    () => ({
      ...marketState,
      topGainers: [...marketState.stocks].sort((a, b) => b.changePct - a.changePct).slice(0, 3),
      topLosers: [...marketState.stocks].sort((a, b) => a.changePct - b.changePct).slice(0, 3),
    }),
    [marketState]
  );
}

function buildInitialState(timeframe) {
  return {
    timeframe,
    stocks: initialStocks,
    indices: initialIndices,
    portfolio: withHoldingMetrics(initialPortfolio),
    news: initialNews,
    watchlist: initialWatchlist(),
    chartData: timeframeSeries[timeframe],
    orderBook: buildOrderBook(initialStocks[0].price),
    selectedSymbol: "RELIANCE",
    flashes: {},
    lastTickAt: Date.now(),
  };
}

function applyTick(current, payload, timeframe) {
  const flashes = {};
  const stocks = current.stocks.map((stock) => {
    const drift = (Math.random() - 0.5) * 0.9;
    const nextPrice = clamp(stock.price + drift, stock.price * 0.965, stock.price * 1.035);
    const priceMovePct = ((nextPrice - stock.price) / stock.price) * 100;
    const nextChangePct = Number((stock.changePct + priceMovePct).toFixed(2));
    const nextStock = {
      ...stock,
      price: round(nextPrice),
      changePct: nextChangePct,
      volume: Math.max(stock.volume + Math.round(Math.random() * 120000), 1),
    };

    flashes[stock.symbol] =
      nextStock.price > stock.price ? "up" : nextStock.price < stock.price ? "down" : flashes[stock.symbol];

    return nextStock;
  });

  const selectedStock = stocks.find((stock) => stock.symbol === current.selectedSymbol) || stocks[0];

  return {
    ...current,
    stocks,
    indices: current.indices.map((index) => ({
      ...index,
      value: round(index.value + (Math.random() - 0.48) * 18),
      changePct: Number((index.changePct + (Math.random() - 0.5) * 0.08).toFixed(2)),
    })),
    chartData: updateCandles(current.chartData, selectedStock.price, timeframe),
    orderBook: buildOrderBook(selectedStock.price),
    portfolio: withHoldingMetrics({
      ...current.portfolio,
      holdings: current.portfolio.holdings.map((holding) => {
        const matchedStock = stocks.find((stock) => stock.symbol === holding.symbol);
        return matchedStock ? { ...holding, ltp: matchedStock.price } : holding;
      }),
    }),
    news: maybeRotateNews(current.news, payload.timestamp),
    flashes,
    lastTickAt: payload.timestamp,
  };
}

function updateCandles(chartData, livePrice, timeframe) {
  const next = [...(timeframeSeries[timeframe] || chartData)];
  const latest = next[next.length - 1];
  const close = round(livePrice + (Math.random() - 0.5) * 6);

  next[next.length - 1] = {
    ...latest,
    high: round(Math.max(latest.high, close + Math.random() * 3)),
    low: round(Math.min(latest.low, close - Math.random() * 3)),
    close,
    volume: latest.volume + Math.round(Math.random() * 60000),
    ma: round(latest.ma + (close - latest.ma) * 0.18),
    rsi: clamp(round(latest.rsi + (Math.random() - 0.5) * 4), 18, 82),
  };

  return next;
}

function buildOrderBook(referencePrice) {
  return {
    bids: Array.from({ length: 8 }, (_, index) => ({
      price: round(referencePrice - index * 0.45 - Math.random() * 0.3),
      quantity: Math.round(500 + Math.random() * 5200),
    })),
    asks: Array.from({ length: 8 }, (_, index) => ({
      price: round(referencePrice + index * 0.45 + Math.random() * 0.3),
      quantity: Math.round(500 + Math.random() * 5200),
    })),
  };
}

function withHoldingMetrics(portfolio) {
  const holdings = portfolio.holdings.map((holding) => {
    const marketValue = holding.quantity * holding.ltp;
    const invested = holding.quantity * holding.avgPrice;
    const pnl = marketValue - invested;

    return {
      ...holding,
      marketValue: round(marketValue),
      pnl: round(pnl),
    };
  });

  const totalBalance = holdings.reduce((sum, holding) => sum + holding.marketValue, 0);
  const dayPnL = holdings.reduce((sum, holding) => sum + holding.pnl, 0);

  return {
    ...portfolio,
    holdings,
    totalBalance: round(totalBalance),
    dayPnL: round(dayPnL),
  };
}

function maybeRotateNews(news, timestamp) {
  if (timestamp % 3 !== 0) {
    return news;
  }

  const extraHeadline = [
    "Rupee steadies while exporters stay selective ahead of global central bank cues.",
    "Autos gain traction as monthly dispatch commentary improves across OEM basket.",
    "Midcaps remain stock-specific with breadth positive in the afternoon session.",
  ][Math.floor(Math.random() * 3)];

  return [
    {
      id: `n-${timestamp}`,
      headline: extraHeadline,
      time: new Date(timestamp).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      source: "Flash Note",
    },
    ...news,
  ].slice(0, 6);
}

function round(value) {
  return Number(value.toFixed(2));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
