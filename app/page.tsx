import Link from 'next/link';
import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';
import { FinalCta } from '@/components/final-cta';
import { SectionHeading } from '@/components/section-heading';
import { buildMetadata } from '@/components/metadata';
import { companyMetrics, ecosystemCards, proofPoints, solutions } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: 'The Operating System for Global Work and Trade',
  description:
    'SETU Groups builds modern platforms that help companies run workforce operations, payroll workflows, buyer relationships, supplier coordination, and operational follow-through with greater visibility and control.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-slate-950 text-white">
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="absolute inset-0 bg-hero-grid bg-[length:36px_36px] opacity-20" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.35),transparent_55%)]" aria-hidden="true" />
          <div className="relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-soft">Parent brand. Product ecosystem. Operational clarity.</p>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                The Operating System for Global Work and Trade.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                SETU Groups builds modern platforms that help companies run workforce operations, payroll workflows, buyer relationships, supplier coordination, and operational follow-through with greater visibility and control.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Book a Demo</ButtonLink>
                <ButtonLink href="/setu-track" variant="secondary">
                  Explore SETU Track
                </ButtonLink>
                <ButtonLink href="/setu-crm" variant="ghost" className="text-white hover:bg-white/10">
                  Explore SETU CRM
                </ButtonLink>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-medium text-slate-300">SETU Track</p>
                      <p className="mt-3 text-2xl font-semibold">Work logged → approved → paid → exported</p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">Purpose-built for contractor-heavy teams that need payroll-grade workflow discipline.</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-medium text-slate-300">SETU CRM</p>
                      <p className="mt-3 text-2xl font-semibold">Lead captured → followed up → coordinated</p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">Built for buyer, supplier, and trade workflow visibility without fragmented handoffs.</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-3xl border border-brand/30 bg-gradient-to-r from-brand/15 to-transparent p-5">
                    <p className="text-sm font-medium text-brand-soft">Why the ecosystem matters</p>
                    <p className="mt-2 text-lg font-semibold">One parent operating model across work, payroll, trade relationships, and execution control.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Ecosystem overview"
            title="A parent platform built to connect the systems operators already rely on."
            description="SETU Groups is not presented as a generic holding company. It is the parent brand behind focused products that solve high-friction operational workflows."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {ecosystemCards.map((card) => (
              <article key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{card.eyebrow}</p>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">{card.title}</h2>
                    <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">{card.description}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12l4 4L19 6" />
                        </svg>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href={card.href} variant="secondary" className="mt-8">
                  Explore {card.title}
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Why SETU"
            title="Designed for operators who need more clarity, more structure, and less workflow leakage."
            description="The value proposition is not visual polish alone. It is a tighter operating model across workforce management, payroll workflows, buyer relationships, and supplier coordination."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {proofPoints.map((point) => (
              <article key={point.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
                <h2 className="text-xl font-semibold text-slate-950">{point.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{point.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <SectionHeading
              eyebrow="Credibility"
              title="A modern company shape, grounded in practical operating experience."
              description="SETU combines trade fluency, software product thinking, and a global operating mindset. The result is a parent brand that can speak to buyers, operators, partners, and enterprise stakeholders with equal clarity."
            />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {companyMetrics.map((metric) => (
                <div key={metric.value} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
                  <p className="text-3xl font-semibold tracking-tight text-slate-950">{metric.value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 py-20 text-white">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="The ecosystem is structured around real user groups, not abstract categories."
            description="SETU products are positioned for agencies, distributed teams, exporters, and operations-led businesses that need systems built around execution, visibility, and control."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <div key={solution.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <h2 className="text-xl font-semibold">{solution.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-300">{solution.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-soft hover:text-white">
              Explore solutions
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
