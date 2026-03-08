import { siteCopy } from '../../../data/copy';

export default function CompanySection() {
  return (
    <section className="section sectionBorder">
      <div className="container grid2">
        <div>
          <div className="eyebrow">Company</div>
          <h2 className="h2" style={{ marginTop: 10 }}>{siteCopy.company.title}</h2>
        </div>
        <div className="card">
          <p className="lead">{siteCopy.company.body}</p>
          <p className="copy" style={{ marginTop: 14 }}>{siteCopy.brand.story}</p>
        </div>
      </div>
    </section>
  );
}
