# STATE — Social Hub

Dernière mise à jour : 2026-07-24

## ✅ Fait (Phase 1 — scaffold)

- Structure `app/` (config, db, models) + `context_layer/` + `connectors/` + `tests/`.
- **Modèles SQLAlchemy** (provisoires, guide section 2 non reçu) : `Brand`,
  `SocialAccount`, `SiteEvent` (dédup `(brand_id, external_id)`), `Post`,
  `PublishAttempt`. SQLite par défaut, pas encore d'Alembic.
- **Connecteur Emergent** (`context_layer/emergent_site.py`) : X-API-Key,
  filtrage `since` (défaut 30 j), validation des événements (id stable,
  types admis, payload dict), mode mock automatique tant que le site
  n'expose pas `/api/social-hub/*`. Fixtures = contrat exact (section 4).
- **Connecteur Meta dry-run strict** : construit les requêtes Graph API
  (feed/photos + flux IG media→media_publish) sans AUCUN appel réseau,
  verrou `ALLOW_LIVE=False` structurel, refuse `dry_run=False`.
- Tests : 9 passés (contrat mock, filtrage since, stabilité des id,
  refus sans clé API, garde anti-réseau Meta, refus du mode live).
- `CLAUDE.md`, `.env.example`, `requirements.txt`, `pyproject.toml`.

## 🔄 En cours

- Rien.

## ⏭️ Prochain pas

1. Recevoir `SOCIAL-HUB-BUILD-GUIDE.md` → aligner structure (section 1) et
   modèles (section 2) ; récupérer les remarques 2 et 3 du cadrage endpoints.
2. Côté Emergent/RoG Hunting : implémentation réelle des 3 endpoints, puis
   renseigner `site_base_url` + `SOCIAL_HUB_SITE_API_KEY_ROG_HUNTING` et
   passer le connecteur hors mock.
3. App Review Meta (pages_manage_posts, instagram_content_publish) — le
   dry-run reste verrouillé d'ici là.
4. Phases suivantes (hors périmètre actuel) : scheduler/ingestion continue,
   génération de contenu, autres marques (NaturaSell, NovaImmo, TradyGo,
   dodobio), TikTok/X, engagement, dashboard.
