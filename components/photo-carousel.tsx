"use client";

import { useState } from "react";
import Image from "next/image";

type CarouselImage = Readonly<{
  src: string;
  alt: string;
}>;

export function PhotoCarousel({
  eyebrow,
  title,
  description,
  images,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  images: readonly CarouselImage[];
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const goTo = (next: number) => {
    const total = images.length;
    setIndex(((next % total) + total) % total);
  };

  return (
    <section className="glass-panel section-card fade-up overflow-hidden px-6 py-7 sm:px-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 text-2xl text-[var(--wood-deep)] sm:text-3xl">{title}</h2>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{description}</p>
          ) : null}
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]">
          {index + 1} / {images.length}
        </p>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[22px] border border-[rgba(109,79,61,0.12)] bg-[rgba(255,251,246,0.6)]">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
          {images.map((image, i) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={i === 0}
              className={`object-cover object-center transition-opacity duration-300 ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              sizes="(min-width: 1024px) 60rem, 100vw"
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(73,52,40,0.55)] text-white transition hover:bg-[rgba(73,52,40,0.78)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(73,52,40,0.55)] text-white transition hover:bg-[rgba(73,52,40,0.78)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[var(--wood)]" : "w-2 bg-[rgba(109,79,61,0.25)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
