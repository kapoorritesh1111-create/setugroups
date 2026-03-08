import { Button } from '../ui/button';
import { Container } from '../ui/container';

export function PricingPage() {
  return (
    <div className="bg-white py-24 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Pricing</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Structured pricing for serious operations.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Setu Track is designed for teams that need clarity, accountability, and operational trust. Pricing is tailored based on team size, workflow complexity, and rollout scope.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            ['Foundation', 'For early-stage contractor operations teams.', 'Time tracking, approvals, core reporting'],
            ['Growth', 'For teams with finance and payroll coordination needs.', 'Payroll runs, exports, project visibility'],
            ['Enterprise', 'For larger workflows and customized operational design.', 'Tailored rollout, priority support, custom scopes'],
          ].map(([name, blurb, feature]) => (
            <div key={name} className="rounded-3xl border border-slate-200 bg-soft p-8 shadow-soft">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="mt-3 text-slate-600">{blurb}</p>
              <p className="mt-6 font-medium">{feature}</p>
              <div className="mt-8">
                <Button href="mailto:hello@setugroups.com?subject=Setu%20Track%20Pricing">Contact Sales</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
