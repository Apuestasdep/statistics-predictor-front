'use client';

import { Inter } from 'next/font/google';
import Navbar from '@/src/components/Navbar';
import { usePathname } from 'next/navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='d-flex flex-column mt-3'>
          {pathname !== '/' && <Navbar />}
          {children}
        </div>
      </body>
    </html>
  );
}
