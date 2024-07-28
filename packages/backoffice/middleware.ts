import { NextRequest } from 'next/server';
import { handleAuthentication } from './src/modules/Auth/interfaces/authLogic';

export function middleware(req: NextRequest) {
	return handleAuthentication(req);
}

export const config = {
	matcher: ['/', '/((?!api|_next|auth/login).*)'],
};
