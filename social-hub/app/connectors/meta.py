"""Connecteur Meta (Facebook Pages + Instagram Business) — DRY-RUN UNIQUEMENT.

⚠ App Review Meta non validée : ce connecteur est verrouillé en simulation.
Il construit les requêtes Graph API exactes (endpoint + payload) et les
journalise SANS JAMAIS émettre d'appel réseau. Le verrou est structurel :
`ALLOW_LIVE` est une constante de module à False — la lever exigera un
commit explicite après validation de l'App Review, pas une simple variable
d'environnement qu'on pourrait activer par accident.

Prérequis pour le passage en live (hors périmètre Phase 1) :
  - App Review validée (pages_manage_posts, instagram_content_publish…)
  - META_PAGE_ACCESS_TOKEN / META_IG_USER_ID via variables d'environnement
"""
from __future__ import annotations

import json
import logging

from .base import PlatformConnector, PublishResult

logger = logging.getLogger(__name__)

GRAPH_API_BASE = "https://graph.facebook.com/v21.0"

#: Verrou App Review — NE PAS passer à True avant validation Meta.
ALLOW_LIVE = False


class MetaConnector(PlatformConnector):
    platform = "meta"

    def __init__(self, *, dry_run: bool = True) -> None:
        if not dry_run and not ALLOW_LIVE:
            raise RuntimeError(
                "Connecteur Meta verrouillé en dry-run : App Review non validée. "
                "Le mode live requiert ALLOW_LIVE=True (commit explicite post-review)."
            )
        self.dry_run = True  # Phase 1 : toujours vrai, quoi qu'il arrive.

    # ── Construction des requêtes Graph API (sans envoi) ──────────────
    def _facebook_page_post(self, page_id: str, message: str, link: str | None) -> tuple[str, dict]:
        payload: dict = {"message": message}
        if link:
            payload["link"] = link
        return f"{GRAPH_API_BASE}/{page_id}/feed", payload

    def _facebook_photo_post(self, page_id: str, message: str, image_url: str) -> tuple[str, dict]:
        return f"{GRAPH_API_BASE}/{page_id}/photos", {"caption": message, "url": image_url}

    def publish_post(
        self,
        account_ref: str,
        message: str,
        *,
        image_url: str | None = None,
        link: str | None = None,
    ) -> PublishResult:
        """Simule la publication d'un post de Page Facebook.

        `account_ref` = id de la Page. Retourne la requête qui SERAIT émise.
        """
        if image_url:
            endpoint, payload = self._facebook_photo_post(account_ref, message, image_url)
        else:
            endpoint, payload = self._facebook_page_post(account_ref, message, link)

        logger.info(
            "[meta][DRY-RUN] POST %s\n%s", endpoint, json.dumps(payload, ensure_ascii=False, indent=2)
        )
        return PublishResult(dry_run=True, platform=self.platform, endpoint=endpoint, payload=payload)

    def publish_instagram_media(
        self,
        ig_user_id: str,
        caption: str,
        image_url: str,
    ) -> list[PublishResult]:
        """Simule le flux Instagram en 2 temps (container puis publish)."""
        container = PublishResult(
            dry_run=True,
            platform=self.platform,
            endpoint=f"{GRAPH_API_BASE}/{ig_user_id}/media",
            payload={"image_url": image_url, "caption": caption},
        )
        publish = PublishResult(
            dry_run=True,
            platform=self.platform,
            endpoint=f"{GRAPH_API_BASE}/{ig_user_id}/media_publish",
            payload={"creation_id": "<container_id — inconnu en dry-run>"},
        )
        for step in (container, publish):
            logger.info("[meta][DRY-RUN] POST %s %s", step.endpoint, step.payload)
        return [container, publish]
