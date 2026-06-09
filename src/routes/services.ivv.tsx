import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/ivv")({
  head: () => ({
    meta: [
      { title: "Independent Verification & Validation (IV&V) | ALIGNWORKS" },
      { name: "description", content: "Objective IV&V oversight for mission-critical programs — verification, validation, quality assurance, and executive reporting." },
      { property: "og:title", content: "IV&V — ALIGNWORKS" },
      { property: "og:description", content: "Independent oversight for high-stakes programs." },
      { property: "og:url", content: "/services/ivv" },
    ],
    links: [{ rel: "canonical", href: "/services/ivv" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="IV&V"
      hero="Independent Oversight for Critical Programs"
      intro="Independent verification and validation gives sponsors and oversight bodies an objective, technically credible view of program health, risk, and readiness."
      challenges={{
        title: "Program Risks",
        bullets: [
          "Requirements drift across multi-year initiatives",
          "Vendor self-reporting that obscures program health",
          "Late discovery of architecture, security, or quality issues",
          "Cost and schedule overruns that erode stakeholder trust",
        ],
      }}
      capabilities={{
        title: "Verification & Validation Services",
        items: [
          { title: "Requirements Verification", description: "Independent traceability across business, functional, and technical requirements." },
          { title: "Architecture Validation", description: "Objective review of architecture decisions, scalability, and security posture." },
          { title: "Quality Assurance", description: "Process, deliverable, and defect quality reviews across the SDLC." },
          { title: "Testing Oversight", description: "Independent review of test strategies, coverage, and acceptance criteria." },
          { title: "Risk & Issue Management", description: "Independent risk identification, escalation, and mitigation tracking." },
          { title: "Executive Reporting", description: "Plain-language reporting for sponsors, oversight, and governance bodies." },
        ],
      }}
      benefits={[
        "Earlier visibility into program risk",
        "Higher confidence in vendor deliverables",
        "Reduced rework and overrun risk",
        "Defensible reporting for oversight bodies",
        "Improved alignment across stakeholders",
        "Better outcomes for mission and users",
      ]}
      process={{
        title: "IV&V Process",
        bullets: [
          "Program baseline and risk profile",
          "Independent review plan and cadence",
          "Ongoing verification and validation activities",
          "Risk and issue tracking with mitigation",
          "Executive and oversight reporting",
          "Readiness reviews at program milestones",
        ],
      }}
    />
  ),
});