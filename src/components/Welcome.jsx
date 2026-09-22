import { ArrowDown, Heart } from "lucide-react";
import AnimatedText from "./common/AnimatedText.jsx";
import Button from "./common/Button.jsx";

export default function Welcome() {
  return (
    <section id="story" className="section dark welcome">
      <div className="welcome-stage">
        <span className="eyebrow">A little note</span>
        <h2>Hey, Vaidehi.</h2>
        <AnimatedText
          className="welcome-note"
          lines={[
            <>I don't know when it happened...</>,
            <>but somewhere between all the laughs, little fights, silly talks, and random moments,</>,
            <><strong>you became my little sister.</strong></>,
            <>And honestly, I'm really glad you did.</>,
            <>Some moments are too special to let them become just memories.</>,
            <><strong>So I put a few of them here. <Heart className="inline-heart" size={19} aria-label="with love" /></strong></>,
            <>A little place filled with the laughs, the madness, and all those small moments that made our bond special.</>,
            <><strong>Whenever you come back here,</strong> I hope it takes you back to these little moments...</>,
            <><strong>and reminds you how special they were.</strong></>,
          ]}
        />
        <Button onClick={() => document.querySelector("#chapter-one")?.scrollIntoView({ behavior: "smooth" })}>
          Let's begin <ArrowDown size={16} />
        </Button>
      </div>
    </section>
  );
}
