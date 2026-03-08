import type { Metadata } from "next";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { PricingPageContent } from "../../components/pricing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing | Setu Track",
  description:
    "Custom pricing structure for Setu Track, designed for implementation-led rollout and serious contractor operations teams.",
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <PricingPageContent />
      <Footer />
    </main>
  );
}
