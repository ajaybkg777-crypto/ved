import { motion } from "framer-motion";

export default function Button({ children, className = "", variant = "primary", ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
