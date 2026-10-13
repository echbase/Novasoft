import Link from 'next/link';
import { emailLink, CONTACT_MAIL } from '@/lib/visual-assets';

export default function Footer() {
  return (
    <footer className="relative z-[3] border-t border-line bg-[rgb(var(--bg-rgb)/.85)] px-[6vw] py-9 text-muted text-[13px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div><b className="font-display text-[18px] text-text">NovaSoft</b><span className="ml-2 text-[11px]">Digital Xperience</span><small className="mt-1 block">© 2026 NovaSoft Ltd · Île Maurice</small></div>
        <nav aria-label="Navigation du pied de page" className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link href="/sites-internet-maintenance/">Sites</Link><Link href="/ia-automatisation/">IA</Link><Link href="/integrations-api/">API</Link><Link href="/a-propos/">À propos</Link>
          <Link href="/mentions-legales/">Mentions légales</Link><Link href="/confidentialite/">Confidentialité</Link>
        </nav>
        <a className="font-display text-[13px] text-text underline underline-offset-4" href={emailLink()}>{CONTACT_MAIL}</a>
      </div>
    </footer>
  );
}
