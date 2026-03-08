"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Who We Are", href: "/#who-we-are" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Setu Track", href: "/setu-track" },
  { label: "Pricing", href: "/pricing" },
  { label: "Setu CRM", href: "/setu-crm" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-navy/5 bg-white/80 backdrop-blur-xl"
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-setu.svg" alt="Setu Groups" width={172} height={40} className="h-10 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-navy/70 transition-colors hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/#contact" variant="secondary">Start a Conversation</Button>
        </div>
      </Container>
    </motion.header>
  );
}
