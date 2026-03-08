import { newsroom } from '../../../data/copy';

export const metadata = { title: 'Newsroom — SETU Groups' };

export default function Page() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 960 }}>
        <div className="badge">Newsroom</div>
        <h1 className="h1" style={{ marginTop: 18 }}>Updates around the SETU ecosystem and brand build.</h1>
        <div style={{ display: 'grid', gap: 18, marginTop: 26 }}>
          {newsroom.map((item) => (
            <article key={item.title} className="card">
              <div className="inlineMeta"><span>{item.date}</span></div>
              <h2 className="h3" style={{ marginTop: 12 }}>{item.title}</h2>
              <p className="copy" style={{ marginTop: 12 }}>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
