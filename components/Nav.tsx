'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

const LINKS = [
  { href: '#expertises', label: 'Expertises' },
  { href: '#methode', label: 'Méthode' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scrollspy : souligne la section visible */
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (s): s is Element => s !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Navigation principale">
        <a className="flex items-center gap-3 text-ink no-underline" href="#top">
          <Logo id="logo-nav" />
          <span>
            <b className="block font-display text-[19px] font-bold tracking-[.02em] leading-tight">
              NovaSoft
            </b>
            <span className="block text-muted text-[11px] tracking-[.14em] uppercase leading-tight">
              Digital Xperience
            </span>
          </span>
        </a>
        <div className="navlinks flex gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="navlink"
              href={l.href}
              aria-current={active === l.href ? 'true' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a className="cta-mini" href="#contact">
          Démarrer un projet
        </a>
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div id="menu-mobile" className={`mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="btn btn--primary mt-5 justify-center"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Démarrer un projet
        </a>
      </div>
    </>
  );
}
