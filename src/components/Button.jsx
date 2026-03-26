import { motion } from "framer-motion";
import clsx from "../utils/clsx";

function Button({ children, className, variant = "primary", as: Component = "button", ...props }) {
  const variants = {
    primary: "bg-[#d90429] text-white hover:bg-[#b20322] shadow-[0_18px_35px_rgba(217,4,41,0.24)]",
    secondary: "border border-black/10 bg-white text-[#111] hover:bg-[#f4f4f5]",
    dark: "bg-[#111] text-white hover:bg-[#242428]",
  };

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Component
        className={clsx(
          "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}

export default Button;
