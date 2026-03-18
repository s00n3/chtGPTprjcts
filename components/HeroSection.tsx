import { ReactNode } from 'react';

export function HeroSection({ title, subtitle, actions }: { title: string; subtitle: string; actions?: ReactNode }) {
  return (
    <section className="relative overflow-hidden rounded-ui bg-gradient-to-br from-brand-primary to-brand-deep p-8 text-white md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_42%)]" aria-hidden />
      <h1 className="relative max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">{title}</h1>
      <p className="relative mt-4 max-w-3xl text-sm text-white/90 md:text-lg">{subtitle}</p>
      {actions && <div className="relative mt-6 flex flex-wrap gap-3">{actions}</div>}
    </section>
  );
}
