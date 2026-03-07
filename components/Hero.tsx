import Image from 'next/image';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__panel glass-card">
        <div className="hero__copy">
          <div className="eyebrow">Setu Groups</div>
          <h1 className="hero__title">
            Intertwining <span>trade</span>, <span>technology</span>, and product execution.
          </h1>
          <p className="hero__description">
            Setu Groups works across import–export operations from India, modern web application development,
            and a growing SaaS product ecosystem led by Setu Track and the upcoming Setu CRM.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#products">
              View our products
            </a>
            <a className="button button--secondary" href="#services">
              Explore services
            </a>
          </div>
          <p className="hero__note">Clean enough for a premium SaaS brand. Practical enough for a real operating company.</p>
        </div>

        <aside className="hero__card glass-card">
          <div className="hero__brand">
            <Image
              src="/brand/setu-groups/logos/png/setu-groups-logo-2048.png"
              alt="Setu Groups logo"
              width={420}
              height={140}
              priority
            />
          </div>

          <div className="hero__stack">
            <div className="hero__stack-item">
              <span>Import–Export</span>
              <strong>India-led operations</strong>
            </div>
            <div className="hero__stack-item">
              <span>Web Apps</span>
              <strong>Modern product delivery</strong>
            </div>
            <div className="hero__stack-item">
              <span>SaaS Portfolio</span>
              <strong>Setu Track live · Setu CRM next</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
