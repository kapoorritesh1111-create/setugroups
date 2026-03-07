import type { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section className="section-shell" id={id}>
      <div className="section-copy">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>
      {children}
    </section>
  );
}
