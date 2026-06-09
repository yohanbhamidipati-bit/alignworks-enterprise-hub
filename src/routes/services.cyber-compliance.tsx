import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/cyber-compliance")({
  head: () => ({
    meta: [
      { title: "Cyber Compliance — Navigating Compliance with Confidence | ALIGNWORKS" },
      { name: "description", content: "NIST, FedRAMP, CMMC, FISMA, HIPAA, and state framework readiness, policy development, and continuous compliance." },
      { property: "og:title", content: "Cyber Compliance — ALIGNWORKS" },
      { property: "og:description", content: "Compliance treated as an engineering discipline." },
      { property: "og:url", content: "/services/cyber-compliance" },
    ],
    links: [{ rel: "canonical", href: "/services/cyber-compliance" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Cyber Compliance"
      hero="Navigating Compliance with Confidence"
      intro="We translate complex regulatory frameworks into engineering requirements, operational controls, and audit-ready evidence — without slowing the business."
      challenges={{
        title: "Compliance Challenges",
        bullets: [
          "Overlapping federal, state, and industry frameworks",
          "Evidence collection that is manual and difficult to sustain",
          "Misalignment between compliance, security, and engineering",
          "Audit cycles that disrupt operations",
        ],
      }}
      capabilities={{
        title: "Framework Support",
        items: [
          { title: "NIST 800-53 / 800-171", description: "Control implementation, tailoring, and continuous assessment." },
          { title: "FedRAMP", description: "Authorization preparation, SSP development, and 3PAO coordination." },
          { title: "CMMC", description: "Level 1–3 readiness assessments, gap remediation, and assessor support." },
          { title: "FISMA", description: "ATO support, POA&M management, and continuous monitoring programs." },
          { title: "HIPAA & State Privacy", description: "Healthcare, education, and state-specific privacy and security alignment." },
          { title: "Policy & Governance", description: "Policy authoring, control mapping, and governance committee design." },
        ],
      }}
      benefits={[
        "Faster, more predictable authorization timelines",
        "Sustainable continuous compliance posture",
        "Reduced audit disruption",
        "Clearer accountability across teams",
        "Defensible documentation and evidence",
        "Compliance aligned to actual risk",
      ]}
      process={{
        title: "Engagement Process",
        bullets: [
          "Framework selection and scoping",
          "Gap assessment and risk register",
          "Remediation roadmap and prioritization",
          "Control implementation and documentation",
          "Audit and assessor coordination",
          "Continuous monitoring program",
        ],
      }}
    />
  ),
});