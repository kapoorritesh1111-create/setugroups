import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { PricingPage } from '../../components/pricing/pricing-page';

export default function PricingRoute() {
  return (
    <main>
      <Header />
      <PricingPage />
      <Footer />
    </main>
  );
}
