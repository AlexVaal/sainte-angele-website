export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl space-y-3">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="text-3xl text-[var(--wood-deep)] sm:text-4xl">{title}</h2>
        {description ? <p className="text-base leading-8 text-[var(--muted)]">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
