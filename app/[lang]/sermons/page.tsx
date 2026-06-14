import type { Metadata } from "next";
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
    pathname: "/sermons",
    title: dictionary.sermons.title,
    description: dictionary.sermons.schedule.description,
  });
}

export default async function SermonsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { sermons, schedule } = dictionary;

  return (
    <div className="site-shell space-y-8">
      <PageSection>
        <SectionHeading
          eyebrow={sermons.schedule.eyebrow}
          title={sermons.schedule.title}
          description={sermons.schedule.description}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {schedule.map((item) => (
            <InfoCard
              key={item.name}
              title={item.name}
              eyebrow={item.time}
              description={item.description}
            />
          ))}
        </div>
      </PageSection>
    </div>
  );
}
