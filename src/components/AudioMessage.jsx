import AudioPlayer from "./common/AudioPlayer.jsx";

export default function AudioMessage() {
  return (
    <section className="section dark audio-section">
      <span className="eyebrow">A message from me</span>
      <h2>Some things are better heard than read.</h2>
      <AudioPlayer src="/media/audio/brother-message.mp3" />
      <p>A few words from your brother. You can listen again whenever you want.</p>
    </section>
  );
}
