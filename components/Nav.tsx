'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { OFFER } from '@/lib/site-offers';
import styles from './Nav.module.css';

const LINKS = [
  { href: '/', label: 'Accueil' },
  { href: OFFER.path, label: 'Sites & e-commerce' },
  { href: '/ia-automatisation/', label: 'IA & automatisation' },
  { href: '/integrations-api/', label: 'Intégrations & API' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/a-propos/', label: 'À propos' },
];

export default function Nav({ commerce: _commerce = false }: { commerce?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const current = (href: string) => {
    if (href === '/') return pathname === '/' ? 'page' as const : undefined;
    if (href.startsWith('/#')) return undefined;
    return pathname === href || pathname === href.replace(/\/$/, '') ? 'page' as const : undefined;
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Navigation principale">
        <a className="flex items-center no-underline" href="/">
          <img src="/logo-full.png" alt="NovaSoft, Digital Xperience" width={124} height={48} className="h-12 w-auto" />
        </a>
        <div className={`navlinks flex ${styles.links}`}>
          {LINKS.map((link) => (
            <a key={link.href} className="navlink" href={link.href} aria-current={current(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
        <a className={`cta-mini ${styles.cta}`} href="/#contact">Parler de mon projet</a>
        <button
          ref={toggle}
          className={`burger ${styles.toggle}`}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </nav>
      {open && (
        <div id="menu-mobile" className={`mobile-menu open ${styles.menu}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} aria-current={current(link.href)} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--primary mt-5 justify-center" href="/#contact" onClick={() => setOpen(false)}>
            Parler de mon projet
          </a>
        </div>
      )}
    </>
  );
}
