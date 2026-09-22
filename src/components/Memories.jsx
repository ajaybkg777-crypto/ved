import { Brain, Gift, Heart, Ruler, Smile, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { momentStories } from "../data/memories.js";

const icons = { brain: Brain, gift: Gift, heart: Heart, ruler: Ruler, smile: Smile, sparkles: Sparkles, zap: Zap };

export default function Memories() {
  return (
    <section id="memories" className="section memories moments-chapter">
      <motion.header
        className="moment-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="moment-chapter-index"><span>Chapter</span><strong>02</strong></div>
        <h2><span>The Little Moments</span>I Remember</h2>
        <p>Not every memory needs a big story. Sometimes, the smallest moments become the ones we remember the most.</p>
      </motion.header>

      <div className="moment-stories">
        {momentStories.map((moment, index) => {
          const Icon = icons[moment.icon];
          return (
            <motion.article
              className="moment-story"
              key={moment.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <figure className="moment-image">
                <img src={moment.image} alt={moment.title} loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </figure>
              <div className="moment-copy">
                <div className="moment-title"><Icon size={22} /><h3>{moment.title}</h3></div>
                {moment.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <strong>{moment.highlight}</strong>
              </div>
            </motion.article>
          );
        })}
      </div>

      <p className="center-line">Seven little moments. One very special bond.</p>
    </section>
  );
}
