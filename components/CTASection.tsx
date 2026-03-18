import { Button } from './Button';

export function CTASection({ title, description, buttonLabel }: { title: string; description: string; buttonLabel: string }) {
  return (
    <section className="rounded-ui bg-surface-card p-8">
      <h2 className="text-2xl font-semibold text-text-base">{title}</h2>
      <p className="mt-3 max-w-3xl">{description}</p>
      <div className="mt-5"><Button variant="secondary">{buttonLabel}</Button></div>
    </section>
  );
}
