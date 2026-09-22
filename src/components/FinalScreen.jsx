import Button from "./common/Button.jsx";

export default function FinalScreen() {
  return (
    <section className="section dark final-screen">
      <p>Some bonds are not created by blood.</p>
      <p>They're created by moments.</p>
      <h2>Ours is one of them.</h2>
      <small>Made with countless memories, a little bit of chaos, and a lot of care.</small>
      <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Experience again</Button>
    </section>
  );
}
