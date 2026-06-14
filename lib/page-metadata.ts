import type { Metadata } from "next";
import { buildLocalizedHref, getDictionary, locales, type Locale } from "@/lib/i18n";

export function buildPageMetadata({
  lang,
  pathname,
  title,
  description,
}: {
  lang: Locale;
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const siteName = getDictionary(lang).site.name;
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, buildLocalizedHref(pathname, locale)]),
  );

  return {
    title: `${title} | ${siteName}`,
    description,
    alternates: {
      canonical: buildLocalizedHref(pathname, lang),
      languages,
    },
  };
}
