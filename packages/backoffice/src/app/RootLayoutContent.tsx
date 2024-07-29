'use client';

import React from 'react';
import { useAuth } from '@/modules/Auth/interfaces/AuthContext';
import SideBarLayout from '@/components/sidebar/SideBarLayout';

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
			{isAuthenticated && <SideBarLayout />}
			<main className="content">{children}</main>
		</div>
	);
};

export default RootLayoutContent;
