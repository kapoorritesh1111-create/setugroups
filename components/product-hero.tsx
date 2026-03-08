import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';

export function ProductHero({
  eyebrow,
  title,
  description,
  primaryHref = '/contact',
  secondaryHref = '/products',
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.35),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_75%)] py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={primaryHref}>Book a Demo</ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">
              Explore all products
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
