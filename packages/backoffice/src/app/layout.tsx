import { Nunito } from 'next/font/google';
import './globals.css';
import SideBarLayout from '@/components/sidebar/SideBarLayout';

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
    <html lang='en' className={`${nunito.variable}`}>
      <body>
        <div className='app-container'>
          {showSidebar && <SideBarLayout />}
          <main className='content'>{children}</main>
        </div>
      </body>
    </html>
  );
}
