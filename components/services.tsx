'use client';

import { motion } from 'framer-motion';
import { SectionShell } from './ui/section-shell';

export function Services() {
  const cards = [
    {
      title: 'Import–Export Operations',
      text: 'India-based trade execution with real operational depth. We coordinate supply, manage documentation, and ensure commercial follow-through with clarity and reliability.',
    },
    {
      title: 'Web App Development',
      text: 'We design and build modern web applications with product-grade structure, premium UI systems, and clean, scalable architecture.',
    },
  ];

  return (
    <SectionShell id="services" eyebrow="Services" title="Services built for operational trust." className="bg-soft">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
          >
            <h3 className="text-2xl font-semibold">{card.title}</h3>
            <p className="mt-4 text-slate-600">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
