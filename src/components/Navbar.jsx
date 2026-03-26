import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/siteContent";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111] text-[11px] font-bold tracking-[0.16em] text-white">
            KSIJ
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111]">KS International Japan</p>
            <p className="text-xs uppercase tracking-[0.22em] text-[#74747d]">Cyber Security</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive ? "bg-[#111] text-white" : "text-[#3a3a41] hover:bg-black/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-[#d90429] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b20322] md:inline-flex"
          >
            Book Training
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#111] lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="text-xl">{open ? "×" : "+"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-black/10 bg-white lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm transition ${
                      isActive ? "bg-[#111] text-white" : "bg-[#f6f6f7] text-[#222]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-[#d90429] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
