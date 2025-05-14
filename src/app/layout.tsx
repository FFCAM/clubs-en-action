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
  themeColor: '#0073CF', // Couleur FFCAM
};

export const metadata: Metadata = {
  title: 'Clubs en Action',
  description: 'Partageons les solutions des clubs FFCAM',
  keywords: ['FFCAM', 'clubs', 'montagne', 'alpinisme', 'webinaires', 'partage'],
  authors: [{ name: 'FFCAM' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://clubs-en-action.ffcam.fr',
    title: 'Clubs en Action',
    description: 'Partageons les solutions des clubs FFCAM - Plateforme collaborative pour le partage de bonnes pratiques entre clubs',
    siteName: 'Clubs en Action',
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
    title: 'Clubs en Action',
    description: 'Partageons les solutions des clubs FFCAM - Plateforme collaborative',
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
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
