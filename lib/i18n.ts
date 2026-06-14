import { siteContent } from "@/content/site-content";

export const locales = ["en", "fr", "it"] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = (typeof siteContent)[Locale];

const localizedPathMap = {
  hallRental: {
    en: "/hall-rental",
    fr: "/location-de-salle",
    it: "/hall-rental",
  },
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function generateLocaleParams() {
  return locales.map((lang) => ({ lang }));
}

export function localizePath(pathname: string, locale: Locale) {
  if (pathname === localizedPathMap.hallRental.en || pathname === localizedPathMap.hallRental.fr) {
    return localizedPathMap.hallRental[locale];
  }

  return pathname;
}

export function buildLocalizedHref(pathname: string, locale: Locale) {
  const normalizedPath = pathname || "/";
  const localizedSubPath = localizePath(normalizedPath, locale);

  return localizedSubPath === "/" ? `/${locale}` : `/${locale}${localizedSubPath}`;
}

export function getDictionary(locale: Locale): Dictionary {
  return siteContent[locale];
}
