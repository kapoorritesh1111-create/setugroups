import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Link href="/" className="text-sm text-slate-500">← Back to Setu Groups</Link>
        <div className="mt-8 max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-navy">Simple pricing for structured operations</h1>
          <p className="mt-5 text-lg text-slate-600">Setu Track pricing is tailored to team size, workflow complexity, and reporting needs. We keep commercial conversations straightforward.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Growth Teams</h2>
            <p className="mt-4 text-slate-600">For teams needing modern time tracking, approvals, and payroll run structure.</p>
            <ul className="mt-6 space-y-3 text-slate-600"><li>Time entry + approvals</li><li>Payroll runs</li><li>Exports and reporting</li></ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Operational Scale</h2>
            <p className="mt-4 text-slate-600">For organizations needing deeper workflow design, rollout support, and commercial clarity.</p>
            <ul className="mt-6 space-y-3 text-slate-600"><li>Custom onboarding</li><li>Advanced reporting</li><li>Priority support</li></ul>
          </div>
        </div>
      </div>
    </main>
  );
}
