/*
 * Emblème officiel NovaSoft — version vectorielle du logo fourni :
 * 3 nœuds (magenta, cyan, ambre) reliés par 3 arcs en dégradé,
 * 3 points intermédiaires dans les césures. Rendu net à toute densité
 * d'écran, couleurs héritées des tokens de la charte.
 */
export default function Logo({ id = 'g', size = 36 }: { id?: string; size?: number }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" width={size} height={size}>
      <defs>
        <linearGradient id={`${id}-m`} x1="30" y1="30" x2="72" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--magenta)" />
          <stop offset="1" stopColor="var(--violet)" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="20" y1="48" x2="46" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--cyan)" />
          <stop offset="1" stopColor="var(--violet)" />
        </linearGradient>
        <linearGradient id={`${id}-a`} x1="86" y1="84" x2="60" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--amber)" />
          <stop offset="1" stopColor="var(--magenta)" />
        </linearGradient>
      </defs>

      {/* Arcs brisés autour du centre (50,54), rayon 24 */}
      <path d="M 34.6 35.6 A 24 24 0 0 1 65.4 35.6" stroke={`url(#${id}-m)`} strokeWidth="9" strokeLinecap="round" />
      <path d="M 26.4 49.8 A 24 24 0 0 0 41.8 76.6" stroke={`url(#${id}-c)`} strokeWidth="9" strokeLinecap="round" />
      <path d="M 58.2 76.6 A 24 24 0 0 0 73.6 49.8" stroke={`url(#${id}-a)`} strokeWidth="9" strokeLinecap="round" />

      {/* Points intermédiaires dans les césures */}
      <circle cx="29.2" cy="42" r="3.6" fill="var(--cyan)" />
      <circle cx="70.8" cy="42" r="3.6" fill="var(--magenta)" />
      <circle cx="50" cy="78" r="3.6" fill="var(--amber)" />

      {/* Tiges nœud → arc */}
      <path d="M 50 24 L 50 31" stroke={`url(#${id}-m)`} strokeWidth="7" strokeLinecap="round" />
      <path d="M 22 69 L 28.5 64.5" stroke={`url(#${id}-c)`} strokeWidth="7" strokeLinecap="round" />
      <path d="M 78 69 L 71.5 64.5" stroke={`url(#${id}-a)`} strokeWidth="7" strokeLinecap="round" />

      {/* Nœuds avec anneau intérieur */}
      <circle cx="50" cy="14" r="12" fill={`url(#${id}-m)`} />
      <circle cx="50" cy="14" r="6.6" stroke="rgba(0,0,0,.22)" strokeWidth="2.6" />
      <circle cx="17.5" cy="74" r="12" fill={`url(#${id}-c)`} />
      <circle cx="17.5" cy="74" r="6.6" stroke="rgba(0,0,0,.22)" strokeWidth="2.6" />
      <circle cx="82.5" cy="74" r="12" fill={`url(#${id}-a)`} />
      <circle cx="82.5" cy="74" r="6.6" stroke="rgba(0,0,0,.22)" strokeWidth="2.6" />
    </svg>
  );
}
