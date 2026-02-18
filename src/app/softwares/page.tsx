import FadeIn from "@/components/FadeIn";

const softwares = [
  {
    name: "AI Resume Screener",
    description:
      "AI-powered resume screening tool with prompt injection security. Automates candidate evaluation for recruiters, reducing review time by 60%.",
    status: "Production",
    tech: ["Python", "LLMs", "FastAPI"],
  },
  {
    name: "Certificate Validation System",
    description:
      "Processes 170,000+ calibration records for ISO/IEC 17025 compliance. Automates QC workflows and technician certification validation.",
    status: "Production",
    tech: ["Python", "BigQuery", "Google Cloud Storage"],
  },
  {
    name: "Cubyt Equipment Scraper",
    description:
      "Automated web scraper extracting 700,000+ equipment records from Cubyt database. Runs on Google Cloud VM with scheduled execution.",
    status: "Production",
    tech: ["Python", "Selenium", "BeautifulSoup", "GCP"],
  },
  {
    name: "IndySoft BI Dashboard",
    description:
      "Real-time analytics dashboard for calibration data. Integrates IndySoft database with BigQuery for multi-branch reporting and certificate extraction.",
    status: "Production",
    tech: ["Streamlit", "BigQuery", "Python"],
  },
  {
    name: "ETL Pipeline Suite",
    description:
      "Data pipelines consolidating multi-branch calibration data. Enables real-time reporting and one-click invoice generation.",
    status: "Production",
    tech: ["Python", "BigQuery", "Google Cloud"],
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
                <span className="inline-flex shrink-0 items-center rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
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
