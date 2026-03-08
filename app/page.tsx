import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhoWeAre } from "@/components/who-we-are";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { WhySetu } from "@/components/why-setu";
import { Credibility } from "@/components/credibility";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <WhoWeAre />
      <Products />
      <Services />
      <WhySetu />
      <Credibility />
      <Contact />
      <Footer />
    </main>
  );
}
