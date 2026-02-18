import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      <FadeIn>
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact</h1>
          <p className="mt-2 text-muted">
            I&apos;m open to new opportunities, research collaborations, and interesting projects.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">Email</h2>
            <a
              href="mailto:yongpuy@upenn.edu"
              className="mt-1 block text-sm text-accent transition-colors hover:text-accent-hover"
            >
              yongpuy@upenn.edu
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">Phone</h2>
            <p className="mt-1 text-sm text-muted">+1 (202) 498-9099</p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">Location</h2>
            <p className="mt-1 text-sm text-muted">Washington, DC</p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">GitHub</h2>
            <a
              href="https://github.com/AARONYOUNG2023"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-accent transition-colors hover:text-accent-hover"
            >
              github.com/AARONYOUNG2023
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
