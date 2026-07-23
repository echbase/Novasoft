'use client';

import { useRef } from 'react';

/*
 * Carte projet cliquable avec tilt 3D léger suivant le curseur.
 * Le tilt n'existe que sur pointeur précis (mousemove) ; au clavier et
 * au tactile la carte reste un lien ordinaire, parfaitement accessible.
 */
export default function ProjectCard({
  href,
  label,
  className = '',
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 4).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`);
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <a
      ref={ref}
      className={`proj ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="proj-light" aria-hidden="true" />
      {children}
    </a>
  );
}
