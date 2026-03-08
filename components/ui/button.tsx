import Link from "next/link";
import { ReactNode } from "react";

const styles = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-card",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:border-electric/30 hover:text-electric",
};

export function Button({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: keyof typeof styles }) {
  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}
