import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 允许的路径（不含斜杠的规范版本）
  const validPaths = ['/', '/hi', '/te', '/ta', '/gu', '/404'];
  
  // 处理带斜杠的语言路径 - 301重定向到不带斜杠版本（SEO规范化）
  const langPathsWithSlash = ['/hi/', '/te/', '/ta/', '/gu/'];
  if (langPathsWithSlash.includes(pathname)) {
    const canonicalPath = pathname.slice(0, -1); // 移除末尾斜杠
    return NextResponse.redirect(new URL(canonicalPath, request.url), 301);
  }
  
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