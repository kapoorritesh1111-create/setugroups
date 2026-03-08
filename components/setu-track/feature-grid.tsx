import { SectionShell } from '../ui/section-shell';

export function FeatureGrid() {
  const features = [
    ['Time Tracking', 'Flexible time entry designed for real operational teams. Daily or weekly entry, project-based tracking, and structured notes.'],
    ['Approval Workflows', 'Managers approve work with clarity and context through structured queues and audit history.'],
    ['Payroll Preparation', 'Turn approved hours into structured payroll runs with lock controls and contractor-level breakdowns.'],
    ['Export & Reporting', 'Clean CSV and PDF exports ready for finance and client reporting.'],
    ['Operational Visibility', 'Know where work and money are flowing with project, cost, and margin visibility.'],
    ['Built for Structure', 'Setu Track replaces fragmented workflows with one accountable system of record.'],
  ];

  return (
    <SectionShell
      title="Everything you need to run contractor operations."
      description="Running contractor teams should not require spreadsheets, disconnected tools, and constant follow-ups."
      className="bg-soft"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(([title, text]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
