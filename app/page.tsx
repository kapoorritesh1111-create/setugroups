import Link from 'next/link';

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">Setu Groups</Link>
        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <Link href="/setu-track" className="rounded-full bg-setu-gradient px-4 py-2 text-sm font-medium text-white">Explore Setu Track</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 Setu Groups. Intertwining Trade & Technology.</p>
          <div className="flex gap-5">
            <Link href="/setu-track">Setu Track</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/setu-crm">Setu CRM</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const cards = [
  {
    title: 'Setu Track',
    text: 'A contractor operations platform unifying time tracking, approvals, payroll runs, exports, and margin visibility.',
    href: '/setu-track',
    cta: 'View product'
  },
  {
    title: 'Setu CRM',
    text: 'A structured CRM for pipeline visibility, commercial continuity, and cleaner customer operations.',
    href: '/setu-crm',
    cta: 'Join waitlist'
  }
];

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className="bg-grid overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-700">Intertwining Trade & Technology</span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-navy md:text-7xl">A modern bridge between global commerce and product-grade software.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Setu Groups combines India-led import–export execution with premium web app development and a growing SaaS ecosystem — built for businesses that need clarity, structure, and operational trust.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-setu-gradient px-6 py-3 font-medium text-white shadow-soft">Start a Conversation</a>
              <a href="#products" className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700">Explore Our Products</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold">One master brand connecting trade execution, software delivery, and SaaS products.</h2>
          <p className="mt-4 text-lg text-slate-600">Setu Groups is built on a simple idea: when operations and technology work together, businesses run better.</p>
        </div>
      </section>

      <section id="products" className="bg-soft py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="inline-flex rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Product</div>
              <h3 className="mt-5 text-3xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-slate-600">{card.text}</p>
              <Link href={card.href} className="mt-8 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-medium text-white">{card.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 p-8">
          <h3 className="text-2xl font-semibold">Import–Export Operations</h3>
          <p className="mt-4 text-slate-600">India-based trade execution with real operational depth. We coordinate supply, manage documentation, and ensure commercial follow-through with clarity and reliability.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 p-8">
          <h3 className="text-2xl font-semibold">Web App Development</h3>
          <p className="mt-4 text-slate-600">We design and build modern web applications with product-grade structure, premium UI systems, and clean, scalable architecture.</p>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold">Why Setu</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {['10+ years combined trade experience', 'Production-grade SaaS products shipped', 'India-based execution with global standards', 'Structured delivery, not agency chaos', 'A unified ecosystem of operations + software'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-soft p-10">
          <h2 className="text-3xl font-semibold">Start the Conversation</h2>
          <p className="mt-4 max-w-2xl text-slate-600">Whether you’re exploring services, partnerships, or products, Setu Groups is built to feel trustworthy before the first meeting. Email us or schedule a call — we’ll respond within 24 hours.</p>
          <a href="mailto:hello@setugroups.com" className="mt-6 inline-flex rounded-full bg-setu-gradient px-6 py-3 font-medium text-white">hello@setugroups.com</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
