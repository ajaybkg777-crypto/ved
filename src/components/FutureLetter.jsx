import AnimatedText from "./common/AnimatedText.jsx";

export default function FutureLetter() {
  return (
    <section id="future" className="section paper future-letter">
      <span className="eyebrow">For the Vaidehi of the future</span>
      <h2>If you're reading this months or years from now...</h2>
      <AnimatedText
        className="future-letter-copy"
        lines={[
          <>I hope you're smiling while reading this.</>,
          <>I hope you've grown, learned, and become stronger than you were when these words were written.</>,
          <>Maybe life didn't go exactly the way you planned.<br />Maybe some dreams came true. Maybe some are still waiting.</>,
          <>But I hope you never stopped trying.</>,
          <>Because sometimes, the biggest achievement isn't getting everything you wanted...</>,
          <><strong>It's becoming strong enough to keep going when things didn't go your way.</strong></>,
          <>I hope you remember the little girl who once had so many dreams.</>,
          <>She didn't know where life would take her.<br />She didn't know how many things would change.<br />But she kept going.</>,
          <><strong>And look at you now.</strong></>,
          <>You made it through days you once thought you couldn't.<br />You survived moments you thought would break you.</>,
          <>And you became someone your younger self could look up to.</>,
        ]}
      />
    </section>
  );
}
