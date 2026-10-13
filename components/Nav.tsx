'use client';
import { useEffect, useRef, useState } from 'react';
import { OFFER } from '@/lib/site-offers';
import styles from './Nav.module.css';
const SECTION_LINKS = [
  { href: '#expertises', label: 'Expertises' },
  { href: '#methode', label: 'Méthode' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
];
export default function Nav({ commerce = false }: { commerce?: boolean }) {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false), [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);
  const links = [{ href: OFFER.path, label: 'Sites internet & maintenance' }, ...SECTION_LINKS.map(l => ({ ...l, href: commerce && l.href !== '#contact' ? '/' + l.href : l.href }))];
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => {
    if (commerce || !('IntersectionObserver' in window)) return;
    const sections = SECTION_LINKS.map(l => document.querySelector(l.href)).filter((s): s is Element => s !== null);
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }), { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => observer.observe(s)); return () => observer.disconnect();
  }, [commerce]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  const current = (href: string) => commerce && href === OFFER.path ? 'page' as const : active === href ? 'location' as const : undefined;
  return <>
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Navigation principale">
      <a className="flex items-center no-underline" href={commerce ? '/' : '#top'}><img src="/logo-full.png" alt="NovaSoft, Digital Xperience" width={124} height={48} className="h-12 w-auto" /></a>
      <div className={`navlinks flex ${styles.links}`}>{links.map(l => <a key={l.href} className="navlink" href={l.href} aria-current={current(l.href)} style={commerce && l.href === OFFER.path ? { color: 'var(--text)' } : undefined}>{l.label}</a>)}</div>
      <a className={`cta-mini ${styles.cta}`} href="#contact">Parler de mon projet</a>
      <button ref={toggle} className={`burger ${styles.toggle}`} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)}><span /><span /><span /></button>
    </nav>
    {open && <div id="menu-mobile" className={`mobile-menu open ${styles.menu}`}>{links.map(l => <a key={l.href} href={l.href} aria-current={current(l.href)} onClick={() => setOpen(false)}>{l.label}</a>)}<a className="btn btn--primary mt-5 justify-center" href="#contact" onClick={() => setOpen(false)}>Parler de mon projet</a></div>}
  </>;
}
