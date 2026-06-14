import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";

function resolvePhotoPath(photo: string) {
  const relativePath = photo.startsWith("/") ? photo.slice(1) : photo;
  const absolutePath = path.join(process.cwd(), "public", relativePath);

  return existsSync(absolutePath) ? photo : "/hall/placeholder.jpg";
}

function isPlaceholderImage(photo: string) {
  return photo.endsWith("/placeholder.jpg") || photo === "/hall/placeholder.jpg";
}

export function HallPhotoCard({
  src,
  alt,
  placeholderLabel,
  className = "",
  imageWrapClassName = "",
}: {
  src: string;
  alt: string;
  placeholderLabel: string;
  className?: string;
  imageWrapClassName?: string;
}) {
  const resolvedPhoto = resolvePhotoPath(src);
  const showPlaceholderLabel = isPlaceholderImage(resolvedPhoto);

  return (
    <article className={`glass-panel section-card overflow-hidden ${className}`}>
      <div className={`relative aspect-[4/3] overflow-hidden bg-[linear-gradient(180deg,rgba(235,221,203,0.92),rgba(250,244,236,0.92))] ${imageWrapClassName}`}>
        <Image
          src={resolvedPhoto}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
        />
        {showPlaceholderLabel ? (
          <div className="absolute inset-0 flex items-end bg-[linear-gradient(180deg,rgba(255,255,255,0)_30%,rgba(73,52,40,0.42)_100%)] p-4">
            <span className="rounded-full bg-[rgba(255,249,242,0.88)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--wood-deep)]">
              {placeholderLabel}
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}
