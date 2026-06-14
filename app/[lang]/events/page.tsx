import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { EventCard } from "@/components/event-card";
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
    pathname: "/events",
    title: dictionary.eventsPage.title,
    description: dictionary.eventsPage.description,
  });
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { eventsPage, events, common } = dictionary;

  return (
    <div className="site-shell space-y-8">
      <PageHero
        eyebrow={eventsPage.eyebrow}
        title={eventsPage.title}
        description={eventsPage.description}
        actions={
          <ButtonLink href={`/${lang}/sermons`} variant="secondary">
            {common.exploreSermons}
          </ButtonLink>
        }
      />

      <PageSection>
        <SectionHeading
          eyebrow={eventsPage.calendar.eyebrow}
          title={eventsPage.calendar.title}
          description=""
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {events.map((event) => (
            <EventCard
              key={event.title}
              event={event}
              labels={eventsPage.labels}
            />
          ))}
        </div>
      </PageSection>

    </div>
  );
}
