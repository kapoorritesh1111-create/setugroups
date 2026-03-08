import type { Metadata } from 'next';
import { buildMetadata } from '@/components/metadata';
import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';
import { FinalCta } from '@/components/final-cta';
import { SectionHeading } from '@/components/section-heading';
import { solutions } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Solutions',
  description: 'See how SETU Groups supports agencies, distributed teams, exporters, and operations-led businesses.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="Organized around the teams and operators most likely to need SETU."
            description="The ecosystem is positioned for organizations that need more operational visibility across workforce, payroll, trade coordination, and execution discipline."
          />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <article key={solution.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-950">{solution.title}</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600">{solution.text}</p>
                <div className="mt-8 flex gap-3">
                  <ButtonLink href="/contact">Book a Demo</ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
