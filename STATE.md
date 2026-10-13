# STATE — Site vitrine NovaSoft

Dernière mise à jour : 2026-10-13 — preview commerciale refactorée et auditée

## ✅ Fait

### Preview commerciale 13 octobre 2026 — non publiée en production

- Architecture commerciale : navigation restructurée autour de trois offres lisibles : Sites & e-commerce, IA & automatisation, Intégrations & API ; Réalisations, À propos et Contact complètent le parcours.
- Accueil : hero orienté bénéfices avec Command Center NovaSoft natif, démonstration visuelle de l'écosystème, bénéfices business et accès directs aux trois offres.
- Sites & e-commerce : page /sites-internet-maintenance/ avec offre approuvée 2 490 € HT, maintenances optionnelles 129 € / 299 € HT/mois, comparateur décisionnel desktop/mobile, bénéfices de refonte, FAQ, conditions et bonus partenaires RoG Hunting conformes à la suite NovaSoft 1.1.4.
- IA & automatisation : nouvelle page /ia-automatisation/ avec démonstration Jarvis / agents, usages concrets et circuit demande → analyse → validation → résultat.
- Intégrations & API : nouvelle page /integrations-api/ avec schéma API natif, cas d'usage, exemple revendeur RoG Hunting et limites explicites.
- À propos : nouvelle page /a-propos/, principes Build → Integrate → Automate et identité légale.
- Contact : route serveur /api/contact créée mais désactivée par défaut. Activation conditionnée par confidentialité + Resend + Turnstile + destinations autorisées. La preview ne peut envoyer aucun message.
- SEO / métadonnées : titles, descriptions, Open Graph/Twitter, canonicals et sitemap étendus. Toute preview est noindex, nofollow.
- Confidentialité : notice rendue cohérente avec le formulaire actif/inactif.
- Responsive / accessibilité : Playwright + axe sur 7 routes en desktop 1440 px et mobile 390 px : 14/14 HTTP 200, aucun overflow, un seul H1 par page, aucune erreur console et aucune violation axe.
- Lighthouse mobile preview : accueil 94, e-commerce 89, IA 90, API 94, À propos 96 en Performance ; Accessibilité 100 et Bonnes pratiques 100. CLS = 0 partout. SEO 69 uniquement à cause du noindex volontaire de la preview.
- Audit fonctionnel : aucun lien de route testé cassé, aucune image cassée, sélection de maintenance correctement propagée au formulaire ; POST /api/contact retourne 503 contrôlé tant que l'envoi est fermé.
- Logo partenaire officiel RoG Hunting × NovaSoft vérifié au build par SHA-256, aucune transformation.
- Branche de travail : preview/sites-maintenance-20261013. La production novasoft.mu reste inchangée.

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
- **robots.txt** : `app/robots.ts` (route statique Next), autorise tout et déclare
  le sitemap — il manquait, la production renvoyait 404.
- **SEO / GEO** (2026-08-30) : title porteur de mots-clés (58 car., était 28 sans mot-clé),
  description ramenée à 157 car., canonical, JSON-LD `@graph`
  (Organization + ProfessionalService + WebPage daté + WebSite) avec les données
  réelles des mentions légales, image OG 1200×630 générée dans la charte
  (`scripts/og.html` → `public/og.jpg`) + `summary_large_image`,
  dimensions intrinsèques du logo. Séparateurs `—` des étapes Méthode et du footer
  passés au point médian (cohérence avec le reste du site).
  Mesures Google PageSpeed : mobile 97 / desktop 100, LCP 1,9 s, CLS 0, TBT 0 ms.
  **Reste à faire côté client : créer la propriété Search Console et soumettre le sitemap.**
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

- Validation visuelle finale de Ylliano sur la preview.
- Aucun déploiement production autorisé à ce stade.

## ⏭️ Prochain pas

1. Validation explicite de la preview par Ylliano.
2. Décider si le formulaire doit être activé ; si oui, confirmer confidentialité, destinataire, expéditeur NovaSoft, Resend et Turnstile puis effectuer un test uniquement vers l'adresse autorisée.
3. Revalider la fiscalité avant toute affirmation générale supplémentaire ; les prix publics restent HT et les taxes sont précisées au devis.
4. Vérifier le statut actuel de Google Search Console avant soumission du sitemap si ce point n'a pas déjà été traité hors de ce dépôt.
5. Après validation uniquement : fusion contrôlée et publication production, avec rollback disponible.
