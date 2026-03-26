import { motion } from "framer-motion";
import clsx from "../utils/clsx";

function Card({ children, className }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={clsx("premium-card p-6 sm:p-8", className)}
    >
      {children}
    </motion.div>
  );
}

export default Card;
