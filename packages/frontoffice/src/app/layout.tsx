"use client"
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-nunito'
});

const LINKS = [{ title: 'Home', href: '/' },
{ title: 'Nosotros', href: '/about' },
{ title: 'Contacto', href: '/contact' },
{ title: 'Mi Perfil', href: '/my-self' },
{ title: 'Publicar', href: '/posts' }]

const RootLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, []); 

  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body>
        <Navbar links={LINKS} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;