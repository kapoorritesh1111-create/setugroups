"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";

export function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="rounded-[32px] bg-navy p-8 text-white shadow-card sm:p-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start the Conversation</h2>
          <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
            Whether you’re exploring services, partnerships, or products, Setu Groups is built to feel trustworthy before the first meeting. Email us or schedule a call — we’ll respond within 24 hours.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="mailto:hello@setugroups.com">Start a Conversation</Button>
          <Button href="#top" variant="secondary">Explore Our Products</Button>
        </div>
      </motion.div>
    </SectionShell>
  );
}
