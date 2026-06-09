import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/testing")({
  head: () => ({
    meta: [
      { title: "Testing Services — Reliable Software Through Quality Engineering | ALIGNWORKS" },
      { name: "description", content: "Functional, automation, performance, accessibility, and security testing services for mission-critical software." },
      { property: "og:title", content: "Testing Services — ALIGNWORKS" },
      { property: "og:description", content: "Quality engineering across the full testing lifecycle." },
      { property: "og:url", content: "/services/testing" },
    ],
    links: [{ rel: "canonical", href: "/services/testing" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Testing Services"
      hero="Delivering Reliable Software Through Quality Engineering"
      intro="Quality engineering is a discipline, not a phase. We embed structured testing strategy and automation across the lifecycle so mission systems launch with confidence."
      challenges={{
        title: "Quality Challenges",
        bullets: [
          "Late-stage defects driving cost and schedule overruns",
          "Insufficient automation slowing release cadence",
          "Performance and scalability surprises in production",
          "Accessibility and security gaps discovered after launch",
        ],
      }}
      capabilities={{
        title: "Testing Capabilities",
        items: [
          { title: "Test Strategy", description: "Risk-based test strategies aligned to program complexity and regulatory needs." },
          { title: "Functional Testing", description: "Comprehensive functional, regression, and user-acceptance testing." },
          { title: "Automation Engineering", description: "Scalable automation frameworks across UI, API, and data layers." },
          { title: "Performance Testing", description: "Load, stress, scalability, and resilience testing at production fidelity." },
          { title: "Security Testing", description: "Static, dynamic, and dependency analysis aligned to security frameworks." },
          { title: "Accessibility Testing", description: "Section 508 and WCAG conformance testing and remediation guidance." },
        ],
      }}
      benefits={[
        "Higher quality releases with fewer production defects",
        "Faster, more confident release cadence",
        "Lower long-term cost of quality",
        "Predictable performance under real-world load",
        "Accessibility and security built in, not bolted on",
        "Improved stakeholder and user trust",
      ]}
      process={{
        title: "Quality Engineering Process",
        bullets: [
          "Quality and risk assessment",
          "Test strategy and automation roadmap",
          "Framework and tooling implementation",
          "Continuous testing in CI/CD pipelines",
          "Performance and security validation",
          "Quality metrics and continuous improvement",
        ],
      }}
    />
  ),
});