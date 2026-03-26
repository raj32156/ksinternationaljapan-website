function ProgressBar({ value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-hack-muted">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/6">
        <div
          className="h-full rounded-full bg-gradient-to-r from-hack-green to-hack-green-strong shadow-[0_0_20px_rgba(32,255,127,0.28)] transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
