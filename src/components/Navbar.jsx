import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111] text-[11px] font-bold tracking-[0.16em] text-white">
            {t.brand.logo}
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111]">{t.brand.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-[#74747d]">{t.brand.subtitle}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {t.navItems.map((item) => (
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
          <button
            type="button"
            onClick={() => setLang(lang === "jp" ? "en" : "jp")}
            className="hidden rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#111] transition hover:bg-[#f4f4f5] md:inline-flex"
          >
            {t.common.languageButton}
          </button>
          <Link
            to="/contact"
            className="hidden rounded-full bg-[#d90429] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b20322] md:inline-flex"
          >
            {t.common.topCta}
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
              <button
                type="button"
                onClick={() => setLang(lang === "jp" ? "en" : "jp")}
                className="rounded-2xl border border-black/10 bg-[#f6f6f7] px-4 py-3 text-left text-sm font-semibold text-[#222]"
              >
                {t.common.languageButton}
              </button>
              {t.navItems.map((item) => (
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
                {t.common.contactUs}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
