import { siteCopy } from '../../../data/copy';

export default function SolutionsSection() {
  const c = siteCopy.solutions;
  return (
    <section className="section sectionBorder">
      <div className="container">
        <div style={{ maxWidth: 820, marginBottom: 28 }}>
          <div className="eyebrow">Solutions</div>
          <h2 className="h2" style={{ marginTop: 10 }}>{c.title}</h2>
          <p className="lead" style={{ marginTop: 12 }}>{c.intro}</p>
        </div>
        <div className="grid2">
          <div className="card">
            <h3 className="h3">Ideal teams</h3>
            <ul className="mutedList" style={{ marginTop: 14 }}>
              {c.industries.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3 className="h3">High-value use cases</h3>
            <ul className="mutedList" style={{ marginTop: 14 }}>
              {c.useCases.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
