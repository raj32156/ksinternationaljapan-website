import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-black/10 bg-[#0d0d0f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-red-300">{t.brand.name}</p>
          <h2 className="mt-4 max-w-sm text-2xl font-semibold leading-tight">{t.footer.intro}</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{t.footer.description}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">{t.footer.contactTitle}</p>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>Email: info@ksinternationaljapan.com</p>
            <p>Phone (Japan): +81 804 168 4443</p>
            <p>{t.contact.officeLabel}: Tokyo, Japan</p>
            <p>{t.contact.hoursLabel}: Mon-Fri 9:00 AM - 6:00 PM JST</p>
            <p>{t.contact.scopeDescription}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">{t.footer.quickLinks}</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {t.navItems.slice(2).map((item) => (
              <Link key={item.path} to={item.path} className="transition hover:text-red-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
