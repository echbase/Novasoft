'use client';

import { useRef } from 'react';

/* Halo qui suit le curseur sur les cartes — détail signature des interfaces haut de gamme. */
export default function SpotlightCard({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <article ref={ref} className={className} onMouseMove={onMove}>
      <span className="spotlight" aria-hidden="true" />
      {children}
    </article>
  );
}
