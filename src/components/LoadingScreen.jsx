import { motion } from "framer-motion";
import { ArrowRight, Eye, Headphones, Sparkles } from "lucide-react";
import Button from "./common/Button.jsx";

const tips = [
  [Headphones, "Turn up the volume."],
  [Sparkles, "Take your time."],
  [Eye, "Don't skip anything."],
];

export default function LoadingScreen({ onEnter }) {
  return (
    <section className="loading-screen">
      <motion.div className="loading-card" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <p className="kicker">Preparing something that was never supposed to be ordinary</p>
        <motion.div className="load-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.45 }} />
        <motion.div className="intro-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <h1>VAIDEHI</h1>
          <h2>This isn't just a website.</h2>
          <p className="intro-lead">
            It's a small collection of memories, chaos, smiles,<br />
            and a few things I probably never say properly.
          </p>
          <p>
            Some pages might make you laugh.<br />
            Some might make you think.<br />
            And maybe one or two will make you a little emotional.
          </p>
          <div className="intro-tips">
            {tips.map(([Icon, text]) => (
              <span key={text}><Icon size={17} /> {text}</span>
            ))}
          </div>
          <div className="intro-action">
            <strong className="story-ready">Your story is ready.</strong>
            <Button className="chapter-button" onClick={onEnter}>
              Open the first chapter <ArrowRight size={17} />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
