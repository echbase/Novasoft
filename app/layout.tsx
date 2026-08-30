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
  title: 'NovaSoft — Agents IA & automatisation métier · Île Maurice',
  description:
    "Studio digital à l'Île Maurice : agents IA, LLM, skills métier et automatisation, plateformes web & SaaS. Nous connectons l'IA à vos outils et vos processus.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'NovaSoft — Agents IA & automatisation métier',
    description:
      "Agents IA, automatisation métier, plateformes web & SaaS. Nous connectons l'IA à vos outils, vos données et vos processus.",
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
    title: 'NovaSoft — Agents IA & automatisation métier',
    description:
      "Agents IA, automatisation métier, plateformes web & SaaS. Nous connectons l'IA à vos outils, vos données et vos processus.",
    images: ['/og.jpg'],
  },
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
        "Studio digital mauricien : agents IA, LLM, skills métier et automatisation, plateformes web et SaaS, sécurité.",
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
          'Stratégie digitale',
          'Intelligence artificielle — agents, LLM, skills métier, automatisation',
          'Développement web, plateformes SaaS et APIs',
          'Sécurité et DevSecOps',
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
      name: 'NovaSoft — Agents IA & automatisation métier · Île Maurice',
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
