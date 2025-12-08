import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://miatruong.com'),
  title: 'Mia Truong — Full-stack Software Engineer',
  description: 'I build scalable, user-focused web applications with React, TypeScript, and Node.js — combining logic and creativity to deliver intuitive, modern experiences.',
  openGraph: {
    title: 'Mia Truong — Full-stack Software Engineer',
    description: 'I build scalable, user-focused web applications with React, TypeScript, and Node.js — combining logic and creativity to deliver intuitive, modern experiences.',
    images: ['/mia.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mia Truong — Full-stack Software Engineer',
    description: 'I build scalable, user-focused web applications with React, TypeScript, and Node.js — combining logic and creativity to deliver intuitive, modern experiences.',
    images: ['/mia.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
