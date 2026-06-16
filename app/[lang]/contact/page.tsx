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
    </div>
  );
}
