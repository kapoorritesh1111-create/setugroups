import { WaitlistForm } from '../forms/waitlist-form';
import { Container } from '../ui/container';

export function WaitlistPage() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Setu CRM</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Commercial clarity, coming soon.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A clean, structured CRM designed for pipeline visibility, customer continuity, and commercial clarity. Built to feel natural within the Setu ecosystem — simple, powerful, and operationally grounded.
          </p>
          <WaitlistForm />
        </div>
      </Container>
    </section>
  );
}
