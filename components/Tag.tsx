export function Tag({ label }: { label: string }) {
  return <span className="rounded-full bg-brand-light/20 px-3 py-1 text-xs font-medium text-brand-deep">{label}</span>;
}
