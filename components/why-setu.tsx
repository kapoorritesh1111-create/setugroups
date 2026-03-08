'use client';

import { SectionShell } from './ui/section-shell';

export function WhySetu() {
  const items = [
    '10+ years combined trade experience',
    'Production-grade SaaS products shipped',
    'India-based execution with global standards',
    'Structured delivery, not agency chaos',
    'A unified ecosystem of operations + software',
  ];

  return (
    <SectionShell id="why-setu" eyebrow="Why Setu" title="Why ambitious teams choose Setu Groups.">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="font-medium">• {item}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
