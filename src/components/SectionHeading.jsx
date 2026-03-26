import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description, align = "left", tone = "dark" }) {
  const titleColor = tone === "light" ? "text-white" : "text-[#111]";
  const bodyColor = tone === "light" ? "text-white/72" : "text-[#4b4b52]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-red-500">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? <p className={`mt-5 text-base leading-8 ${bodyColor}`}>{description}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;
