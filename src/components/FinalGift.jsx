import { Play } from "lucide-react";

export default function FinalGift() {
  return (
    <section className="section final-memory-section">
      <div className="final-memory-copy">
        <span className="eyebrow">The final gift</span>
        <h2>One Last Memory</h2>

        <div className="final-memory-message">
          <p>
            Some moments don't feel special<br />
            while they're happening...
          </p>
          <strong>Until you realize you can't get them back.</strong>
          <p>
            This is one of those moments<br />
            I never want to forget.
          </p>
          <p>
            So before you leave...<br />
            <strong>stay for a few more seconds.</strong>
          </p>
          <p>
            Maybe someday, we'll watch this again<br />
            and smile at how simple these days were.
          </p>
          <div className="final-memory-keepsake">
            <strong>One of my favorite memories.</strong>
            <strong>Forever a part of my story.</strong>
          </div>
        </div>
      </div>

      <div className="final-video-wrap">
        <video
          className="final-video"
          controls
          playsInline
          preload="metadata"
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(event) => event.preventDefault()}
          aria-label="One last memory for Vaidehi"
        >
          <source src="/media/videos/one-last-memory.mp4" type="video/mp4" />
          Your browser does not support the video player.
        </video>
      </div>

      <p className="final-play-prompt">
        <Play size={16} fill="currentColor" aria-hidden="true" />
        Press play
      </p>
    </section>
  );
}
