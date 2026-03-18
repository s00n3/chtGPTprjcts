'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { Button } from './Button';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-white/95 backdrop-blur">
      <div className="container-ui flex items-center justify-between py-3">
        <Link href="/" className="text-sm font-semibold text-brand-deep md:text-base">Институт цифрового биодизайна и ИИ</Link>
        <nav className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm text-brand-dark hover:text-brand-hover">{item.label}</Link>)}
        </nav>
        <div className="hidden xl:block"><Button href="/projects" variant="secondary">Подать проект</Button></div>
        <button className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Открыть меню">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="container-ui space-y-2 pb-4 xl:hidden">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="block rounded-ui bg-surface-muted px-3 py-2 text-sm" onClick={() => setOpen(false)}>{item.label}</Link>)}
        </div>
      )}
    </header>
  );
}
