import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";

function resolvePhotoPath(photo: string) {
  const relativePath = photo.startsWith("/") ? photo.slice(1) : photo;
  const absolutePath = path.join(process.cwd(), "public", relativePath);

  return existsSync(absolutePath) ? photo : "/team/placeholder.jpg";
}

function isPlaceholderImage(photo: string) {
  return photo.endsWith("/placeholder.jpg") || photo === "/team/placeholder.jpg";
}

export function TeamMemberCard({
  name,
  role,
  photo,
  placeholderLabel,
}: {
  name: string;
  role: string;
  photo: string;
  placeholderLabel: string;
}) {
  const resolvedPhoto = resolvePhotoPath(photo);
  const showPlaceholderLabel = isPlaceholderImage(resolvedPhoto);

  return (
    <article className="glass-panel section-card overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-[linear-gradient(180deg,rgba(235,221,203,0.92),rgba(250,244,236,0.92))]">
        <Image
          src={resolvedPhoto}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1280px) 18rem, (min-width: 768px) 33vw, 100vw"
        />
        {showPlaceholderLabel ? (
          <div className="absolute inset-0 flex items-end bg-[linear-gradient(180deg,rgba(255,255,255,0)_30%,rgba(73,52,40,0.42)_100%)] p-4">
            <span className="rounded-full bg-[rgba(255,249,242,0.88)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--wood-deep)]">
              {placeholderLabel}
            </span>
          </div>
        ) : null}
      </div>

      <div className="space-y-2 px-5 py-5">
        <h3 className="text-2xl text-[var(--wood-deep)]">{name}</h3>
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--wood-soft)]">{role}</p>
      </div>
    </article>
  );
}
