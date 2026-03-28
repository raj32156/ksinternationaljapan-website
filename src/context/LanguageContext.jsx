import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "ksij-language";

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "jp";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "jp" || saved === "en") {
    return saved;
  }

  return navigator.language?.toLowerCase().startsWith("ja") ? "jp" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "jp" ? "ja" : "en";
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
