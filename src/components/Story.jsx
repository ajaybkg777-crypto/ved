import { ArrowRight, BookOpen, Brain, HeartPulse, MessagesSquare, Send } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./common/Button.jsx";

const reminders = ["Eat properly", "Sleep on time", "Take some rest", "Do not ignore yourself when you are not feeling well"];

const supportSections = [
  {
    icon: HeartPulse,
    title: "You and your health",
    paragraphs: [
      "I know you do not always take care of your health. Sometimes you forget to eat properly, rest properly, or simply listen to your body.",
      "Please do not do that. Your studies, your dreams, and everything else are important, but you are important too.",
    ],
    list: reminders,
    closing: "I may not be there every time to remind you, so please learn to take care of yourself. A healthy you is a happier you.",
  },
  {
    icon: Brain,
    title: "When you overthink",
    paragraphs: [
      "I know you think a lot. Sometimes you may feel that nobody understands you. Sometimes you may feel that nobody believes in you. Sometimes you may even start doubting yourself.",
      "But please do not believe those thoughts. I believe in you.",
      "You do not have to be perfect. You do not have to win every time. Making mistakes is okay. Failing is okay. Taking time is okay.",
    ],
    closing: "Just do not give up on yourself. Keep learning. Keep trying. Keep moving forward. Even if you take a few steps back sometimes, just start again. You are stronger than you think.",
  },
  {
    icon: MessagesSquare,
    title: "I am always here",
    paragraphs: [
      "I may not always know what is going on in your mind. I may not always know what to say. Sometimes I might even say something stupid and make you more irritated.",
      "But whenever you feel sad, confused, scared, or simply want to talk, you can call me. You do not need to think too much before calling. Just call. I will listen.",
    ],
    closing: "And yes, after listening to you, I may still annoy you a little. That is my job as your brother. You can always talk to me.",
  },
  {
    icon: Send,
    title: "No matter the distance",
    paragraphs: [
      "As time passes, things will change. We will grow up. We will become busy. We may study, work, and live in different places. Maybe someday we will not talk every day.",
      "But I do not want that to change our relationship. I do not want distance to make us strangers.",
    ],
    closing: "Even if we are far away, I hope we can still talk, laugh, share things, and remember all these little moments. This relationship is not about being together every day. It is about knowing that we are still brother and sister, no matter where life takes us.",
  },
];

export default function Story() {
  return (
    <section id="chapter-one" className="section dark story-section">
      <article className="chapter-letter">
        <header className="chapter-letter-heading">
          <span className="eyebrow">Chapter 01</span>
          <BookOpen size={28} aria-hidden="true" />
          <h2>To my little sister, <em>Vaidehi</em></h2>
          <p>Some bonds are not made by blood, but by care.</p>
        </header>

        <div className="chapter-origin">
          <p>I never thought you would become such an important part of my life.</p>
          <p>You came into my life as a student. At that time, I never thought that one day you would become my little sister.</p>
          <p>It all happened slowly. First, there were studies and computer lessons. Then came random talks, jokes, teasing, small fights, and many little moments.</p>
          <strong>And somewhere between all these things, you became my little sister.</strong>
          <p>I never planned this. I never expected it. It just happened. And maybe that is what makes this bond so special.</p>
          <p>Sometimes, life gives us people we were never looking for, but later we realize how much they mean to us. For me, you are one of those people.</p>
        </div>

        <div className="chapter-support-grid">
          {supportSections.map(({ icon: Icon, title, paragraphs, list, closing }, index) => (
            <motion.section
              className="chapter-support"
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="chapter-support-title"><Icon size={22} /><h3>{title}</h3></div>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {list ? <ul>{list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              <strong>{closing}</strong>
            </motion.section>
          ))}
        </div>

        <section className="always-sister">
          <h3>Always my sister</h3>
          <p>You came into my life as a student, but slowly became the little sister I never knew I needed. And honestly, I am really thankful that you did.</p>
          <p>So whenever you feel that nobody believes in you, remember me. Whenever you feel like giving up, remember that I believe you can do it. And whenever you achieve something big, do not forget to tell your annoying brother.</p>
          <p>I may tease you. I may fight with you. I may irritate you almost every day. But one thing will not change:</p>
          <strong>You will always be my little sister, Vaidehi.</strong>
        </section>

        <footer className="chapter-letter-footer">
          <p>Take care of yourself. Keep smiling. Keep believing in yourself. And keep going.</p>
          <span>Always proud of you<br /><strong>Your brother, Ajay</strong></span>
          <Button onClick={() => document.querySelector("#memories")?.scrollIntoView({ behavior: "smooth" })}>
            Keep going <ArrowRight size={16} />
          </Button>
        </footer>
      </article>
    </section>
  );
}
