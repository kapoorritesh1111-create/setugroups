import Link from 'next/link';
import styles from '../styles/layout.module.css';
import { siteCopy } from '../../../data/copy';

export default function Hero({ locale = 'en' }) {
  const c = siteCopy.hero;
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <span className="badge">{c.eyebrow}</span>
          <h1 className="h1" style={{ marginTop: 18 }}>{c.title}</h1>
          <p className="lead" style={{ maxWidth: 760, marginTop: 18 }}>{c.body}</p>
          <div className={styles.heroActions}>
            <Link href={`/${locale}/contact`} className="btn btnPrimary">{c.primary}</Link>
            <Link href={`/${locale}/products`} className="btn btnSecondary">{c.secondary}</Link>
          </div>
          <div className={styles.heroProof}>
            {c.proof.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="highlightBox">
          <div className="eyebrow">Chosen brand direction</div>
          <h2 className="h2" style={{ marginTop: 12 }}>Final logo strategy</h2>
          <p className="copy" style={{ marginTop: 12 }}>
            Use the intertwined bridge symbol as the master brand asset because it communicates three layers at once:
            data flow, supply chain routes, and interconnected systems.
          </p>
          <div className="grid3" style={{ marginTop: 18 }}>
            <div className="card" style={{ padding: 18 }}><div className="kpi">01</div><div className="copy">Bridge meaning aligned to “SETU”</div></div>
            <div className="card" style={{ padding: 18 }}><div className="kpi">02</div><div className="copy">Strong fit for trade + SaaS positioning</div></div>
            <div className="card" style={{ padding: 18 }}><div className="kpi">03</div><div className="copy">Extensible into product icons</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
