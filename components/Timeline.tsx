export function Timeline({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3 md:grid-cols-3">
      {steps.map((step, idx) => (
        <li key={step} className="rounded-ui border border-border-soft bg-white p-4 text-sm">
          <div className="mb-2 text-xs font-semibold text-brand-dark">Этап {idx + 1}</div>
          <div>{step}</div>
        </li>
      ))}
    </ol>
  );
}
