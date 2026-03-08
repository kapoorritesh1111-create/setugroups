'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/layout.module.css';
import ThemeToggle from './ThemeToggle';

export default function Header({ locale = 'en', dict }) {
  const pathname = usePathname();
  const nav = dict?.nav || {};
  const links = [
    { href: `/${locale}`, label: nav.home || 'Home' },
    { href: `/${locale}/products`, label: nav.products || 'Products' },
    { href: `/${locale}/solutions`, label: nav.solutions || 'Solutions' },
    { href: `/${locale}/company`, label: nav.company || 'Company' },
    { href: `/${locale}/case-studies`, label: nav.caseStudies || 'Case Studies' },
    { href: `/${locale}/newsroom`, label: nav.newsroom || 'Newsroom' },
    { href: `/${locale}/contact`, label: nav.contact || 'Contact' }
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href={`/${locale}`} className={styles.brand}>
          <img src="/symbol.png" alt="SETU symbol" width="52" height="52" />
          <div className={styles.brandText}>
            <span className={styles.brandName}>SETU GROUPS</span>
            <span className={styles.brandTagline}>Intertwining Trade &amp; Technology</span>
          </div>
        </Link>
        <nav className={styles.navLinks}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} data-active={pathname === link.href ? 'true' : 'false'}>
              {link.label}
            </Link>
          ))}
          <Link className="btn btnSecondary" href={`/${locale}/products/setu-track`}>
            {dict?.actions?.bookDemo || 'Book a Demo'}
          </Link>
          <ThemeToggle label={dict?.actions?.theme || 'Theme'} />
        </nav>
      </div>
    </header>
  );
}
