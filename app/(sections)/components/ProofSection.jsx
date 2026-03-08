import { siteCopy } from '../../../data/copy';

export default function ProofSection() {
  return (
    <section className="section sectionBorder">
      <div className="container">
        <div style={{ maxWidth: 780, marginBottom: 24 }}>
          <div className="eyebrow">Platform proof</div>
          <h2 className="h2" style={{ marginTop: 10 }}>Signals that make SETU credible</h2>
        </div>
        <div className="logoWall" style={{ marginBottom: 24 }}>
          <div className="logoStub">Trade Ops</div>
          <div className="logoStub">Payroll</div>
          <div className="logoStub">CRM</div>
          <div className="logoStub">Exports</div>
          <div className="logoStub">Analytics</div>
        </div>
        <div className="grid3">
          {siteCopy.proof.map((item) => (
            <div key={item} className="card">
              <div className="copy">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
