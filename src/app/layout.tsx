import type { Metadata, Viewport } from 'next';
import './globals.css';
import { getSiteContent } from '@/lib/content';
import { ContentProvider } from '@/context/ContentContext';

export async function generateMetadata(): Promise<Metadata> {
  const content = getSiteContent();
  const seo = content.seo;

  return {
    title: seo.title || 'Growlords — Marketing Built for Growth',
    description:
      seo.description ||
      'Growlords is a growth-focused marketing agency combining strategy, creative, performance and technology to help ambitious brands grow.',
    keywords: seo.keywords || [
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
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: seo.siteUrl || 'https://growlords.com',
      siteName: 'Growlords',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
    },
  };
}

export function generateViewport(): Viewport {
  const content = getSiteContent();
  return {
    themeColor: content.seo?.themeColor || '#050505',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialContent = getSiteContent();

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050505] text-[#f8fafc] antialiased">
        <ContentProvider initialContent={initialContent}>
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}
