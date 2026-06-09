import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/ai-development")({
  head: () => ({
    meta: [
      { title: "AI Development — Custom AI Solutions for Real Business Outcomes | ALIGNWORKS" },
      { name: "description", content: "Machine learning, generative AI, and applied analytics engineered for production reliability and measurable business outcomes." },
      { property: "og:title", content: "AI Development — ALIGNWORKS" },
      { property: "og:description", content: "Production-grade AI engineering for regulated organizations." },
      { property: "og:url", content: "/services/ai-development" },
    ],
    links: [{ rel: "canonical", href: "/services/ai-development" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="AI Development"
      hero="Custom AI Solutions for Real Business Outcomes"
      intro="From traditional machine learning to generative and multimodal AI, we build and operate AI systems that deliver measurable outcomes in production — not stalled pilots."
      challenges={{
        title: "Challenges We Solve",
        bullets: [
          "AI initiatives that never reach production",
          "Disconnected data, models, and applications",
          "Unclear ROI from generative AI investments",
          "Insufficient MLOps maturity to operate at scale",
        ],
      }}
      capabilities={{
        title: "AI Engineering Capabilities",
        items: [
          { title: "Machine Learning", description: "Supervised, unsupervised, and time-series modeling on enterprise data." },
          { title: "Generative AI", description: "RAG, fine-tuning, and structured generation patterns with safety controls." },
          { title: "Applied NLP & Vision", description: "Document understanding, classification, summarization, and computer vision." },
          { title: "Data & Feature Engineering", description: "Trusted data foundations, feature stores, and lineage." },
          { title: "MLOps & Platform", description: "Reproducible training, evaluation, deployment, and monitoring pipelines." },
          { title: "Integration", description: "Secure embedding of AI capabilities into mission and enterprise applications." },
        ],
      }}
      benefits={[
        "AI capabilities that operate reliably in production",
        "Measurable performance and cost outcomes",
        "Reduced time from concept to deployed value",
        "Reusable platforms across business units",
        "Defensible model governance and documentation",
        "Scalable foundations for future capabilities",
      ]}
      process={{
        title: "Delivery Process",
        bullets: [
          "Use-case discovery and value scoping",
          "Data assessment and architecture design",
          "Model engineering and evaluation",
          "Integration and user-experience design",
          "Production deployment with monitoring",
          "Continuous improvement and governance",
        ],
      }}
    />
  ),
});