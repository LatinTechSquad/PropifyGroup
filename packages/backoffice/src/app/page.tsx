'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/AuthContext';

export default function Home() {
	const router = useRouter();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (isAuthenticated) {
			router.push('/dashboard');
		} else {
			router.push('/auth/login');
		}
	}, [isAuthenticated, router]);

	return null;
}
