import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <motion.div
      className={`section-heading ${align === "center" ? "center" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </motion.div>
  );
}
