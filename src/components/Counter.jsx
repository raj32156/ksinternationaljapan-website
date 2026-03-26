import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="premium-card p-6"
    >
      <p className="text-4xl font-semibold tracking-[-0.04em] text-[#111]">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm leading-6 text-[#5a5a61]">{label}</p>
    </motion.div>
  );
}

export default Counter;
