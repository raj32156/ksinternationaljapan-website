import { motion } from "framer-motion";
import Card from "../components/Card";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";

const highlights = [
  {
    icon: "教育",
    titleJa: "教育ミッション",
    titleEn: "Education Mission",
    textJa: "実務に直結する知識の提供",
    textEn: "Deliver job-ready cybersecurity knowledge",
  },
  {
    icon: "防御",
    titleJa: "専門分野",
    titleEn: "Specialization",
    textJa: "サイバー脅威・防御・SOC",
    textEn: "Cyber threats, defense, and SOC operations",
  },
  {
    icon: "企業",
    titleJa: "エンタープライズ研修",
    titleEn: "Enterprise Training",
    textJa: "企業・政府向けトレーニング",
    textEn: "Corporate & government security training",
  },
  {
    icon: "国際",
    titleJa: "グローバル対応",
    titleEn: "Global Access",
    textJa: "日本語・英語対応",
    textEn: "Japanese & English programs",
  },
];

const courses = [
  "サイバー脅威と防御の基礎 | Cyber Threats & Defense Essentials",
  "SOCアナリスト基礎トレーニング | SOC Analyst Foundation",
  "ブルーチーム防御戦略 | Blue Team Defense Strategies",
  "エンタープライズ向けセキュリティ研修 | Enterprise Security Training",
];

const enterpriseTraining = [
  "組織向けサイバー防御設計 | Cyber defense architecture for organizations",
  "インシデントレスポンス演習 | Incident response simulations",
  "SOC運用と監視体制構築 | SOC operations and monitoring setup",
  "セキュリティ意識向上研修 | Security awareness training",
];

const strengths = [
  "実務ベースの教育設計 | Practical, real-world focused training",
  "攻撃ではなく防御に重点 | Defense-first approach",
  "初心者から企業まで対応 | Suitable for beginners to enterprises",
];

const founders = [
  {
    name: "Mahesh Kumar Meena",
    role: "Founder & Lead Security Architect",
    jp: "サイバーセキュリティおよびエンタープライズ防御分野の専門家",
    points: [
      "Expert in cybersecurity and enterprise-grade defense systems",
      "Leads security strategy and SOC architecture for large organizations",
      "Experience delivering national and corporate-level cyber defense training",
      "Focused on real-world defense, monitoring, and incident response",
    ],
  },
  {
    name: "Rupankar Raj (Raj Thakur)",
    role: "Founder & Cybersecurity Educator",
    jp: "実務重視のサイバーセキュリティ教育者",
    points: [
      "Specializes in ethical hacking, threat analysis, and practical labs",
      "Trained thousands of students and professionals globally",
      "Known for clear teaching from beginner to advanced level",
      "Focused on hands-on learning that translates into real security skills",
    ],
  },
];

function AboutPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta
        title="About Us | KS International Japan"
        description="Learn about our practical, defense-focused cybersecurity mission, bilingual programs, enterprise training, and founders."
      />

      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="私たちについて | About Us"
            description="実践的・防御重視のサイバーセキュリティ教育とエンタープライズ向けトレーニングを提供します。 We provide practical, defense-focused cybersecurity education and enterprise-level training."
            tone="light"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
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
            <SectionHeading
              eyebrow="Courses"
              title="提供しているコース | Our Courses"
              description="Focused programs designed for people who want disciplined cyber defense knowledge with direct practical value."
            />
            <div className="mt-8 grid gap-4">
              {courses.map((course) => (
                <div key={course} className="premium-card flex items-start gap-4 p-5">
                  <span className="mt-1 h-3 w-3 rounded-full bg-[#d90429]" />
                  <p className="text-sm leading-7 text-[#232328]">{course}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Enterprise"
              title="エンタープライズレベル研修 | Enterprise-Level Training"
              description="Designed for organizations that need stronger operational maturity, clearer response workflows, and better security culture."
            />
            <div className="mt-8 grid gap-4">
              {enterpriseTraining.map((item) => (
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
        <SectionHeading
          eyebrow="Why Choose Us"
          title="私たちの強み | Why Choose Us"
          description="A security education model built on clarity, operational realism, and defense-first thinking."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <Card key={item}>
              <p className="text-base leading-8 text-[#232328]">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#0d0d0f] text-white">
        <SectionHeading
          eyebrow="Leadership"
          title="Our Founders & Instructors"
          description="経験豊富なサイバーセキュリティ専門家が指導します。 Experienced cybersecurity professionals leading the mission."
          tone="light"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
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
