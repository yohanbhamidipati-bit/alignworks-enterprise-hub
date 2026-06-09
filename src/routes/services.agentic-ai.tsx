import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/agentic-ai")({
  head: () => ({
    meta: [
      { title: "Agentic AI — Intelligent Systems That Automate Decision-Making | ALIGNWORKS" },
      { name: "description", content: "Design and deploy agentic AI systems with governance, observability, and human-in-the-loop oversight for regulated environments." },
      { property: "og:title", content: "Agentic AI — ALIGNWORKS" },
      { property: "og:description", content: "Autonomous systems for regulated enterprise and public sector operations." },
      { property: "og:url", content: "/services/agentic-ai" },
    ],
    links: [{ rel: "canonical", href: "/services/agentic-ai" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Agentic AI"
      hero="Intelligent Systems That Automate Decision-Making"
      intro="We design, build, and govern agentic AI systems that orchestrate complex workflows, integrate with mission systems, and operate inside the regulatory boundaries of government and enterprise."
      challenges={{
        title: "Business Challenges",
        bullets: [
          "Repetitive, judgment-intensive work consuming senior capacity",
          "Fragmented systems requiring constant human orchestration",
          "Unclear governance and risk posture for autonomous systems",
          "Difficulty moving AI pilots into production-grade operations",
        ],
      }}
      capabilities={{
        title: "Agentic AI Capabilities",
        items: [
          { title: "Agent Architecture", description: "Composable agent frameworks designed for reliability, observability, and auditability." },
          { title: "Workflow Orchestration", description: "Multi-agent orchestration across enterprise systems with defined hand-offs and controls." },
          { title: "Tool & System Integration", description: "Secure integration with ERPs, case management, ticketing, identity, and data platforms." },
          { title: "Human-in-the-Loop", description: "Escalation, approval, and override patterns that keep humans accountable for outcomes." },
          { title: "Governance & Guardrails", description: "Policy enforcement, content controls, and audit trails aligned to regulatory frameworks." },
          { title: "Monitoring & Evaluation", description: "Continuous evaluation pipelines for accuracy, drift, cost, and safety." },
        ],
      }}
      benefits={[
        "Faster cycle times on judgment-intensive workflows",
        "Lower operational cost without loss of oversight",
        "Higher-quality, more consistent decisions",
        "Defensible audit trails for autonomous activity",
        "Production-grade reliability and observability",
        "Senior staff redirected to higher-value work",
      ]}
      process={{
        title: "Implementation Process",
        bullets: [
          "Workflow discovery and value mapping",
          "Agent and policy architecture design",
          "Integration with enterprise and mission systems",
          "Evaluation, red-teaming, and governance validation",
          "Production launch with monitoring and runbooks",
          "Continuous optimization and capability expansion",
        ],
      }}
    />
  ),
});
