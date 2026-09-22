import { Shuffle } from "lucide-react";
import { useState } from "react";
import { memories } from "../data/memories.js";
import Button from "./common/Button.jsx";

export default function MemoryJar() {
  const [memory, setMemory] = useState(memories[0]);
  const [shake, setShake] = useState(false);
  const pick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 620);
    setMemory((current) => {
      const pool = memories.filter((item) => item.id !== current.id);
      return pool[Math.floor(Math.random() * pool.length)];
    });
  };

  return (
    <section className="section jar-section">
      <span className="eyebrow">Memory jar</span>
      <h2>Some memories deserve to be discovered randomly.</h2>
      <div className="jar-layout">
        <button className={`jar ${shake ? "shake" : ""}`} onClick={pick} aria-label="Shake the memory jar">
          <span />
          <i />
        </button>
        <article className="jar-note">
          <img src={memory.image} alt={memory.title} loading="lazy" />
          <h3>{memory.title}</h3>
          <p>{memory.description}</p>
          <Button onClick={pick}><Shuffle size={16} /> One more?</Button>
        </article>
      </div>
    </section>
  );
}
