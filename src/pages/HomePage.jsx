import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Counter from "../components/Counter";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import {
  caseStudies,
  faqs,
  partnerLogos,
  processSteps,
  serviceCards,
  trustBadges,
  trustStats,
  whyChooseUs,
  whyJapanPoints,
} from "../data/siteContent";

function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-hidden">
      <PageMeta
        title="KS International Japan | Cyber Security"
        description="Defense-focused cybersecurity education, SOC training, blue team development, and enterprise security programs."
      />

      <section className="hero-surface">
        <div className="mx-auto grid min-h-[calc(100vh-89px)] max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-red-200">
              Practical cyber defense education | 実践型セキュリティ教育
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Build Real Cyber Defense Skills
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              KS International Japan delivers refined, defense-first training in cyber threats, SOC operations,
              blue team strategy, and enterprise readiness for learners, teams, and institutions.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact">
                <Button>Book Training</Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary">Explore Services</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
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
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-red-600">Security Focus</p>
                  <h2 className="mt-4 text-2xl font-semibold">SOC Command Center</h2>
                  <p className="mt-3 text-sm leading-7 text-[#4b4b52]">
                    Built around monitoring discipline, incident visibility, and defense operations that
                    reflect modern enterprise realities.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/15 bg-black/30 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-red-200">信頼 / Shinrai</p>
                  <p className="mt-4 text-sm leading-7 text-white/78">
                    Trust is earned through clarity, structured instruction, and practical outcomes.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-[28px] border border-white/12 bg-black/35 p-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-200">Learning Journey</p>
                    <p className="mt-2 text-sm text-white/72">From fundamentals to operational readiness</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/76">
                    Defense First
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {processSteps.slice(0, 3).map((step, index) => (
                    <div key={step.title} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{step.title}</p>
                        <p className="mt-1 text-sm leading-6 text-white/72">{step.description}</p>
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
          {trustStats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Training and advisory built for modern defense operations"
          description="Our programs connect rigorous cyber education with real operational needs, from early foundations to enterprise readiness."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <Card key={service.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-500">{service.icon}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#111]">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#56565e]">{service.description}</p>
              <Link to="/contact" className="mt-8 inline-flex text-sm font-semibold text-[#111]">
                {service.cta}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#f4f4f5]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why KS International Japan"
            title="A learning model grounded in defense, operations, and long-term security thinking"
            description="We focus on the capabilities that help people and organizations detect better, respond faster, and operate with confidence."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {whyJapanPoints.map((item) => (
              <Card key={item.title} className="bg-white">
                <h3 className="text-xl font-semibold text-[#111]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#56565e]">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for learners, teams, and enterprises that value practical outcomes"
            description="Every engagement is shaped around clarity, operational relevance, and disciplined execution."
          />
          <div className="grid gap-4">
            {whyChooseUs.map((point) => (
              <div key={point} className="premium-card flex items-start gap-4 p-6">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#d90429]" />
                <p className="text-base leading-7 text-[#232328]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="From capability assessment to operational confidence"
          description="A disciplined path that turns training goals into measurable improvement."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Card key={step.title} className="relative">
              <span className="absolute right-6 top-6 text-5xl font-semibold tracking-[-0.08em] text-black/6">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#111]">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#56565e]">{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#0d0d0f] text-white">
        <SectionHeading
          eyebrow="Trusted By"
          title="Connected to serious security teams, institutions, and training initiatives"
          description="Trusted by organizations that value readiness, discipline, and practical defensive capability."
          tone="light"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerLogos.map((partner) => (
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
        <SectionHeading
          eyebrow="Projects / Case Studies"
          title="Selected cybersecurity engagements with measurable outcomes"
          description="A snapshot of how structured security work improves resilience across Japanese organizations."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((item, index) => (
            <Card key={item.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">Case Study 0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-semibold text-[#111]">{item.title}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#707078]">{item.sector}</p>
              <p className="mt-6 text-sm leading-7 text-[#374151]">{item.challenge}</p>
              <div className="mt-8 rounded-[24px] bg-emerald-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Result</p>
                <p className="mt-3 text-sm leading-7 text-[#56565e]">{item.result}</p>
              </div>
              <Link to="/stories" className="mt-6 inline-flex text-sm font-semibold text-[#111]">
                View Full Case Study
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#f4f4f5]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions teams and learners ask before getting started"
          description="Clear answers on approach, delivery, and training fit."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question} className="bg-white">
              <h3 className="text-xl font-semibold text-[#111]">{faq.question}</h3>
              <p className="mt-4 text-sm leading-7 text-[#56565e]">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="cta-band">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-red-200">Ready to begin</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Strengthen Your Security Capability
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              From foundational learning to enterprise workshops, we help individuals and organizations
              build stronger defensive habits and sharper operational readiness.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact">
              <Button>Book Training Consultation</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">View About Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default HomePage;
