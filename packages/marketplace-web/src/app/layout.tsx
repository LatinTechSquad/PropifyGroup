'use client'
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { AuthProvider } from '../contexts/AuthContext';
import { appWithTranslation } from 'next-i18next';
import '../i18n/i18n';
import { AppProps } from 'next/app';

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

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es' className={`${nunito.variable}`}>
      <body>
        <AuthProvider>
          <div className='border-l-[24px] border-r-[24px] border-[#4A5271] bg-[#f2eee7]'>
            <div className='border-t-[24px] border-b-[12px] border-[#4A5271]'>
              <Navbar links={LINKS} />
            </div>

            {children}
            <div className='border-t-[12px] border-b-[24px] border-[#4A5271] '>
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout as unknown as React.ComponentType<AppProps>);