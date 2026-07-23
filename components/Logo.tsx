/*
 * Emblème officiel NovaSoft — vectorisation fidèle du logo PNG fourni.
 * 3 branches continues (nœud + tige + arc épais), dégradé propre à chaque
 * branche, anneau intérieur sur les nœuds, 3 points dans les césures.
 * Couleurs dérivées des tokens (color-mix pour l'indigo et l'orange).
 */
export default function Logo({ id = 'g', size = 36 }: { id?: string; size?: number }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" width={size} height={size}>
      <defs>
        {/* Branche haute : magenta → violet */}
        <linearGradient id={`${id}-m`} x1="32" y1="34" x2="68" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--magenta)" />
          <stop offset="1" stopColor="var(--violet)" />
        </linearGradient>
        {/* Branche gauche : cyan clair → indigo */}
        <linearGradient id={`${id}-c`} x1="20" y1="50" x2="48" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--cyan)" />
          <stop offset="1" style={{ stopColor: 'color-mix(in srgb, var(--cyan) 40%, var(--violet))' }} />
        </linearGradient>
        {/* Branche droite : orange → ambre doré */}
        <linearGradient id={`${id}-a`} x1="74" y1="46" x2="82" y2="82" gradientUnits="userSpaceOnUse">
          <stop style={{ stopColor: 'color-mix(in srgb, var(--amber) 62%, var(--magenta))' }} />
          <stop offset="1" stopColor="var(--amber)" />
        </linearGradient>
      </defs>

      {/* Arcs épais (~66°) autour du centre (50,54), rayon 24, césures nettes */}
      <path d="M 36.9 33.9 A 24 24 0 0 1 63.1 33.9" stroke={`url(#${id}-m)`} strokeWidth="11" strokeLinecap="round" />
      <path d="M 26 52.7 A 24 24 0 0 0 39.1 75.4" stroke={`url(#${id}-c)`} strokeWidth="11" strokeLinecap="round" />
      <path d="M 60.9 75.4 A 24 24 0 0 0 74 52.7" stroke={`url(#${id}-a)`} strokeWidth="11" strokeLinecap="round" />

      {/* Tiges épaisses fondues entre nœud et arc */}
      <path d="M 50 31 L 50 22" stroke={`url(#${id}-m)`} strokeWidth="10" strokeLinecap="round" />
      <path d="M 28.4 66.5 L 21.4 70.5" stroke={`url(#${id}-c)`} strokeWidth="10" strokeLinecap="round" />
      <path d="M 71.6 66.5 L 78.6 70.5" stroke={`url(#${id}-a)`} strokeWidth="10" strokeLinecap="round" />

      {/* Points dans les césures (couleurs croisées, comme l'original) */}
      <circle cx="29.2" cy="42" r="3.8" fill="var(--cyan)" />
      <circle cx="70.8" cy="42" r="3.8" fill="var(--magenta)" />
      <circle cx="50" cy="78" r="3.8" fill="var(--amber)" />

      {/* Nœuds avec anneau intérieur */}
      <circle cx="50" cy="14" r="13" fill={`url(#${id}-m)`} />
      <circle cx="50" cy="14" r="7" stroke="rgba(0,0,0,.25)" strokeWidth="3" />
      <circle cx="15.4" cy="74" r="13" fill={`url(#${id}-c)`} />
      <circle cx="15.4" cy="74" r="7" stroke="rgba(0,0,0,.25)" strokeWidth="3" />
      <circle cx="84.6" cy="74" r="13" fill={`url(#${id}-a)`} />
      <circle cx="84.6" cy="74" r="7" stroke="rgba(0,0,0,.25)" strokeWidth="3" />
    </svg>
  );
}
