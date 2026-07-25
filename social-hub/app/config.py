"""Configuration des marques du hub.

Les secrets (clés API sites, tokens plateformes) ne vivent QUE dans des
variables d'environnement — ce module ne stocke que les NOMS des variables.
"""
from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class BrandConfig:
    slug: str
    name: str
    site_base_url: str | None  # None → connecteur en mode mock
    site_api_key_env: str

    @property
    def site_api_key(self) -> str | None:
        return os.environ.get(self.site_api_key_env)


#: Marque pilote. NaturaSell, NovaImmo, TradyGo et dodobio suivront avec la
#: même structure (seul le contenu de `payload` des événements diffère).
BRANDS: dict[str, BrandConfig] = {
    "rog-hunting": BrandConfig(
        slug="rog-hunting",
        name="RoG Hunting",
        site_base_url=None,  # à renseigner quand Emergent expose /api/social-hub/*
        site_api_key_env="SOCIAL_HUB_SITE_API_KEY_ROG_HUNTING",
    ),
}
