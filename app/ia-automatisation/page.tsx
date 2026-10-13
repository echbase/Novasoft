import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AIPage from '@/components/solutions/AIPage';

const title = 'IA & automatisation — NovaSoft · Île Maurice';
const description = 'Agents IA, assistants de travail et automatisations métier : NovaSoft aide à réduire les tâches répétitives et à connecter l’IA aux outils existants.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ia-automatisation/' },
  openGraph: { title, description, url: 'https://novasoft.mu/ia-automatisation/', siteName: 'NovaSoft', locale: 'fr_FR', type: 'website', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'NovaSoft — IA & automatisation' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] },
  robots: process.env.VERCEL_ENV === 'production' ? { index: true, follow: true } : { index: false, follow: false },
};

export default function Page() {
  return <><Nav/><main id="contenu"><AIPage/></main><Footer/></>;
}
