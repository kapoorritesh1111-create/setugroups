import type { Metadata } from 'next';
import { buildMetadata } from '@/components/metadata';
import { FeatureGrid } from '@/components/feature-grid';
import { FinalCta } from '@/components/final-cta';
import { ProductHero } from '@/components/product-hero';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { trackModules } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'SETU Track',
  description: 'SETU Track helps contractor-heavy teams manage time, approvals, payroll runs, exports, and workforce operations with more control.',
  path: '/setu-track',
});

export default function SetuTrackPage() {
  return (
    <>
      <ProductHero
        eyebrow="SETU Track"
        title="Workforce operations software for teams that need cleaner control from timesheet to payroll export."
        description="SETU Track is designed for contractor-heavy teams that need disciplined work logging, approvals, payroll workflow visibility, exports, and stronger administrative control."
      />
      <FeatureGrid
        eyebrow="Core modules"
        title="Built around the operating loop that finance, managers, and delivery teams all depend on."
        description="Rather than treating payroll as a disconnected back-office task, SETU Track organizes work capture, approvals, exports, and reporting into one coherent system."
        items={trackModules}
      />
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
              <SectionHeading
                eyebrow="Who it serves"
                title="Made for agencies, distributed teams, and operators managing contractor-heavy workflows."
                description="SETU Track helps organizations that cannot afford time leakage, approval ambiguity, or poor export hygiene."
              />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
              <SectionHeading
                eyebrow="Why it matters"
                title="Visibility for managers. Control for payroll. Confidence for operations."
                description="The product creates a clearer path from logged work to approved periods, payroll preparation, and export-ready output."
              />
            </div>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
