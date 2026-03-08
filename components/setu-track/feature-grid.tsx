"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

const features = [
  {
    title: "Time Tracking",
    description: "Flexible time entry designed for real operational teams — daily or weekly, project-based, and structured enough for accountability.",
    bullets: ["Daily or weekly modes", "Project-linked hours", "Structured notes and history"],
  },
  {
    title: "Approval Workflows",
    description: "Managers review work with clarity, not guesswork. Every submission has context, status, and operational traceability.",
    bullets: ["Approval queues", "Review context", "Audit-ready history"],
  },
  {
    title: "Payroll Preparation",
    description: "Turn approved work into structured payroll runs with controlled locking and clean contractor-level breakdowns.",
    bullets: ["Run creation", "Lock-ready periods", "Per-contractor totals"],
  },
  {
    title: "Export & Reporting",
    description: "Generate clean finance and client-facing exports without rebuilding data manually at the end of every cycle.",
    bullets: ["CSV + PDF support", "Project-level breakdowns", "Operational summaries"],
  },
  {
    title: "Operational Visibility",
    description: "See how hours, cost, and client delivery are moving so teams can act before small issues become reporting problems.",
    bullets: ["Hours by project", "Payroll exposure", "Revenue vs cost insight"],
  },
  {
    title: "Structured for Teams",
    description: "Built to feel intuitive for contractors, useful for managers, and trustworthy for operations and finance leaders.",
    bullets: ["Role-aware workflows", "Clear page architecture", "Operational trust"],
  },
];

export function FeatureGrid() {
  return (
    <SectionShell
      eyebrow="Capabilities"
      title="Everything you need to run contractor operations in one place."
      description="Setu Track is designed to support the real operational loop — work logged, approvals completed, payroll prepared, and exports delivered."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="rounded-[28px] border border-navy/6 bg-white p-7 shadow-soft"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-navy">{feature.title}</h3>
            <p className="mt-4 text-base leading-7 text-navy/70">{feature.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-navy/70">
              {feature.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-gradient" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
