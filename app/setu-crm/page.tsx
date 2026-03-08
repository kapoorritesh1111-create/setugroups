import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { WaitlistPage } from '../../components/setu-crm/waitlist-page';

export default function SetuCrmPage() {
  return (
    <main>
      <Header />
      <WaitlistPage />
      <Footer />
    </main>
  );
}
