import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { TeamMemberCard } from "@/components/team-member-card";
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
    pathname: "/team",
    title: dictionary.teamPage.title,
    description: dictionary.teamPage.description,
  });
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { teamPage } = dictionary;

  return (
    <div className="site-shell space-y-8">
      <PageHero
        eyebrow={teamPage.eyebrow}
        title={teamPage.title}
        description={teamPage.description}
      />

      {teamPage.sections.map((section) => (
        <PageSection key={section.id} id={section.id}>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {section.members.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                photo={member.photo}
                placeholderLabel={teamPage.placeholderLabel}
              />
            ))}
          </div>
        </PageSection>
      ))}
    </div>
  );
}
