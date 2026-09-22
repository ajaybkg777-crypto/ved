import { Heart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const rules = [
  {
    title: "Gussa allowed. 😤",
    text: <>You can get angry at your brother...<br />but do not stay angry for too long. 😂</>,
  },
  {
    title: "Drama is unlimited. 🎭",
    text: <>You can bring as much drama as you want.<br />Your brother has already accepted it.</>,
  },
  {
    title: "Annoying your brother is your special talent. 😂",
    text: <>And somehow, you are getting better at it every day.</>,
  },
  {
    title: "Your brother will still worry about you. 🤍",
    text: <>Even when you say, <strong>“I'm fine.”</strong><br />Yes, I know when you are not.</>,
  },
  {
    title: "No matter how much you grow...",
    text: <>You will always be the little sister<br />your brother wants to tease, protect, and see happy.</>,
  },
];

export default function Complaints() {
  return (
    <section className="section terms-section">
      <header className="terms-heading">
        <span className="eyebrow"><ShieldCheck size={15} /> Important Notice</span>
        <h2>Terms &amp; Conditions<br />of Being My Little Sister</h2>
      </header>

      <div className="terms-list">
        {rules.map((rule, index) => (
          <motion.article
            key={rule.title}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <span>Rule {String(index + 1).padStart(2, "0")}</span>
            <div><h3>{rule.title}</h3><p>{rule.text}</p></div>
          </motion.article>
        ))}
      </div>

      <aside className="final-rule">
        <Heart size={24} aria-hidden="true" />
        <span>Final Rule</span>
        <h3>You can argue with your brother.<br />You can annoy your brother.<br />You can make him crazy.</h3>
        <p>But you do not get to stop being his little sister.</p>
        <strong>That part is permanent. 🥹🤍</strong>
      </aside>
    </section>
  );
}
