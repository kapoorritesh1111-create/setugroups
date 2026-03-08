"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./ui/section-shell";

const points = [
  '10+ years combined trade experience',
  'Production-grade SaaS products shipped',
  'India-based execution with global standards',
  'Structured delivery, not agency chaos',
  'A unified ecosystem of operations + software',
];

export function WhySetu() {
  return (
    <SectionShell id="why-setu" eyebrow="Why Setu" title="Operational trust, product discipline, and a more unified way to build.">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="grid gap-4 rounded-[28px] bg-navy p-8 text-white shadow-card sm:grid-cols-2 lg:grid-cols-5"
      >
        {points.map((point, index) => (
          <motion.div
            key={point}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-4 h-10 w-10 rounded-full bg-white/10" />
            <p className="text-sm font-medium leading-7 text-white/90">{point}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
