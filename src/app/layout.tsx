import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Growlords — Marketing Built for Growth',
  description:
    'Growlords is a growth-focused marketing agency combining strategy, creative, performance and technology to help ambitious brands grow.',
  keywords: [
    'Growlords',
    'Growth Agency',
    'Performance Marketing',
    'Brand Strategy',
    'Creative Studio',
    'CRO',
    'Web Design',
    'Digital Marketing Agency',
  ],
  authors: [{ name: 'Growlords' }],
  openGraph: {
    title: 'Growlords — Marketing Built for Growth',
    description:
      'Growlords is a growth-focused marketing agency combining strategy, creative, performance and technology to help ambitious brands grow.',
    url: 'https://growlords.com',
    siteName: 'Growlords',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growlords — Marketing Built for Growth',
    description:
      'Growlords is a growth-focused marketing agency combining strategy, creative, performance and technology to help ambitious brands grow.',
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050505] text-[#f8fafc] antialiased">
        {children}
      </body>
    </html>
  );
}
