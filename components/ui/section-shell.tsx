import { ReactNode } from "react";
import { Container } from "./container";

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow ? (
              <div className="mb-3 inline-flex rounded-full border border-electric/20 bg-electric/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-electric">
                {eyebrow}
              </div>
            ) : null}
            {title ? <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{title}</h2> : null}
            {description ? <p className="mt-4 text-base leading-8 text-navy/70 sm:text-lg">{description}</p> : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
