import Link from 'next/link';
import { caseStudies } from '../../../data/copy';

export const metadata = { title: 'Case Studies — SETU Groups' };

export default function Page({ params }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: 820, marginBottom: 28 }}>
          <div className="badge">Case studies</div>
          <h1 className="h1" style={{ marginTop: 18 }}>Use cases that reinforce the SETU platform story.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            These can be replaced with real customer stories later, but the structure is already set up for production content.
          </p>
        </div>
        <div className="grid2">
          {caseStudies.map((item) => (
            <Link key={item.slug} href={`/${params.locale}/case-studies/${item.slug}`} className="card">
              <h2 className="h3">{item.title}</h2>
              <p className="copy" style={{ marginTop: 12 }}>{item.summary}</p>
              <div className="inlineMeta" style={{ marginTop: 16 }}>
                {item.metrics.map((metric) => <span key={metric}>{metric}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
