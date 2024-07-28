'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
	isAuthenticated: boolean;
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	isHydrated: boolean;
	login: (token: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isHydrated, setIsHydrated] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('JWtoken');
		if (token) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
		setIsHydrated(true);
	}, []);

	const login = (token: string) => {
		localStorage.setItem('JWtoken', token);
		setIsAuthenticated(true);
		router.push('/dashboard');
	};

	const logout = () => {
		localStorage.removeItem('JWtoken');
		setIsAuthenticated(false);
		router.push('/auth/login');
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isHydrated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	console.log('AuthContext:', context);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
