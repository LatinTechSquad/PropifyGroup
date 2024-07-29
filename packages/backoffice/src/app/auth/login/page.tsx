'use client';

import { useAuth } from '@/modules/Auth/interfaces/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import RootLayout from '../../layout';
import LoginForm from './LoginForm';

const Login = () => {
	const { isAuthenticated, isHydrated } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (isHydrated && isAuthenticated) {
			router.push('/dashboard');
		}
	}, [isHydrated, isAuthenticated, router]);

	if (!isHydrated) {
		return null;
	}

	if (isAuthenticated) {
		return null;
	}
	return (
		<RootLayout showSidebar={false}>
			<div className="flex justify-center py-16">
				<LoginForm />
			</div>
		</RootLayout>
	);
};

export default Login;
