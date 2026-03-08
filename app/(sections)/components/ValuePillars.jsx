import section from '../styles/section.module.css';
import { siteCopy } from '../../../data/copy';

export default function ValuePillars() {
  return (
    <section className="section sectionBorder">
      <div className="container">
        <div className={section.sectionHead}>
          <div className="eyebrow">Why the brand works</div>
          <h2 className="h2">A symbol with operational meaning</h2>
          <p className="lead">The identity needs to feel credible in enterprise software, global trade, and ecosystem platform design. These are the four strongest signals to build around.</p>
        </div>
        <div className="grid4">
          {siteCopy.valuePillars.map((pillar) => (
            <div key={pillar.title} className="card">
              <div className={section.itemTitle}>{pillar.title}</div>
              <div className="copy">{pillar.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
