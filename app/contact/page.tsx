import type { Metadata } from 'next';
import { buildMetadata } from '@/components/metadata';
import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';
import { ContactForm } from '@/components/contact-form';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Book a demo, contact sales, or send a partnership inquiry to SETU Groups.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-soft">Contact</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight">Start the right conversation.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Book a demo, request a sales conversation, or reach out with partnership and corporate inquiries.
            </p>
            <div className="mt-8 space-y-5 text-sm text-slate-300">
              <p>
                <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="mt-1 inline-block font-semibold text-white hover:text-brand-soft">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Best next step</span>
                Share your workflow, current systems, and the product you want to evaluate.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/products" variant="secondary">
                Explore products first
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
