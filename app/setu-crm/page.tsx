import type { Metadata } from 'next';
import { buildMetadata } from '@/components/metadata';
import { FeatureGrid } from '@/components/feature-grid';
import { FinalCta } from '@/components/final-cta';
import { ProductHero } from '@/components/product-hero';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { crmModules } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'SETU CRM',
  description: 'SETU CRM gives trade teams a structured way to manage buyers, suppliers, leads, documents, follow-ups, and workflow visibility.',
  path: '/setu-crm',
});

export default function SetuCrmPage() {
  return (
    <>
      <ProductHero
        eyebrow="SETU CRM"
        title="Trade workflow CRM built for buyer relationships, supplier coordination, and disciplined follow-through."
        description="SETU CRM brings lead capture, relationship visibility, follow-up ownership, and document coordination into a system that is easier for trade teams to run and scale."
      />
      <FeatureGrid
        eyebrow="Core modules"
        title="Designed for trade teams that need more than a generic contact database."
        description="SETU CRM is positioned around operational follow-through, not just records. It helps teams keep buyers, suppliers, opportunities, and actions moving with less leakage."
        items={crmModules}
      />
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
              <SectionHeading
                eyebrow="Who it serves"
                title="Made for exporters, sourcing teams, and operations-led businesses handling complex relationship workflows."
                description="The product gives teams a clearer way to manage buyer and supplier coordination without losing next steps across meetings, documents, and outreach cycles."
              />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
              <SectionHeading
                eyebrow="Why it matters"
                title="Better pipeline discipline. Better follow-up consistency. Better trade visibility."
                description="SETU CRM turns fragmented outreach and trade process notes into a visible operating system that can support growth with less chaos."
              />
            </div>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
