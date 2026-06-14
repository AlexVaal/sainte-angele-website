import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { buildLocalizedHref, type Dictionary, type Locale } from "@/lib/i18n";

export function SiteHeader({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: Dictionary;
}) {
  const { navigation, site, common } = dictionary;

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(109,79,61,0.08)] bg-[rgba(247,241,232,0.86)] backdrop-blur-xl">
      <div className="site-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${lang}`} className="space-y-1">
            <p className="text-2xl text-[var(--wood-deep)]">{site.name}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--wood-soft)]">{site.address}</p>
          </Link>
          <div className="lg:hidden">
            <LanguageSwitcher currentLocale={lang} />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
            {navigation.map((item) => (
              <Link key={item.href} href={buildLocalizedHref(item.href || "/", lang)} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher currentLocale={lang} />
            </div>
            <ButtonLink href={`/${lang}/donate`}>{common.donateNow}</ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
