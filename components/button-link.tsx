import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

const variants: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary: 'bg-brand text-white hover:bg-brand-deep shadow-glow',
  secondary: 'border border-border bg-white text-slate-900 hover:bg-slate-50',
  ghost: 'text-slate-900 hover:bg-slate-100',
};

export function ButtonLink({ href, children, variant = 'primary', className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200',
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
