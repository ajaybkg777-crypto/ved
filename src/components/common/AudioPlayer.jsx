import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const tick = () => setProgress(audio.currentTime);
    const loaded = () => setDuration(audio.duration);
    audio.addEventListener("timeupdate", tick);
    audio.addEventListener("loadedmetadata", loaded);
    audio.volume = volume;
    return () => {
      audio.removeEventListener("timeupdate", tick);
      audio.removeEventListener("loadedmetadata", loaded);
    };
  }, [volume]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />
      <button className="play" onClick={toggle} aria-label={playing ? "Pause message" : "Play message"}>
        {playing ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <div className="audio-main">
        <div className="audio-time">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          aria-label="Audio progress"
          type="range"
          min="0"
          max={duration || 0}
          value={progress}
          onChange={(event) => {
            const next = Number(event.target.value);
            audioRef.current.currentTime = next;
            setProgress(next);
          }}
        />
        <label className="volume">
          <Volume2 size={16} />
          <input
            aria-label="Audio volume"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
