import { motion } from "framer-motion";
import Button from "../components/Button";
import Card from "../components/Card";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

function ContactPage() {
  const { t } = useLanguage();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta title={t.contact.metaTitle} description={t.contact.metaDescription} />
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
            tone="light"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-white text-[#111111]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">{t.contact.infoTitle}</p>
            <div className="mt-8 space-y-5 text-sm leading-7 text-[#232328]">
              <p>Email: info@ksinternationaljapan.com</p>
              <p>Phone (Japan): +81 804 168 4443</p>
              <p className="flex items-center gap-2">
                <span aria-hidden="true" className="text-lg leading-none">📷</span>
                <a
                  href="https://www.instagram.com/ksinternationaljapan?igsh=MWxpMWRuM3l4b3EzZg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#111111] underline-offset-4 transition hover:text-[#d90429] hover:underline"
                >
                  Instagram
                </a>
              </p>
              <p>{t.contact.officeLabel}: Tokyo, Japan</p>
              <p>{t.contact.hoursLabel}: Mon-Fri 9:00 AM - 6:00 PM JST</p>
            </div>
            <div className="mt-8 rounded-[28px] border border-black/8 bg-[#f4f6f8] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">{t.contact.scopeTitle}</p>
              <p className="mt-3 text-sm leading-7 text-[#3f3f46]">{t.contact.scopeDescription}</p>
              <p className="mt-4 text-sm leading-7 text-[#3f3f46]">{t.contact.privacyNote}</p>
            </div>
          </Card>

          <Card className="bg-white text-[#111111]">
            <form
              className="grid gap-4"
              action="https://formspree.io/f/mwvwbpkd"
              method="POST"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[#232328]">
                  {t.contact.form.name}
                  <input className="form-input" type="text" name="name" placeholder={t.contact.form.placeholders.name} />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#232328]">
                  {t.contact.form.email}
                  <input className="form-input" type="email" name="email" placeholder={t.contact.form.placeholders.email} />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[#232328]">
                  {t.contact.form.phone}
                  <input className="form-input" type="text" name="phone" placeholder={t.contact.form.placeholders.phone} />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#232328]">
                  {t.contact.form.interest}
                  <select className="form-input" name="service" defaultValue={t.contact.form.options[0]}>
                    {t.contact.form.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-[#232328]">
                {t.contact.form.message}
                <textarea
                  className="form-input min-h-36 resize-y"
                  name="message"
                  placeholder={t.contact.form.placeholders.message}
                />
              </label>
              <input type="hidden" name="_subject" value="New inquiry from KS International Japan website" />
              <div className="pt-2">
                <Button type="submit" className="shadow-[0_18px_35px_rgba(217,4,41,0.24)]">
                  {t.common.sendInquiry}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <iframe
            title={t.contact.mapTitle}
            src="https://www.google.com/maps?q=Tokyo%2C%20Japan&z=10&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </motion.main>
  );
}

export default ContactPage;
