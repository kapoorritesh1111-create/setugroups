import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function Footer({ locale = 'en' }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div>
          <div style={{ fontWeight: 800 }}>SETU GROUPS</div>
          <p className="copy" style={{ maxWidth: 560 }}>
            A bridge between trade execution, workforce systems, and connected data infrastructure.
          </p>
          <div className="inlineMeta">
            <span>© {new Date().getFullYear()} SETU Groups</span>
            <span>All rights reserved</span>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <Link href={`/${locale}/products`}>Products</Link>
          <Link href={`/${locale}/solutions`}>Solutions</Link>
          <Link href={`/${locale}/company`}>Company</Link>
          <Link href={`/${locale}/contact`}>Contact</Link>
        </div>
      </div>
    </footer>
  );
}
