import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static assets, API routes, and standard public files
  if (
    pathname.includes('.') || 
    pathname.startsWith('/api') ||
    pathname.startsWith('/images/') || 
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect users to English by default if no locale is in the root URL
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip paths with a . (e.g. .jpg, .webp, .css)
    '/((?!_next/static|_next/image|images/AI|favicon.ico|.*\\..*).*)',
  ],
};
