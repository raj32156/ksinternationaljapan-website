export const STOCK_SYMBOLS = [
  "RELIANCE",
  "TCS",
  "INFY",
  "HDFCBANK",
  "ICICIBANK",
  "SBIN",
  "LT",
  "AXISBANK",
];

export const initialStocks = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2946.45, changePct: 1.24, volume: 2845612 },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 4132.1, changePct: -0.42, volume: 1240988 },
  { symbol: "INFY", name: "Infosys", price: 1694.8, changePct: 0.88, volume: 3154206 },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 1582.65, changePct: -1.13, volume: 2587644 },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 1118.2, changePct: 1.57, volume: 3347611 },
  { symbol: "SBIN", name: "State Bank of India", price: 778.4, changePct: 0.74, volume: 4412230 },
  { symbol: "LT", name: "Larsen & Toubro", price: 3676.9, changePct: -0.36, volume: 742118 },
  { symbol: "AXISBANK", name: "Axis Bank", price: 1087.55, changePct: 0.61, volume: 1642537 },
];

export const initialIndices = [
  { symbol: "NIFTY 50", value: 22458.3, changePct: 0.64 },
  { symbol: "BANKNIFTY", value: 48136.85, changePct: 0.91 },
  { symbol: "SENSEX", value: 73984.25, changePct: 0.58 },
];

export const initialPortfolio = {
  totalBalance: 2487540.35,
  dayPnL: 42580.22,
  holdings: [
    { symbol: "RELIANCE", quantity: 180, avgPrice: 2814.2, ltp: 2946.45 },
    { symbol: "INFY", quantity: 220, avgPrice: 1621.4, ltp: 1694.8 },
    { symbol: "HDFCBANK", quantity: 300, avgPrice: 1618.7, ltp: 1582.65 },
    { symbol: "ICICIBANK", quantity: 260, avgPrice: 1049.6, ltp: 1118.2 },
  ],
};

export const initialNews = [
  { id: "n1", headline: "Indian IT stocks trade mixed as FY27 deal pipeline stays resilient.", time: "09:14", source: "Economic Desk" },
  { id: "n2", headline: "Private banks outperform after treasury gains support quarterly outlook.", time: "09:19", source: "Market Wire" },
  { id: "n3", headline: "Oil eases; refiners and OMCs remain in focus on margin commentary.", time: "09:27", source: "Commodities Live" },
  { id: "n4", headline: "Brokerages raise target prices on capital goods pack after strong order inflows.", time: "09:34", source: "Street Pulse" },
  { id: "n5", headline: "FII buying extends for second session with banks and telecom leading flows.", time: "09:41", source: "Terminal News" },
];

export const timeframeSeries = {
  "1m": generateCandles(22, 2938),
  "5m": generateCandles(28, 2926),
  "15m": generateCandles(32, 2898),
  "1D": generateCandles(36, 2842),
};

export function initialWatchlist() {
  return ["RELIANCE", "INFY", "ICICIBANK", "TCS"];
}

function generateCandles(count, basePrice) {
  let previousClose = basePrice;

  return Array.from({ length: count }, (_, index) => {
    const open = previousClose + randomBetween(-10, 10);
    const close = open + randomBetween(-18, 18);
    const high = Math.max(open, close) + randomBetween(3, 14);
    const low = Math.min(open, close) - randomBetween(3, 14);
    const volume = Math.round(randomBetween(160000, 920000));
    previousClose = close;

    return {
      time: `${String(9 + Math.floor(index / 4)).padStart(2, "0")}:${String((index % 4) * 15).padStart(2, "0")}`,
      open: round(open),
      high: round(high),
      low: round(low),
      close: round(close),
      volume,
      ma: round(close + randomBetween(-8, 8)),
      rsi: round(randomBetween(38, 72)),
    };
  });
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function round(value) {
  return Number(value.toFixed(2));
}
