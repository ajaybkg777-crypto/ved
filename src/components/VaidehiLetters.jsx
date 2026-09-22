import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useMemo, useState } from "react";
import { letters } from "../data/letters.js";

export default function VaidehiLetters() {
  const [active, setActive] = useState(null);
  const [seen, setSeen] = useState([]);
  const openedAll = seen.length === letters.length;
  const current = useMemo(() => letters[active], [active]);

  const open = (index) => {
    setActive(index);
    setSeen((items) => (items.includes(index) ? items : [...items, index]));
  };

  return (
    <section id="vaidehi" className="section dark letters-section">
      <span className="eyebrow">Chapter 03</span>
      <h2>Seven Letters.</h2>
      <p>Seven words from your big brother to his little sister.</p>
      <div className="letter-row" aria-label="Vaidehi letters">
        {letters.map((item, index) => (
          <motion.button
            key={`${item.letter}-${index}`}
            className={seen.includes(index) ? "seen" : ""}
            onClick={() => open(index)}
            whileHover={{ y: -7 }}
            whileTap={{ scale: 0.96 }}
          >
            {item.letter}
          </motion.button>
        ))}
      </div>
      <p className="letter-progress">{seen.length} / 7 discovered</p>
      <AnimatePresence mode="wait">
        {current ? (
          <motion.article
            key={current.word}
            className="letter-detail"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12 }}
          >
            <h3>{current.letter} — {current.word}</h3>
            {current.text.map((line) => <p key={line}>{line}</p>)}
          </motion.article>
        ) : null}
      </AnimatePresence>
      {openedAll ? (
        <motion.div className="vaidehi-complete" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}>
          <strong>VAIDEHI</strong>
          <div className="seven-reminders">
            <p><b>Seven letters.</b><br /><b>Seven little reminders.</b></p>
            <p>From your annoying big brother<br />to his very special little sister.</p>
            <p className="seven-closing">Keep dreaming.<br />Keep growing.<br />And never stop being you. <Heart size={18} aria-label="with love" /></p>
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}
