export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="glass-panel section-card hero-surface px-6 py-8 sm:px-10 sm:py-12">
      <div className="max-w-3xl space-y-5">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="text-4xl leading-tight text-[var(--wood-deep)] sm:text-5xl">{title}</h1>
        <p className="text-lg leading-8 text-[var(--muted)]">{description}</p>
      </div>
      {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}
