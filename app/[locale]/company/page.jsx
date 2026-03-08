import CompanySection from '../../(sections)/components/CompanySection';
import ProofSection from '../../(sections)/components/ProofSection';

export const metadata = { title: 'Company — SETU Groups' };

export default function Page() {
  return (
    <>
      <section className="section productHero">
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="badge">Company</div>
          <h1 className="h1" style={{ marginTop: 18 }}>A bridge brand built to span trade systems and software systems.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            SETU Groups should look like a serious ecosystem company: clear parent brand, credible product architecture, and a visual system that can scale across future products.
          </p>
        </div>
      </section>
      <CompanySection />
      <ProofSection />
    </>
  );
}
