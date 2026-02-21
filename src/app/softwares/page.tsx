import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Softwares",
};

const softwares = [
  {
    name: "AI Resume Screener",
    description:
      "AI-powered resume screening tool with prompt injection security. Automates candidate evaluation for recruiters, reducing review time by 60%.",
    status: "Production",
    tech: ["Python", "LLMs", "FastAPI"],
  },
  {
    name: "LogoSpark",
    description:
      "AI-powered logo design tool that helps users create logos for organizations, companies, and teams. Generates custom logo concepts using AI image generation.",
    status: "In Development",
    tech: ["Next.js", "AI API"],
  },
];

export default function SoftwaresPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      <FadeIn>
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Softwares</h1>
          <p className="mt-2 text-muted">
            Software tools and applications I&apos;ve designed and developed.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-4">
        {softwares.map((sw) => (
          <FadeIn key={sw.name}>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-semibold text-foreground">{sw.name}</h3>
                <span className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${sw.status === "Production" ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400" : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-400"}`}>
                  {sw.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {sw.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {sw.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
