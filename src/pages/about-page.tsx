import { FeatureGrid, FinalCTA, PageHero, SectionHeading } from "@/components/aw-ui";
import { Seo } from "@/lib/seo";

const VALUES = [
  { title: "Integrity", description: "We do what we say. Every commitment is honored, every recommendation is independent." },
  { title: "Innovation", description: "We pair proven methodology with emerging technology to advance mission outcomes." },
  { title: "Accountability", description: "We own results. Clear ownership, transparent reporting, measurable outcomes." },
  { title: "Collaboration", description: "We embed alongside client teams to transfer capability, not dependence." },
  { title: "Excellence", description: "We hold ourselves to a higher standard — the standard expected of mission-critical work." },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="About ALIGNWORKS — Building Trust Through Technology Excellence"
        description="ALIGNWORKS is a technology consulting firm focused on AI, cybersecurity, compliance, IV&V, and modernization for government and enterprise."
        path="/about"
        ogTitle="About ALIGNWORKS"
        ogDescription="A trusted partner for mission-critical technology initiatives."
      />

      <PageHero
        eyebrow="About ALIGNWORKS"
        title="Building Trust Through Technology Excellence"
        description="ALIGNWORKS partners with the organizations responsible for the most consequential work — securing infrastructure, modernizing services, and bringing intelligent systems into regulated environments."
      />

      <section className="section-aw">
        <div className="container-aw grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-[36px]">Who We Are</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-[18px] leading-[1.7] text-[var(--body)]">
            <p>ALIGNWORKS is a technology consulting firm focused on the disciplines that determine whether modernization succeeds: artificial intelligence, cybersecurity, compliance, independent verification and validation, and quality engineering.</p>
            <p>We work with federal and state agencies, government contractors, and enterprise organizations to align technology decisions with mission, risk, and regulatory reality. Our teams combine senior advisory experience with deep technical practitioners — the same people who write the strategy execute the work.</p>
          </div>
        </div>
      </section>

      <section className="section-aw border-t border-border bg-[var(--surface)]">
        <div className="container-aw grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Our Mission</div>
            <h3 className="mt-4">Align technology, security, compliance, and innovation for mission success.</h3>
            <p className="mt-6 text-[17px] leading-[1.7] text-[var(--body)]">We exist to make modernization defensible — engineered for the realities of regulation, scale, and operational continuity.</p>
          </div>
          <div>
            <div className="eyebrow">Our Vision</div>
            <h3 className="mt-4">A public and private sector where mission-critical systems are intelligent, secure, and trusted by default.</h3>
            <p className="mt-6 text-[17px] leading-[1.7] text-[var(--body)]">We help leaders make that vision operational — through repeatable methodology and disciplined delivery.</p>
          </div>
        </div>
      </section>

      <section className="section-aw">
        <div className="container-aw">
          <SectionHeading eyebrow="Our Values" title="The Principles That Guide Our Work" />
          <div className="mt-16"><FeatureGrid items={VALUES} /></div>
        </div>
      </section>

      <section className="section-aw border-t border-border bg-[var(--surface)]">
        <div className="container-aw grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Our Approach</div>
            <h2 className="mt-4">Senior practitioners. Structured methodology. Honest reporting.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[17px] leading-[1.7] text-[var(--body)]">
            <p>Every engagement is led by senior consultants who own the outcome. We use a documented six-stage delivery framework — Assess, Design, Implement, Validate, Optimize, Govern — adapted to the regulatory and operational context of each client.</p>
            <p>We are independent. Our recommendations are not tied to product resale or vendor incentives. When we say a control is in place, an architecture is sound, or a program is ready for production, that judgment carries weight.</p>
          </div>
        </div>
      </section>

      <FinalCTA title="Let's Discuss Your Goals" description="Tell us about your modernization, security, or compliance objectives. We will respond within one business day." buttonLabel="Contact ALIGNWORKS" />
    </>
  );
}