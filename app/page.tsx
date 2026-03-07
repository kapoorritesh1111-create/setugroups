import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { SectionShell } from '@/components/SectionShell';
import { ServiceCard } from '@/components/ServiceCard';
import { CRMIcon } from '@/components/icons/CRMIcon';
import Image from 'next/image';

const metrics = [
  { label: 'Operational focus', value: 'Import–Export + SaaS' },
  { label: 'Current live product', value: 'Setu Track' },
  { label: 'Next product in pipeline', value: 'Setu CRM' }
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <SectionShell
        id="about"
        eyebrow="Who we are"
        title="A modern company operating at the intersection of trade and technology."
        description="Setu Groups combines real-world import–export execution from India with product-minded software delivery. The result is a business that understands operations deeply and builds digital systems that help companies run better."
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
        title="A focused SaaS portfolio built from operational realities."
        description="Our products are shaped by the kinds of workflows teams actually struggle with: contractors, payroll flows, approvals, exports, and customer operations."
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
            description="A contractor operations platform for time tracking, approvals, payroll runs, exports, and profitability visibility."
            bullets={[
              'Contractor workforce operations',
              'Time tracking and approvals',
              'Payroll and export workflows'
            ]}
            primaryCta={{ label: 'Explore Setu Track', href: '#contact' }}
            secondaryCta={{ label: 'View company services', href: '#services' }}
          />

          <ProductCard
            logo={<CRMIcon className="crm-icon" />}
            title="Setu CRM"
            status="Coming soon"
            description="A future CRM product designed to unify customer workflows, sales operations, pipeline visibility, and account follow-through in one clean system."
            bullets={[
              'Customer and pipeline visibility',
              'Operations-aware workflow design',
              'Built to complement the Setu ecosystem'
            ]}
            primaryCta={{ label: 'Join the waitlist', href: '#contact' }}
            secondaryCta={{ label: 'See what we build', href: '#services' }}
          />
        </div>
      </SectionShell>

      <SectionShell
        id="services"
        eyebrow="Services"
        title="Operational services and software capability under one brand."
        description="Setu Groups serves clients both through practical trade execution and through modern software delivery."
      >
        <div className="cards-grid">
          <ServiceCard
            title="Import–Export Operations"
            description="We support import–export operations from India with a practical understanding of supply flow, coordination, and commercial execution."
            points={[
              'India-based trade operations support',
              'Execution-oriented business coordination',
              'A trusted, professional operating partner'
            ]}
          />
          <ServiceCard
            title="Web App Development"
            description="We design and build clean, modern web applications with a SaaS mindset: strong structure, thoughtful UX, and production-ready implementation."
            points={[
              'Custom product and portal builds',
              'Modern Next.js-based architecture',
              'UI systems with premium SaaS polish'
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell
        id="why-setu"
        eyebrow="Why Setu"
        title="Built with both business context and software discipline."
        description="What makes Setu different is that we do not approach software as a disconnected design exercise. We understand workflows, operational pressure, and the need for systems that are reliable, clear, and commercially useful."
      >
        <div className="feature-band glass-card">
          <div>
            <h3>Trade-informed product thinking</h3>
            <p>
              We bring real operational perspective into product design, which helps us build software that fits the way teams actually work.
            </p>
          </div>
          <div>
            <h3>Premium SaaS design standards</h3>
            <p>
              Clean UI, strong hierarchy, subtle motion, and trust-oriented presentation are built into the system from the start.
            </p>
          </div>
          <div>
            <h3>Long-term ecosystem vision</h3>
            <p>
              Setu Track is live, Setu CRM is next, and the broader Setu platform is designed to grow product by product.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="contact"
        eyebrow="Get in touch"
        title="Ready to explore a project, product partnership, or company introduction?"
        description="Use this section as your CTA block for Vercel deployment. You can later replace the contact links with a real form, Calendly, or CRM capture."
      >
        <div className="cta-panel glass-card">
          <div>
            <p className="cta-kicker">Setu Groups</p>
            <h3>Let’s build something strong, modern, and durable.</h3>
            <p>
              For now, update these contact actions with your real website, email, product URLs, or scheduling links before launch.
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
