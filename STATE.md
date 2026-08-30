# STATE — Site vitrine NovaSoft

Dernière mise à jour : 2026-08-30 (2)

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
- **Réalisations — 3 vrais projets** : NovaImmo (novaimmo.mu),
  RoG Hunting (roghunting.com), NaturaSell (naturasell.fr — a remplacé TradyGo
  le 2026-08-30, tradygo.io n'étant plus en ligne). Présentation « fenêtres navigateur »
  (écho du panneau IA) : chrome + pastille « en ligne », scènes SVG animées sur mesure
  (skyline qui s'élève / radar GPS avec échos / vitrine d'annonces outdoor sur
  courbes de niveau avec pastille « enchère flash »),
  tilt 3D au curseur (`ProjectCard`), carte entière cliquable, tokens uniquement.
- **Pages légales** : `/mentions-legales` (NovaSoft Ltd, siège Pereybere, BRN C25226236,
  site édité sur novasoft.mu) et `/confidentialite` (cookies), liens footer, entrées sitemap.
- **Logo néon v2** : version haute qualité fournie par le client (texte blanc lisible),
  artefact `public/logo-full.png` régénéré par le prebuild md5-vérifié.
- **Contact** : `support@novasoft.mu` (CTA contact + pages légales).
- **Positionnement — agents IA / intégration** (2026-08-30) : reformulation du wording
  sans toucher au design ni à l'architecture one-page. Hero, carte IA
  (tag `Agents · LLM · Skills · Automatisation`), carte Développement (build vs intégration),
  étape 01 de la Méthode, sub des Réalisations + ligne `stack` par projet,
  prompts du panneau IA (ils vendaient « l'IA qui fabrique des sites »),
  périmètre Maurice + international, marquee et metadata.
  Nouveau composant `Approach.tsx` rendu dans la section Expertises (donc pas de
  section ni d'entrée de nav supplémentaire) : bloc « L'IA sans complexité inutile »
  + les 3 modes Build · Integrate · Automate, puis une bande de 5 cas d'usage.
  Social Hub volontairement non ajouté (choix client : R&D, pas produit commercial).
- **Déploiement** : projet Vercel connecté au repo GitHub — chaque push redéploie,
  plus aucun transfert de fichiers manuel.
- **Social Hub** (sous-projet Python `social-hub/`, Phase 1) : scaffold, modèles,
  connecteur Emergent en mock, connecteur Meta dry-run verrouillé.
  Voir `social-hub/STATE.md` pour son état détaillé.
- **Mesures (build statique servi localement)** :
  - Lighthouse mobile : **Performance 92 · Accessibilité 100** · CLS 0 · TBT 30 ms
  - First Load JS : 90,9 kB
  - Validation visuelle desktop 1440px + mobile 390px (screenshots Playwright)
  - Build vérifié le 2026-08-19 : `npm ci` + `npm run build` OK, 8 pages statiques,
    First Load JS 99,2 kB sur `/` (87,5 kB partagés)

## 🔄 En cours

- Rien.

## ⏭️ Prochain pas

1. Audit ui-ux-pro-max complet sur device réel (le score perf local est mesuré
   en WebGL logiciel — sur GPU réel, le shader est bien plus léger).
2. Production + domaine novasoft.mu.
3. OG image dédiée (1200×630) si souhaité.
