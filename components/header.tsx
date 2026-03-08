'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Container } from './ui/container';

const nav = [
  { href: '/#who-we-are', label: 'Who We Are' },
  { href: '/#products', label: 'Products' },
  { href: '/#services', label: 'Services' },
  { href: '/setu-track', label: 'Setu Track' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/setu-crm', label: 'Setu CRM' },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur"
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3">
          <Image src="/logo-setu.svg" alt="Setu Groups" width={42} height={42} priority />
          <div>
            <p className="text-sm font-semibold">Setu Groups</p>
            <p className="text-xs text-slate-500">Intertwining Trade &amp; Technology</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Button href="/#contact" variant="secondary">Start a Conversation</Button>
        </div>
      </Container>
    </motion.header>
  );
}
