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
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={`${nunito.variable}`}>
			<body>
				<AuthProvider>
					<RootLayoutContent>{children}</RootLayoutContent>
				</AuthProvider>
			</body>
		</html>
	);
}
