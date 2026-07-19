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
  title: 'NovaSoft — Digital Xperience',
  description:
    "Studio digital à l'Île Maurice : stratégie, intelligence artificielle, développement web & SaaS, cybersécurité. Des expériences numériques de niveau senior, augmentées par l'IA.",
  openGraph: {
    title: 'NovaSoft — Digital Xperience',
    description:
      "Studio digital à l'Île Maurice : stratégie, IA, développement web & SaaS, cybersécurité.",
    url: 'https://novasoft.mu',
    siteName: 'NovaSoft',
    locale: 'fr_FR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#07070F',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
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
