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
      <div className="site-shell relative z-50 flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <input
          id="mobile-navigation-toggle"
          type="checkbox"
          className="mobile-navigation-toggle sr-only"
          aria-controls="mobile-navigation"
        />

        <div className="header-row flex items-center justify-between gap-4">
          <Link href={`/${lang}`} className="space-y-1">
            <p className="text-2xl text-[var(--wood-deep)]">{site.name}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--wood-soft)]">{site.address}</p>
          </Link>

          <div className="flex shrink-0 items-center gap-3 lg:hidden">
            <LanguageSwitcher currentLocale={lang} />
            <label
              htmlFor="mobile-navigation-toggle"
              role="button"
              aria-label="Toggle navigation menu"
              className="mobile-menu-button"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <span aria-hidden="true" className="mobile-menu-icon">
                <span />
                <span />
                <span />
              </span>
            </label>
          </div>
        </div>

        <label
          htmlFor="mobile-navigation-toggle"
          aria-label="Close menu overlay"
          className="mobile-menu-overlay"
        />

        <div
          id="mobile-navigation"
          className="mobile-navigation-panel rounded-[var(--radius-lg)] border border-[rgba(109,79,61,0.12)] bg-[rgba(255,250,244,0.96)] p-4 shadow-[0_18px_40px_rgba(70,48,33,0.12)] lg:flex-row lg:items-center lg:gap-4 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
        >
          <div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row lg:items-center">
            <nav className="flex flex-col gap-3 text-sm text-[var(--muted)] lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-5 lg:gap-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={buildLocalizedHref(item.href || "/", lang)}
                  className="nav-link"
                >
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
      </div>
    </header>
  );
}
