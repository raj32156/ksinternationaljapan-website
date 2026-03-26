import clsx from "../utils/clsx";

function Alert({ type = "info", children }) {
  const styles = {
    success: "border-hack-green/30 bg-hack-green/10 text-hack-green-soft",
    error: "border-red-500/30 bg-red-500/10 text-red-200",
    info: "border-white/10 bg-white/6 text-hack-green-soft",
  };

  return (
    <div className={clsx("rounded-2xl border px-4 py-3 text-sm", styles[type])}>
      {children}
    </div>
  );
}

export default Alert;
