import { MailOpen } from "lucide-react";
import { useState } from "react";
import { openWhenLetters } from "../data/openWhen.js";

export default function OpenWhen() {
  const [open, setOpen] = useState(0);
  return (
    <section id="letters" className="section open-when">
      <span className="eyebrow">Open when...</span>
      <h2>For the days when you need a little something.</h2>
      <div className="open-when-art" aria-label="Illustrated open when letters">
        <img
          src="/media/photos/open-when-overthinking.jpeg"
          alt="Open when letters for overthinking, self doubt, fear, and feeling alone"
          loading="lazy"
        />
        <img
          src="/media/photos/open-when-believe.jpeg"
          alt="Open when letters with encouragement and support from a brother"
          loading="lazy"
        />
      </div>
      <div className="envelope-grid">
        {openWhenLetters.map((letter, index) => (
          <button key={letter.title} className={`envelope ${open === index ? "open" : ""}`} onClick={() => setOpen(index)}>
            <MailOpen size={22} />
            <span>{letter.title}</span>
            {open === index ? <p>{letter.message}</p> : null}
          </button>
        ))}
      </div>
    </section>
  );
}
