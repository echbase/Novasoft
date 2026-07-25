# CLAUDE.md — SOCIAL HUB (NovaSoft)

## CONTEXTE

Hub de publication sociale multi-marques de NovaSoft Ltd. Il ingère le
contexte métier des sites des marques (context layer), génère du contenu et
le publie sur les plateformes sociales (connecteurs).

**Marque pilote : RoG Hunting** — e-commerce accessoires chiens de chasse,
site hébergé sur Emergent.sh (backend FastAPI + MongoDB). Marques suivantes :
NaturaSell, NovaImmo, TradyGo, dodobio (même structure, seul le contenu de
`payload` des événements change).

Document de référence : `SOCIAL-HUB-BUILD-GUIDE.md` (⚠ non encore présent
dans le repo — voir DETTES ci-dessous).

## RÈGLES NON NÉGOCIABLES

1. **Meta = dry-run strict.** Aucun appel réseau vers Graph API tant que
   l'App Review n'est pas validée. Le verrou est `ALLOW_LIVE = False` dans
   `app/connectors/meta.py` : le lever exige un commit explicite, jamais une
   variable d'environnement. Le test `test_meta_dry_run.py` bloque toute
   tentative de socket.
2. **Secrets uniquement en variables d'environnement.** Le code et la base
   ne stockent que les NOMS des variables (`site_api_key_env`,
   `access_token_env`), jamais les valeurs. Rien dans git.
3. **Déduplication des événements** : `id` du contrat = `external_id`,
   contrainte unique `(brand_id, external_id)` dans `site_events`.
4. **Le mock EST le contrat.** `app/context_layer/mock_fixtures.py` reproduit
   à l'identique les formes demandées au site Emergent (guide section 4).
   Toute évolution du contrat passe d'abord par ce fichier + ses tests.

## CONTRAT SITE (endpoints /api/social-hub/*, header X-API-Key)

- `GET /api/social-hub/products` → tableau JSON
- `GET /api/social-hub/orders?since=<iso8601>` → tableau JSON
- `GET /api/social-hub/events?since=<iso8601>` → tableau JSON
- Événements : `id` stable/unique (clé de dédup), `type` ∈
  {stock_change, new_listing, promo, price_drop}, `occurred_at` ISO 8601,
  `payload` libre selon le métier. Sans `since` : ~30 derniers jours.

## STRUCTURE

```
social-hub/
├── app/
│   ├── config.py          ← marques + noms de variables d'env
│   ├── db.py              ← SQLite Phase 1 (SOCIAL_HUB_DATABASE_URL)
│   ├── models.py          ← Brand, SocialAccount, SiteEvent, Post, PublishAttempt
│   ├── context_layer/     ← connecteurs de sites (Emergent + mock)
│   └── connectors/        ← connecteurs de plateformes (Meta dry-run)
└── tests/
```

## HORS PÉRIMÈTRE PHASE 1

TikTok, X, moteur d'engagement, dashboard, scheduler, génération de contenu.

## DETTES / À ALIGNER

- `SOCIAL-HUB-BUILD-GUIDE.md` jamais parvenu dans l'environnement : la
  structure des dossiers et les modèles SQLAlchemy sont PROVISOIRES et
  devront être vérifiés contre les sections 1, 2 et 4 du guide.
- Remarques 2 et 3 du message de cadrage endpoint jamais reçues (message
  tronqué après la remarque 1).

## WORKFLOW

- Tests : `cd social-hub && python -m pytest` (pythonpath configuré via
  `pyproject.toml`).
- Ce dossier vit dans le repo `echbase/Novasoft` : chaque push redéploie le
  site vitrine Vercel (sans impact — Vercel ignore ce dossier).
- Tenir `STATE.md` à jour à chaque session.
