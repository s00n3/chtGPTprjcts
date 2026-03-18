export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-8 max-w-3xl">
      <h2 className="text-2xl font-semibold text-text-base md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-7">{subtitle}</p>}
    </header>
  );
}
