import Link from 'next/link';
import styles from '../styles/layout.module.css';
import { siteCopy } from '../../../data/copy';

export default function ProductOverview({ locale = 'en' }) {
  return (
    <section className="section sectionBorder">
      <div className="container">
        <div style={{ maxWidth: 820, marginBottom: 28 }}>
          <div className="eyebrow">Products</div>
          <h2 className="h2" style={{ marginTop: 10 }}>Immediate products in the SETU ecosystem</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            This site is structured to position SETU Groups as the parent platform brand while giving SETU Track and SETU CRM their own clear product narratives.
          </p>
        </div>
        <div className="grid2">
          {siteCopy.products.map((product) => (
            <div key={product.slug} className="card">
              <div className={styles.productCardHeader}>
                <div>
                  <div className={styles.productTag}>Product</div>
                  <h3 className="h3" style={{ marginTop: 8 }}>{product.name}</h3>
                </div>
                <img src="/symbol.png" alt="SETU symbol" width="38" height="38" />
              </div>
              <p className="copy" style={{ marginTop: 14 }}>{product.summary}</p>
              <ul className="mutedList" style={{ marginTop: 14 }}>
                {product.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div style={{ marginTop: 18 }}>
                <Link className="btn btnSecondary" href={`/${locale}/products/${product.slug}`}>View product</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
