import { SectionShell } from '../ui/section-shell';

export function Screenshots() {
  return (
    <SectionShell title="Designed to feel calm, clean, and operationally grounded." className="bg-soft">
      <div className="grid gap-6 lg:grid-cols-3">
        {['Dashboard clarity', 'Approval flow', 'Payroll visibility'].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <div className="rounded-2xl bg-gradient-to-br from-electric/15 to-violet/15 p-10 text-center text-sm font-medium text-slate-600">
              Product screen placeholder
            </div>
            <p className="mt-5 text-lg font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
