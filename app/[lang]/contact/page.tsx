import type { Metadata } from "next";
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
    pathname: "/contact",
    title: dictionary.contact.title,
    description: dictionary.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { contact, site } = dictionary;

  return (
    <div className="site-shell space-y-8">
      <PageHero eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />

      <PageSection>
        <SectionHeading
          eyebrow={contact.details.eyebrow}
          title={contact.details.title}
          description={contact.details.description}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard title={contact.cards.address.title} eyebrow={contact.cards.address.eyebrow} description={site.address} />
          <InfoCard title={contact.cards.phone.title} eyebrow={contact.cards.phone.eyebrow} description={site.phone} />
          <InfoCard title={contact.cards.email.title} eyebrow={contact.cards.email.eyebrow} description={site.email} />
          <InfoCard title={contact.cards.office.title} eyebrow={contact.cards.office.eyebrow} description={site.officeHours} />
        </div>
      </PageSection>

      <PageSection>
        <div className="glass-panel section-card grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">{contact.visit.eyebrow}</p>
            <h2 className="mt-4 text-3xl text-[var(--wood-deep)]">{contact.visit.title}</h2>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">{contact.visit.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {contact.visit.items.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                eyebrow={item.eyebrow}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </PageSection>
    </div>
  );
}
