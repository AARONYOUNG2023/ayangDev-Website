import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    title: "Cubyt Equipment Scraper",
    period: "Oct 2025",
    description:
      "Built Python web scraper on Google Cloud VM to extract 700,000+ equipment records from Cubyt database. Automated data extraction of model specifications, manufacturer details, and test point configurations using Selenium and BeautifulSoup.",
    tech: ["Python", "Selenium", "BeautifulSoup", "Google Cloud VM"],
    github: "https://github.com/AARONYOUNG2023",
  },
  {
    title: "IndySoft Data BI Dashboard",
    period: "Jul 2025",
    description:
      "Developed Streamlit analytics dashboard integrating IndySoft calibration database with BigQuery for real-time reporting. Created certificate data browser and extraction tools for multi-branch operations.",
    tech: ["Streamlit", "BigQuery", "Python", "Data Analytics"],
    github: "https://github.com/AARONYOUNG2023",
  },
  {
    title: "AI Resume Screening Tool",
    period: "Jun 2025",
    description:
      "Developed an AI-powered resume screening tool with prompt injection security, reducing recruiter review time by 60% while improving candidate quality across hundreds of applicants per position.",
    tech: ["Python", "LLMs", "Prompt Engineering", "FastAPI"],
    github: "https://github.com/AARONYOUNG2023",
  },
  {
    title: "Certificate Validation System",
    period: "Jun 2025",
    description:
      "Built a certificate validation system processing 170,000+ calibration records using Python, BigQuery, and Google Cloud Storage, ensuring ISO/IEC 17025 compliance.",
    tech: ["Python", "BigQuery", "Google Cloud Storage"],
    github: "https://github.com/AARONYOUNG2023",
  },
  {
    title: "Multi-Agent NLP Research",
    period: "Jan — May 2025",
    description:
      "Developed multi-agent systems with AWS Bedrock and open-source LLMs (LLaMA) for advanced text generation. Built scalable NLP pipelines using LangGraph, LangChain, and RAG on large-scale datasets.",
    tech: ["AWS Bedrock", "LangChain", "LangGraph", "RAG", "LLaMA"],
    github: "https://github.com/AARONYOUNG2023",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      <FadeIn>
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Projects</h1>
          <p className="mt-2 text-muted">
            A collection of personal and professional projects I&apos;ve built.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {projects.map((proj) => (
          <FadeIn key={proj.title}>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold text-foreground">{proj.title}</h3>
                <span className="text-sm text-muted">{proj.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {proj.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
