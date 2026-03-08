"use client";

import { motion } from "framer-motion";
import { SectionShell } from "../ui/section-shell";

const metrics = [
  ["Time to visibility", "Same-day visibility into submitted hours and approval status."],
  ["Operational control", "Built for contractor-heavy teams that need a real workflow, not just a timer."],
  ["Finance alignment", "Clean exports and lock-ready payroll prep make downstream work easier."],
  ["Product architecture", "Structured like a serious SaaS platform, not an internal admin tool."],
];

export function SocialProofSection() {
  return (
    <SectionShell
      eyebrow="Why teams choose Setu Track"
      title="Built for operational trust, not workflow chaos."
      description="Setu Track replaces fragmented spreadsheets and disconnected handoffs with one clear operating system for contractor work."
      className="bg-white/60"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {metrics.map(([title, description], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-[28px] border border-navy/6 bg-white p-7 shadow-soft"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-navy">{title}</h3>
            <p className="mt-4 text-base leading-8 text-navy/70">{description}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
