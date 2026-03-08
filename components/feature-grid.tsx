import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';

export function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l4 4L19 6" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
