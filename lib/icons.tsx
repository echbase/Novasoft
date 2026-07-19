/*
 * Icônes SVG dessinées sur mesure (24×24, trait 1.5) — remplacent les
 * glyphes unicode du prototype (règle ui-ux-pro-max : jamais d'emoji/glyphe
 * comme icône structurelle). Trait en currentColor pour hériter du thème.
 */

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function IconStrategy() {
  return (
    <svg {...base}>
      <path d="M12 3l7 9-7 9-7-9z" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 5.5v4.3M12 14.2v4.3" opacity=".45" />
    </svg>
  );
}

export function IconAI() {
  return (
    <svg {...base}>
      <path d="M12 3.5l7 4v9l-7 4-7-4v-9z" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="7" r="1.1" />
      <circle cx="7.7" cy="14.4" r="1.1" />
      <circle cx="16.3" cy="14.4" r="1.1" />
      <path d="M12 8.1v2.3M11 12.9l-2.3 1M13 12.9l2.3 1" opacity=".55" />
    </svg>
  );
}

export function IconCode() {
  return (
    <svg {...base}>
      <path d="M8.5 5L3 12l5.5 7" />
      <path d="M15.5 5L21 12l-5.5 7" />
      <path d="M13.2 4.5l-2.4 15" opacity=".45" />
    </svg>
  );
}

export function IconShield() {
  return (
    <svg {...base}>
      <path d="M12 3l7 2.8v5.4c0 4.3-2.9 7.4-7 9.8-4.1-2.4-7-5.5-7-9.8V5.8z" />
      <path d="M9 11.8l2.1 2.2 3.9-4.2" />
    </svg>
  );
}

export function IconArrow() {
  return (
    <svg {...base} width={16} height={16}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
