export function PageSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      {children}
    </section>
  );
}
