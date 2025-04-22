// app/layout.tsx
import React, { ReactNode } from 'react';
import './globals.css';
import { Inter, Orbitron } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata = {
  title: 'My Awesome Game Portfolio',
  description: 'A showcase of games built by Xuan Cuong',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
