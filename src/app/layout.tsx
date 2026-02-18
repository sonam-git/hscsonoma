import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { StoryblokProvider } from '@/lib/storyblok';
import { ThemeProvider } from '@/components/ThemeProvider';
import AnnouncementModal from '@/components/AnnouncementModal';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.himalayansherpaclubsonoma.org'),
  title: {
    default: 'Himalayan Sherpa Club of Sonoma | Sherpa Community in Wine Country California',
    template: '%s | Himalayan Sherpa Club of Sonoma',
  },
  description: 'The Himalayan Sherpa Club of Sonoma is a 501(c)(3) non-profit uniting Sherpa people in Sonoma County & Wine Country, California. Cultural events, Losar celebrations, and Sherpa heritage preservation.',
  keywords: [
    'Sherpa Sonoma',
    'Sherpa Wine Country',
    'Sherpa community California',
    'Himalayan Sherpa Club',
    'Sherpa people Sonoma County',
    'Nepali community Sonoma',
    'Sherpa culture California',
    'Losar celebration Sonoma',
    'Sherpa events Wine Country',
    'Himalayan community North Bay',
    'Sherpa Santa Rosa',
    'Sherpa Petaluma',
    'Sherpa Napa Valley',
    'Tibetan Buddhist Sonoma',
    'Nepal community California',
    'Mount Everest Sherpa',
    'Sherpa heritage preservation',
    'Himalayan festivals California',
    '501c3 non-profit Sonoma',
  ],
  authors: [{ name: 'Himalayan Sherpa Club of Sonoma' }],
  creator: 'Himalayan Sherpa Club of Sonoma',
  publisher: 'Himalayan Sherpa Club of Sonoma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.himalayansherpaclubsonoma.org',
    siteName: 'Himalayan Sherpa Club of Sonoma',
    title: 'Himalayan Sherpa Club of Sonoma | Sherpa Community in Wine Country',
    description: 'Join the vibrant Sherpa community in Sonoma County Wine Country, California. Cultural events, Losar celebrations, and heritage preservation.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Himalayan Sherpa Club of Sonoma - Sherpa Community in Wine Country California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalayan Sherpa Club of Sonoma | Sherpa Community Wine Country',
    description: 'Join the vibrant Sherpa community in Sonoma County, California. Cultural events, festivals, and heritage preservation.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} light`} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://a.storyblok.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-mountain-900 transition-colors">
        <ThemeProvider>
          <StoryblokProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
              <AnnouncementModal />
          </StoryblokProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
