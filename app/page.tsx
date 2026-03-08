import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { SectionShell } from '@/components/SectionShell';
import { ServiceCard } from '@/components/ServiceCard';
import { CRMIcon } from '@/components/icons/CRMIcon';
import Image from 'next/image';

const metrics = [
  { label: 'Brand principle', value: 'Intertwining Trade & Technology' },
  { label: 'Live SaaS product', value: 'Setu Track' },
  { label: 'Commercial foundation', value: 'India-led import–export execution' }
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <SectionShell
        id="about"
        eyebrow="Who we are"
        title="One master brand connecting trade execution, software delivery, and SaaS products."
        description="The Setu Groups identity is not decorative. It represents connection, continuity, and systems that work together. That idea now drives the site itself: warm, trustworthy, and operationally serious, with a visual language rooted in the navy-and-orange master logo."
      >
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="glass-card metric-card">
              <p className="metric-label">{metric.label}</p>
              <h3 className="metric-value">{metric.value}</h3>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="products"
        eyebrow="Products"
        title="A focused product ecosystem shaped by real-world workflows."
        description="Setu products are designed from operational reality rather than abstract feature lists. The result is software with stronger structure, clearer workflows, and a more credible business foundation."
      >
        <div className="cards-grid cards-grid--products">
          <ProductCard
            logo={
              <Image
                src="/brand/setu-track/logos/web/setu-track-logo-512.png"
                alt="Setu Track logo"
                width={220}
                height={130}
                className="product-logo"
              />
            }
            title="Setu Track"
            status="Live"
            description="A contractor operations platform that brings together time tracking, approvals, payroll runs, exports, and margin visibility in one structured system."
            bullets={[
              'Contractor workforce operations',
              'Approval, payroll, and export control',
              'Built as the first SaaS product in the Setu ecosystem'
            ]}
            primaryCta={{ label: 'Explore Setu Track', href: '#contact' }}
            secondaryCta={{ label: 'View company services', href: '#services' }}
          />

          <ProductCard
            logo={<CRMIcon className="crm-icon" />}
            title="Setu CRM"
            status="Coming soon"
            description="A future CRM platform for customer workflows, pipeline visibility, account continuity, and cleaner commercial operations across growing teams."
            bullets={[
              'A CRM shaped by operational thinking',
              'Clean customer and pipeline visibility',
              'Designed to sit naturally within the Setu product family'
            ]}
            primaryCta={{ label: 'Join the waitlist', href: '#contact' }}
            secondaryCta={{ label: 'See what we build', href: '#services' }}
          />
        </div>
      </SectionShell>

      <SectionShell
        id="services"
        eyebrow="Services"
        title="Commercial execution and software capability under one master company."
        description="Setu Groups serves clients through both operational services and product-minded digital delivery, giving the brand real business depth beyond a typical software studio."
      >
        <div className="cards-grid">
          <ServiceCard
            title="Import–Export Operations"
            description="We support import–export operations from India with a practical understanding of supply coordination, execution flow, and trusted commercial follow-through."
            points={[
              'India-based trade execution support',
              'Commercial coordination with operational clarity',
              'A professional partner for cross-border business workflows'
            ]}
          />
          <ServiceCard
            title="Web App Development"
            description="We design and build modern web applications with stronger structure, cleaner interfaces, and a product-grade delivery mindset."
            points={[
              'Next.js-based product and portal builds',
              'Modern UI systems with premium polish',
              'Production-ready implementation for internal or external products'
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell
        id="why-setu"
        eyebrow="Why Setu"
        title="The brand works because the business model is genuinely connected."
        description="The Setu logo suggests intertwined systems. The company model reinforces that idea: trade experience informs product thinking, software discipline improves operations, and each layer strengthens the broader platform."
      >
        <div className="feature-band glass-card">
          <div>
            <h3>Business-first credibility</h3>
            <p>
              Setu is not framed like a generic studio. The company has a real commercial base, which gives the brand more substance and trust.
            </p>
          </div>
          <div>
            <h3>Unified visual identity</h3>
            <p>
              The navy-and-orange master brand now drives the site tone, interaction accents, and overall presentation instead of relying on a generic SaaS palette.
            </p>
          </div>
          <div>
            <h3>Room for ecosystem expansion</h3>
            <p>
              Setu Track is the first clear product proof point, and the brand structure is already strong enough to support future products cleanly.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="contact"
        eyebrow="Start the conversation"
        title="Use the master brand to open doors across services, partnerships, and products."
        description="This call-to-action section is intentionally simple so your next team can connect it to real email, forms, product URLs, or lead capture workflows without changing the design language."
      >
        <div className="cta-panel glass-card">
          <div>
            <p className="cta-kicker">Setu Groups</p>
            <h3>Built to feel trustworthy before the first meeting.</h3>
            <p>
              Replace the placeholder actions below with your real company email, live product URL, and scheduling or contact workflow before launch.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button button--primary" href="mailto:hello@setugroups.com">
              Email Setu Groups
            </a>
            <a className="button button--secondary" href="#products">
              Review products
            </a>
          </div>
        </div>
      </SectionShell>

      <Footer />
    </main>
  );
}
