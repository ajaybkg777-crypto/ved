import { motion } from "framer-motion";
import Button from "./common/Button.jsx";

export default function MemoryCard({ memory, index, onOpen }) {
  const rotations = [-3, 2, -1, 3, -2, 1];
  return (
    <motion.article
      className={`memory-card ${memory.kind === "poster" ? "memory-poster" : ""}`}
      style={{ "--tilt": `${rotations[index % rotations.length]}deg` }}
      initial={{ opacity: 0, y: 28, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotations[index % rotations.length] }}
      whileHover={{ rotate: 0, y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
    >
      <img src={memory.image} alt={memory.title} loading="lazy" />
      <small>{memory.date}</small>
      <h3>{memory.title}</h3>
      <p>{memory.description}</p>
      <Button variant="ghost" onClick={() => onOpen(memory)}>Open memory</Button>
    </motion.article>
  );
}
