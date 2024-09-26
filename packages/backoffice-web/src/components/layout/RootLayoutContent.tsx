'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Sidebar from '@/components/layout/sidebar/sidebar';
interface RootLayoutContentProps {
	children: React.ReactNode;
}

const RootLayoutContent: React.FC<RootLayoutContentProps> = ({ children }) => {
	const { isHydrated, isAuthenticated } = useAuth();

	if (!isHydrated) {
		return null;
	}

	return (
		<div className="app-container">
			{isAuthenticated && <Sidebar/>}
			<main className="content">{children}</main>
		</div>
	);
};

export default RootLayoutContent;
