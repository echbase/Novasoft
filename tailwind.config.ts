import type { Config } from 'tailwindcss';

/**
 * Mapping Tailwind → tokens CSS (source de vérité : app/globals.css).
 * Aucune valeur brute (hex, px arbitraire) ne doit apparaître dans les composants.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        panel: 'var(--panel)',
        glass: 'var(--glass)',
        line: 'var(--line)',
        ink: 'var(--text)',
        muted: 'var(--muted)',
        magenta: 'var(--magenta)',
        violet: 'var(--violet)',
        cyan: 'var(--cyan)',
        amber: 'var(--amber)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        pill: 'var(--radius-pill)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['var(--font-body)', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
