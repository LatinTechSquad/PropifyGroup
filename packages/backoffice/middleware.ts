import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('JWtoken');
    const { pathname } = req.nextUrl;

    if (!token && pathname !== '/auth/login') {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
	if (token && pathname === '/auth/login') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    if (token && pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/((?!api|_next|auth/login).*)'],
};