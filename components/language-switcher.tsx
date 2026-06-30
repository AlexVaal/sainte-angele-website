"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildLocalizedHref, locales, type Locale } from "@/lib/i18n";

function getLocalizedPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (locales.includes(segments[0] as Locale)) {
    return buildLocalizedHref(`/${segments.slice(1).join("/")}`, nextLocale);
  }

  return buildLocalizedHref(`/${segments.join("/")}`, nextLocale);
}

export function LanguageSwitcher({
  currentLocale,
  onNavigate,
}: {
  currentLocale: Locale;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="inline-flex items-center rounded-full border border-[rgba(109,79,61,0.12)] bg-white/70 p-1 shadow-sm">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getLocalizedPath(pathname, locale)}
            onClick={onNavigate}
            className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
              isActive
                ? "bg-[var(--wood)] text-white"
                : "text-[var(--wood-deep)] hover:bg-[var(--surface-muted)]"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
