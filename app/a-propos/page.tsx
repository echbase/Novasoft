import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AboutPage from '@/components/solutions/AboutPage';

const title = 'À propos — NovaSoft Ltd · Digital Xperience';
const description = 'NovaSoft Ltd, studio digital à Maurice : sites, IA, intégrations et automatisation avec une approche Build → Integrate → Automate.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/a-propos/' },
  openGraph: { title, description, url: 'https://novasoft.mu/a-propos/', siteName: 'NovaSoft', locale: 'fr_FR', type: 'website', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'NovaSoft Ltd — Digital Xperience' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] },
  robots: process.env.VERCEL_ENV === 'production' ? { index: true, follow: true } : { index: false, follow: false },
};

export default function Page() {
  return <><Nav/><main id="contenu"><AboutPage/></main><Footer/></>;
}
