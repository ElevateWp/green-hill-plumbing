import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/motion/LenisProvider';
import PagePreloader from '@/components/motion/PagePreloader';
import SiteTextReveal from '@/components/motion/SiteTextReveal';
import JsonLd from '@/components/ui/JsonLd';
import { BASE_URL, generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Green Hills Plumbing | Plumbing Contractor in Madison, TN',
    template: '%s',
  },
  description:
    'Green Hills Plumbing provides residential and commercial plumbing across Madison, Nashville and Middle Tennessee. Call +1 615-383-3339.',
  keywords: [
    'Green Hills Plumbing',
    'plumber Madison TN',
    'plumbing services Madison and Nashville',
    'emergency plumber Nashville',
    'leak repairs Nashville',
  ],
  authors: [{ name: 'Green Hills Plumbing' }],
  icons: {
    icon: [
      { url: '/green-hills-plumbing-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/green-hills-plumbing-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: '/green-hills-plumbing-logo.png', type: 'image/png' }],
    apple: [{ url: '/green-hills-plumbing-logo.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-forest-ink min-h-screen flex flex-col selection:bg-[#F3F9EE] selection:text-[#18351F]">
        <PagePreloader />
        <SiteTextReveal />
        <JsonLd data={generateLocalBusinessSchema()} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-[88px] sm:pt-[100px] md:pt-[112px]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

