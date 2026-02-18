import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

const experiences = [
  {
    role: "AI Software Designer",
    company: "Accredited Labs",
    location: "Dallas, TX (Remote)",
    period: "Jun 2025 — Present",
    bullets: [
      "Design and develop AI-powered software systems for document processing, quality assurance, and recruitment automation",
      "Developed AI-powered resume screening tool with prompt injection security, reducing recruiter review time by 60% across 100s of applicants per position",
      "Built certificate validation system processing 170,000+ calibration records using Python, BigQuery, and Google Cloud Storage (ISO/IEC 17025)",
      "Created automated QC workflows with validation rules for test points and technician certifications, decreasing data entry errors by 40%",
      "Designed ETL pipelines consolidating multi-branch calibration data, enabling real-time reporting and one-click invoice generation",
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "George Washington University",
    location: "Washington, DC",
    period: "Jan — May 2025",
    bullets: [
      "Conducted research on multi-agent AI systems and LLMs for advanced text generation and comprehension",
      "Developed multi-agent systems with AWS Bedrock and open-source LLMs (LLaMA) for NLP tasks",
      "Built scalable NLP pipelines using LangGraph, LangChain, and RAG on large-scale datasets (WikiText, COCO)",
      "Utilized Gensim for topic modeling and word embeddings, incorporating XAI (SHAP, LIME) for model transparency",
    ],
  },
];

const education = [
  {
    school: "University of Pennsylvania",
    sub: "School of Engineering and Applied Science",
    degree: "Master of Science in Engineering in Data Science (MSE-DS)",
    period: "Expected Aug 2027",
  },
  {
    school: "George Washington University",
    degree: "Master of Science in Data Science",
    period: "May 2025",
  },
  {
    school: "Shanghai Normal University",
    degree: "Bachelor of Economics in Financial Engineering",
    period: "Jun 2019",
  },
];

const skills = [
  {
    label: "Programming & Frameworks",
    items: "Python (Pandas, NumPy, Scikit-Learn, PyTorch, TensorFlow), SQL, R, C, NLTK, Gensim, FastAPI, Selenium, BeautifulSoup",
  },
  {
    label: "AI & Machine Learning",
    items: "LLMs, RAG, LangChain, LangGraph, Multi-Agent Systems, NLP, Computer Vision, Fine-Tuning, Prompt Engineering, XGBoost, Random Forest, SHAP, LIME, Transformers",
  },
  {
    label: "Cloud & Data",
    items: "AWS (EC2, S3, Bedrock), Google Cloud Platform (BigQuery, GCS, Firestore), ETL Pipelines, Data Warehousing, Hadoop, Spark, SQL Server",
  },
  {
    label: "Tools & MLOps",
    items: "Docker, Git/GitHub, Streamlit, Jupyter Notebook, Model Deployment, Linux CLI, CI/CD, REST APIs, Tableau, Power BI",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      {/* Name Card */}
      <FadeIn>
        <section className="mb-12 rounded-lg border border-border bg-card p-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Yongpu (Aaron) Yang
          </h1>
          <p className="mt-2 text-muted">
            Data Scientist &amp; AI Engineer
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Washington, DC
            </span>
            <a href="mailto:yongpuy@upenn.edu" className="flex items-center gap-1.5 transition-colors hover:text-accent">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              yongpuy@upenn.edu
            </a>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (202) 498-9099
            </span>
            <a
              href="https://github.com/AARONYOUNG2023"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </FadeIn>

      {/* Experience */}
      <FadeIn>
        <section className="mb-12">
          <SectionHeading title="Experience" />
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company + exp.role}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-accent">
                      {exp.company}
                      <span className="text-muted"> &mdash; {exp.location}</span>
                    </p>
                  </div>
                  <span className="text-sm text-muted">{exp.period}</span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-light" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Education */}
      <FadeIn>
        <section className="mb-12">
          <SectionHeading title="Education" />
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.school} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{edu.school}</h3>
                  {edu.sub && <p className="text-xs text-muted-light">{edu.sub}</p>}
                  <p className="text-sm text-muted">{edu.degree}</p>
                </div>
                <span className="text-sm text-muted">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Skills */}
      <FadeIn>
        <section>
          <SectionHeading title="Skills" />
          <div className="space-y-3">
            {skills.map((cat) => (
              <div key={cat.label} className="text-sm">
                <span className="font-semibold text-foreground">{cat.label}:</span>{" "}
                <span className="text-muted">{cat.items}</span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
