import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="section-ring rounded-[32px] bg-navy px-8 py-12 text-white shadow-card sm:px-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              Ready to evaluate Setu Track?
            </div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Bring structure to contractor operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              If your team manages contractors, approvals, payroll preparation, and client reporting, Setu Track gives you the clarity modern operations require.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:hello@setugroups.com?subject=Setu%20Track%20Demo%20Request">Request a demo</Button>
              <Button href="/pricing" variant="secondary">View pricing structure</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
