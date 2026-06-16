import Link from "next/link";
import { buildLocalizedHref, type Dictionary, type Locale } from "@/lib/i18n";

export function SiteFooter({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: Dictionary;
}) {
  const { footer, site } = dictionary;

  return (
    <footer className="mt-14 border-t border-[rgba(109,79,61,0.1)] bg-[rgba(255,249,242,0.82)]">
      <div className="site-shell grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-3xl text-[var(--wood-deep)]">{site.name}</p>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">{footer.description}</p>
          <p className="text-sm text-[var(--muted)]">{site.address}</p>
        </div>

        <div className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
          <div className="space-y-2">
            <p className="font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]">
              {footer.contactHeading}
            </p>
            <p>{site.phone}</p>
            <p>{site.email}</p>
            <p className="whitespace-pre-line">{site.officeHours}</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]">
              {footer.linksHeading}
            </p>
            {footer.links.map((link) => (
              <Link key={link.href} href={buildLocalizedHref(link.href || "/", lang)} className="block hover:text-[var(--wood)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
