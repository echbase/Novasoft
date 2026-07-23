'use client';

import { useEffect } from 'react';

/*
 * Charge l'expérience scroll (Lenis + GSAP) en import dynamique :
 * - jamais si prefers-reduced-motion
 * - desktop pointeur précis uniquement (les effets sont desktop-only)
 * - après l'événement `load`, en temps idle → aucun coût sur le chemin
 *   critique (LCP/TBT), le bundle GSAP ne bloque jamais le chargement.
 */
export default function ScrollExperience() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const desktop =
      window.matchMedia('(min-width: 961px)').matches &&
      window.matchMedia('(pointer: fine)').matches;
    if (!desktop) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const start = () => {
      const idle: (fn: () => void) => void =
        'requestIdleCallback' in window
          ? (fn) => (window as Window & typeof globalThis).requestIdleCallback(() => fn())
          : (fn) => window.setTimeout(fn, 250);
      idle(async () => {
        if (cancelled) return;
        const [fx, emblem] = await Promise.all([
          import('@/lib/scrollFx'),
          import('@/lib/emblem3d'),
        ]);
        if (cancelled) return;
        const cleanFx = fx.init();
        const cleanEmblem = emblem.init();
        cleanup = () => {
          cleanFx();
          cleanEmblem();
        };
      });
    };

    if (document.readyState === 'complete') {
      start();
    } else {
      window.addEventListener('load', start, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('load', start);
      if (cleanup) cleanup();
    };
  }, []);

  return null;
}
