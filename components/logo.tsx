import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <Link href="/" className={cn('inline-flex items-center gap-3', className)} aria-label="SETU Groups home">
      <img src="/setu-symbol.svg" alt="SETU symbol" className="h-9 w-9" />
      {!compact ? (
        <img
          src="/setu-groups-logo.svg"
          alt="SETU Groups logo"
          className="h-8 w-auto"
        />
      ) : null}
    </Link>
  );
}
