"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex rounded-full border border-electric/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric shadow-soft">
              Setu Groups
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Intertwining Trade &amp; Technology
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/70 sm:text-xl">
              A modern bridge between global commerce and product-grade software.
              Setu Groups combines India-led import-export execution with premium web app development and a growing SaaS ecosystem — built for businesses that need clarity, structure, and operational trust.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">Start a Conversation</Button>
              <Button href="#products" variant="secondary">Explore Our Products</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="section-ring glass rounded-[28px] p-6 shadow-card sm:p-8">
              <div className="absolute inset-x-14 top-0 h-28 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
              <div className="relative rounded-[24px] border border-navy/5 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between rounded-2xl border border-navy/5 bg-soft px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">Master Brand</p>
                    <p className="mt-1 text-lg font-semibold text-navy">Setu Groups</p>
                  </div>
                  <Image src="/logo-setu.svg" alt="Setu Groups brand" width={148} height={34} className="h-9 w-auto" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-navy/5 bg-white p-5 shadow-soft transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <Image src="/logo-setu-track.png" alt="Setu Track" width={56} height={56} className="h-14 w-14 rounded-xl object-contain" />
                      <div>
                        <p className="text-sm font-semibold text-navy">Setu Track</p>
                        <p className="text-sm text-navy/60">Live product</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-navy/65">Time tracking, approvals, payroll, exports, and margin visibility in one clean workflow.</p>
                  </div>
                  <div className="rounded-2xl border border-navy/5 bg-white p-5 shadow-soft transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <Image src="/setu-crm-icon.svg" alt="Setu CRM" width={56} height={56} className="h-14 w-14 rounded-xl object-contain" />
                      <div>
                        <p className="text-sm font-semibold text-navy">Setu CRM</p>
                        <p className="text-sm text-navy/60">Coming soon</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-navy/65">Pipeline visibility, customer continuity, and commercial clarity across the ecosystem.</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Import-Export", "India-led execution"],
                    ["Web Apps", "Premium product systems"],
                    ["SaaS", "Operationally grounded tools"],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl bg-soft px-4 py-4">
                      <p className="text-sm font-semibold text-navy">{title}</p>
                      <p className="mt-1 text-sm text-navy/60">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
