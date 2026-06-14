import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { resolvePublicImage } from "@/lib/resolve-public-image";

type HomeCard = {
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export function HomeFeatureCard({
  lang,
  card,
  actionLabel,
}: {
  lang: Locale;
  card: HomeCard;
  actionLabel: string;
}) {
  const cardImage = resolvePublicImage(card.image.src);

  return (
    <Link
      href={`/${lang}${card.href}`}
      className="glass-panel section-card group block px-5 py-5 hover:-translate-y-1"
    >
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="space-y-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-[rgba(109,79,61,0.08)] bg-[linear-gradient(180deg,rgba(242,231,218,0.92),rgba(233,216,197,0.92))]">
            <Image
              src={cardImage}
              alt={card.image.alt}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1280px) 18rem, (min-width: 768px) 38vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,235,223,0.14),rgba(128,98,75,0.2))]" />
          </div>
          <p className="text-2xl text-[var(--wood-deep)]">{card.title}</p>
          <p className="text-sm leading-7 text-[var(--muted)]">{card.description}</p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wood-soft)] group-hover:text-[var(--wood)]">
          {actionLabel}
        </span>
      </div>
    </Link>
  );
}
