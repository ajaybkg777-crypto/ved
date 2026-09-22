export default function StaticVideo({ src, poster, className = "" }) {
  return (
    <video className={className} poster={poster} playsInline preload="metadata" controls>
      <source src={src} type="video/mp4" />
    </video>
  );
}
