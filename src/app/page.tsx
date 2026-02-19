import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const pages = [
  {
    href: "/about",
    title: "About",
    description: "My resume — experience, education, and skills.",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Personal and professional projects I've built.",
  },
  {
    href: "/softwares",
    title: "Softwares",
    description: "Software tools and applications I've developed.",
  },
  {
    href: "/company",
    title: "Company",
    description: "DoubleThinking LLC — AI consulting firm I founded.",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Get in touch with me.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      <FadeIn>
        <section className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Yongpu (Aaron) Yang
          </h1>
          <p className="mt-2 text-muted">
            Data Scientist &amp; AI Engineer
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            M.S.E. Data Science at UPenn. Building AI-powered systems, scalable data
            pipelines, and intelligent automation. Currently designing software at
            Accredited Labs.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Resume
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-border"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <nav className="grid gap-4 sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-foreground group-hover:text-accent">
                  {page.title}
                </h2>
                <span className="text-sm text-muted-light transition-transform group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-2 text-sm text-muted">{page.description}</p>
            </Link>
          ))}
        </nav>
      </FadeIn>
    </div>
  );
}
