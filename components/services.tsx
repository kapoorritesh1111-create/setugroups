"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./ui/section-shell";

const services = [
  {
    title: 'Import-Export Operations',
    text: 'India-based trade execution with real operational depth. We coordinate supply, manage documentation, and ensure commercial follow-through with clarity and reliability.',
  },
  {
    title: 'Web App Development',
    text: 'We design and build modern web applications with product-grade structure, premium UI systems, and clean, scalable architecture.',
  },
];

export function Services() {
  return (
    <SectionShell id="services" eyebrow="Services" title="Trade execution and software delivery, under one disciplined brand.">
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-[28px] border border-navy/6 bg-white p-8 shadow-soft"
          >
            <div className="mb-6 h-1 w-24 rounded-full bg-brand-gradient" />
            <h3 className="text-2xl font-semibold text-navy">{service.title}</h3>
            <p className="mt-5 text-base leading-8 text-navy/70">{service.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
