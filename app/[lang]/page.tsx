import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { HomeFeatureCard } from "@/components/home-feature-card";
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
    pathname: "/",
    title: dictionary.navigation[0].label,
    description: dictionary.home.hero.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { home, site, common, schedule, volunteerRoles } = dictionary;
  const heroImage = resolvePublicImage(home.hero.image.src);
  const featuredEventImage = resolvePublicImage(home.events.featured.image.src);

  return (
    <div className="site-shell space-y-8 sm:space-y-10">
      <section className="glass-panel section-card hero-surface cross-hero overflow-hidden px-6 py-8 fade-up sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">{home.hero.eyebrow}</span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl leading-tight text-[var(--wood-deep)] sm:text-5xl lg:text-6xl">
                {site.name}
              </h1>
              <p className="text-base font-medium uppercase tracking-[0.16em] text-[var(--wood-soft)] sm:text-sm">
                {site.address}
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--wood)] sm:text-base">
                {site.phone}
              </p>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                {home.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {home.hero.actions.map((action) => (
                <ButtonLink
                  key={action.href}
                  href={`/${lang}${action.href}`}
                  variant={action.variant}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div className="relative fade-up-delay overflow-hidden rounded-[30px] border border-[rgba(109,79,61,0.12)] bg-[linear-gradient(180deg,rgba(244,232,214,0.95),rgba(255,249,241,0.92))] p-4 shadow-[var(--shadow)] sm:p-5 lg:min-h-[31rem] lg:p-6">
            <div className="absolute inset-0">
              <Image
                src={heroImage}
                alt={home.hero.image.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,238,227,0.3),rgba(122,90,68,0.36))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,247,236,0.5),transparent_48%)]" />
            </div>

            <div className="relative z-10 rounded-[22px] border border-[rgba(109,79,61,0.1)] bg-[rgba(255,251,246,0.84)] p-5 backdrop-blur-[2px] lg:ml-auto lg:mt-10 lg:max-w-md">
              <p className="eyebrow">{home.hero.panelTitle}</p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.14em] text-[var(--wood-soft)]">
                    {common.nextGathering}
                  </p>
                  <p className="mt-2 text-2xl text-[var(--wood-deep)]">
                    {site.nextGathering.day}
                  </p>
                  <p className="text-base text-[var(--muted)]">{site.nextGathering.time}</p>
                </div>
                <div className="soft-divider" />
                <div className="hero-detail-list">
                  {schedule.slice(0, 4).map((item) => (
                    <div key={`${item.name}-${item.time}`} className="hero-detail-item">
                      <p className="text-base font-semibold text-[var(--wood-deep)]">{item.time}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{item.description}</p>
                    </div>
                  ))}
                </div>
                <ButtonLink href={`/${lang}/sermons`} variant="secondary" className="w-full justify-center">
                  {common.exploreSermons}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageSection id="discover">
        <SectionHeading
          eyebrow={home.sections.eyebrow}
          title={home.sections.title}
          description={home.sections.description}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {home.sections.cards.map((card) => (
            <HomeFeatureCard key={card.href} lang={lang} card={card} actionLabel={common.learnMore} />
          ))}
        </div>
      </PageSection>

      <PageSection id="events">
        <SectionHeading
          eyebrow={home.events.eyebrow}
          title={home.events.title}
          description=""
          action={
            <ButtonLink href={`/${lang}/events`} variant="secondary">
              {common.viewAllEvents}
            </ButtonLink>
          }
        />
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="glass-panel section-card px-6 py-7">
            <div className="relative mb-6 aspect-[16/7] overflow-hidden rounded-[22px] border border-[rgba(109,79,61,0.08)] bg-[linear-gradient(180deg,rgba(242,231,218,0.92),rgba(233,216,197,0.92))]">
              <Image
                src={featuredEventImage}
                alt={home.events.featured.image.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 42rem, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,234,221,0.12),rgba(119,89,67,0.18))]" />
            </div>
            <span className="eyebrow">{home.events.featured.eyebrow}</span>
            <h3 className="mt-4 text-3xl text-[var(--wood-deep)] sm:text-4xl">{home.events.featured.title}</h3>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--wood-soft)]">
              {home.events.featured.date}
            </p>
            <p className="mt-2 text-base font-medium text-[var(--wood)]">{home.events.featured.time}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              {home.events.featured.description}
            </p>
            <div className="mt-6">
              <ButtonLink href={`/${lang}/events`}>{home.events.featured.cta}</ButtonLink>
            </div>
          </article>
        </div>
      </PageSection>

      <PageSection id="schedule">
        <SectionHeading
          eyebrow={home.schedule.eyebrow}
          title={home.schedule.title}
          description=""
          action={
            <ButtonLink href={`/${lang}/sermons`} variant="secondary">
              {common.exploreSermons}
            </ButtonLink>
          }
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {schedule.map((item) => (
            <InfoCard
              key={`${item.name}-${item.time}`}
              title={item.name}
              eyebrow={item.time}
              description={item.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection id="volunteer">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel section-card px-6 py-8 sm:px-8">
            <SectionHeading
              eyebrow={home.volunteer.eyebrow}
              title={home.volunteer.title}
              description={home.volunteer.description}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/volunteer`}>{common.volunteerNow}</ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary">
                {common.contactTeam}
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {volunteerRoles
              .filter((_, index) => index !== 2)
              .slice(0, 4)
              .map((role) => (
                <InfoCard
                  key={role.title}
                  title={role.title}
                  eyebrow={role.commitment}
                  description={role.description}
                />
              ))}
          </div>
        </div>
      </PageSection>

      <PageSection id="donate">
        <div className="glass-panel section-card grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-3">
            <span className="eyebrow">
              {home.donate.eyebrow}
            </span>
            <h2 className="text-3xl text-[var(--wood-deep)] sm:text-4xl">{home.donate.title}</h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
              {home.donate.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href={`/${lang}/donate`} variant="light">
              {common.donateNow}
            </ButtonLink>
            <ButtonLink href={`/${lang}/about`} variant="secondary">
              {common.learnMore}
            </ButtonLink>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
