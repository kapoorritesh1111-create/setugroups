import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WaitlistPageContent } from "@/components/setu-crm/waitlist-page";

export const metadata: Metadata = {
  title: "Setu CRM | Coming Soon",
  description:
    "Join the waitlist for Setu CRM, a clean and structured CRM designed for pipeline visibility, customer continuity, and commercial clarity.",
};

export default function SetuCRMPage() {
  return (
    <main>
      <Header />
      <WaitlistPageContent />
      <Footer />
    </main>
  );
}
