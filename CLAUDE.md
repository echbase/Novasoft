# CLAUDE.md — SITE VITRINE NOVASOFT

## CONTEXTE PROJET

Site vitrine officiel de **NovaSoft Ltd** (Île Maurice) — studio digital : stratégie, IA, développement web/SaaS, cybersécurité. Baseline : **"Digital Xperience"**.

**`novasoft-site-vitrine.html` (à la racine) est la référence de design absolue.** Prototype validé : palette, typos, structure, textes FR, animations. Mission : le reconstruire en production Next.js, pas réinventer. Toute déviation = amélioration de finition uniquement.

## STACK

- Next.js 14+ App Router, TypeScript, Tailwind CSS
- Export statique (`output: 'export'`) — pas de backend, contact en `mailto:`
- Framer Motion autorisé pour les reveals uniquement
- Polices via `next/font` : Space Grotesk (display) + Manrope (corps), repli système

## DESIGN TOKENS — SOURCE DE VÉRITÉ

Définir ces tokens dans `tailwind.config` / CSS variables AVANT tout composant.
**Interdiction absolue de valeur brute (hex, px arbitraire) dans les composants.**

| Token | Valeur |
|---|---|
| bg | #07070F |
| bg-soft | #0C0C18 |
| glass | rgba(16,16,30,.55) |
| line | rgba(255,255,255,.09) |
| text | #F2F3F7 |
| muted | #9A9DB0 |
| magenta | #E619D6 |
| violet | #7B3FE4 |
| cyan | #2CB8EC |
| amber | #FFB320 |
| radius-card | 20px |
| radius-pill | 99px |

Dégradé signature : magenta → violet → cyan → ambre (95deg).

## ARCHITECTURE COMPOSANTS

```
components/
  Nav.tsx
  Hero.tsx
  AuroraBackground.tsx   ← shader WebGL (signature 1)
  AIGenPanel.tsx         ← IA qui conçoit en direct (signature 2)
  Marquee.tsx
  ExpertiseGrid.tsx
  Method.tsx
  Stats.tsx
  Works.tsx              ← 3 placeholders Projet 01/02/03, props prêtes (image, tag, titre, desc, lien)
  Contact.tsx
  Footer.tsx
```

## LES 2 SIGNATURES (non négociables)

1. **AuroraBackground** : porter le shader fragment (fbm noise) du fichier de
   référence en composant canvas React. Demi-résolution, `powerPreference:
   'low-power'`, vignette + grain SVG. Fallback CSS dégradés radiaux si WebGL KO.
2. **AIGenPanel** : fenêtre navigateur, prompt qui se tape en boucle, blocs qui
   apparaissent avec shimmer sur grille 6 col, dissolution, layout suivant.
   Les 3 layouts + timings sont dans le fichier de référence.

## RÈGLES QUALITÉ (leçons apprises)

- **Mobile-first strict.** Jamais de `blur()` massif sur grands éléments fixes,
  jamais de `backdrop-filter` généralisé → crash WebView = page blanche.
- Contenu visible même si JS échoue (reveals conditionnés à une classe `js`).
- `prefers-reduced-motion` : shader figé, reveals off, panneau IA statique.
- Lighthouse mobile ≥ 90 Performance et Accessibility. Focus clavier visible.
- SEO : lang="fr", metadata Next (title, description, OG), sitemap, favicon tri-nodal.
- Utiliser le skill **ui-ux-pro-max** pour l'audit final (contrastes, cibles
  tactiles, états manquants) et **frontend-design** pour la finition esthétique.

## HORS PÉRIMÈTRE

Pas de CMS, backend, blog, multilingue. Ne pas inventer de vrais projets dans
Works. Ne pas toucher palette ni typos.

## WORKFLOW

1. **PLAN AVANT CODE** : proposer le plan de build (ordre des composants,
   points de risque) et attendre validation.
2. Ordre de build : tokens → AuroraBackground → Hero + AIGenPanel → validation
   visuelle → reste des sections → audit ui-ux-pro-max → Lighthouse.
3. Tenir `STATE.md` à jour à chaque session (fait / en cours / prochain pas).
4. Commits atomiques par composant.
