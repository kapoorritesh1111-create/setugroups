'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionShell } from './ui/section-shell';
import { Button } from './ui/button';

function CrmIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="48" height="44" rx="14" className="fill-[url(#g)]" />
      <path d="M21 24h22M21 32h16M21 40h10" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <defs>
        <linearGradient id="g" x1="8" y1="10" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3A7BFF" />
          <stop offset="1" stopColor="#7A5CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Products() {
  return (
    <SectionShell id="products" eyebrow="Products" title="Setu products designed for structured operations.">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex items-center gap-4">
            <Image src="/logo-setu-track.png" alt="Setu Track" width={56} height={56} className="rounded-xl" />
            <div>
              <h3 className="text-2xl font-semibold">Setu Track</h3>
              <p className="text-sm text-slate-500">Live product</p>
            </div>
          </div>
          <p className="mt-6 text-slate-600">
            A contractor operations platform that brings time tracking, approvals, payroll, exports, and margin visibility into one clean, structured system. Built for teams that need accuracy, accountability, and operational clarity.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href="/setu-track">View Product</Button>
            <Button href="/pricing" variant="secondary">View Pricing</Button>
          </div>
        </motion.div>
        <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex items-center gap-4">
            <CrmIcon />
            <div>
              <h3 className="text-2xl font-semibold">Setu CRM</h3>
              <p className="text-sm text-slate-500">Coming soon</p>
            </div>
          </div>
          <p className="mt-6 text-slate-600">
            A clean, structured CRM designed for pipeline visibility, customer continuity, and commercial clarity. Built to feel natural within the Setu ecosystem — simple, powerful, and operationally grounded.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href="/setu-crm">Join Waitlist</Button>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
