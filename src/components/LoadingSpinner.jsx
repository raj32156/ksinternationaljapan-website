function LoadingSpinner({ label = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-hack-green/20 border-t-hack-green" />
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-hack-muted">{label}</p>
    </div>
  );
}

export default LoadingSpinner;
