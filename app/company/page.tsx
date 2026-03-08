import type { Metadata } from 'next';
import { buildMetadata } from '@/components/metadata';
import { Container } from '@/components/container';
import { FinalCta } from '@/components/final-cta';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = buildMetadata({
  title: 'Company',
  description: 'Learn about the SETU Groups mission, ecosystem thinking, and global operating mindset.',
  path: '/company',
});

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Company"
            title="A parent brand built to connect operational experience with productized systems."
            description="SETU Groups sits at the intersection of trade fluency, execution discipline, and modern software product thinking."
          />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Why the company story matters</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The site should communicate that SETU is not merely a corporate shell. It is the parent brand behind focused operating products, with immediate relevance for workforce operations and trade workflow management.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The company positioning is intentionally modern, credible, globally capable, operationally sharp, and technology-forward. That framing supports conversations with buyers, partners, investors, and enterprise stakeholders alike.
              </p>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-card">
              <h2 className="text-2xl font-semibold">Mission</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Build software platforms that give operators more visibility, more control, and less friction across global work and trade workflows.
              </p>
              <h2 className="mt-8 text-2xl font-semibold">Operating mindset</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Product-led where software should lead, practical where execution matters, and always structured to scale the broader SETU ecosystem over time.
              </p>
            </article>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
