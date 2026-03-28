import { motion } from "framer-motion";
import Card from "../components/Card";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

function AboutPage() {
  const { t } = useLanguage();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta title={t.about.metaTitle} description={t.about.metaDescription} />

      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} tone="light" />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.about.highlights.map((item) => (
            <Card key={item.titleEn} className="bg-[#ffffff]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111827] text-sm font-semibold tracking-[0.18em] text-white">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#111]">{item.titleJa}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-red-500">{item.titleEn}</p>
              <p className="mt-5 text-sm leading-7 text-[#2f2f35]">{item.textJa}</p>
              <p className="mt-2 text-sm leading-7 text-[#5e5e66]">{item.textEn}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#f4f4f5]">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t.about.coursesEyebrow} title={t.about.coursesTitle} description={t.about.coursesDescription} />
            <div className="mt-8 grid gap-4">
              {t.about.courses.map((course) => (
                <div key={course} className="premium-card flex items-start gap-4 p-5">
                  <span className="mt-1 h-3 w-3 rounded-full bg-[#d90429]" />
                  <p className="text-sm leading-7 text-[#232328]">{course}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow={t.about.enterpriseEyebrow} title={t.about.enterpriseTitle} description={t.about.enterpriseDescription} />
            <div className="mt-8 grid gap-4">
              {t.about.enterpriseTraining.map((item) => (
                <div key={item} className="premium-card flex items-start gap-4 p-5">
                  <span className="mt-1 h-3 w-3 rounded-full bg-[#0f172a]" />
                  <p className="text-sm leading-7 text-[#232328]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow={t.about.strengthsEyebrow} title={t.about.strengthsTitle} description={t.about.strengthsDescription} align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.about.strengths.map((item) => (
            <Card key={item}>
              <p className="text-base leading-8 text-[#232328]">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#0d0d0f] text-white">
        <SectionHeading eyebrow={t.about.foundersEyebrow} title={t.about.foundersTitle} description={t.about.foundersDescription} tone="light" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.about.founders.map((founder) => (
            <Card key={founder.name} className="border-white/12 bg-[#f8fafc] text-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#111827] text-xl font-semibold text-white">
                {founder.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-[#111111]">{founder.name}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">{founder.role}</p>
              <p className="mt-5 text-sm leading-7 text-[#334155]">{founder.jp}</p>
              <div className="mt-6 grid gap-3">
                {founder.points.map((point) => (
                  <div key={point} className="rounded-[20px] border border-slate-200 bg-white px-4 py-4">
                    <p className="text-sm leading-7 text-[#334155]">{point}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default AboutPage;
