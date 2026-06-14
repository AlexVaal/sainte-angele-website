import Link from "next/link";

type Variant = "primary" | "secondary" | "light" | "ghost-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--wood)] text-white shadow-[0_12px_24px_rgba(73,52,40,0.18)] hover:-translate-y-0.5 hover:bg-[var(--wood-deep)]",
  secondary:
    "border border-[rgba(109,79,61,0.14)] bg-white/70 text-[var(--wood-deep)] hover:-translate-y-0.5 hover:bg-[var(--surface-muted)]",
  light:
    "bg-white text-[var(--wood-deep)] shadow-[0_12px_24px_rgba(255,247,238,0.12)] hover:-translate-y-0.5 hover:bg-[var(--surface-muted)]",
  "ghost-light":
    "border border-white/25 bg-white/8 text-white hover:-translate-y-0.5 hover:bg-white/14",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
