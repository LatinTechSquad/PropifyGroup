import { Nunito } from 'next/font/google';
import './globals.css';
import RootLayoutContent from './RootLayoutContent';
import { AuthProvider } from '@/modules/Auth/interfaces/AuthContext';

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
