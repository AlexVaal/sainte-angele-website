import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
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
    pathname: "/donate",
    title: dictionary.donate.title,
    description: dictionary.donate.description,
  });
}

export default async function DonatePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { donate } = dictionary;

  return (
    <div className="site-shell space-y-8">
      <PageHero
        eyebrow={donate.eyebrow}
        title={donate.title}
        description={donate.description}
        actions={
          <ButtonLink href={donate.canadaHelpsUrl} target="_blank" rel="noreferrer">
            {donate.primaryCta}
          </ButtonLink>
        }
      />

      <PageSection>
        <SectionHeading
          eyebrow={donate.support.eyebrow}
          title={donate.support.title}
          description={donate.support.description}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {donate.support.items.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              eyebrow={item.eyebrow}
              description={item.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="glass-panel section-card px-6 py-8 sm:px-8">
            <SectionHeading
              eyebrow={donate.online.eyebrow}
              title={donate.online.title}
              description={donate.online.description}
            />
            <div className="mt-6">
              <ButtonLink
                href={donate.canadaHelpsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full justify-center sm:w-auto"
              >
                {donate.online.cta}
              </ButtonLink>
            </div>
          </article>

          <InfoCard
            title={donate.receipt.title}
            eyebrow={donate.receipt.eyebrow}
            description={donate.receipt.description}
          />
        </div>
      </PageSection>

      <PageSection>
        <article className="glass-panel section-card px-6 py-8 sm:px-8">
          <SectionHeading
            eyebrow={donate.contact.eyebrow}
            title={donate.contact.title}
            description={donate.contact.description}
          />
          <p className="mt-5 text-2xl font-semibold tracking-[0.04em] text-[var(--wood)]">
            {donate.contact.phone}
          </p>
        </article>
      </PageSection>
    </div>
  );
}
