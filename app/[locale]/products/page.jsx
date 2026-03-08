import ProductOverview from '../../(sections)/components/ProductOverview';
import PlatformSection from '../../(sections)/components/PlatformSection';

export const metadata = {
  title: 'Products — SETU Groups'
};

export default function ProductsPage({ params }) {
  return (
    <>
      <section className="section productHero">
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="badge">Product ecosystem</div>
          <h1 className="h1" style={{ marginTop: 18 }}>Two immediate products. One parent operating brand.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            SETU Groups should sell the ecosystem story first, while each product page handles its own specific problem, workflow, and value proposition.
          </p>
        </div>
      </section>
      <ProductOverview locale={params.locale} />
      <PlatformSection />
    </>
  );
}
