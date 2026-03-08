import { notFound } from 'next/navigation';
import { caseStudies } from '../../../../data/copy';

export async function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default function Page({ params }) {
  const item = caseStudies.find((entry) => entry.slug === params.slug);
  if (!item) return notFound();

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="badge">Case study</div>
        <h1 className="h1" style={{ marginTop: 18 }}>{item.title}</h1>
        <p className="lead" style={{ marginTop: 16 }}>{item.body}</p>
        <div className="grid3" style={{ marginTop: 28 }}>
          {item.metrics.map((metric) => (
            <div key={metric} className="card">
              <div className="copy">{metric}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
