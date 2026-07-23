import Link from 'next/link';
import Footer from './Footer';

/*
 * Gabarit des pages légales : en-tête minimal (les ancres de la nav
 * principale n'ont pas de sens hors de la page d'accueil), contenu
 * éditorial étroit, footer commun.
 */
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="relative z-[2] flex items-center justify-between border-b border-line px-[6vw] py-4">
        <Link href="/" className="flex items-center no-underline">
          <img src="/logo-full.png" alt="NovaSoft — Digital Xperience" height={44} className="h-11 w-auto" />
        </Link>
        <Link href="/" className="navlink">
          ← Retour au site
        </Link>
      </header>
      <main id="contenu" className="relative z-[2] mx-auto max-w-[760px] px-[6vw] pb-24 pt-16">
        <span className="eyebrow">Informations légales</span>
        <h1 className="mt-3.5 font-display text-[clamp(30px,4.5vw,44px)] font-bold leading-[1.12] tracking-[-.015em]">
          {title}
        </h1>
        <p className="mt-3 text-[13px] text-muted">Dernière mise à jour : {updated}</p>
        <div className="legal-body mt-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}
