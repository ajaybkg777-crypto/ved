import AnimatedText from "./common/AnimatedText.jsx";

export default function FinalMessage() {
  return (
    <section className="section final-message">
      <span className="eyebrow">Dear Vaidehi,</span>
      <AnimatedText
        lines={[
          "You were never something I planned.",
          "You were one of those beautiful surprises life quietly gives us.",
          "You came into my life as a student, and somewhere along the way, you became my little sister.",
          "We've laughed. We've argued. We've annoyed each other. We've created memories.",
          "And I'm genuinely grateful for all of it.",
          "Wherever life takes you, keep believing in yourself.",
          "Keep smiling. Keep growing. Keep chasing your dreams.",
          "And whenever you need someone, you know where to find your brother.",
        ]}
      />
      <strong>- Ajay</strong>
    </section>
  );
}
