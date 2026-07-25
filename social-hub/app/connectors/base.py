"""Contrat des connecteurs de plateformes sociales."""
from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass, field


@dataclass
class PublishResult:
    """Résultat (ou simulation) d'une publication."""

    dry_run: bool
    platform: str
    endpoint: str
    payload: dict = field(default_factory=dict)
    remote_id: str | None = None  # id renvoyé par la plateforme (jamais en dry-run)


class PlatformConnector(ABC):
    """Interface commune aux connecteurs de publication (Meta, puis TikTok/X…)."""

    platform: str

    @abstractmethod
    def publish_post(
        self,
        account_ref: str,
        message: str,
        *,
        image_url: str | None = None,
        link: str | None = None,
    ) -> PublishResult:
        """Publie (ou simule) un post sur le compte `account_ref`."""
