import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/cybersecurity")({
  head: () => ({
    meta: [
      { title: "Cybersecurity — Security Built Into Every Layer | ALIGNWORKS" },
      { name: "description", content: "Security architecture, assessments, risk management, and incident readiness for government and enterprise organizations." },
      { property: "og:title", content: "Cybersecurity — ALIGNWORKS" },
      { property: "og:description", content: "Security engineered for mission-critical environments." },
      { property: "og:url", content: "/services/cybersecurity" },
    ],
    links: [{ rel: "canonical", href: "/services/cybersecurity" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Cybersecurity"
      hero="Security Built Into Every Layer"
      intro="Modern threats demand security that is designed in, not bolted on. We help organizations harden architecture, reduce risk, and operate with confidence."
      challenges={{
        title: "Threat Landscape",
        bullets: [
          "Sophisticated and persistent adversaries targeting critical infrastructure",
          "Expanding attack surface from cloud, SaaS, and remote work",
          "Increasing regulatory and contractual security obligations",
          "Limited visibility across hybrid and multi-cloud environments",
        ],
      }}
      capabilities={{
        title: "Cybersecurity Services",
        items: [
          { title: "Security Assessments", description: "Architecture, control, and vulnerability assessments against recognized frameworks." },
          { title: "Security Architecture", description: "Zero-trust, identity, network, and cloud security architecture design." },
          { title: "Risk Management", description: "Enterprise risk programs, threat modeling, and risk-informed prioritization." },
          { title: "Incident Readiness", description: "Incident response planning, tabletop exercises, and recovery preparedness." },
          { title: "Cloud Security", description: "Secure landing zones, posture management, and workload protection." },
          { title: "Identity & Access", description: "Modern identity architectures, privileged access, and lifecycle governance." },
        ],
      }}
      benefits={[
        "Reduced exposure to high-impact threats",
        "Defensible security posture for audit and oversight",
        "Faster, more confident incident response",
        "Lower long-term security operating cost",
        "Improved board-level risk reporting",
        "Security aligned to mission priorities",
      ]}
      process={{
        title: "Engagement Process",
        bullets: [
          "Risk and posture assessment",
          "Architecture and control design",
          "Implementation and integration",
          "Validation through testing and red-team exercises",
          "Operations enablement and handover",
          "Continuous monitoring and improvement",
        ],
      }}
    />
  ),
});