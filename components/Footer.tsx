import { Container } from './ui/container';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Setu Groups. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <a href="/setu-track" className="hover:text-ink">Setu Track</a>
          <a href="/setu-crm" className="hover:text-ink">Setu CRM</a>
          <a href="/pricing" className="hover:text-ink">Pricing</a>
          <a href="/#contact" className="hover:text-ink">Contact</a>
        </div>
      </Container>
    </footer>
  );
}
