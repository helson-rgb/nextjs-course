import { NextResponse } from 'next/server';

/**
 * Canonicalises lesson URLs:
 *   /lesson/foo        → /lessons/foo   (singular typo)
 *   /lessons/          → /lessons        (trailing-slash variant)
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // /lesson/anything → /lessons/anything
  if (pathname.startsWith('/lesson/')) {
    const canonical = pathname.replace(/^\/lesson\//, '/lessons/');
    return NextResponse.redirect(new URL(canonical, request.url), 308);
  }

  // /lessons/ (trailing slash only) → /lessons
  if (pathname === '/lessons/') {
    return NextResponse.redirect(new URL('/lessons', request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/lesson/:path*', '/lessons/'],
};
