"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

const tiers = [
  {
    name: "Starter",
    price: "Custom",
    description: "For small contractor teams moving away from spreadsheets and disconnected manual workflows.",
    features: ["Time tracking", "Approvals", "Basic payroll preparation", "CSV exports"],
    cta: "Talk to sales",
    href: "mailto:hello@setugroups.com?subject=Setu%20Track%20Starter%20Pricing",
  },
  {
    name: "Growth",
    price: "Custom",
    description: "For teams that need stronger operational controls, cleaner exports, and better visibility across projects.",
    features: ["Everything in Starter", "Multi-project workflows", "Enhanced reporting", "Structured payroll runs"],
    cta: "Request pricing",
    href: "mailto:hello@setugroups.com?subject=Setu%20Track%20Growth%20Pricing",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations that need implementation support, operational rollout guidance, and tailored workflows.",
    features: ["Everything in Growth", "Implementation guidance", "Priority support", "Custom rollout planning"],
    cta: "Book a conversation",
    href: "mailto:hello@setugroups.com?subject=Setu%20Track%20Enterprise%20Pricing",
  },
];

const faqs = [
  {
    question: "Why is pricing custom?",
    answer: "Setu Track is being sold in an implementation-led phase. Pricing depends on team size, workflow complexity, rollout needs, and whether you need service support alongside software adoption.",
  },
  {
    question: "Can we start before a full rollout?",
    answer: "Yes. Many teams start with a narrow operational scope first — one set of projects, one approval chain, or a single payroll motion — and expand from there.",
  },
  {
    question: "Is Setu CRM included?",
    answer: "No. Setu CRM is a separate product in the ecosystem and currently available as a waitlist-led roadmap product.",
  },
];

export function PricingPageContent() {
  return (
    <>
      <section className="pb-14 pt-14 sm:pb-18 sm:pt-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-electric/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric shadow-soft">
              Pricing
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
              Pricing that fits structured rollout, not generic SaaS guesswork.
            </h1>
            <p className="mt-6 text-lg leading-8 text-navy/70 sm:text-xl">
              Setu Track is sold like a serious operational platform. The right scope depends on team size, approval complexity, payroll needs, and implementation support.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 xl:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.article
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className={`rounded-[30px] border p-8 shadow-soft ${tier.featured ? "border-electric/20 bg-gradient-to-br from-white via-white to-electric/5 shadow-card" : "border-navy/6 bg-white"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-navy">{tier.name}</h2>
                  {tier.featured ? <span className="rounded-full bg-electric px-3 py-1 text-xs font-semibold text-white">Recommended</span> : null}
                </div>
                <p className="mt-4 text-4xl font-semibold tracking-tight text-navy">{tier.price}</p>
                <p className="mt-3 text-sm leading-7 text-navy/70">{tier.description}</p>
                <ul className="mt-7 space-y-3 text-sm text-navy/70">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-gradient" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={tier.href} variant={tier.featured ? "primary" : "secondary"}>{tier.cta}</Button>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[30px] border border-navy/6 bg-white p-8 shadow-soft">
              <h2 className="text-3xl font-semibold tracking-tight text-navy">What this pricing structure signals</h2>
              <p className="mt-5 text-base leading-8 text-navy/70">
                Setu Track is positioned as a premium operational product. Rather than forcing an artificial self-serve price too early, the current model is designed to support clean onboarding, real team adoption, and implementation quality.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Premium positioning", "Sold like an operations platform, not a commodity timer."],
                  ["Implementation-aware", "Supports staged rollout, data structure, and process adoption."],
                  ["Commercial flexibility", "Lets you price for real team complexity and service layer."],
                  ["Future-ready", "Easy to evolve into public SaaS tiers later as the product matures."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-soft px-5 py-5">
                    <p className="text-sm font-semibold text-navy">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-navy/65">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-navy/6 bg-white p-8 shadow-soft">
              <h2 className="text-3xl font-semibold tracking-tight text-navy">Pricing FAQs</h2>
              <div className="mt-6 space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-soft px-5 py-5">
                    <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="section-ring rounded-[32px] bg-navy px-8 py-12 text-white shadow-card sm:px-12 sm:py-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Need a quote built around your workflow?</h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Tell us about your team, your payroll process, and how you currently manage contractor operations. We will come back with a tailored pricing discussion.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="mailto:hello@setugroups.com?subject=Setu%20Track%20Pricing%20Discussion">Start a pricing conversation</Button>
                <Button href="/setu-track" variant="secondary">Back to product page</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
