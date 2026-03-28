import { useLanguage } from "../context/LanguageContext";

function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/818041684443"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#111] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-[#d90429]"
      >
        {t.common.whatsapp}
      </a>
      <a
        href="tel:+818041684443"
        className="rounded-full border border-red-200 bg-white/90 px-5 py-3 text-sm font-semibold text-[#111] shadow-[0_18px_40px_rgba(0,0,0,0.15)] backdrop-blur transition hover:-translate-y-0.5 hover:border-red-300"
      >
        {t.common.callNow}
      </a>
    </div>
  );
}

export default FloatingActions;
