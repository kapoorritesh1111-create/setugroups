import type { Metadata } from 'next';
import { buildMetadata } from '@/components/metadata';
import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';
import { FinalCta } from '@/components/final-cta';
import { SectionHeading } from '@/components/section-heading';
import { ecosystemCards } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Products',
  description: 'Explore SETU Track and SETU CRM, the first products in the SETU Groups ecosystem.',
  path: '/products',
});

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Focused software products inside the wider SETU operating ecosystem."
            description="SETU Groups launches with two immediate products: one for workforce operations and one for trade workflow CRM."
          />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {ecosystemCards.map((card) => (
              <article key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">{card.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{card.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">{card.description}</p>
                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={card.href}>Explore {card.title}</ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Book a Demo
                  </ButtonLink>
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
