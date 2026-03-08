'use client';

import { motion } from 'framer-motion';
import { SectionShell } from './ui/section-shell';

export function WhoWeAre() {
  return (
    <SectionShell
      id="who-we-are"
      eyebrow="Who We Are"
      title="One master brand connecting trade execution, software delivery, and SaaS products."
      description="Setu Groups is built on a simple idea: when operations and technology work together, businesses run better."
      className="bg-soft"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {[
          ['Trade Execution', 'Commercial follow-through, documentation rigor, and India-based operational depth.'],
          ['Software Delivery', 'Premium UI systems, scalable architecture, and product-grade development discipline.'],
          ['SaaS Ecosystem', 'Focused tools like Setu Track and Setu CRM designed to bring structure to real operations.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-slate-600">{text}</p>
          </div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
