import SolutionsSection from '../../(sections)/components/SolutionsSection';
import ContactCTA from '../../(sections)/components/ContactCTA';

export const metadata = { title: 'Solutions — SETU Groups' };

export default function Page() {
  return (
    <>
      <section className="section productHero">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="badge">Solutions</div>
          <h1 className="h1" style={{ marginTop: 18 }}>SETU fits where operations cross people, trade, reporting, and execution.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            The right positioning is not “software for everyone.” It is software and systems for businesses whose operating reality is more complex than standard tools assume.
          </p>
        </div>
      </section>
      <SolutionsSection />
      <ContactCTA />
    </>
  );
}
