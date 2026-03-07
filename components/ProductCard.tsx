import type { ReactNode } from 'react';

interface ProductCardProps {
  logo: ReactNode;
  title: string;
  status: 'Live' | 'Coming soon';
  description: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function ProductCard({
  logo,
  title,
  status,
  description,
  bullets,
  primaryCta,
  secondaryCta
}: ProductCardProps) {
  const badgeClass = status === 'Live' ? 'badge badge--live' : 'badge badge--soon';

  return (
    <article className="product-card glass-card">
      <div className="product-card__header">
        <div>{logo}</div>
        <span className={badgeClass}>{status}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="list">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="product-card__actions">
        <a className="button button--primary" href={primaryCta.href}>
          {primaryCta.label}
        </a>
        <a className="text-link" href={secondaryCta.href}>
          {secondaryCta.label}
        </a>
      </div>
    </article>
  );
}
