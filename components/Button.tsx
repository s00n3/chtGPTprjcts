import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit';
};

export function Button({ children, href, variant = 'primary', type = 'button' }: Props) {
  const classes =
    variant === 'primary'
      ? 'bg-black text-white hover:bg-brand-primary'
      : variant === 'secondary'
        ? 'bg-brand-primary text-white hover:bg-brand-hover'
        : 'bg-surface-muted text-text-base hover:bg-surface-card';

  const common = `inline-flex rounded-ui px-4 py-2.5 text-sm font-medium transition ${classes}`;

  if (href) return <Link href={href} className={common}>{children}</Link>;
  return <button type={type} className={common}>{children}</button>;
}
