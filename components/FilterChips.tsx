'use client';

export function FilterChips({ filters }: { filters: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f, i) => (
        <button key={f} className={`rounded-full px-3 py-1.5 text-sm ${i === 0 ? 'bg-brand-primary text-white' : 'bg-surface-muted text-text-base hover:bg-surface-card'}`}>
          {f}
        </button>
      ))}
    </div>
  );
}
