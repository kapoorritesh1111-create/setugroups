import Hero from '../(sections)/components/Hero';
import ValuePillars from '../(sections)/components/ValuePillars';
import ProductOverview from '../(sections)/components/ProductOverview';
import PlatformSection from '../(sections)/components/PlatformSection';
import SolutionsSection from '../(sections)/components/SolutionsSection';
import ProofSection from '../(sections)/components/ProofSection';
import CompanySection from '../(sections)/components/CompanySection';
import ContactCTA from '../(sections)/components/ContactCTA';

export default function HomePage({ params }) {
  return (
    <>
      <Hero locale={params.locale} />
      <ValuePillars />
      <ProductOverview locale={params.locale} />
      <PlatformSection />
      <SolutionsSection />
      <ProofSection />
      <CompanySection />
      <ContactCTA />
    </>
  );
}
