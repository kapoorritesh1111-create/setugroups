import { Button } from '../ui/button';
import { Container } from '../ui/container';

export function ProductHero() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Setu Track</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Contractor Operations, Without the Chaos</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Setu Track brings time tracking, approvals, payroll preparation, exports, and operational visibility into one clean platform. Built for teams that need accuracy, accountability, and financial clarity.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="mailto:hello@setugroups.com?subject=Setu%20Track%20Demo">Request a Demo</Button>
            <Button href="#workflow" variant="secondary">See How It Works</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
