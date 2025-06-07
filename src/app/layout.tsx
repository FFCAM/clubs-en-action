import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';

/* Charge Poppins, hébergée localement par Next, et expose la CSS var */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0073CF', // Couleur principale FFCAM
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://clubs-en-action.ffcam.fr'),
  title: 'Clubs en Action | FFCAM',
  description: 'Partageons les solutions des clubs de la Fédération française des clubs alpins et de montagne',
  keywords: ['FFCAM', 'clubs', 'montagne', 'alpinisme', 'webinaires', 'partage', 'clubs alpins'],
  authors: [{ name: 'Fédération française des clubs alpins et de montagne' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Clubs en Action'
  },
  applicationName: 'Clubs en Action FFCAM',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://clubs-en-action.ffcam.fr',
    title: 'Clubs en Action | FFCAM',
    description: 'Partageons les solutions des clubs de la Fédération française des clubs alpins et de montagne - Plateforme collaborative pour le partage de bonnes pratiques entre clubs',
    siteName: 'Clubs en Action FFCAM',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clubs en Action - FFCAM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clubs en Action | FFCAM',
    description: 'Partageons les solutions des clubs de la Fédération française des clubs alpins et de montagne - Plateforme collaborative',
    images: ['/og-image.png'],
    creator: '@FFCAM_fr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#0073CF" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased selection:bg-ffcam selection:text-white">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <div id="main-content" className="contents">
          {children}
        </div>
        {/* 100% privacy-first analytics */}
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </body>
    </html>
  );
}
