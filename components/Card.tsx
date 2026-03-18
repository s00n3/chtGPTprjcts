import { ReactNode } from 'react';

export function Card({ title, description, children }: { title: string; description?: string; children?: ReactNode }) {
  return (
    <article className="rounded-ui border border-border-soft bg-white p-5 shadow-soft">
      <h3 className="mb-2 text-lg font-semibold text-text-base">{title}</h3>
      {description && <p className="text-sm leading-6">{description}</p>}
      {children}
    </article>
  );
}
