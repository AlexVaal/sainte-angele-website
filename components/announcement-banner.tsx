type AnnouncementItem = Readonly<{
  date: string;
  text: string;
}>;

export function AnnouncementBanner({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly AnnouncementItem[];
}) {
  return (
    <section className="glass-panel section-card fade-up flex flex-col gap-4 border-l-4 border-l-[var(--wood)] px-6 py-6 sm:px-8">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--wood-soft),var(--wood))] text-[var(--surface-strong)]"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wood-soft)]">{eyebrow}</p>
          <h2 className="text-xl text-[var(--wood-deep)] sm:text-2xl">{title}</h2>
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.date}
            className="rounded-[16px] border border-[rgba(109,79,61,0.12)] bg-[rgba(255,255,255,0.55)] px-4 py-3"
          >
            <p className="text-sm font-semibold text-[var(--wood)]">{item.date}</p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
