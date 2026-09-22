import AnimatedText from "./common/AnimatedText.jsx";

export default function OnePromise() {
  return (
    <section className="section dark promise">
      <AnimatedText
        lines={[
          "I can't promise that life will always be easy.",
          "I can't promise that we'll always be around each other.",
          "I can't promise that we'll never argue.",
        ]}
      />
      <p>But I can promise one thing.</p>
      <h2>You'll always have a brother who believes in you.</h2>
    </section>
  );
}
