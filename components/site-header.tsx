'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '@/lib/site';
import { ButtonLink } from '@/components/button-link';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo className="shrink-0" />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/contact" className="px-4 py-2.5 text-sm">
            Book a Demo
          </ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <div id="mobile-menu" className={cn('border-t border-white/10 md:hidden', open ? 'block' : 'hidden')}>
        <div className="space-y-1 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-3 w-full" >
            Book a Demo
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
