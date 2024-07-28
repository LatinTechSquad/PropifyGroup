import { Nunito } from 'next/font/google';
import './globals.css';
import SideBarLayout from '@/components/sidebar/SideBarLayout';
import { AuthProvider, useAuth } from '@/modules/Auth/interfaces/AuthContext';

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
});

interface RootLayoutProps {
	children: React.ReactNode;
	showSidebar?: boolean;
}

export default function RootLayout({ children, showSidebar = true }: RootLayoutProps) {
	return (
		<html lang="en" className={`${nunito.variable}`}>
			<body>
				<AuthProvider>
					<RootLayoutContent showSidebar={showSidebar}>{children}</RootLayoutContent>
				</AuthProvider>
			</body>
		</html>
	);
}

const RootLayoutContent: React.FC<{ children: React.ReactNode; showSidebar: boolean }> = ({
	children,
	showSidebar,
}) => {
	const { isHydrated, isAuthenticated } = useAuth();

	if (!isHydrated) {
		return null;
	}

	return (
		<div className="app-container">
			{showSidebar && isAuthenticated && <SideBarLayout />}
			<main className="content">{children}</main>
		</div>
	);
};
