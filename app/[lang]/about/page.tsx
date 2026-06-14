import type { Metadata } from "next";
import Image from "next/image";
import { InfoCard } from "@/components/info-card";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { generateLocaleParams, getDictionary, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/page-metadata";
import { resolvePublicImage } from "@/lib/resolve-public-image";

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
    pathname: "/about",
    title: dictionary.about.title,
    description: dictionary.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { about } = dictionary;
  const storyImage = resolvePublicImage(about.story.image.src, "/home/events-thumb.jpg");

  return (
    <div className="site-shell space-y-8">
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel section-card flex h-full flex-col px-6 py-8 sm:px-8">
            <SectionHeading
              eyebrow={about.story.eyebrow}
              title={about.story.title}
              description={about.story.description}
            />
            <div className="mt-6 space-y-4 text-base leading-8 text-[var(--muted)]">
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="relative mt-6 min-h-[17rem] flex-1 overflow-hidden rounded-[24px] border border-[rgba(109,79,61,0.08)] bg-[linear-gradient(180deg,rgba(241,229,214,0.94),rgba(233,216,197,0.9))]">
              <Image
                src={storyImage}
                alt={about.story.image.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 48rem, 100vw"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {about.values.map((value) => (
              <InfoCard
                key={value.title}
                title={value.title}
                eyebrow={value.eyebrow}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={about.expect.eyebrow}
          title={about.expect.title}
          description={about.expect.description}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {about.expect.items.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              eyebrow={item.eyebrow}
              description={item.description}
            />
          ))}
        </div>
      </PageSection>
    </div>
  );
}
