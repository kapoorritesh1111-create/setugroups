import Image from 'next/image';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__panel glass-card">
        <div className="hero__copy">
          <div className="eyebrow">Intertwining Trade &amp; Technology</div>
          <h1 className="hero__title">
            Building a <span>modern bridge</span> between global trade and software.
          </h1>
          <p className="hero__description">
            Setu Groups brings together India-led import–export execution, modern web application delivery, and a growing
            SaaS product ecosystem. The visual identity is the strategy itself: intertwined systems, connected workflows,
            and durable business infrastructure.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#products">
              Explore the product ecosystem
            </a>
            <a className="button button--secondary" href="#services">
              See our services
            </a>
          </div>
          <p className="hero__note">Brand-led, commercially grounded, and built to feel credible from the first scroll.</p>
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
              <span>Trade Layer</span>
              <strong>Import–export operations from India</strong>
            </div>
            <div className="hero__stack-item">
              <span>Technology Layer</span>
              <strong>Product-grade web app development</strong>
            </div>
            <div className="hero__stack-item">
              <span>Product Layer</span>
              <strong>Setu Track live · Setu CRM coming soon</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
