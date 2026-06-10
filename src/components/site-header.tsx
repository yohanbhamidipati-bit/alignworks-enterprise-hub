import { NavLink, Link } from "react-router-dom";
import awMonogram from "@/assets/aw-monogram.svg";

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
        <Link to="/" className="flex items-center gap-3 text-[20px] font-bold tracking-[0.16em] text-foreground">
          <img src={awMonogram} alt="ALIGNWORKS monogram" className="h-9 w-9 object-contain" width={36} height={36} />
          <span>ALIGNWORKS</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-[14px] font-medium transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-foreground/80"}`
              }
            >
              {item.label}
            </NavLink>
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