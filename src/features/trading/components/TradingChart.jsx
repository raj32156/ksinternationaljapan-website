import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function TradingChart({ data }) {
  const candlePoints = data.map((entry) => ({
    ...entry,
    midpoint: Number(((entry.open + entry.close) / 2).toFixed(2)),
  }));

  return (
    <div className="grid h-full min-h-[340px] gap-3">
      <div className="h-[250px] rounded-[18px] border border-white/6 bg-[#050c14] p-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={candlePoints} margin={{ top: 12, right: 8, left: -14, bottom: 0 }}>
            <CartesianGrid stroke="rgba(130,164,197,0.08)" vertical={false} />
            <XAxis
              dataKey="time"
              tick={{ fill: "#6984a3", fontSize: 11, fontFamily: "var(--font-mono)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="price"
              domain={["dataMin - 8", "dataMax + 8"]}
              tick={{ fill: "#6984a3", fontSize: 11, fontFamily: "var(--font-mono)" }}
              axisLine={false}
              tickLine={false}
              orientation="right"
            />
            <YAxis yAxisId="volume" hide domain={[0, "dataMax + 120000"]} />
            <Tooltip content={<ChartTooltip />} cursor={{ stroke: "rgba(47,116,255,0.35)" }} />
            <Bar yAxisId="volume" dataKey="volume" fill="rgba(46, 138, 255, 0.18)" barSize={8} radius={[4, 4, 0, 0]} />
            <Line
              yAxisId="price"
              type="monotone"
              dataKey="ma"
              dot={false}
              stroke="#ffb347"
              strokeWidth={1.5}
              isAnimationActive={false}
            />
            <Scatter yAxisId="price" data={candlePoints} dataKey="midpoint" shape={<CandlestickShape />} isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="h-[96px] rounded-[18px] border border-white/6 bg-[#050c14] p-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 4, right: 8, left: -14, bottom: 0 }}>
            <CartesianGrid stroke="rgba(130,164,197,0.06)" vertical={false} />
            <XAxis hide dataKey="time" />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "#6984a3", fontSize: 10, fontFamily: "var(--font-mono)" }}
              axisLine={false}
              tickLine={false}
              orientation="right"
            />
            <Tooltip content={<RsiTooltip />} cursor={false} />
            <Line type="monotone" dataKey="rsi" dot={false} stroke="#7cffc4" strokeWidth={1.8} isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CandlestickShape(props) {
  const { cx, payload, yAxis, xAxis } = props;

  if (!payload || !yAxis) {
    return null;
  }

  const bodyTop = yAxis.scale(Math.max(payload.open, payload.close));
  const bodyBottom = yAxis.scale(Math.min(payload.open, payload.close));
  const wickTop = yAxis.scale(payload.high);
  const wickBottom = yAxis.scale(payload.low);
  const candleWidth = Math.max(5, (xAxis?.scale?.bandwidth?.() ?? 12) * 0.5);
  const rising = payload.close >= payload.open;
  const fill = rising ? "#39ff88" : "#ff5b6e";
  const bodyHeight = Math.max(2, bodyBottom - bodyTop);

  return (
    <g>
      <line x1={cx} x2={cx} y1={wickTop} y2={wickBottom} stroke={fill} strokeWidth={1.5} />
      <rect
        x={cx - candleWidth / 2}
        y={bodyTop}
        width={candleWidth}
        height={bodyHeight}
        rx={1.5}
        fill={fill}
        fillOpacity={0.88}
        stroke={fill}
      />
    </g>
  );
}

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null;
  }

  const candle = payload[0].payload;

  return (
    <div className="rounded-xl border border-[#254d77] bg-[#07111b]/95 px-3 py-2 font-mono text-[11px] text-[#d8e8ff] shadow-lg">
      <p className="mb-2 text-[#7da8d6]">{label}</p>
      <p>O {candle.open.toFixed(2)}</p>
      <p>H {candle.high.toFixed(2)}</p>
      <p>L {candle.low.toFixed(2)}</p>
      <p>C {candle.close.toFixed(2)}</p>
      <p>VOL {Intl.NumberFormat("en-IN").format(candle.volume)}</p>
    </div>
  );
}

function RsiTooltip({ active, payload }) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-[#254d77] bg-[#07111b]/95 px-3 py-2 font-mono text-[11px] text-[#d8e8ff] shadow-lg">
      RSI {payload[0].value.toFixed(2)}
    </div>
  );
}

export default TradingChart;
