import { motion } from "framer-motion";
import { wishes } from "../data/wishes.js";

export default function Wishes() {
  return (
    <section className="section wishes">
      <span className="eyebrow">My wishes for you</span>
      <h2>I hope...</h2>
      <div className="wish-list">
        {wishes.map((wish, index) => (
          <motion.p
            key={wish.lead}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <strong>{wish.lead}</strong><br />{wish.text}
          </motion.p>
        ))}
      </div>
      <div className="wishes-ending">
        <p>And when you achieve something you've been waiting for, I hope you take a moment to look back.</p>
        <p>Not at how far you still have to go, but at <strong>how far you've already come.</strong></p>
        <hr />
        <p>And if one day you feel like you're not doing enough...</p>
        <h3>Come back here.</h3>
        <p>Read these words again. Remember that you don't have to have everything figured out.</p>
        <p>You just have to take the next step.</p>
        <strong>One day, you'll look back at today's struggles and realize...</strong>
        <h3>You were becoming stronger all along.</h3>
        <p>And I hope the future Vaidehi...</p>
        <h3>is everything the little Vaidehi once dreamed she could be.</h3>
      </div>
    </section>
  );
}
