import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FinalCTA } from "@/components/aw-ui";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Perspectives on AI, Security, and Modernization | ALIGNWORKS" },
      { name: "description", content: "Thought leadership on agentic AI, cybersecurity, compliance, government technology, and digital transformation." },
      { property: "og:title", content: "ALIGNWORKS Insights" },
      { property: "og:description", content: "Perspectives on the disciplines that define modernization." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const CATEGORIES = ["All", "Agentic AI", "Artificial Intelligence", "Cybersecurity", "Compliance", "Government Technology", "Digital Transformation"];

const FEATURED = {
  category: "Agentic AI",
  title: "Operationalizing Agentic AI Inside Regulated Environments",
  excerpt: "A pragmatic framework for deploying autonomous agents with governance, observability, and human oversight — built for the realities of regulated enterprise and public sector operations.",
  date: "March 2026",
  readTime: "12 min read",
};

const ARTICLES = [
  { category: "Cybersecurity", title: "Zero Trust as a Procurement Strategy, Not a Product", excerpt: "Why the most effective zero trust programs are framed as sustained architectural commitments rather than tool purchases.", date: "Feb 2026" },
  { category: "Compliance", title: "FedRAMP, CMMC, and the New Compliance Operating Model", excerpt: "Unifying evidence collection, automation, and continuous monitoring into a single compliance discipline.", date: "Feb 2026" },
  { category: "Government Technology", title: "Modernization Programs That Outlive Their Sponsors", excerpt: "Designing governance, documentation, and capability transfer so multi-year programs do not stall on leadership change.", date: "Jan 2026" },
  { category: "Artificial Intelligence", title: "From Pilots to Production: Closing the Enterprise AI Gap", excerpt: "The organizational patterns that separate AI initiatives that ship from those that quietly stall.", date: "Jan 2026" },
  { category: "Digital Transformation", title: "Measuring Modernization in Mission Outcomes", excerpt: "Replacing activity metrics with outcome metrics in long-running transformation programs.", date: "Dec 2025" },
  { category: "Cybersecurity", title: "Independent Validation in Cybersecurity Programs", excerpt: "Why third-party verification has become a procurement standard for high-risk security investments.", date: "Dec 2025" },
];

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on Technology, Security, and Mission"
        description="Practitioner perspectives from the front lines of AI, cybersecurity, compliance, and modernization."
      />

      <section className="border-b border-border">
        <div className="container-aw py-8 flex flex-wrap items-center gap-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c, i) => (
              <button key={c} className={`px-4 h-9 text-[13px] font-medium tracking-wide rounded-[6px] border ${i === 0 ? "bg-foreground text-background border-foreground" : "border-border text-[var(--body)] hover:border-foreground hover:text-foreground"} transition-colors`}>
                {c}
              </button>
            ))}
          </div>
          <div className="ml-auto">
            <input
              type="search"
              placeholder="Search insights"
              className="h-10 w-[260px] px-4 text-[14px] border border-border rounded-[6px] bg-background focus:outline-none focus:border-foreground"
            />
          </div>
        </div>
      </section>

      <section className="section-aw">
        <div className="container-aw">
          <article className="grid lg:grid-cols-12 gap-10 items-center border border-border p-10 lg:p-14 rounded-[6px] bg-[var(--surface)]">
            <div className="lg:col-span-7">
              <div className="eyebrow">Featured • {FEATURED.category}</div>
              <h2 className="mt-4 text-[36px] md:text-[44px]">{FEATURED.title}</h2>
              <p className="mt-6 text-[17px] leading-[1.7] text-[var(--body)]">{FEATURED.excerpt}</p>
              <div className="mt-8 flex items-center gap-6 text-[13px] text-[var(--muted-text)]">
                <span>{FEATURED.date}</span>
                <span>{FEATURED.readTime}</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] w-full bg-background border border-border" />
            </div>
          </article>
        </div>
      </section>

      <section className="section-aw border-t border-border">
        <div className="container-aw">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {ARTICLES.map((a) => (
              <article key={a.title} className="bg-background p-10">
                <div className="eyebrow">{a.category}</div>
                <h3 className="mt-4 text-[20px] font-semibold text-foreground leading-tight">{a.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]">{a.excerpt}</p>
                <div className="mt-6 text-[12px] tracking-wider uppercase text-[var(--muted-text)]">{a.date}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-aw border-t border-border bg-[var(--surface)]">
        <div className="container-aw max-w-[760px]">
          <div className="eyebrow">Newsletter</div>
          <h2 className="mt-4">Receive ALIGNWORKS perspectives in your inbox.</h2>
          <p className="mt-4 text-[17px] text-[var(--body)]">Quarterly briefings on AI, cybersecurity, compliance, and modernization. No noise.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Work email" className="flex-1 h-[52px] px-4 border border-border rounded-[6px] bg-background focus:outline-none focus:border-foreground text-[15px]" />
            <button type="submit" className="h-[52px] px-7 bg-foreground text-background text-[14px] font-medium tracking-wide rounded-[6px] hover:bg-[var(--navy)] transition-colors">Subscribe</button>
          </form>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}