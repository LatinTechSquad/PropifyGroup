import { Nunito } from 'next/font/google';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import '@tremor/react'
import RootLayoutContent from '../components/layout/RootLayoutContent';
import { AuthProvider } from '@/contexts/AuthContext';
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
