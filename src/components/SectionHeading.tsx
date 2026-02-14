export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-border pb-2">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {title}
      </h2>
    </div>
  );
}
