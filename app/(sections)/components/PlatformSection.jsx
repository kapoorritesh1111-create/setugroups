import { siteCopy } from '../../../data/copy';

export default function PlatformSection() {
  const c = siteCopy.platform;
  return (
    <section className="section sectionBorder">
      <div className="container grid2">
        <div>
          <div className="eyebrow">Platform direction</div>
          <h2 className="h2" style={{ marginTop: 10 }}>{c.title}</h2>
          <p className="lead" style={{ marginTop: 14 }}>{c.intro}</p>
        </div>
        <div className="card">
          <ul className="mutedList">
            {c.modules.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
