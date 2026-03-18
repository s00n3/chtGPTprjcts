'use client';
import { useState } from 'react';

export function Accordion({ items }: { items: { title: string; content: string[] }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item.title} className="rounded-ui border border-border-soft bg-white">
          <button className="w-full px-4 py-3 text-left font-medium" onClick={() => setOpen(open === idx ? -1 : idx)} aria-expanded={open === idx}>
            {item.title}
          </button>
          {open === idx && <ul className="list-disc px-8 pb-4 text-sm">{item.content.map((c) => <li key={c}>{c}</li>)}</ul>}
        </div>
      ))}
    </div>
  );
}
