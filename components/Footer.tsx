import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Setu Track", href: "/setu-track" },
  { label: "Pricing", href: "/pricing" },
  { label: "Setu CRM", href: "/setu-crm" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy/6 py-10">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image src="/logo-setu.svg" alt="Setu Groups" width={172} height={40} className="h-10 w-auto" />
          </div>
          <p className="max-w-md text-sm leading-6 text-navy/60">
            Setu Groups connects global trade execution, product-grade software delivery, and a growing SaaS ecosystem.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-navy/60">
          {footerLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-navy">
              {item.label}
            </Link>
          ))}
          <a href="mailto:hello@setugroups.com" className="transition-colors hover:text-navy">hello@setugroups.com</a>
        </div>
        <div className="text-sm text-navy/60">© {new Date().getFullYear()} Setu Groups. Intertwining Trade &amp; Technology.</div>
      </Container>
    </footer>
  );
}
