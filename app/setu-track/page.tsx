import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { ProductHero } from '../../components/setu-track/product-hero';
import { FeatureGrid } from '../../components/setu-track/feature-grid';
import { Workflow } from '../../components/setu-track/workflow';
import { Screenshots } from '../../components/setu-track/screenshots';
import { SocialProof } from '../../components/setu-track/social-proof';
import { FinalCta } from '../../components/setu-track/final-cta';

export default function SetuTrackPage() {
  return (
    <main>
      <Header />
      <ProductHero />
      <FeatureGrid />
      <Workflow />
      <Screenshots />
      <SocialProof />
      <FinalCta />
      <Footer />
    </main>
  );
}
