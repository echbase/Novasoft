"""Contrat des connecteurs de sites (context layer).

Un connecteur de site expose le contexte e-commerce/métier d'une marque au
hub : catalogue, commandes, événements. Les formes de données sont celles du
contrat /api/social-hub/* (voir mock_fixtures.py) — génériques par design :
seuls `id`, `type`, `occurred_at`, `payload` sont imposés pour un événement,
le contenu de `payload` dépend du métier (produit, bien immobilier, offre…).
"""
from __future__ import annotations

from abc import ABC, abstractmethod
from datetime import datetime

#: Types d'événements admis par le hub (clé de routage éditorial).
EVENT_TYPES = frozenset({"stock_change", "new_listing", "promo", "price_drop"})


class SiteConnector(ABC):
    """Interface commune à tous les connecteurs de sites de marques."""

    @abstractmethod
    def get_products(self) -> list[dict]:
        """Catalogue courant (tableau JSON du endpoint /products)."""

    @abstractmethod
    def get_orders(self, since: datetime | None = None) -> list[dict]:
        """Commandes depuis `since` (défaut : ~30 derniers jours)."""

    @abstractmethod
    def get_events(self, since: datetime | None = None) -> list[dict]:
        """Événements métier depuis `since` (défaut : ~30 derniers jours).

        Chaque événement porte un `id` stable et unique : c'est la clé de
        déduplication du hub, un même événement re-servi garde le même id.
        """
