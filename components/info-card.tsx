export function InfoCard({
  title,
  eyebrow,
  description,
  detail,
}: {
  title: string;
  eyebrow: string;
  description: string;
  detail?: string;
}) {
  return (
    <article className="glass-panel section-card h-full px-5 py-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wood-soft)]">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl text-[var(--wood-deep)]">{title}</h3>
      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--muted)]">{description}</p>
      {detail ? <p className="mt-4 text-sm font-medium text-[var(--wood)]">{detail}</p> : null}
    </article>
  );
}
