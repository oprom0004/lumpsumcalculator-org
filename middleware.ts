import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 允许的路径
  const validPaths = ['/', '/hi', '/te', '/ta', '/gu', '/404'];
  
  // 允许静态文件和 API 路径
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    validPaths.includes(pathname)
  ) {
    return NextResponse.next();
  }
  
  // 重定向所有其他路径到 /404
  return NextResponse.redirect(new URL('/404', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};