'use client';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
});

interface RootLayoutProps {
	children: React.ReactNode;
}

const LINKS = [
	{ title: 'Home', href: '/' },
	{ title: 'Nosotros', href: '/about' },
	{ title: 'Contacto', href: '/contact' },
	{ title: 'Mi Perfil', href: '/my-self' },
	{ title: 'Publicar', href: '/posts' },
];

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en" className={`${nunito.variable}`}>
			<body>
				<div className="border-l-[24px] border-r-[24px] border-[#4A5271]">
					<div className="border-t-[24px] border-b-[12px] border-[#4A5271]">
						<Navbar links={LINKS} />
					</div>

					{children}
					<div className="border-t-[12px] border-b-[24px] border-[#4A5271]">
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
