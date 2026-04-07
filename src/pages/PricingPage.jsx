import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const pricingContent = {
  jp: {
    metaTitle: "料金・サービス | KS International Japan",
    metaDescription:
      "脆弱性診断、ペネトレーションテスト、レッドチーム演習、脅威インテリジェンスなどの料金目安をご案内します。",
    eyebrow: "Pricing",
    title: "Security Services & Pricing",
    description:
      "脆弱性診断やペネトレーションテストをはじめとする各種セキュリティサービスについて、対象環境や目的に応じたご提案を行っております。",
    note: "以下は一般的なケースをもとにした概算費用です。詳細なお見積もりはお問い合わせください。",
    sections: [
      {
        title: "診断サービス",
        items: [
          { name: "Webアプリケーション診断", detail: "WordPress CMS Site", price: "¥80,000 and up" },
          { name: "モバイルアプリケーション診断", detail: "A basic mobile app with limited features, fewer screens, and no sensitive data.", price: "¥200,000 and up" },
          { name: "クラウド診断", detail: "A small-scale environment mainly consisting of basic cloud services such as S3 and EC2.", price: "¥400,000 and up" },
          { name: "ネットワーク診断", detail: "Suitable for startups and small businesses with a limited number of devices, and a configuration of 1-2 subnets.", price: "¥400,000 and up" },
          { name: "シナリオベース診断", detail: "Mimicking APT attacks, physical intrusion, and internal investigation scenarios.", price: "ASK", ask: true },
          { name: "LLM / AI セキュリティ診断", detail: "Investigation into the misuse of AI chat integration APIs such as ChatGPT.", price: "ASK", ask: true },
          { name: "脆弱性診断", detail: "Single-configuration landing page", price: "¥40,000 and up" },
        ],
      },
      {
        title: "シミュレーションサービス",
        items: [
          { name: "ソーシャルエンジニアリング演習", detail: "Basic phishing simulation", price: "One-time: ¥80,000 and up / Annual: ¥200,000 and up" },
          { name: "レッドチーム演習", detail: "Simulated attacks focused on specific objectives", price: "¥600,000 and up" },
        ],
      },
      {
        title: "脅威インテリジェンス",
        items: [{ name: "ダークウェブモニタリング", detail: "Domain, employee email, and authentication information leak monitoring", price: "Emergency: ¥720,000 and up / Ongoing: ¥80,000 and up per month" }],
      },
      {
        title: "追加サービス",
        items: [
          { name: "APIセキュリティ診断", detail: "REST & GraphQL API vulnerabilities", price: "¥120,000 and up" },
          { name: "IoTセキュリティ診断", detail: "Smart devices and embedded systems", price: "¥240,000 and up" },
          { name: "クラウド設定レビュー", detail: "Misconfiguration detection", price: "¥100,000 and up" },
          { name: "Bug Bounty導入支援", detail: "Private bug bounty launch support", price: "¥80,000 and up" },
          { name: "セキュリティ意識向上研修", detail: "Employee cybersecurity training", price: "¥40,000 and up" },
        ],
      },
    ],
    notesTitle: "ご案内事項",
    notes: [
      "記載価格は概算であり、対象範囲や技術要件により変動いたします。",
      "最終的な費用は、スコープ、対象資産数、期間に応じて個別に算出いたします。",
      "ご要望に応じたカスタムアセスメントもご相談可能です。",
    ],
    tableHeaders: {
      service: "サービス",
      scope: "対象・想定ケース",
      price: "料金目安",
    },
    askLabel: "ASK",
    cta: "詳細見積もりを依頼する",
  },
  en: {
    metaTitle: "Security Services & Pricing | KS International Japan",
    metaDescription:
      "Estimated pricing for vulnerability assessments, penetration testing, red team exercises, and threat intelligence services.",
    eyebrow: "Pricing",
    title: "Security Services & Pricing",
    description:
      "Our security services, including vulnerability assessments and penetration testing, are tailored to your specific environment and objectives.",
    note: "Below are estimated costs based on typical cases. For a detailed quote, please contact us.",
    sections: [
      {
        title: "Diagnostic Services",
        items: [
          { name: "Web Application Penetration Testing", detail: "WordPress CMS site", price: "¥80,000 and up" },
          { name: "Mobile Application Penetration Testing", detail: "A basic mobile app with limited features, fewer screens, and no sensitive data.", price: "¥200,000 and up" },
          { name: "Cloud Penetration Testing", detail: "A small-scale environment mainly consisting of basic cloud services such as S3 and EC2.", price: "¥400,000 and up" },
          { name: "Network Penetration Testing", detail: "Suitable for startups and small businesses with a limited number of devices, and a configuration of 1-2 subnets.", price: "¥400,000 and up" },
          { name: "Scenario-Based Penetration Testing", detail: "Mimicking APT attacks, physical intrusion, and internal investigation scenarios.", price: "ASK", ask: true },
          { name: "LLM / AI Security Testing", detail: "Investigation into the misuse of AI chat integration APIs such as ChatGPT.", price: "ASK", ask: true },
          { name: "Vulnerability Assessment", detail: "Single-configuration landing page", price: "¥40,000 and up" },
        ],
      },
      {
        title: "Simulation Services",
        items: [
          { name: "Social Engineering Simulation", detail: "Basic phishing simulation", price: "One-time: ¥80,000 and up / Annual: ¥200,000 and up" },
          { name: "Red Team Exercise", detail: "Simulated attacks focused on specific objectives", price: "¥600,000 and up" },
        ],
      },
      {
        title: "Threat Intelligence",
        items: [{ name: "Dark Web Monitoring", detail: "Domain, employee email, and authentication information leak monitoring", price: "Emergency: ¥720,000 and up / Ongoing: ¥80,000 and up per month" }],
      },
      {
        title: "Additional Services",
        items: [
          { name: "API Security Testing", detail: "REST & GraphQL API vulnerabilities", price: "¥120,000 and up" },
          { name: "IoT Security Testing", detail: "Smart devices and embedded systems", price: "¥240,000 and up" },
          { name: "Cloud Configuration Review", detail: "Misconfiguration detection", price: "¥100,000 and up" },
          { name: "Bug Bounty Program Setup", detail: "Private bug bounty launch support", price: "¥80,000 and up" },
          { name: "Security Awareness Training", detail: "Employee cybersecurity training", price: "¥40,000 and up" },
        ],
      },
    ],
    notesTitle: "Important Notes",
    notes: [
      "Prices are estimates and may vary based on target scope and technical complexity.",
      "Final pricing depends on scope, duration, and the number of assets involved.",
      "Custom assessments are available after consultation.",
    ],
    tableHeaders: {
      service: "Service",
      scope: "Scope / Typical Case",
      price: "Estimated Price",
    },
    askLabel: "ASK",
    cta: "Request Detailed Quote",
  },
};

function PricingTable({ section, copy }) {
  return (
    <section className="rounded-[32px] border border-black/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.05)]">
      <div className="border-b border-black/8 px-6 py-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#111]">{section.title}</h2>
      </div>

      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-black/8 bg-[#f8f8f9] text-left">
              <th className="px-8 py-4 text-sm font-semibold text-[#232328]">{copy.tableHeaders.service}</th>
              <th className="px-8 py-4 text-sm font-semibold text-[#232328]">{copy.tableHeaders.scope}</th>
              <th className="px-8 py-4 text-sm font-semibold text-[#232328]">{copy.tableHeaders.price}</th>
            </tr>
          </thead>
          <tbody>
            {section.items.map((item) => (
              <tr key={`${section.title}-${item.name}`} className="border-b border-black/6 last:border-b-0">
                <td className="px-8 py-5 align-top text-sm font-medium text-[#111]">{item.name}</td>
                <td className="px-8 py-5 align-top text-sm leading-7 text-[#5a5a63]">{item.detail}</td>
                <td className="px-8 py-5 align-top text-sm font-semibold text-[#111]">
                  {item.ask ? (
                    <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                      {copy.askLabel}
                    </span>
                  ) : (
                    item.price
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 p-5 md:hidden">
        {section.items.map((item) => (
          <div key={`${section.title}-${item.name}`} className="rounded-[24px] border border-black/8 bg-[#fafafb] p-5">
            <p className="text-base font-semibold text-[#111]">{item.name}</p>
            <p className="mt-3 text-sm leading-7 text-[#5a5a63]">{item.detail}</p>
            <div className="mt-4">
              {item.ask ? (
                <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                  {copy.askLabel}
                </span>
              ) : (
                <p className="text-sm font-semibold text-[#111]">{item.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingPage() {
  const { lang } = useLanguage();
  const copy = pricingContent[lang];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta title={copy.metaTitle} description={copy.metaDescription} />

      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} tone="light" />
          <div className="mt-8 max-w-3xl rounded-[28px] border border-white/10 bg-white/8 px-6 py-5 text-sm leading-7 text-white/78 backdrop-blur-xl">
            {copy.note}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8">
          {copy.sections.map((section) => (
            <PricingTable key={section.title} section={section} copy={copy} />
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#f4f4f5]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Notes" title={copy.notesTitle} description={copy.note} />
          <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="grid gap-4">
              {copy.notes.map((note) => (
                <div key={note} className="flex items-start gap-4 rounded-[22px] border border-black/6 bg-[#fafafb] px-5 py-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#d90429]" />
                  <p className="text-sm leading-7 text-[#3d3d45]">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/contact">
                <Button>{copy.cta}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default PricingPage;
