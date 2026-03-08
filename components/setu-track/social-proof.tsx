import { SectionShell } from '../ui/section-shell';

export function SocialProof() {
  return (
    <SectionShell title="Why teams choose Setu Track.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          'Built specifically for contractor operations',
          'Simple enough for daily use',
          'Structured enough for finance teams',
          'Built for reliability, not complexity',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
