import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import TerminalPanel from "./components/TerminalPanel";
import ResizablePanels from "./components/ResizablePanels";
import TradingChart from "./components/TradingChart";
import { STOCK_SYMBOLS } from "./mockTradingData";
import { useMockMarketFeed } from "./useMockMarketFeed";

const timeframes = ["1m", "5m", "15m", "1D"];
const sidebarItems = ["Dashboard", "Market Watch", "Charts", "Portfolio", "News", "Screener"];

function TradingDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [timeframe, setTimeframe] = useState("5m");
  const [query, setQuery] = useState("");
  const [watchlist, setWatchlist] = useState(["RELIANCE", "INFY", "ICICIBANK", "TCS"]);
  const [selectedSymbol, setSelectedSymbol] = useState("RELIANCE");
  const searchRef = useRef(null);
  const market = useMockMarketFeed(timeframe, selectedSymbol);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "/") {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key.toLowerCase() === "b") {
        setSidebarOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const visibleStocks = useMemo(() => {
    if (!query.trim()) {
      return market.stocks.slice(0, 5);
    }

    return market.stocks.filter((stock) => stock.symbol.toLowerCase().includes(query.trim().toLowerCase()));
  }, [market.stocks, query]);

  const selectedStock = market.stocks.find((stock) => stock.symbol === selectedSymbol) || market.stocks[0];

  useEffect(() => {
    if (!selectedStock) {
      setSelectedSymbol(market.stocks[0]?.symbol || "RELIANCE");
    }
  }, [market.stocks, selectedStock]);

  const toggleWatchlist = (symbol) => {
    setWatchlist((current) =>
      current.includes(symbol) ? current.filter((item) => item !== symbol) : [...current, symbol]
    );
  };

  return (
    <div className="terminal-shell min-h-screen bg-[#02060b] text-[#dce9f8]">
      <TerminalNavbar
        query={query}
        setQuery={setQuery}
        searchRef={searchRef}
        indices={market.indices}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((current) => !current)}
      />

      <div className="flex min-h-screen pt-[76px]">
        <AnimatePresence initial={false}>
          {sidebarOpen ? (
            <motion.aside
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              className="hidden w-[240px] shrink-0 border-r border-[#10263f] bg-[#030914]/95 px-4 py-5 xl:block"
            >
              <div className="mb-6 rounded-[18px] border border-[#17365a] bg-[#08111c] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#6f8bab]">Operator</p>
                <h1 className="mt-3 text-lg font-semibold text-white">TradeTerminal</h1>
                <p className="mt-2 text-sm text-[#7f95ae]">Indian cash market terminal with live-style simulated flow.</p>
              </div>

              <nav className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    className={`flex w-full items-center justify-between rounded-[16px] px-4 py-3 text-left text-sm transition ${
                      index === 0
                        ? "bg-[#0e2338] text-white shadow-[inset_0_0_0_1px_rgba(43,131,255,0.35)]"
                        : "text-[#7f95ae] hover:bg-[#0b1827] hover:text-[#dbeafe]"
                    }`}
                  >
                    <span>{item}</span>
                    <span className="font-mono text-xs">{index === 0 ? "ON" : ">"}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 rounded-[18px] border border-[#17365a] bg-[#08111c] p-4 font-mono text-xs text-[#8cb8ff]">
                <p>Shortcuts</p>
                <p className="mt-2 text-[#6f8bab]">`/` focus search</p>
                <p className="mt-1 text-[#6f8bab]">`B` toggle sidebar</p>
              </div>
            </motion.aside>
          ) : null}
        </AnimatePresence>

        <main className="min-w-0 flex-1 p-3 md:p-4">
          <div className="grid gap-3">
            <ResizablePanels
              left={
                <TerminalPanel
                  title={`${selectedStock.symbol} Price Action`}
                  eyebrow="Live Chart"
                  actions={
                    <div className="flex items-center gap-2">
                      {timeframes.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setTimeframe(item)}
                          className={`rounded-full px-3 py-1 font-mono text-[11px] transition ${
                            timeframe === item
                              ? "bg-[#2f74ff] text-white shadow-[0_0_18px_rgba(47,116,255,0.45)]"
                              : "bg-[#09121d] text-[#7f95ae] hover:text-white"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  }
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3 font-mono">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#6f8bab]">Last Traded Price</p>
                      <p className={`mt-1 text-3xl ${selectedStock.changePct >= 0 ? "text-[#39ff88]" : "text-[#ff5b6e]"}`}>
                        {formatCurrency(selectedStock.price)}
                      </p>
                    </div>
                    <div className="rounded-[14px] border border-white/6 bg-[#050c14] px-3 py-2 text-sm text-[#9fb4cb]">
                      RSI {market.chartData[market.chartData.length - 1]?.rsi.toFixed(2)}
                    </div>
                    <div className="rounded-[14px] border border-white/6 bg-[#050c14] px-3 py-2 text-sm text-[#9fb4cb]">
                      MA {market.chartData[market.chartData.length - 1]?.ma.toFixed(2)}
                    </div>
                  </div>
                  <TradingChart data={market.chartData} />
                </TerminalPanel>
              }
              right={
                <TerminalPanel title="Order Book" eyebrow="Depth View">
                  <div className="grid grid-cols-2 gap-3">
                    <BookColumn label="Bids" entries={market.orderBook.bids} positive />
                    <BookColumn label="Asks" entries={market.orderBook.asks} />
                  </div>
                </TerminalPanel>
              }
            />

            <div className="grid gap-3 xl:grid-cols-[1.25fr_0.8fr_0.95fr]">
              <TerminalPanel title="Market Watch" eyebrow="NSE Watchlist">
                <MarketWatchTable
                  rows={visibleStocks}
                  selectedSymbol={selectedSymbol}
                  setSelectedSymbol={setSelectedSymbol}
                  flashes={market.flashes}
                />
              </TerminalPanel>

              <TerminalPanel title="Top Movers" eyebrow="Session Leaders">
                <MoverSection title="Gainers" rows={market.topGainers} positive />
                <div className="my-3 h-px bg-white/6" />
                <MoverSection title="Losers" rows={market.topLosers} />
              </TerminalPanel>

              <TerminalPanel title="Portfolio" eyebrow="Holdings Snapshot">
                <PortfolioPanel portfolio={market.portfolio} />
              </TerminalPanel>
            </div>

            <div className="grid gap-3 2xl:grid-cols-[1.1fr_0.95fr_0.9fr]">
              <TerminalPanel title="News Feed" eyebrow="Market Headlines">
                <div className="max-h-[300px] space-y-2 overflow-auto pr-1">
                  {market.news.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="w-full rounded-[16px] border border-white/6 bg-[#050c14] p-3 text-left transition hover:border-[#2f74ff]/50 hover:bg-[#081320]"
                    >
                      <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-[#7f95ae]">
                        <span>{item.source}</span>
                        <span>{item.time}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#dbeafe]">{item.headline}</p>
                    </button>
                  ))}
                </div>
              </TerminalPanel>

              <TerminalPanel title="Watchlist" eyebrow="Quick Actions">
                <div className="grid gap-2">
                  {STOCK_SYMBOLS.map((symbol) => {
                    const tracked = watchlist.includes(symbol);
                    const stock = market.stocks.find((item) => item.symbol === symbol);
                    return (
                      <div key={symbol} className="flex items-center justify-between rounded-[16px] border border-white/6 bg-[#050c14] px-3 py-2">
                        <div>
                          <p className="font-mono text-sm text-white">{symbol}</p>
                          <p className={`text-xs ${stock?.changePct >= 0 ? "text-[#39ff88]" : "text-[#ff5b6e]"}`}>
                            {stock ? `${stock.changePct > 0 ? "+" : ""}${stock.changePct.toFixed(2)}%` : "--"}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleWatchlist(symbol)}
                          className={`rounded-full px-3 py-1 font-mono text-[11px] transition ${
                            tracked ? "bg-[#1e7a4a] text-white" : "bg-[#122133] text-[#8fb0cf] hover:text-white"
                          }`}
                        >
                          {tracked ? "Remove" : "Add"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </TerminalPanel>

              <TerminalPanel title="Session Pulse" eyebrow="Terminal Metrics">
                <div className="grid gap-3">
                  <MetricStrip label="Feed Status" value="SIMULATED LIVE" accent="text-[#39ff88]" />
                  <MetricStrip label="Selected" value={selectedStock.symbol} />
                  <MetricStrip label="Tick Cycle" value="1.6s stream" />
                  <MetricStrip label="Breadth" value="89 / 61" accent="text-[#39ff88]" />
                  <MetricStrip
                    label="Watchlist"
                    value={watchlist.length.toString().padStart(2, "0")}
                    accent="text-[#8cb8ff]"
                  />
                </div>
              </TerminalPanel>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function TerminalNavbar({ query, setQuery, searchRef, indices, sidebarOpen, onToggleSidebar }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#10263f] bg-[#030914]/90 backdrop-blur-xl">
      <div className="flex h-[76px] items-center gap-3 px-3 md:px-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="rounded-[14px] border border-[#17365a] bg-[#08111c] px-3 py-2 font-mono text-xs text-[#8fb0cf] transition hover:text-white"
        >
          {sidebarOpen ? "Hide" : "Show"}
        </button>

        <div className="min-w-[170px] rounded-[16px] border border-[#16304d] bg-[#08111c] px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#6787aa]">TradeTerminal</p>
          <p className="mt-1 text-sm font-semibold text-white">Indian Market Console</p>
        </div>

        <div className="min-w-0 flex-1 rounded-[16px] border border-[#16304d] bg-[#08111c] px-4 py-3">
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search RELIANCE, TCS, INFY..."
            className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-[#5f7896]"
          />
        </div>

        <div className="ticker-marquee hidden min-w-0 flex-[1.2] overflow-hidden rounded-[16px] border border-[#16304d] bg-[#08111c] px-4 py-3 lg:block">
          <div className="ticker-track flex min-w-max items-center gap-8 font-mono text-sm">
            {[...indices, ...indices].map((index, indexKey) => (
              <div key={`${index.symbol}-${indexKey}`} className="flex items-center gap-3">
                <span className="text-[#8fb0cf]">{index.symbol}</span>
                <span className="text-white">{index.value.toFixed(2)}</span>
                <span className={index.changePct >= 0 ? "text-[#39ff88]" : "text-[#ff5b6e]"}>
                  {index.changePct >= 0 ? "+" : ""}
                  {index.changePct.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[16px] border border-[#16304d] bg-[#08111c] px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#6787aa]">Profile</p>
          <p className="mt-1 text-sm font-semibold text-white">R. Raj</p>
        </div>
      </div>
    </header>
  );
}

function MarketWatchTable({ rows, selectedSymbol, setSelectedSymbol, flashes }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/6">
      <div className="grid grid-cols-[1.3fr_1fr_0.9fr_1fr] bg-[#050c14] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#6f8bab]">
        <span>Symbol</span>
        <span className="text-right">Price</span>
        <span className="text-right">Chg%</span>
        <span className="text-right">Volume</span>
      </div>
      <div className="divide-y divide-white/6 bg-[#07111b]">
        {rows.map((row) => {
          const state = flashes[row.symbol];
          return (
            <button
              key={row.symbol}
              type="button"
              onClick={() => setSelectedSymbol(row.symbol)}
              className={`grid w-full grid-cols-[1.3fr_1fr_0.9fr_1fr] px-4 py-3 text-left font-mono text-sm transition ${
                selectedSymbol === row.symbol ? "bg-[#0c1d30]" : "hover:bg-[#0a1827]"
              } ${state ? `price-flash-${state}` : ""}`}
            >
              <span>
                <span className="block text-white">{row.symbol}</span>
                <span className="text-[11px] text-[#6f8bab]">{row.name}</span>
              </span>
              <span className="text-right text-white">{formatCurrency(row.price)}</span>
              <span className={`text-right ${row.changePct >= 0 ? "text-[#39ff88]" : "text-[#ff5b6e]"}`}>
                {row.changePct >= 0 ? "+" : ""}
                {row.changePct.toFixed(2)}%
              </span>
              <span className="text-right text-[#9fb4cb]">{formatCompact(row.volume)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BookColumn({ label, entries, positive }) {
  return (
    <div className="rounded-[16px] border border-white/6 bg-[#050c14] p-3">
      <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-[#6f8bab]">
        <span>{label}</span>
        <span>Qty</span>
      </div>
      <div className="space-y-2">
        {entries.map((entry, index) => (
          <motion.div
            key={`${label}-${entry.price}-${index}`}
            layout
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-[12px] bg-[#08111c] px-3 py-2 font-mono text-sm"
          >
            <span className={positive ? "text-[#39ff88]" : "text-[#ff5b6e]"}>{entry.price.toFixed(2)}</span>
            <span className="text-[#b9cae0]">{formatCompact(entry.quantity)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PortfolioPanel({ portfolio }) {
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-2">
        <MetricCard label="Total Balance" value={formatCurrency(portfolio.totalBalance)} accent="text-white" />
        <MetricCard
          label="Today's P&L"
          value={`${portfolio.dayPnL >= 0 ? "+" : ""}${formatCurrency(portfolio.dayPnL)}`}
          accent={portfolio.dayPnL >= 0 ? "text-[#39ff88]" : "text-[#ff5b6e]"}
        />
      </div>
      <div className="mt-3 space-y-2">
        {portfolio.holdings.map((holding) => (
          <div key={holding.symbol} className="rounded-[16px] border border-white/6 bg-[#050c14] px-3 py-3">
            <div className="flex items-center justify-between gap-3 font-mono">
              <span className="text-white">{holding.symbol}</span>
              <span className={holding.pnl >= 0 ? "text-[#39ff88]" : "text-[#ff5b6e]"}>
                {holding.pnl >= 0 ? "+" : ""}
                {formatCurrency(holding.pnl)}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-[#8ca1ba]">
              <span>{holding.quantity} qty</span>
              <span>LTP {formatCurrency(holding.ltp)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MoverSection({ title, rows, positive }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#6f8bab]">{title}</p>
      <div className="space-y-2">
        {rows.map((row) => (
          <div key={row.symbol} className="rounded-[16px] border border-white/6 bg-[#050c14] px-3 py-3">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-white">{row.symbol}</span>
              <span className={positive ? "text-[#39ff88]" : "text-[#ff5b6e]"}>
                {row.changePct >= 0 ? "+" : ""}
                {row.changePct.toFixed(2)}%
              </span>
            </div>
            <div className="mt-2 text-xs text-[#8ca1ba]">{formatCurrency(row.price)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricCard({ label, value, accent = "text-white" }) {
  return (
    <div className="rounded-[16px] border border-white/6 bg-[#050c14] p-3">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#6f8bab]">{label}</p>
      <p className={`mt-3 font-mono text-2xl ${accent}`}>{value}</p>
    </div>
  );
}

function MetricStrip({ label, value, accent = "text-white" }) {
  return (
    <div className="flex items-center justify-between rounded-[16px] border border-white/6 bg-[#050c14] px-3 py-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#6f8bab]">{label}</span>
      <span className={`font-mono text-sm ${accent}`}>{value}</span>
    </div>
  );
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatCompact(value) {
  return new Intl.NumberFormat("en-IN", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

export default TradingDashboard;
