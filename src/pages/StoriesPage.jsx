import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { caseStudies } from "../data/siteContent";

function StoriesPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta
        title="Projects & Case Studies | KS International Japan"
        description="Real examples of cybersecurity improvements delivered for Japanese organizations across manufacturing, finance, cloud, e-commerce, and infrastructure."
      />
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects / Case Studies"
            title="Projects & Case Studies"
            description="Real examples of our work showing tangible cybersecurity improvements for Japanese organizations."
            tone="light"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 xl:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Card key={study.title} className="bg-white text-[#111111]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-600">Case Study 0{index + 1}</p>
                <span className="rounded-full bg-[#111827] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {study.sector}
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#111111]">{study.title}</h2>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[24px] border border-red-100 bg-red-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">Challenge</p>
                  <p className="mt-3 text-sm leading-7 text-[#374151]">{study.challenge}</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">Action</p>
                  <p className="mt-3 text-sm leading-7 text-[#374151]">{study.action}</p>
                </div>
                <div className="rounded-[24px] border border-emerald-100 bg-emerald-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Result</p>
                  <p className="mt-3 text-sm leading-7 text-[#374151]">{study.result}</p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default StoriesPage;
