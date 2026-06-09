import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container-aw flex h-20 items-center justify-between">
        <Link to="/" className="text-[20px] font-bold tracking-[0.16em] text-foreground">
          ALIGNWORKS
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[14px] font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center h-[44px] px-5 bg-foreground text-background text-[13px] font-medium tracking-wide hover:bg-[var(--navy)] transition-colors rounded-[6px]"
        >
          Schedule Consultation
        </Link>
      </div>
    </header>
  );
}