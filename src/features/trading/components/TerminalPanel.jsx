import { motion } from "framer-motion";
import clsx from "../../../utils/clsx";

function TerminalPanel({ title, eyebrow, actions, className, children }) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={clsx(
        "terminal-panel group relative overflow-hidden rounded-[20px] border border-[#16304d] bg-[#08111c]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2f74ff]/70 to-transparent" />
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#6f8bab]">{eyebrow}</p>
          ) : null}
          <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#d6e6ff]">{title}</h2>
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>
      {children}
    </motion.section>
  );
}

export default TerminalPanel;
