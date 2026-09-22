import { motion } from "framer-motion";

export default function ProgressBar({ label, value, progress = value, status }) {
  return (
    <div className="progress-row">
      <div>
        <span>{label}</span>
        {status === "lost" ? <em>{value}</em> : <strong>{value}</strong>}
      </div>
      <div className="progress-track">
        <motion.i
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
