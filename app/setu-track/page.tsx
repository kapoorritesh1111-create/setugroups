import Link from 'next/link';

export default function SetuTrackPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Link href="/" className="text-sm text-slate-500">← Back to Setu Groups</Link>
        <div className="mt-8 max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-700">Setu Track</span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-navy">Contractor Operations, Without the Chaos</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Setu Track brings time tracking, approvals, payroll preparation, exports, and operational visibility into one clean platform. Built for teams that need accuracy, accountability, and financial clarity.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/pricing" className="rounded-full bg-setu-gradient px-6 py-3 font-medium text-white">Request a Demo</Link>
            <a href="#features" className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700">See How It Works</a>
          </div>
        </div>

        <section id="features" className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['Time Tracking', 'Flexible time entry designed for real operational teams.'],
            ['Approval Workflows', 'Managers approve work with clarity and context.'],
            ['Payroll Preparation', 'Turn approved hours into structured payroll runs.'],
            ['Export & Reporting', 'Clean exports ready for finance and client reporting.'],
            ['Operational Visibility', 'Know where work and money are flowing.'],
            ['Margin Clarity', 'Track cost, revenue, and profitability signals more cleanly.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 p-6 shadow-soft">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-3xl bg-soft p-10">
          <h2 className="text-3xl font-semibold">From Work Logged to Financial Clarity</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {['Work Logged', 'Manager Approved', 'Payroll Locked', 'Exports Generated'].map((step) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-medium">{step}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
