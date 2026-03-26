import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../data/mockData";
import clsx from "../utils/clsx";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="glass-panel h-fit rounded-[28px] p-5">
      <div className="mb-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-hack-muted">
          Operator
        </p>
        <h2 className="mt-2 text-xl font-bold text-hack-green text-glow">Raj Console</h2>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const active = item.hash
            ? location.pathname === item.path && location.hash === item.hash
            : location.pathname === item.path;

          return (
            <Link
              key={item.label}
              to={item.hash ? `${item.path}${item.hash}` : item.path}
              className={clsx(
                "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                active
                  ? "bg-hack-green/12 text-hack-green-soft neon-ring"
                  : "text-hack-muted hover:bg-white/5 hover:text-hack-green-soft"
              )}
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs">{active ? ">" : "//"}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
