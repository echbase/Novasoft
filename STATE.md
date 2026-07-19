# STATE — Site vitrine NovaSoft

Dernière mise à jour : 2026-07-19

## ✅ Fait

- **Setup** : 22 skills en scope projet (`.claude/skills/`), CLAUDE.md, HTML de référence committés.
- **Scaffold** : Next.js 14.2 App Router + TypeScript + Tailwind, `output: 'export'`,
  polices `next/font` (Space Grotesk + Manrope), metadata FR + OG + sitemap + favicon tri-nodal.
- **Tokens** : architecture 3 couches dans `app/globals.css` (primitives → sémantiques → composants),
  mapping Tailwind dans `tailwind.config.ts`. Zéro hex brut dans les composants
  (vérifié via `validate-tokens.cjs` : 0 violation).
- **Signature 1 — AuroraBackground** : shader fbm porté à l'identique, demi-résolution,
  `low-power`, grain SVG, fallback CSS si WebGL KO, statique si reduced-motion.
  Optimisation perf : 1re frame immédiate, boucle 30 fps démarrée à la première
  interaction, pause si onglet masqué.
- **Signature 2 — AIGenPanel** : 3 layouts + timings exacts de la référence
  (frappe 34 ms, apparition 240+i×260 ms, dissolution i×90 ms), statique si reduced-motion.
- **Composants** : Nav (scrollspy + menu mobile accessible), Hero, Marquee (fondu latéral),
  ExpertiseGrid (icônes SVG custom + spotlight curseur), Method (ligne gradient),
  Stats (compteurs tabular-nums), Works (placeholders props prêtes), Contact (badge dispo),
  Footer (horloge Port-Louis GMT+4), RevealObserver (IO, contenu visible sans JS).
- **Élévations vs prototype** : menu mobile (absent du prototype), icônes SVG au lieu des
  glyphes unicode, spotlight curseur sur cartes, index de section éditoriaux (01/02/03),
  scrollspy nav, skip-link, `text-wrap: balance`, mask fondu sur marquee.
- **Mesures (build statique servi localement)** :
  - Lighthouse mobile : **Performance 92 · Accessibilité 100** · CLS 0 · TBT 30 ms
  - First Load JS : 90,7 kB
  - Validation visuelle desktop 1440px + mobile 390px (screenshots Playwright)

## 🔄 En cours

- Rien — build complet livré et poussé.

## ⏭️ Prochain pas

1. Remplacer les placeholders Works (Projet 01/02/03) par les vrais projets (props prêtes :
   `image`, `tag`, `title`, `desc`, `href`).
2. Audit ui-ux-pro-max complet sur device réel (le score perf local est mesuré
   en WebGL logiciel — sur GPU réel, le shader est bien plus léger).
3. Déploiement (hébergeur statique au choix) + domaine novasoft.mu.
4. OG image dédiée (1200×630) si souhaité.
