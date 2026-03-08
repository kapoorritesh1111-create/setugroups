"use client";

import { motion } from "framer-motion";
import { SectionShell } from "../ui/section-shell";

const screens = [
  {
    title: "Executive dashboard",
    description: "See payroll cost, revenue, margin, approval backlog, and operational movement in one clear view.",
    items: ["Payroll cost", "Client revenue", "Gross margin", "Projects at risk"],
  },
  {
    title: "Project operations",
    description: "Track hours, billing model, payroll impact, and export readiness across active client work.",
    items: ["Project health", "Hours by project", "Revenue mix", "Margin trend"],
  },
  {
    title: "Payroll run control",
    description: "Create, review, and lock payroll runs with structured contractor breakdowns and clean finance outputs.",
    items: ["Run totals", "Currencies", "Lock status", "Export package"],
  },
];

export function ScreenshotSection() {
  return (
    <SectionShell
      eyebrow="Product views"
      title="Designed like a modern SaaS product, structured like an operations system."
      description="This page uses visual preview cards in place of final screenshots, so you can swap real product captures in later without changing the layout."
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {screens.map((screen, index) => (
          <motion.article
            key={screen.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="rounded-[30px] border border-navy/6 bg-white p-5 shadow-card"
          >
            <div className="rounded-[24px] border border-navy/6 bg-[#F8FBFF] p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-[20px] border border-navy/5 bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">UI preview</p>
                    <h3 className="mt-2 text-xl font-semibold text-navy">{screen.title}</h3>
                  </div>
                  <div className="rounded-full bg-electric/8 px-3 py-1 text-xs font-semibold text-electric">Preview</div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {screen.items.map((item, itemIndex) => (
                    <div key={item} className={`rounded-2xl px-4 py-4 ${itemIndex === 0 ? "bg-brand-gradient text-white" : "bg-soft text-navy"}`}>
                      <p className="text-sm font-semibold">{item}</p>
                      <p className={`mt-2 text-xs ${itemIndex === 0 ? "text-white/80" : "text-navy/55"}`}>
                        Replace with real product screenshots later.
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 h-36 rounded-[20px] bg-gradient-to-br from-electric/8 via-white to-violet/10" />
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-navy/70">{screen.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
