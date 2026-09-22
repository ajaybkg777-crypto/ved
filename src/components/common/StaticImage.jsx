export default function StaticImage({ src, alt, className = "", lazy = true }) {
  return (
    <figure className={`art-frame ${className}`}>
      <img src={src} alt={alt} loading={lazy ? "lazy" : "eager"} />
    </figure>
  );
}
