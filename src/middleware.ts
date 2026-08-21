import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_COOKIE_NAME, verifySessionToken } from '@/lib/auth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page to be accessed publicly
  if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) {
    // If user is already authenticated, redirect to /admin directly
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (token) {
      const authResult = await verifySessionToken(token);
      if (authResult.valid) {
        return NextResponse.redirect(new URL('/admin', req.url));
      }
    }
    return NextResponse.next();
  }

  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
    const authResult = await verifySessionToken(token);

    if (!authResult.valid) {
      const loginUrl = new URL('/admin/login', req.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
