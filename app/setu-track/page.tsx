import type { Metadata } from "next";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductHero } from "../../components/setu-track/product-hero";
import { FeatureGrid } from "../../components/setu-track/feature-grid";
import { WorkflowSection } from "../../components/setu-track/workflow";
import { ScreenshotSection } from "../../components/setu-track/screenshots";
import { SocialProofSection } from "../../components/setu-track/social-proof";
import { FinalCTA } from "../../components/setu-track/final-cta";

export const metadata: Metadata = {
  title: "Setu Track | Contractor Operations Platform",
  description:
    "Setu Track brings time tracking, approvals, payroll preparation, exports, and operational visibility into one clean platform.",
};

export default function SetuTrackPage() {
  return (
    <main>
      <Header />
      <ProductHero />
      <FeatureGrid />
      <WorkflowSection />
      <ScreenshotSection />
      <SocialProofSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
