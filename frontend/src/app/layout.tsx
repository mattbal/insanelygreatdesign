import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import QueryProvider from '@/lib/QueryProvider';

const inter = Inter({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Insanely Great Design',
  description: 'A collection of beautiful websites.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/favicon-48x48.png' sizes='48x48' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body className={inter.className}>
        <Navbar />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
