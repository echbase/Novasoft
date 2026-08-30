import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-[3] flex flex-wrap items-center justify-between gap-4 border-t border-line px-[6vw] py-10 text-muted text-[13px] bg-[rgb(var(--bg-rgb)/.6)]">
      <div>© 2026 NovaSoft Ltd · Île Maurice</div>
      <nav className="footer-legal flex gap-5" aria-label="Liens légaux">
        <Link href="/mentions-legales/">Mentions légales</Link>
        <Link href="/confidentialite/">Confidentialité</Link>
      </nav>
      <div>Digital Xperience · Stratégie · IA · Code · Sécurité</div>
    </footer>
  );
}
