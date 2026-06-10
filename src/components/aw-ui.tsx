import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-[760px] mx-auto" : "max-w-[760px]"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={eyebrow ? "mt-4" : ""}>{title}</h2>
      {description && (
        <p className="mt-6 text-[18px] leading-[1.7] text-[var(--body)]">{description}</p>
      )}
    </div>
  );
}

type BtnProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function AwButton({ to, href, children, variant = "primary" }: BtnProps) {
  const cls =
    variant === "primary"
      ? "inline-flex items-center justify-center h-[52px] px-7 bg-foreground text-background text-[14px] font-medium tracking-wide rounded-[6px] hover:bg-[var(--navy)] transition-colors"
      : "inline-flex items-center justify-center h-[52px] px-7 border border-border text-foreground text-[14px] font-medium tracking-wide rounded-[6px] hover:border-foreground transition-colors";
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href ?? "#"} className={cls}>{children}</a>;
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="container-aw pt-24 pb-20 md:pt-32 md:pb-28">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className={`max-w-[900px] ${eyebrow ? "mt-6" : ""}`}>{title}</h1>
        {description && (
          <p className="mt-8 max-w-[760px] text-[19px] leading-[1.7] text-[var(--body)]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function FinalCTA({
  title = "Ready to Modernize Your Organization?",
  description = "Connect with ALIGNWORKS to discuss your technology, cybersecurity, compliance, and modernization objectives.",
  buttonLabel = "Schedule Consultation",
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="section-aw bg-[var(--surface)] border-t border-border">
      <div className="container-aw text-center">
        <h2 className="max-w-[800px] mx-auto">{title}</h2>
        <p className="mt-6 max-w-[640px] mx-auto text-[18px] text-[var(--body)]">{description}</p>
        <div className="mt-10 flex justify-center gap-4">
          <AwButton to="/contact">{buttonLabel}</AwButton>
        </div>
      </div>
    </section>
  );
}

export function NumberedList({ items }: { items: { num: string; title: string; description: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
      {items.map((it) => (
        <div key={it.num} className="bg-background p-10">
          <div className="text-[13px] font-semibold tracking-[0.18em] text-[var(--navy)]">{it.num}</div>
          <h3 className="mt-4 text-[22px] font-semibold text-foreground">{it.title}</h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]">{it.description}</p>
        </div>
      ))}
    </div>
  );
}

export function FeatureGrid({
  items,
  cols = 3,
}: {
  items: { title: string; description: string }[];
  cols?: 2 | 3;
}) {
  const grid = cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid ${grid} gap-px bg-border border border-border`}>
      {items.map((f) => (
        <div key={f.title} className="bg-background p-10">
          <h3 className="text-[20px] font-semibold text-foreground">{f.title}</h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]">{f.description}</p>
        </div>
      ))}
    </div>
  );
}

export function BulletSection({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div>
      <h3 className="text-[22px] font-semibold text-foreground">{title}</h3>
      <ul className="mt-5 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-[16px] leading-[1.7] text-[var(--body)]">
            <span className="mt-[10px] inline-block h-[6px] w-[6px] shrink-0 bg-[var(--navy)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}