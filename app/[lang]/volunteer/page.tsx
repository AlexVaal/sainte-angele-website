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
    pathname: "/volunteer",
    title: dictionary.volunteerPage.title,
    description: dictionary.volunteerPage.description,
  });
}

export default async function VolunteerPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { volunteerPage, volunteerRoles } = dictionary;

  return (
    <div className="site-shell space-y-8">
      <PageHero
        eyebrow={volunteerPage.eyebrow}
        title={volunteerPage.title}
        description={volunteerPage.description}
        actions={
          <ButtonLink href="#volunteer-contact">{volunteerPage.primaryCta}</ButtonLink>
        }
      />

      <PageSection>
        <SectionHeading
          eyebrow={volunteerPage.roles.eyebrow}
          title={volunteerPage.roles.title}
          description={volunteerPage.roles.description}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {volunteerRoles.map((role) => (
            <InfoCard
              key={role.title}
              title={role.title}
              eyebrow={role.commitment}
              description={role.description}
              detail={role.detail}
            />
          ))}
        </div>
      </PageSection>

      <PageSection id="volunteer-contact">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel section-card px-6 py-8 sm:px-8">
            <SectionHeading
              eyebrow={volunteerPage.contact.eyebrow}
              title={volunteerPage.contact.title}
              description={volunteerPage.contact.description}
            />
          </div>

          <article className="glass-panel section-card px-6 py-8 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wood-soft)]">
              {volunteerPage.contact.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl text-[var(--wood-deep)]">{volunteerPage.contact.name}</h2>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--wood-soft)]">
              {volunteerPage.contact.phoneLabel}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[0.04em] text-[var(--wood)]">
              {volunteerPage.contact.phone}
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--wood-soft)]">
              {volunteerPage.contact.languagesLabel}
            </p>
            <p className="mt-2 text-base leading-7 text-[var(--muted)]">
              {volunteerPage.contact.languages}
            </p>
          </article>
        </div>
      </PageSection>
    </div>
  );
}
