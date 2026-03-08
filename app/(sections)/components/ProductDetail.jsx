import Link from 'next/link';

export default function ProductDetail({ locale = 'en', product }) {
  return (
    <>
      <section className="section productHero">
        <div className="container grid2" style={{ alignItems: 'center' }}>
          <div>
            <div className="badge">{product.eyebrow}</div>
            <h1 className="h1" style={{ marginTop: 18 }}>{product.title}</h1>
            <p className="lead" style={{ marginTop: 16 }}>{product.description}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 22 }}>
              <Link href={`/${locale}/contact`} className="btn btnPrimary">Request a walkthrough</Link>
              <Link href={`/${locale}/products`} className="btn btnSecondary">Back to products</Link>
            </div>
          </div>
          <div className="highlightBox">
            <div className="eyebrow">Core outcomes</div>
            <div className="grid3" style={{ marginTop: 18 }}>
              {product.outcomes.map((item) => (
                <div key={item} className="card" style={{ padding: 18 }}>
                  <div className="copy">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid2">
          <div className="card">
            <h2 className="h3">What it solves</h2>
            <ul className="mutedList" style={{ marginTop: 14 }}>
              {product.problems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">What it includes</h2>
            <ul className="mutedList" style={{ marginTop: 14 }}>
              {product.features.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
