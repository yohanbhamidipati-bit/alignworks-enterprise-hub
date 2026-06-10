import { Link } from "react-router-dom";

import { FeatureGrid, FinalCTA, PageHero, SectionHeading } from "@/components/aw-ui";
import { Seo } from "@/lib/seo";

const CAPS = [
  { title: "Agentic AI", to: "/services/agentic-ai", description: "Autonomous agents that orchestrate enterprise workflows with governance and observability." },
  { title: "AI Development", to: "/services/ai-development", description: "Production-grade machine learning, generative AI, and applied analytics." },
  { title: "Cybersecurity", to: "/services/cybersecurity", description: "Security architecture, assessments, and risk management for regulated environments." },
  { title: "Cyber Compliance", to: "/services/cyber-compliance", description: "NIST, FedRAMP, CMMC, FISMA, HIPAA, and state framework readiness." },
  { title: "Independent Verification & Validation", to: "/services/ivv", description: "Objective oversight of mission-critical programs and large-scale implementations." },
  { title: "Testing Services", to: "/services/testing", description: "Functional, automation, performance, accessibility, and security testing." },
];

const ENGAGEMENT = [
  { title: "Advisory", description: "Senior consulting engagements focused on strategy, architecture, and program risk." },
  { title: "Assessment", description: "Defined-scope diagnostics with executive-ready findings and remediation roadmaps." },
  { title: "Implementation", description: "End-to-end delivery of security, compliance, AI, and modernization initiatives." },
  { title: "Managed Services", description: "Ongoing operations, monitoring, and continuous improvement under formal SLAs." },
];

export function ServicesPage() {
  return (
    <>
      <Seo title="Services — Technology Consulting for Mission Success | ALIGNWORKS" description="AI, cybersecurity, compliance, IV&V, testing, and digital transformation services for government and enterprise organizations." path="/services" ogTitle="ALIGNWORKS Services" ogDescription="Technology services designed for mission success." />
      <PageHero eyebrow="Services" title="Technology Services Designed for Mission Success" description="A unified service architecture covering the disciplines that define successful modernization — strategy, engineering, security, compliance, and independent oversight." />
      <section className="section-aw"><div className="container-aw"><SectionHeading eyebrow="Capabilities" title="Capabilities Overview" /><div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">{CAPS.map((c) => (<Link key={c.title} to={c.to} className="bg-background p-10 hover:bg-[var(--surface)] transition-colors block"><h3 className="text-[22px] font-semibold text-foreground">{c.title}</h3><p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]">{c.description}</p><span className="mt-6 inline-block text-[13px] font-semibold tracking-[0.14em] uppercase text-foreground border-b border-foreground pb-1">Explore →</span></Link>))}</div></div></section>
      <section className="section-aw border-t border-border bg-[var(--surface)]"><div className="container-aw"><SectionHeading eyebrow="Methodology" title="Delivery Methodology" description="Our six-stage delivery framework — Assess, Design, Implement, Validate, Optimize, Govern — is adapted to the regulatory and operational context of every engagement." /></div></section>
      <section className="section-aw"><div className="container-aw"><SectionHeading eyebrow="Engagement Models" title="How We Work With You" /><div className="mt-16"><FeatureGrid items={ENGAGEMENT} cols={2} /></div></div></section>
      <FinalCTA title="Schedule a Strategy Session" description="A 30-minute working session with a senior ALIGNWORKS consultant to scope your priorities." />
    </>
  );
}