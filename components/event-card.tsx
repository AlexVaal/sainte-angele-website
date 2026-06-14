type EventItem = Readonly<{
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  notes: readonly string[];
}>;

type Labels = Readonly<{
  date: string;
  time: string;
  location: string;
  notes: string;
}>;

export function EventCard({
  event,
  labels,
}: {
  event: EventItem;
  labels: Labels;
}) {
  return (
    <article className="glass-panel section-card h-full px-5 py-6">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wood-soft)]">
          {event.date}
        </p>
        <h3 className="text-2xl text-[var(--wood-deep)]">{event.title}</h3>
        <p className="text-sm leading-7 text-[var(--muted)]">{event.description}</p>
      </div>

      <dl className="mt-6 grid gap-4 border-t border-[rgba(109,79,61,0.12)] pt-5 text-sm text-[var(--muted)]">
        <div>
          <dt className="font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]">{labels.date}</dt>
          <dd className="mt-1 text-[var(--wood-deep)]">{event.date}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]">{labels.time}</dt>
          <dd className="mt-1 text-[var(--wood-deep)]">{event.time}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]">{labels.location}</dt>
          <dd className="mt-1 text-[var(--wood-deep)]">{event.location}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]">{labels.notes}</dt>
          <dd className="mt-1 space-y-2">
            {event.notes.length > 0 ? (
              event.notes.map((note) => <p key={note}>{note}</p>)
            ) : (
              <p>—</p>
            )}
          </dd>
        </div>
      </dl>
    </article>
  );
}
