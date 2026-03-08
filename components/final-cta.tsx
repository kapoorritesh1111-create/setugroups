import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';

export function FinalCta() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-12 shadow-card sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-soft">Move with more control</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Bring work, approvals, trade workflows, and operational follow-through into one clearer system.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you are evaluating SETU Track, SETU CRM, or the broader parent ecosystem, the next step is a focused demo conversation.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/contact">Book a Demo</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Sales
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
