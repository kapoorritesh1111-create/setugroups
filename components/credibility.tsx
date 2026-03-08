"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionShell } from "@/components/ui/section-shell";

const metrics = [
  ['3', 'Business pillars'],
  ['2', 'SaaS products in ecosystem'],
  ['24h', 'Response commitment'],
];

const logos = ['/client-logo-1.svg', '/client-logo-2.svg', '/client-logo-3.svg'];

export function Credibility() {
  return (
    <SectionShell id="credibility" eyebrow="Credibility" title="Metrics + client logos (use placeholders).">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] bg-white p-8 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl bg-soft p-6"
              >
                <p className="text-3xl font-semibold text-navy">{value}</p>
                <p className="mt-2 text-sm text-navy/65">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] bg-white p-8 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-3">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex min-h-32 items-center justify-center rounded-2xl border border-navy/6 bg-soft p-6"
              >
                <Image src={logo} alt={`Client logo ${index + 1}`} width={160} height={60} className="h-12 w-auto opacity-80" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
