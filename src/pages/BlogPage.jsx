import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

function BlogPage() {
  const { t } = useLanguage();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta title={t.blog.metaTitle} description={t.blog.metaDescription} />
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.blog.eyebrow}
            title={t.blog.title}
            description={t.blog.description}
            tone="light"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {t.blog.posts.map((post) => (
            <Card key={post.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">{post.tag}</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#111]">{post.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#56565e]">{post.excerpt}</p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="secondary">{t.common.talkToTeam}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default BlogPage;
