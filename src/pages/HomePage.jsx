import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Counter from "../components/Counter";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

function HomePage() {
  const { t } = useLanguage();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-hidden">
      <PageMeta title={t.home.metaTitle} description={t.home.metaDescription} />

      <section className="hero-surface">
        <div className="mx-auto grid min-h-[calc(100vh-89px)] max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-red-200">{t.home.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl whitespace-pre-line text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              {t.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{t.home.description}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact">
                <Button>{t.home.primaryCta}</Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary">{t.home.secondaryCta}</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {t.home.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative rounded-[36px] border border-white/10 bg-white/8 p-5 backdrop-blur-xl"
          >
            <div className="hero-image-panel flex h-full flex-col justify-between rounded-[30px] p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-white/90 p-5 text-[#111] shadow-[0_22px_55px_rgba(0,0,0,0.16)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-red-600">{t.home.heroCardEyebrow}</p>
                  <h2 className="mt-4 text-2xl font-semibold">{t.home.heroCardTitle}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#4b4b52]">{t.home.heroCardDescription}</p>
                </div>
                <div className="rounded-[28px] border border-white/15 bg-black/30 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-red-200">{t.home.trustEyebrow}</p>
                  <p className="mt-4 text-sm leading-7 text-white/78">{t.home.trustDescription}</p>
                </div>
              </div>

              <div className="mt-10 rounded-[28px] border border-white/12 bg-black/35 p-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-200">{t.home.learningJourney}</p>
                    <p className="mt-2 text-sm text-white/72">{t.home.learningJourneyText}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/76">
                    {t.home.defenseFirst}
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {t.home.processSteps.slice(0, 3).map(([title, description], index) => (
                    <div key={title} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-white/72">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.home.trustStats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow={t.home.servicesEyebrow} title={t.home.servicesTitle} description={t.home.servicesDescription} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.home.services.map(([title, description], index) => (
            <Card key={title}>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-500">0{index + 1}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#111]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#56565e]">{description}</p>
              <Link to="/contact" className="mt-8 inline-flex text-sm font-semibold text-[#111]">
                {t.common.contactUs}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#f4f4f5]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} description={t.home.whyDescription} />
          <div className="grid gap-5 md:grid-cols-2">
            {t.home.whyPoints.map(([title, description]) => (
              <Card key={title} className="bg-white">
                <h3 className="text-xl font-semibold text-[#111]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#56565e]">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading eyebrow={t.home.chooseEyebrow} title={t.home.chooseTitle} description={t.home.chooseDescription} />
          <div className="grid gap-4">
            {t.home.chooseList.map((point) => (
              <div key={point} className="premium-card flex items-start gap-4 p-6">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#d90429]" />
                <p className="text-base leading-7 text-[#232328]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow={t.home.processEyebrow} title={t.home.processTitle} description={t.home.processDescription} align="center" />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {t.home.processSteps.map(([title, description], index) => (
            <Card key={title} className="relative">
              <span className="absolute right-6 top-6 text-5xl font-semibold tracking-[-0.08em] text-black/6">0{index + 1}</span>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#111]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#56565e]">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#0d0d0f] text-white">
        <SectionHeading eyebrow={t.home.partnerEyebrow} title={t.home.partnerTitle} description={t.home.partnerDescription} tone="light" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.partners.map((partner) => (
            <div
              key={partner}
              className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-6 text-center text-sm font-semibold uppercase tracking-[0.24em] text-white/78"
            >
              {partner}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow={t.home.caseEyebrow} title={t.home.caseTitle} description={t.home.caseDescription} align="center" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.home.caseStudies.map((item, index) => (
            <Card key={item.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
                {t.common.programLabel} 0{index + 1}
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-[#111]">{item.title}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#707078]">{item.sector}</p>
              <p className="mt-6 text-sm leading-7 text-[#374151]">{item.challenge}</p>
              <div className="mt-8 rounded-[24px] bg-emerald-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">{t.common.result}</p>
                <p className="mt-3 text-sm leading-7 text-[#56565e]">{item.result}</p>
              </div>
              <Link to="/stories" className="mt-6 inline-flex text-sm font-semibold text-[#111]">
                {t.common.viewCaseStudy}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#f4f4f5]">
        <SectionHeading eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} description={t.home.faqDescription} />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {t.home.faqs.map(([question, answer]) => (
            <Card key={question} className="bg-white">
              <h3 className="text-xl font-semibold text-[#111]">{question}</h3>
              <p className="mt-4 text-sm leading-7 text-[#56565e]">{answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="cta-band">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-red-200">{t.home.ctaEyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{t.home.ctaTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{t.home.ctaDescription}</p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact">
              <Button>{t.home.ctaPrimary}</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">{t.home.ctaSecondary}</Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default HomePage;
