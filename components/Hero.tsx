'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Container } from './ui/container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
      <Container className="relative py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="inline-flex rounded-full border border-electric/20 bg-electric/5 px-4 py-2 text-sm font-semibold text-electric">
            Setu Groups
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Intertwining Trade &amp; Technology
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            A modern bridge between global commerce and product-grade software. Setu Groups combines India-led import-export execution with premium web app development and a growing SaaS ecosystem — built for businesses that need clarity, structure, and operational trust.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/#contact">Start a Conversation</Button>
            <Button href="/#products" variant="secondary">Explore Our Products</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
