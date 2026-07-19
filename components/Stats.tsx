'use client';

import { useEffect, useRef } from 'react';

const STATS = [
  { value: 12, label: 'Produits & plateformes livrés', delay: 'd1' },
  { value: 4, label: "Domaines d'expertise", delay: 'd2' },
  { value: 100, label: '% conçu & codé en interne', delay: 'd3' },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = Number(el.getAttribute('data-count') || 0);
          if (reduced) {
            el.textContent = String(target);
          } else {
            const t0 = performance.now();
            const tick = (t: number) => {
              const k = Math.min(1, (t - t0) / 1400);
              el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
              if (k < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    root.querySelectorAll('[data-count]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section aria-label="Chiffres clés" className="px-[6vw] py-[110px]">
      <div
        ref={ref}
        className="grid gap-[22px] text-center grid-cols-[repeat(auto-fit,minmax(180px,1fr))]"
      >
        {STATS.map((s) => (
          <div className={`stat reveal ${s.delay}`} key={s.label}>
            <b data-count={s.value}>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
