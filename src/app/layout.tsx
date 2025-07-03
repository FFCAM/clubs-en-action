import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

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
  title: 'Comment gérer un club FFCAM | Solutions et outils pratiques',
  description: 'Solutions pour gérer votre club de montagne : outils numériques, recrutement bénévoles, organisation événements. Webinaires et retours d\'expérience de clubs FFCAM.',
  keywords: ['FFCAM', 'clubs ffcam', 'gestion club montagne', 'outils collaboratifs clubs sportifs', 'webinaires clubs alpins', 'entraide clubs montagne', 'solutions clubs ffcam', 'clubs alpins français', 'vie associative', 'bénévoles club alpin'],
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
    title: 'Clubs en Action | Solutions et entraide pour clubs FFCAM',
    description: 'Découvrez comment gérer votre club de montagne : outils collaboratifs, webinaires pratiques, solutions concrètes partagées entre clubs FFCAM. Rejoignez notre communauté d\'entraide.',
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
    title: 'Clubs en Action | Solutions et entraide pour clubs FFCAM',
    description: 'Webinaires, outils collaboratifs et solutions pour gérer votre club de montagne. Rejoignez la communauté d\'entraide des clubs FFCAM.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Clubs en Action FFCAM",
              "alternateName": "Plateforme collaborative clubs FFCAM",
              "url": "https://clubs-en-action.ffcam.fr",
              "logo": "https://clubs-en-action.ffcam.fr/images/Logo-FFCAM.png",
              "description": "Solutions pour gérer un club de montagne FFCAM : outils collaboratifs, logiciels de gestion, recrutement bénévoles, organisation événements. Webinaires et retours d'expérience.",
              "parentOrganization": {
                "@type": "Organization",
                "name": "Fédération française des clubs alpins et de montagne",
                "url": "https://www.ffcam.fr"
              },
              "knowsAbout": [
                "gestion club montagne",
                "outils collaboratifs clubs sportifs",
                "recrutement bénévoles club alpin",
                "organisation événements club FFCAM",
                "communication interne association sportive",
                "logiciel gestion club"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Webinaires gratuits gestion club FFCAM",
                "description": "Sessions d'échange trimestrielles sur la gestion de club : outils numériques, bénévoles, événements",
                "price": "0",
                "priceCurrency": "EUR"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased bg-white selection:bg-ffcam selection:text-white">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <div id="main-content" className="contents">
          {children}
        </div>
        {/* 100% privacy-first analytics */}
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
