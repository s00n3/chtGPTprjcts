export function Quote({ text }: { text: string }) {
  return <blockquote className="rounded-ui border-l-4 border-brand-primary bg-surface-card p-5 text-lg">{text}</blockquote>;
}
