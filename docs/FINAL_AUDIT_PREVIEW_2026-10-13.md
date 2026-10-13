# NovaSoft — Audit final de la prévisualisation commerciale

Date : 13 octobre 2026
Branche : preview/sites-maintenance-20261013
Production : inchangée

## Objectif

Transformer le site vitrine existant en parcours commercial plus lisible et plus vendeur, sans changer inutilement la stack, sans modifier les maîtres mail/PDF ElectroHunt et sans publier de promesse de ventes ou de classement Google.

## Architecture finale

- Accueil
- Sites & e-commerce
- IA & automatisation
- Intégrations & API
- Réalisations
- À propos
- Contact

Routes auditées : / ; /sites-internet-maintenance/ ; /ia-automatisation/ ; /integrations-api/ ; /a-propos/ ; /confidentialite/ ; /mentions-legales/.

## Offre e-commerce contrôlée

- Création / refonte e-commerce : 2 490 € HT
- Maintenance essentielle : 129 € HT/mois
- Maintenance + référencement Google : 299 € HT/mois
- Bonus partenaires éligibles : ChatGPT 250 € + connexion RoG Hunting 250 €
- Condition bonus : devis accepté par écrit dans les 7 jours calendaires suivant son envoi
- Paiement proposé : 50 % à la commande / 50 % à la livraison
- Maintenance optionnelle et non cumulative
- Pas de garantie de ventes ou de classement Google
- Taxes précisées au devis ; TVA ElectroHunt non généralisée

## Audit navigateur Playwright + axe

Deux viewports : desktop 1440 × 1000 et mobile 390 × 844.

Résultat final :
- 14 vues testées
- HTTP 200 : 14 / 14
- H1 unique : 14 / 14
- Débordement horizontal : 0
- Erreurs console / page : 0
- Images cassées : 0
- Violations axe : 0
- Menu mobile : ouverture, aria-expanded et liens validés

Anomalies découvertes puis corrigées :
- overflow mobile de 41 px sur l'orbite décorative e-commerce
- saut de niveau de titre sur À propos
- métadonnées Twitter anciennes
- canonical des pages légales hérité de l'accueil
- noindex manquant sur l'accueil de preview

## Lighthouse mobile — preview protégée

| Page | Performance | Accessibilité | Bonnes pratiques | SEO | FCP | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Accueil final | 94 | 100 | 100 | 69* | 1,1 s | 2,7 s | 130 ms | 0 |
| Sites & e-commerce | 89 | 100 | 100 | 69* | 0,9 s | 2,7 s | 320 ms | 0 |
| IA & automatisation | 90 | 100 | 100 | 69* | 1,0 s | 2,5 s | 330 ms | 0 |
| Intégrations & API | 94 | 100 | 100 | 69* | 0,9 s | 1,9 s | 260 ms | 0 |
| À propos | 96 | 100 | 100 | 69* | 1,1 s | 2,4 s | 130 ms | 0 |

* Le seul audit SEO en échec est is-crawlable car la preview est volontairement noindex, nofollow. La preview protégée ajoute également une redirection d'authentification Vercel qui n'est pas représentative du domaine public de production.

Le remplacement de l'ancien panneau animé du hero par un Command Center natif a fait passer la performance de l'accueil de 89 à 94 et le TBT de 400 ms à 130 ms dans le même environnement de test.

## Formulaire et sécurité

- Route serveur présente mais collecte fermée par défaut.
- Bouton d'envoi désactivé en preview.
- Sélection des offres fonctionne et préremplit le formulaire.
- POST /api/contact retourne un 503 contrôlé sans envoi externe.
- Aucune clé API dans le navigateur.
- Activation requiert validation confidentialité, Resend, Turnstile, destination autorisée et expéditeur NovaSoft.

## SEO / contenu

- Métadonnées par offre, canonicals, Open Graph/Twitter et sitemap étendus.
- JSON-LD NovaSoft conservé et catalogue de services élargi.
- Vocabulaire orienté bénéfices : modernité, parcours d'achat, bases Google, réduction de ressaisie, gain de temps et intégrations métier.
- Aucune garantie de chiffre d'affaires, conversion ou ranking.

## Blocages volontaires avant production

1. Production : aucune fusion / publication sans validation explicite de Ylliano.
2. Formulaire : ne pas activer tant que confidentialité + anti-abus + envoi ne sont pas validés et testés.
3. Fiscalité : prix HT, aucun taux général ajouté automatiquement.
4. Maquettes clients : une proposition privée n'est pas une autorisation de publication publique.
5. Search Console : statut actuel à revalider avant d'affirmer que le sitemap a été soumis.

## Conclusion

La preview forme désormais un parcours commercial cohérent autour de Sites & e-commerce, IA & automatisation et Intégrations & API. Les tests techniques, responsive, navigation et accessibilité ne montrent plus de défaut bloquant sur le périmètre audité. La prochaine décision est la validation visuelle et commerciale avant préparation d'une publication contrôlée.
