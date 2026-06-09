import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-executive.jpg";
import {
  AwButton,
  Eyebrow,
  FeatureGrid,
  FinalCTA,
  NumberedList,
  SectionHeading,
} from "@/components/aw-ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALIGNWORKS — Technology Consulting for Mission-Critical Organizations" },
      {
        name: "description",
        content:
          "ALIGNWORKS delivers AI, cybersecurity, compliance, IV&V, testing, and digital transformation consulting for government agencies, contractors, and enterprises.",
      },
      { property: "og:title", content: "ALIGNWORKS — Technology Consulting" },
      {
        property: "og:description",
        content:
          "Aligning Technology, Security, Compliance, and Innovation for Mission Success.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const TRUST = [
  "Agentic AI",
  "Cybersecurity",
  "Cyber Compliance",
  "IV&V",
  "Testing Services",
  "Digital Transformation",
  "Enterprise Modernization",
];

const SERVICES = [
  {
    title: "Agentic AI",
    overview:
      "Design and deploy autonomous AI agents that orchestrate complex workflows, accelerate decision-making, and operate within strict governance boundaries.",
    value: "Workflow automation • Decision intelligence • Human-in-the-loop oversight",
    to: "/services/agentic-ai",
  },
  {
    title: "AI Development",
    overview:
      "Custom machine learning, generative AI, and applied analytics engineered for measurable business outcomes and production reliability.",
    value: "Model engineering • MLOps • Enterprise integration",
    to: "/services/ai-development",
  },
  {
    title: "Cybersecurity",
    overview:
      "End-to-end security architecture, assessments, and risk management aligned to federal, state, and enterprise threat profiles.",
    value: "Risk assessments • Zero-trust architecture • Incident readiness",
    to: "/services/cybersecurity",
  },
  {
    title: "Cyber Compliance",
    overview:
      "Navigate NIST, FedRAMP, CMMC, FISMA, HIPAA, and state frameworks with structured assessments, documentation, and audit-ready evidence.",
    value: "Framework mapping • Policy development • Continuous monitoring",
    to: "/services/cyber-compliance",
  },
  {
    title: "Independent Verification & Validation",
    overview:
      "Objective oversight of mission-critical programs to verify requirements, validate outcomes, and protect long-term program investment.",
    value: "Program risk reduction • Quality assurance • Executive reporting",
    to: "/services/ivv",
  },
  {
    title: "Testing Services",
    overview:
      "Comprehensive quality engineering across functional, automation, performance, accessibility, and security testing disciplines.",
    value: "Test strategy • Automation engineering • Performance validation",
    to: "/services/testing",
  },
];

const PROCESS = [
  { num: "01", title: "Assess", description: "Discover the current state of technology, security posture, compliance, and operations through structured assessments and stakeholder engagement." },
  { num: "02", title: "Design", description: "Architect target-state solutions aligned to mission priorities, regulatory requirements, and long-term enterprise objectives." },
  { num: "03", title: "Implement", description: "Deliver with disciplined program management, secure engineering practices, and clear milestones across multi-vendor environments." },
  { num: "04", title: "Validate", description: "Independently verify that systems meet functional, performance, security, and compliance acceptance criteria before launch." },
  { num: "05", title: "Optimize", description: "Continuously improve through measurement, automation, and operational feedback loops that compound value over time." },
  { num: "06", title: "Govern", description: "Establish governance frameworks that sustain security, compliance, and accountability throughout the system lifecycle." },
];

const WHY = [
  { title: "Strategic Advisory", description: "Executive-level guidance grounded in deep public sector and enterprise experience." },
  { title: "Security by Design", description: "Security and resilience embedded into architecture, delivery, and operations from day one." },
  { title: "Compliance Built In", description: "Regulatory frameworks treated as engineering requirements, not afterthoughts." },
  { title: "Independent Validation", description: "Objective oversight that protects program outcomes and stakeholder investment." },
  { title: "Scalable Delivery", description: "Engagement models that flex from focused assessments to multi-year transformations." },
  { title: "Long-Term Partnership", description: "Trusted relationships built on transparency, accountability, and sustained outcomes." },
];

const INDUSTRIES = [
  { title: "Federal Government", description: "Mission-aligned modernization across civilian, defense, and intelligence agencies." },
  { title: "State Government", description: "Citizen-services transformation, security modernization, and compliance acceleration." },
  { title: "Government Contractors", description: "Capability augmentation, CMMC readiness, and proposal-grade technical leadership." },
  { title: "Public Sector", description: "Education, healthcare, and public agencies modernizing operations and data platforms." },
  { title: "Enterprise Organizations", description: "Regulated enterprises advancing AI, security, and digital operating models." },
];

const INSIGHTS = [
  { category: "Agentic AI", title: "Operationalizing Agentic AI Inside Regulated Environments", excerpt: "A pragmatic framework for deploying autonomous agents with governance, observability, and human oversight." },
  { category: "Cybersecurity", title: "Zero Trust as a Procurement Strategy, Not a Product", excerpt: "How public sector leaders are reframing zero trust as a sustained architectural commitment." },
  { category: "Compliance", title: "FedRAMP, CMMC, and the New Compliance Operating Model", excerpt: "Aligning evidence, automation, and continuous monitoring into a single compliance discipline." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border">
        <div className="container-aw grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="lg:col-span-7">
            <Eyebrow>AI • Cybersecurity • Compliance • Quality Engineering</Eyebrow>
            <h1 className="mt-6">
              Technology Consulting for Secure, Compliant, and Intelligent Organizations
            </h1>
            <p className="mt-8 max-w-[620px] text-[19px] leading-[1.7] text-[var(--body)]">
              Helping government agencies, contractors, and enterprises modernize operations through AI,
              cybersecurity, compliance, testing, and digital transformation initiatives.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <AwButton to="/contact">Schedule Consultation</AwButton>
              <AwButton to="/services" variant="secondary">Explore Services</AwButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[var(--surface)] border border-border rounded-[6px]">
              <img
                src={heroImage}
                alt="Executive consultant in a modern office"
                className="h-full w-full object-cover grayscale"
                width={1024}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-[var(--surface)]">
        <div className="container-aw py-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-3">
          {TRUST.map((t) => (
            <span key={t} className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--muted-text)]">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="section-aw">
        <div className="container-aw">
          <SectionHeading
            eyebrow="Who We Are"
            title="A Trusted Partner for Mission-Critical Technology Initiatives"
            description="ALIGNWORKS is a technology consulting firm partnering with government agencies, contractors, and enterprises to navigate complex challenges in modernization, security, compliance, and intelligent automation. We bring structured methodology, deep domain expertise, and an unwavering commitment to mission outcomes."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { title: "Government Expertise", description: "Decades of combined experience supporting federal, state, and public sector programs with measurable outcomes." },
              { title: "Security-First Delivery", description: "Every engagement is engineered around security, resilience, and compliance from inception through operations." },
              { title: "Enterprise Scalability", description: "Methodologies and delivery models built to operate at the scale and rigor of regulated enterprises." },
            ].map((c) => (
              <div key={c.title} className="bg-background p-10">
                <h3 className="text-[22px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-aw border-t border-border bg-[var(--surface)]">
        <div className="container-aw">
          <SectionHeading eyebrow="Services" title="Core Capabilities" description="Six integrated practice areas built to solve the most consequential technology, security, and compliance challenges facing modern organizations." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-background p-10 flex flex-col">
                <h3 className="text-[22px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]">{s.overview}</p>
                <p className="mt-5 text-[13px] tracking-wide text-[var(--muted-text)]">{s.value}</p>
                <div className="mt-auto pt-8">
                  <Link to={s.to} className="text-[13px] font-semibold tracking-[0.14em] uppercase text-foreground border-b border-foreground pb-1 hover:text-[var(--navy)] hover:border-[var(--navy)] transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className="section-aw">
        <div className="container-aw">
          <SectionHeading eyebrow="Operating Model" title="How We Deliver Results" description="A disciplined six-stage delivery framework that converts strategic intent into measurable, sustainable outcomes." />
          <div className="mt-16">
            <NumberedList items={PROCESS} />
          </div>
        </div>
      </section>

      {/* WHY ALIGNWORKS */}
      <section className="section-aw border-t border-border bg-[var(--surface)]">
        <div className="container-aw">
          <SectionHeading eyebrow="Why ALIGNWORKS" title="Why Organizations Choose ALIGNWORKS" />
          <div className="mt-16">
            <FeatureGrid items={WHY} />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-aw">
        <div className="container-aw">
          <SectionHeading eyebrow="Industries" title="Industry Expertise" description="Deep experience across the sectors where reliability, security, and compliance are non-negotiable." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {INDUSTRIES.map((i) => (
              <div key={i.title} className="bg-background p-10">
                <h3 className="text-[20px] font-semibold text-foreground">{i.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]">{i.description}</p>
                <Link to="/industries" className="mt-6 inline-block text-[13px] font-semibold tracking-[0.14em] uppercase text-foreground border-b border-foreground pb-1 hover:text-[var(--navy)] hover:border-[var(--navy)] transition-colors">
                  View Industry →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section-aw border-t border-border bg-[var(--surface)]">
        <div className="container-aw">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Insights" title="Insights and Perspectives" />
            <AwButton to="/insights" variant="secondary">View All Insights</AwButton>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
            {INSIGHTS.map((a) => (
              <article key={a.title} className="bg-background p-10">
                <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--navy)]">{a.category}</div>
                <h3 className="mt-4 text-[20px] font-semibold text-foreground leading-tight">{a.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]">{a.excerpt}</p>
                <Link to="/insights" className="mt-6 inline-block text-[13px] font-semibold tracking-[0.14em] uppercase text-foreground border-b border-foreground pb-1 hover:text-[var(--navy)] hover:border-[var(--navy)] transition-colors">
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
