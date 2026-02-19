import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "AI Customer Support",
    description:
      "Intelligent conversational agents that manage customer tickets and inquiries while maintaining brand voice consistency.",
  },
  {
    title: "AI System Integration",
    description:
      "Embedding AI capabilities into existing business infrastructure, connecting CRMs and internal tools through automated pipelines.",
  },
  {
    title: "Data & Automation",
    description:
      "ETL pipelines and document processing workflows that convert unstructured data into actionable insights.",
  },
];

const process = [
  { step: "Discovery", description: "Audit workflows and identify AI opportunities" },
  { step: "Prototype", description: "Rapid prototyping to validate solutions" },
  { step: "Production", description: "Production-grade implementation with full integration" },
  { step: "Optimize", description: "Ongoing performance monitoring and improvement" },
];

export default function CompanyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      <FadeIn>
        <div className="mb-12">
          <p className="text-sm font-medium text-accent">Founded by Aaron Yang</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            DoubleThinking LLC
          </h1>
          <p className="mt-3 text-muted">
            An AI consulting firm based in Washington, DC. We design, build, and
            deploy production-grade artificial intelligence systems for businesses
            nationwide.
          </p>
          <a
            href="https://www.doublethinking.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            www.doublethinking.ai
            <span className="text-xs">↗</span>
          </a>
        </div>
      </FadeIn>

      {/* Services */}
      <FadeIn>
        <section className="mb-12">
          <SectionHeading title="What We Do" />
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Process */}
      <FadeIn>
        <section className="mb-12">
          <SectionHeading title="How We Work" />
          <div className="space-y-3">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-4 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <span className="font-semibold text-foreground">{p.step}</span>
                  <span className="text-muted"> — {p.description}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Why Us */}
      <FadeIn>
        <section className="mb-12">
          <SectionHeading title="Why DoubleThinking" />
          <ul className="space-y-2">
            {[
              "Production-ready systems, not experimental prototypes",
              "Full-stack AI capability across infrastructure, modeling, and integration",
              "Transparent communication about technical decisions and business impact",
              "Cost-efficient solutions leveraging open-source tools",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-light" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-sm text-muted">
            Interested in working with us?
          </p>
          <a
            href="https://www.doublethinking.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Visit doublethinking.ai
            <span className="text-xs">↗</span>
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
