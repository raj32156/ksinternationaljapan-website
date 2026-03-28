import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

function ServicesPage() {
  const { t } = useLanguage();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta title={t.services.metaTitle} description={t.services.metaDescription} />
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
            tone="light"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {t.services.items.map((service) => (
            <Card key={service.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-500">{service.icon}</p>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#111]">{service.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#56565e]">{service.description}</p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="dark">{service.cta}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default ServicesPage;
