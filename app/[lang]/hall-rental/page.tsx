import type { Metadata } from "next";
import { HallPhotoCard } from "@/components/hall-photo-card";
import { InfoCard } from "@/components/info-card";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { generateLocaleParams, getDictionary, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/page-metadata";

export function generateStaticParams() {
  return generateLocaleParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return buildPageMetadata({
    lang,
    pathname: "/hall-rental",
    title: dictionary.hallRentalPage.title,
    description: dictionary.hallRentalPage.description,
  });
}

export default async function HallRentalPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { hallRentalPage } = dictionary;

  return (
    <div className="site-shell space-y-8">
      <section className="glass-panel section-card hero-surface overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
            <span className="eyebrow">{hallRentalPage.eyebrow}</span>
            <h1 className="mt-5 text-4xl leading-tight text-[var(--wood-deep)] sm:text-5xl">
              {hallRentalPage.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {hallRentalPage.description}
            </p>
            <div className="mt-7 inline-flex w-fit rounded-full border border-[rgba(109,79,61,0.12)] bg-white/70 px-5 py-3 text-sm font-medium text-[var(--wood)]">
              {hallRentalPage.heroNote}
            </div>
          </div>

          <HallPhotoCard
            src={hallRentalPage.heroImage.src}
            alt={hallRentalPage.heroImage.alt}
            placeholderLabel={hallRentalPage.placeholderLabel}
            className="h-full rounded-none border-0 bg-transparent shadow-none"
            imageWrapClassName="h-full min-h-[320px] lg:min-h-full"
          />
        </div>
      </section>

      <PageSection>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <InfoCard
            title={hallRentalPage.cards.capacity.title}
            eyebrow={hallRentalPage.cards.capacity.eyebrow}
            description={hallRentalPage.cards.capacity.description}
          />

          <article className="glass-panel section-card h-full px-5 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wood-soft)]">
              {hallRentalPage.cards.suitable.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl text-[var(--wood-deep)]">{hallRentalPage.cards.suitable.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {hallRentalPage.cards.suitable.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
              {hallRentalPage.cards.suitable.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--wood-soft)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <InfoCard
            title={hallRentalPage.cards.contact.title}
            eyebrow={hallRentalPage.cards.contact.eyebrow}
            description={hallRentalPage.cards.contact.description}
            detail={`${hallRentalPage.cards.contact.phoneLabel}: ${hallRentalPage.cards.contact.phone}`}
          />
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={hallRentalPage.photosSection.eyebrow}
          title={hallRentalPage.photosSection.title}
          description={hallRentalPage.photosSection.description}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hallRentalPage.gallery.map((photo, index) => (
            <HallPhotoCard
              key={`${photo.src}-${index}`}
              src={photo.src}
              alt={photo.alt}
              placeholderLabel={hallRentalPage.placeholderLabel}
            />
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-panel section-card px-6 py-8 sm:px-8">
            <p className="eyebrow">{hallRentalPage.features.eyebrow}</p>
            <h2 className="mt-4 text-3xl text-[var(--wood-deep)]">{hallRentalPage.features.title}</h2>
            <ul className="mt-6 space-y-3 text-base leading-8 text-[var(--muted)]">
              {hallRentalPage.features.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[var(--wood-soft)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="glass-panel section-card px-6 py-8 sm:px-8">
            <p className="eyebrow">
              {hallRentalPage.cta.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl text-[var(--wood-deep)]">{hallRentalPage.cta.title}</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              {hallRentalPage.cta.description}
            </p>
            <p className="mt-6 text-2xl font-semibold tracking-[0.04em] text-[var(--wood)]">
              {hallRentalPage.cta.phone}
            </p>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
