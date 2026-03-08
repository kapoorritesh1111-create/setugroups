"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

const stages = [
  {
    title: "Work Logged",
    description: "Contractors log daily or weekly hours against the right projects with enough context to keep operations aligned.",
  },
  {
    title: "Manager Approved",
    description: "Managers review submissions in one queue, resolve issues, and approve only what is ready to move forward.",
  },
  {
    title: "Payroll Locked",
    description: "Approved work is packaged into a payroll run so teams can lock periods and prevent reporting drift.",
  },
  {
    title: "Exports Generated",
    description: "Finance and client teams receive clean exports backed by a visible, auditable operational trail.",
  },
];

export function WorkflowSection() {
  return (
    <SectionShell
      id="workflow"
      eyebrow="Workflow"
      title="From work logged to financial clarity."
      description="Setu Track connects the operational loop so teams always know what has been submitted, approved, locked, and exported."
      className="bg-white/60"
    >
      <div className="grid gap-5 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="relative rounded-[28px] border border-navy/6 bg-white p-7 shadow-soft"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-sm font-semibold text-white shadow-soft">
              0{index + 1}
            </div>
            <h3 className="text-xl font-semibold text-navy">{stage.title}</h3>
            <p className="mt-4 text-sm leading-7 text-navy/70">{stage.description}</p>
            {index < stages.length - 1 ? (
              <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-px w-9 -translate-y-1/2 bg-electric/30 lg:block" />
            ) : null}
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
