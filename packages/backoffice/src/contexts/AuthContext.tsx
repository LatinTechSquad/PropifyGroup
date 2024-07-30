'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

interface AuthContextType {
	isAuthenticated: boolean;
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	isHydrated: boolean;
	performLogin: (token: string) => void;
	logout: () => void;
	getToken: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isHydrated, setIsHydrated] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		const token = getCookie('JWtoken');
		if (token) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
		setIsHydrated(true);
	}, []);

	const performLogin = (token: string) => {
		setCookie('JWtoken', token, {
			secure: process.env.NODE_ENV !== 'development',
			sameSite: 'strict',
		});
		setIsAuthenticated(true);
	};

	const logout = () => {
		deleteCookie('JWtoken');
		setIsAuthenticated(false);
		router.push('/auth/login');
	};

	const getToken = () => {
		return getCookie('JWtoken') as string | null;
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isHydrated, performLogin, logout, getToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth(): AuthContextType {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
