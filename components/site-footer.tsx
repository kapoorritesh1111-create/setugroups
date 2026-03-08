import Link from 'next/link';
import { Container } from '@/components/container';
import { Logo } from '@/components/logo';
import { siteConfig } from '@/lib/site';

const groups = [
  {
    title: 'Products',
    links: [
      { href: '/setu-track', label: 'SETU Track' },
      { href: '/setu-crm', label: 'SETU CRM' },
      { href: '/products', label: 'Product overview' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/solutions', label: 'Solutions' },
      { href: '/company', label: 'Company' },
      { href: '/contact', label: 'Contact Sales' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/contact', label: 'Privacy request' },
      { href: '/contact', label: 'Terms inquiry' },
      { href: '/contact', label: 'Press and partnerships' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              The operating system for global work and trade. SETU Groups brings workforce operations and trade workflow systems into one credible ecosystem.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-deep">
              {siteConfig.email}
            </a>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{group.title}</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="transition hover:text-slate-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SETU Groups. All rights reserved.</p>
          <p>Built to scale with the broader SETU ecosystem.</p>
        </div>
      </Container>
    </footer>
  );
}
