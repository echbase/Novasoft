import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import IntegrationsPage from '@/components/solutions/IntegrationsPage';

const title = 'Intégrations & API — NovaSoft · Île Maurice';
const description = 'APIs, synchronisation de catalogue et connexions métier : NovaSoft relie les outils et les données pour réduire la ressaisie et automatiser les flux utiles.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/integrations-api/' },
  openGraph: { title, description, url: 'https://novasoft.mu/integrations-api/', siteName: 'NovaSoft', locale: 'fr_FR', type: 'website', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'NovaSoft — Intégrations & API' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] },
  robots: process.env.VERCEL_ENV === 'production' ? { index: true, follow: true } : { index: false, follow: false },
};

export default function Page() {
  return <><Nav/><main id="contenu"><IntegrationsPage/></main><Footer/></>;
}
