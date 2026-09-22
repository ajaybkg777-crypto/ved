import { motion } from "framer-motion";

export default function AnimatedText({ lines, className = "" }) {
  return (
    <div className={`animated-text ${className}`}>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.09, duration: 0.7 }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
