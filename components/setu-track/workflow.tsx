import { SectionShell } from '../ui/section-shell';

export function Workflow() {
  const steps = ['Work Logged', 'Manager Approved', 'Payroll Locked', 'Exported Reports'];
  return (
    <SectionShell id="workflow" title="From work logged to financial clarity.">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-wrap items-center gap-4 text-lg font-medium text-slate-700">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <span className="rounded-full bg-soft px-4 py-2">{step}</span>
              {i < steps.length - 1 ? <span className="text-electric">→</span> : null}
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          Each stage is structured and auditable so teams always know what has been submitted, approved, locked, and exported. No guesswork.
        </p>
      </div>
    </SectionShell>
  );
}
