import { motion } from "framer-motion";

const transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
};

function PageShell({ children, className = "" }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.main>
  );
}

export default PageShell;
