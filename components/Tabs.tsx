'use client';
import { useState } from 'react';

export function Tabs({ items }: { items: { label: string; content: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="rounded-ui border border-border-soft bg-white p-4">
      <div className="mb-4 flex flex-wrap gap-2">
        {items.map((item, i) => (
          <button key={item.label} onClick={() => setActive(i)} className={`rounded-full px-3 py-1.5 text-sm ${active === i ? 'bg-brand-primary text-white' : 'bg-surface-muted'}`}>
            {item.label}
          </button>
        ))}
      </div>
      <p>{items[active]?.content}</p>
    </div>
  );
}
