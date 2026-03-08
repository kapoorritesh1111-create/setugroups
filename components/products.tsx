"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionShell } from "./ui/section-shell";
import { Button } from "./ui/button";

const products = [
  {
    name: 'Setu Track',
    image: '/logo-setu-track.png',
    description:
      'A contractor operations platform that brings time tracking, approvals, payroll, exports, and margin visibility into one clean, structured system. Built for teams that need accuracy, accountability, and operational clarity.',
    badge: 'Live product',
    href: '/setu-track',
    cta: 'View product page',
  },
  {
    name: 'Setu CRM',
    image: '/setu-crm-icon.svg',
    description:
      'A clean, structured CRM designed for pipeline visibility, customer continuity, and commercial clarity. Built to feel natural within the Setu ecosystem — simple, powerful, and operationally grounded.',
    badge: 'Coming soon',
    href: '/setu-crm',
    cta: 'Join the waitlist',
  },
];

export function Products() {
  return (
    <SectionShell id="products" eyebrow="Products" title="A SaaS ecosystem with operational clarity at its core.">
      <div className="grid gap-6 lg:grid-cols-2">
        {products.map((product, index) => (
          <motion.article
            key={product.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="section-ring rounded-[28px] bg-white p-8 shadow-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-soft">
                  <Image src={product.image} alt={product.name} width={64} height={64} className="h-14 w-14 object-contain" />
                </div>
                <div>
                  <div className="inline-flex rounded-full border border-electric/15 bg-electric/5 px-3 py-1 text-xs font-semibold text-electric">
                    {product.badge}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-navy">{product.name}</h3>
                </div>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-navy/70">{product.description}</p>
            <div className="mt-8">
              <Button href={product.href} variant={product.name === 'Setu Track' ? 'primary' : 'secondary'}>
                {product.cta}
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
