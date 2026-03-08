import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

function getLocale(request: NextRequest) {
  const header = request.headers.get('accept-language') || '';
  const preferred = header.split(',')[0]?.split('-')[0];
  return i18n.locales.includes(preferred) ? preferred : i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/_next') || pathname.includes('.') || pathname.startsWith('/api')) return;
  const hasLocale = i18n.locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (!hasLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};
