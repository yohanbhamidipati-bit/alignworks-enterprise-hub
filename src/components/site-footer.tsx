import { Link } from "@tanstack/react-router";

const COLS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Agentic AI", to: "/services/agentic-ai" },
      { label: "AI Development", to: "/services/ai-development" },
      { label: "Cybersecurity", to: "/services/cybersecurity" },
      { label: "Cyber Compliance", to: "/services/cyber-compliance" },
      { label: "IV&V", to: "/services/ivv" },
      { label: "Testing Services", to: "/services/testing" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Federal Government", to: "/industries" },
      { label: "State Government", to: "/industries" },
      { label: "Government Contractors", to: "/industries" },
      { label: "Enterprise", to: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-aw py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="text-[18px] font-bold tracking-[0.16em] text-foreground">ALIGNWORKS</div>
            <p className="mt-4 text-[14px] leading-relaxed text-[var(--muted-text)] max-w-[240px]">
              Aligning Technology, Security, Compliance, and Innovation for Mission Success.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold tracking-wider uppercase text-foreground">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label + l.to}>
                    <Link to={l.to} className="text-[14px] text-[var(--muted-text)] hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-aw flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 text-[13px] text-[var(--muted-text)]">
          <p>© 2026 ALIGNWORKS. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}