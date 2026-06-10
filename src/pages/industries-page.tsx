import { BulletSection, FinalCTA, PageHero } from "@/components/aw-ui";
import { Seo } from "@/lib/seo";

const INDUSTRIES = [
  {
    name: "Federal Government",
    challenges: ["Aging mission systems and legacy modernization debt", "Increasingly complex security and compliance mandates", "Workforce constraints in advanced technology disciplines"],
    approach: ["Mission-aligned modernization roadmaps", "Embedded security and compliance engineering", "Independent oversight for high-risk programs"],
    outcomes: ["Audit-ready compliance posture", "Reduced program delivery risk", "Modern, defensible mission systems"],
  },
  {
    name: "State Government",
    challenges: ["Citizen services that fall short of modern expectations", "Cybersecurity gaps across distributed agencies", "Limited internal capacity for transformation"],
    approach: ["Service-centered modernization design", "Statewide security architecture and assessments", "Capability transfer to internal teams"],
    outcomes: ["Improved citizen outcomes and trust", "Hardened security posture across agencies", "Sustainable internal delivery capability"],
  },
  {
    name: "Government Contractors",
    challenges: ["CMMC and supply-chain compliance requirements", "Bid-level technical leadership shortages", "Differentiation in commoditized capture environments"],
    approach: ["CMMC and FedRAMP readiness engineering", "Capture-side technical advisory and proposal support", "Specialized AI, security, and IV&V partnership"],
    outcomes: ["Defensible compliance certifications", "Stronger technical win themes", "Trusted subject-matter expertise on demand"],
  },
  {
    name: "Enterprise Organizations",
    challenges: ["Scaling AI from pilot to production", "Regulatory exposure across multiple jurisdictions", "Modernization fatigue and program drift"],
    approach: ["Enterprise AI strategy and platform engineering", "Integrated compliance and security operating models", "Independent program validation"],
    outcomes: ["AI capabilities that operate in production", "Reduced regulatory and operational risk", "Predictable, governed delivery"],
  },
];

export function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industries — Government and Enterprise Expertise | ALIGNWORKS"
        description="Industry expertise across federal, state, public sector, government contractors, and enterprise organizations."
        path="/industries"
        ogTitle="ALIGNWORKS Industries"
        ogDescription="Industry expertise that delivers results."
      />

      <PageHero
        eyebrow="Industries"
        title="Industry Expertise That Delivers Results"
        description="We work across the sectors where the cost of failure is highest — and the standards for security, compliance, and continuity are non-negotiable."
      />

      {INDUSTRIES.map((i, idx) => (
        <section key={i.name} className={`section-aw ${idx % 2 ? "bg-[var(--surface)] border-t border-border" : ""}`}>
          <div className="container-aw">
            <div className="eyebrow">Industry</div>
            <h2 className="mt-4">{i.name}</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-10">
              <BulletSection title="Challenges" bullets={i.challenges} />
              <BulletSection title="Approach" bullets={i.approach} />
              <BulletSection title="Outcomes" bullets={i.outcomes} />
            </div>
          </div>
        </section>
      ))}

      <FinalCTA />
    </>
  );
}