import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { StoryblokProvider } from '@/lib/storyblok';
import { ThemeProvider } from '@/components/ThemeProvider';

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
    default: 'Himalayan Sherpa Club of Sonoma | Preserving Heritage, Uniting Community',
    template: '%s | Himalayan Sherpa Club of Sonoma',
  },
  description: 'The Himalayan Sherpa Club of Sonoma is a 501(c)(3) non-profit organization dedicated to preserving and promoting Sherpa culture, heritage, and values in the North Bay Area of California.',
  keywords: ['Sherpa', 'Himalayan', 'Sonoma', 'Nepal', 'Community', 'Culture', 'Heritage', 'Non-profit', 'Wine Country', 'California'],
  authors: [{ name: 'Himalayan Sherpa Club of Sonoma' }],
  creator: 'Himalayan Sherpa Club of Sonoma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.himalayansherpaclubsonoma.org',
    siteName: 'Himalayan Sherpa Club of Sonoma',
    title: 'Himalayan Sherpa Club of Sonoma | Preserving Heritage, Uniting Community',
    description: 'A 501(c)(3) non-profit dedicated to preserving Sherpa culture and fostering community in Sonoma, California.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Himalayan Sherpa Club of Sonoma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalayan Sherpa Club of Sonoma',
    description: 'Preserving Heritage, Uniting Community - A 501(c)(3) non-profit in Sonoma, California.',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-mountain-900 transition-colors">
        <ThemeProvider>
          <StoryblokProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </StoryblokProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
