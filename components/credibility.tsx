import Image from 'next/image';
import { SectionShell } from './ui/section-shell';

export function Credibility() {
  return (
    <SectionShell id="credibility" eyebrow="Credibility" title="Signals of structured delivery." className="bg-soft">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ['10+', 'Years combined trade experience'],
            ['2', 'SaaS products in the Setu roadmap'],
            ['24h', 'Target response time for new conversations'],
          ].map(([metric, label]) => (
            <div key={metric} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-4xl font-semibold text-electric">{metric}</p>
              <p className="mt-3 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Client logos</p>
          <div className="mt-8 grid grid-cols-3 gap-6 opacity-80">
            <Image src="/client-logo-1.svg" alt="Client logo 1" width={120} height={44} />
            <Image src="/client-logo-2.svg" alt="Client logo 2" width={120} height={44} />
            <Image src="/client-logo-3.svg" alt="Client logo 3" width={120} height={44} />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
