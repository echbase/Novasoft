'use client';

import { useEffect } from 'react';

/*
 * Reveals au scroll — pattern du fichier de référence porté en hook :
 * le contenu reste visible si JS échoue (gating via la classe `js` sur <html>).
 * Volontairement sans Framer Motion : zéro dépendance, zéro contenu masqué
 * avant hydratation.
 */
export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
