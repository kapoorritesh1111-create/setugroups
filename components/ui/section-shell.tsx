import { Container } from './container';

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">{eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
          {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
        </div>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
