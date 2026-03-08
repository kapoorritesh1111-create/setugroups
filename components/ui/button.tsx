import Link from 'next/link';

const styles = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-setu-gradient px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5',
  secondary:
    'inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-electric',
  ghost:
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-ink transition hover:text-electric',
};

export function Button({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
}) {
  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}
