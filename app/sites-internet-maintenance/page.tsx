import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CommercePage from '@/components/commerce/CommercePage';
import { contactConfigured } from '@/lib/contact-config';
import { OFFER, euros } from '@/lib/site-offers';
export const metadata: Metadata = {
  title: 'Création e-commerce & maintenance — NovaSoft · Île Maurice',
  description: `Création ou refonte e-commerce à ${euros(OFFER.creation)} HT. Maintenance optionnelle à ${euros(OFFER.essential)} ou ${euros(OFFER.google)} HT/mois. Découvrez le périmètre et parlez de votre projet.`,
  alternates: { canonical: OFFER.path },
  openGraph: { title: 'Une boutique plus moderne. Des achats plus simples. — NovaSoft', description: 'Création / refonte e-commerce et maintenance optionnelle. Un périmètre clair, une proposition adaptée à votre activité.', url: 'https://novasoft.mu' + OFFER.path, siteName: 'NovaSoft', locale: 'fr_FR', type: 'website', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'NovaSoft · Sites & e-commerce' }] },
  twitter: { card: 'summary_large_image', title: 'Sites & e-commerce — NovaSoft', description: 'Création ou refonte e-commerce, maintenance optionnelle et bases préparées pour le référencement Google.', images: ['/og.jpg'] },
  robots: process.env.VERCEL_ENV === 'production' ? { index: true, follow: true } : { index: false, follow: false },
};
export default function SitesInternetMaintenance() {
  const enabled = contactConfigured();
  return <><Nav commerce /><main id="contenu"><CommercePage formEnabled={enabled} siteKey={enabled ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY : undefined} preview={process.env.VERCEL_ENV !== 'production'} /></main><Footer /></>;
}
