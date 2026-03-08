"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./ui/section-shell";

export function WhoWeAre() {
  return (
    <SectionShell
      id="who-we-are"
      eyebrow="Who We Are"
      title="One master brand connecting trade execution, software delivery, and SaaS products."
      description="Setu Groups is built on a simple idea: when operations and technology work together, businesses run better."
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="section-ring mx-auto max-w-5xl rounded-[28px] bg-white p-8 shadow-card sm:p-10"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Trade", "Operational execution with commercial discipline and on-ground coordination from India."],
            ["Technology", "Product-grade web application delivery with premium UI systems and scalable architecture."],
            ["Ecosystem", "A growing software portfolio designed to feel unified, structured, and trustworthy."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-soft p-6">
              <p className="text-lg font-semibold text-navy">{title}</p>
              <p className="mt-3 text-sm leading-7 text-navy/70">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
