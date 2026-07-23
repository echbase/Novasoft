# STATE — Site vitrine NovaSoft

Dernière mise à jour : 2026-07-23

## ✅ Fait

- **Setup** : 22 skills en scope projet (`.claude/skills/`), CLAUDE.md, HTML de référence committés.
- **Scaffold** : Next.js 14.2 App Router + TypeScript + Tailwind, `output: 'export'`,
  polices `next/font` (Space Grotesk + Manrope), metadata FR + OG + sitemap + favicon tri-nodal.
- **Tokens** : architecture 3 couches dans `app/globals.css` (primitives → sémantiques → composants),
  mapping Tailwind dans `tailwind.config.ts`. Zéro hex brut dans les composants
  (vérifié via `validate-tokens.cjs` : 0 violation).
- **Signature 1 — AuroraBackground** : shader fbm porté à l'identique, demi-résolution,
  `low-power`, grain SVG, fallback CSS si WebGL KO, statique si reduced-motion.
  Palette réactive au scroll (uniform `s` lissé : magenta → cyan → ambre).
  Optimisation perf : 1re frame immédiate, boucle 30 fps démarrée à la première
  interaction, pause si onglet masqué.
- **Signature 2 — AIGenPanel** : 3 layouts + timings exacts de la référence
  (frappe 34 ms, apparition 240+i×260 ms, dissolution i×90 ms), statique si reduced-motion.
- **Expérience scroll desktop** : Lenis + GSAP ScrollTrigger chargés en dynamique
  (post-`load`, idle, desktop pointeur fin uniquement) — section Méthode pinée au scrub,
  parallax des index éditoriaux, CTA magnétiques. First Load JS mobile inchangé.
- **Composants** : Nav (scrollspy + menu mobile accessible), Hero, Marquee (fondu latéral),
  ExpertiseGrid (icônes SVG custom + spotlight curseur), Method (ligne gradient),
  Stats (compteurs tabular-nums), Contact (badge dispo),
  Footer (horloge Port-Louis GMT+4), RevealObserver (IO, contenu visible sans JS).
- **Logo officiel** : PNG original complet, non retouché (choix explicite du client),
  réassemblé au prebuild depuis `logo-parts/` avec vérification md5 stricte par fragment
  et échec dur du build si l'octet-à-octet n'est pas exact (20286 octets,
  md5 `01a12fdd24d02c27d5afd5f79ff5ab6b`). Original 2400×2400 archivé dans `assets-brand/`.
  Miroir de production auto-vérifié : projet Vercel `novasoft-assets`.
- **Réalisations — 3 vrais projets** (2026-07-23) : NovaImmo (novaimmo.mu),
  RoG Hunting (roghunting.com), TradyGo (tradygo.io). Présentation « fenêtres navigateur »
  (écho du panneau IA) : chrome + pastille « en ligne », scènes SVG animées sur mesure
  (skyline qui s'élève / radar GPS avec échos / chandeliers + courbe qui se trace),
  tilt 3D au curseur (`ProjectCard`), carte entière cliquable, tokens uniquement.
- **Mesures (build statique servi localement)** :
  - Lighthouse mobile : **Performance 92 · Accessibilité 100** · CLS 0 · TBT 30 ms
  - First Load JS : 90,9 kB
  - Validation visuelle desktop 1440px + mobile 390px (screenshots Playwright)

## 🔄 En cours

- Déploiement preview Vercel (projet `novasoft-site`, team `echbases-projects`) via agent
  à transcription vérifiée — les gros transferts inline corrompaient le base64 ;
  le prebuild md5-vérifié empêche désormais toute mise en ligne d'un logo corrompu.

## ⏭️ Prochain pas

1. **Recommandé fortement** : connecter le projet Vercel au repo GitHub
   (vercel.com/echbases-projects/novasoft-site/settings/git) — supprime définitivement
   l'étape fragile de transfert de fichiers.
2. Audit ui-ux-pro-max complet sur device réel (le score perf local est mesuré
   en WebGL logiciel — sur GPU réel, le shader est bien plus léger).
3. Production + domaine novasoft.mu.
4. OG image dédiée (1200×630) si souhaité.
