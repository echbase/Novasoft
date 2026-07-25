"""Connecteur des sites hébergés sur Emergent.sh (pilote : RoG Hunting).

Consomme les endpoints /api/social-hub/* du site de la marque, protégés par
clé API (header X-API-Key). Tant que le site n'expose pas les endpoints
réels, le connecteur fonctionne en mode mock (fixtures du contrat) — même
logique de filtrage `since` dans les deux modes, pour que les tests écrits
sur le mock restent valides face au site réel.

La clé API est fournie exclusivement par variable d'environnement
(SOCIAL_HUB_SITE_API_KEY_<MARQUE>), jamais committée.
"""
from __future__ import annotations

import logging
from datetime import datetime, timedelta, timezone

import httpx

from .base import EVENT_TYPES, SiteConnector
from .mock_fixtures import MOCK_EVENTS, MOCK_ORDERS, MOCK_PRODUCTS

logger = logging.getLogger(__name__)

#: Fenêtre servie quand `since` est absent (contrat : ~30 derniers jours).
DEFAULT_WINDOW = timedelta(days=30)


def _parse_iso(value: str) -> datetime:
    """ISO 8601 → datetime aware UTC (tolère le suffixe Z)."""
    dt = datetime.fromisoformat(value.replace("Z", "+00:00"))
    return dt if dt.tzinfo else dt.replace(tzinfo=timezone.utc)


class EmergentSiteConnector(SiteConnector):
    def __init__(
        self,
        brand_slug: str,
        base_url: str | None = None,
        api_key: str | None = None,
        *,
        mock: bool = False,
        timeout: float = 15.0,
    ) -> None:
        self.brand_slug = brand_slug
        self.base_url = (base_url or "").rstrip("/")
        self.api_key = api_key
        self.mock = mock or not self.base_url
        self.timeout = timeout
        if self.mock:
            logger.info("[%s] connecteur en mode MOCK (endpoints réels absents)", brand_slug)

    # ── Transport ──────────────────────────────────────────────────────
    def _get(self, path: str, params: dict | None = None) -> list[dict]:
        if not self.api_key:
            raise RuntimeError(
                f"[{self.brand_slug}] clé API absente : définir la variable "
                "d'environnement dédiée avant tout appel réel."
            )
        response = httpx.get(
            f"{self.base_url}{path}",
            params=params or {},
            headers={"X-API-Key": self.api_key},
            timeout=self.timeout,
        )
        response.raise_for_status()
        data = response.json()
        if not isinstance(data, list):
            raise ValueError(f"[{self.brand_slug}] {path} : tableau JSON attendu")
        return data

    # ── Filtrage commun mock/réel ──────────────────────────────────────
    @staticmethod
    def _window_filter(rows: list[dict], field: str, since: datetime | None) -> list[dict]:
        floor = since or (datetime.now(timezone.utc) - DEFAULT_WINDOW)
        if floor.tzinfo is None:
            floor = floor.replace(tzinfo=timezone.utc)
        return [r for r in rows if _parse_iso(r[field]) >= floor]

    @staticmethod
    def _validate_events(events: list[dict]) -> list[dict]:
        """Garantit le contrat : id stable présent, type admis, payload dict."""
        seen: set[str] = set()
        valid: list[dict] = []
        for e in events:
            if not e.get("id") or e["id"] in seen:
                logger.warning("événement sans id ou dupliqué ignoré : %r", e.get("id"))
                continue
            if e.get("type") not in EVENT_TYPES:
                logger.warning("type d'événement inconnu ignoré : %r", e.get("type"))
                continue
            if not isinstance(e.get("payload"), dict):
                logger.warning("événement %s sans payload dict ignoré", e["id"])
                continue
            seen.add(e["id"])
            valid.append(e)
        return valid

    # ── API du connecteur ──────────────────────────────────────────────
    def get_products(self) -> list[dict]:
        if self.mock:
            return list(MOCK_PRODUCTS)
        return self._get("/api/social-hub/products")

    def get_orders(self, since: datetime | None = None) -> list[dict]:
        if self.mock:
            return self._window_filter(list(MOCK_ORDERS), "created_at", since)
        params = {"since": since.isoformat()} if since else {}
        return self._get("/api/social-hub/orders", params)

    def get_events(self, since: datetime | None = None) -> list[dict]:
        if self.mock:
            rows = self._window_filter(list(MOCK_EVENTS), "occurred_at", since)
        else:
            params = {"since": since.isoformat()} if since else {}
            rows = self._get("/api/social-hub/events", params)
        return self._validate_events(rows)
