import { SectionShell } from '../ui/section-shell';
import { Button } from '../ui/button';

export function FinalCta() {
  return (
    <SectionShell title="Bring structure to your operations." className="bg-soft">
      <div className="rounded-3xl bg-ink p-8 text-white shadow-soft md:p-10">
        <p className="max-w-2xl text-lg text-slate-300">
          If your team manages contractors, approvals, and payroll preparation, Setu Track gives you the clarity modern operations require.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="mailto:hello@setugroups.com?subject=Setu%20Track%20Demo">Request Demo</Button>
          <Button href="/pricing" variant="secondary">View Pricing</Button>
        </div>
      </div>
    </SectionShell>
  );
}
