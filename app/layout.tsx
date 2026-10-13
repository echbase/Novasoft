import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import Script from 'next/script';
import AuroraBackground from '@/components/AuroraBackground';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://novasoft.mu'),
  title: 'NovaSoft — Sites, IA & automatisation · Île Maurice',
  description:
    "Studio digital à l'Île Maurice : sites et e-commerce, IA, automatisation, intégrations API et applications métier. Des solutions pensées pour vendre, simplifier et faire gagner du temps.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'NovaSoft — Sites, IA & automatisation',
    description:
      "Sites et e-commerce, agents IA, automatisation et intégrations API. NovaSoft conçoit des solutions digitales utiles, modernes et maintenables.",
    url: 'https://novasoft.mu',
    siteName: 'NovaSoft',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'NovaSoft — Digital Xperience · Studio digital à l\'Île Maurice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaSoft — Sites, IA & automatisation',
    description:
      "Sites et e-commerce, agents IA, automatisation et intégrations API. NovaSoft conçoit des solutions digitales utiles, modernes et maintenables.",
    images: ['/og.jpg'],
  },
  robots: process.env.VERCEL_ENV === 'production'
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

/*
 * Données structurées — l'entité NovaSoft Ltd, pour que Google la distingue
 * des autres sociétés « Novasoft » et la relie à ses coordonnées réelles.
 * Informations reprises telles quelles des mentions légales.
 */
const BUILD_DATE = new Date().toISOString().slice(0, 10);

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://novasoft.mu/#organization',
      name: 'NovaSoft Ltd',
      alternateName: 'NovaSoft',
      url: 'https://novasoft.mu/',
      logo: 'https://novasoft.mu/logo-full.png',
      image: 'https://novasoft.mu/og.jpg',
      slogan: 'Digital Xperience',
      description:
        "Studio digital mauricien : sites et e-commerce, agents IA, automatisation, intégrations API, applications métier et sécurité.",
      email: 'support@novasoft.mu',
      identifier: { '@type': 'PropertyValue', name: 'BRN', value: 'C25226236' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pereybere',
        postalCode: '30546',
        addressCountry: 'MU',
      },
      areaServed: [
        { '@type': 'Country', name: 'Maurice' },
        { '@type': 'Place', name: 'International' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'support@novasoft.mu',
        availableLanguage: ['fr', 'en'],
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://novasoft.mu/#service',
      name: 'NovaSoft',
      parentOrganization: { '@id': 'https://novasoft.mu/#organization' },
      url: 'https://novasoft.mu/',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pereybere',
        postalCode: '30546',
        addressCountry: 'MU',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Expertises',
        itemListElement: [
          'Création et refonte de sites internet et e-commerce',
          'Intelligence artificielle — agents, assistants et automatisation métier',
          'Intégrations API, synchronisation de données et workflows',
          'Développement web, plateformes SaaS et applications métier',
          'Maintenance, sécurité et évolution',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://novasoft.mu/#webpage',
      url: 'https://novasoft.mu/',
      name: 'NovaSoft — Sites, IA & automatisation · Île Maurice',
      inLanguage: 'fr-FR',
      isPartOf: { '@id': 'https://novasoft.mu/#website' },
      about: { '@id': 'https://novasoft.mu/#organization' },
      primaryImageOfPage: 'https://novasoft.mu/og.jpg',
      dateModified: BUILD_DATE,
    },
    {
      '@type': 'WebSite',
      '@id': 'https://novasoft.mu/#website',
      url: 'https://novasoft.mu/',
      name: 'NovaSoft',
      inLanguage: 'fr-FR',
      publisher: { '@id': 'https://novasoft.mu/#organization' },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: '#07070F',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js');`}
        </Script>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}
