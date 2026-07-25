"""Modèles SQLAlchemy du hub social.

⚠ STRUCTURE PROVISOIRE — le guide (SOCIAL-HUB-BUILD-GUIDE.md, section 2)
n'est pas encore parvenu dans cet environnement ; ces modèles couvrent le
strict nécessaire de la Phase 1 (marques, comptes, ingestion d'événements
dédupliqués, posts et tentatives de publication) et devront être alignés
sur la section 2 du guide dès réception.
"""
from __future__ import annotations

from datetime import datetime, timezone

from sqlalchemy import (
    JSON,
    Boolean,
    DateTime,
    ForeignKey,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


class Base(DeclarativeBase):
    pass


class Brand(Base):
    """Marque gérée par le hub (pilote : RoG Hunting)."""

    __tablename__ = "brands"

    id: Mapped[int] = mapped_column(primary_key=True)
    slug: Mapped[str] = mapped_column(String(64), unique=True)  # ex. "rog-hunting"
    name: Mapped[str] = mapped_column(String(120))
    site_base_url: Mapped[str | None] = mapped_column(String(255))
    #: nom de la variable d'env portant la clé API du site (jamais la clé elle-même)
    site_api_key_env: Mapped[str | None] = mapped_column(String(120))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    accounts: Mapped[list["SocialAccount"]] = relationship(back_populates="brand")
    events: Mapped[list["SiteEvent"]] = relationship(back_populates="brand")
    posts: Mapped[list["Post"]] = relationship(back_populates="brand")


class SocialAccount(Base):
    """Compte social rattaché à une marque (Page FB, compte IG business…)."""

    __tablename__ = "social_accounts"
    __table_args__ = (UniqueConstraint("platform", "remote_ref", name="uq_platform_ref"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    brand_id: Mapped[int] = mapped_column(ForeignKey("brands.id"))
    platform: Mapped[str] = mapped_column(String(32))  # "meta" (puis tiktok/x…)
    kind: Mapped[str] = mapped_column(String(32))  # "facebook_page" | "instagram_business"
    remote_ref: Mapped[str] = mapped_column(String(128))  # page_id / ig_user_id
    #: nom de la variable d'env portant le token (jamais le token lui-même)
    access_token_env: Mapped[str | None] = mapped_column(String(120))
    active: Mapped[bool] = mapped_column(Boolean, default=True)

    brand: Mapped["Brand"] = relationship(back_populates="accounts")


class SiteEvent(Base):
    """Événement métier ingéré depuis le site d'une marque.

    `external_id` (l'`id` du contrat /api/social-hub/events) est la clé de
    déduplication : contrainte d'unicité par marque.
    """

    __tablename__ = "site_events"
    __table_args__ = (UniqueConstraint("brand_id", "external_id", name="uq_brand_event"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    brand_id: Mapped[int] = mapped_column(ForeignKey("brands.id"))
    external_id: Mapped[str] = mapped_column(String(128))  # ex. "evt-2001"
    type: Mapped[str] = mapped_column(String(32))  # stock_change | new_listing | promo | price_drop
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    payload: Mapped[dict] = mapped_column(JSON)
    ingested_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    processed: Mapped[bool] = mapped_column(Boolean, default=False)

    brand: Mapped["Brand"] = relationship(back_populates="events")


class Post(Base):
    """Contenu éditorial produit par le hub (brouillon → planifié → publié)."""

    __tablename__ = "posts"

    id: Mapped[int] = mapped_column(primary_key=True)
    brand_id: Mapped[int] = mapped_column(ForeignKey("brands.id"))
    source_event_id: Mapped[int | None] = mapped_column(ForeignKey("site_events.id"))
    status: Mapped[str] = mapped_column(String(24), default="draft")  # draft|scheduled|published|failed
    body: Mapped[str] = mapped_column(Text)
    image_url: Mapped[str | None] = mapped_column(String(500))
    link: Mapped[str | None] = mapped_column(String(500))
    scheduled_for: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    brand: Mapped["Brand"] = relationship(back_populates="posts")
    attempts: Mapped[list["PublishAttempt"]] = relationship(back_populates="post")


class PublishAttempt(Base):
    """Trace de chaque (simulation de) publication — audit du dry-run inclus."""

    __tablename__ = "publish_attempts"

    id: Mapped[int] = mapped_column(primary_key=True)
    post_id: Mapped[int] = mapped_column(ForeignKey("posts.id"))
    account_id: Mapped[int] = mapped_column(ForeignKey("social_accounts.id"))
    dry_run: Mapped[bool] = mapped_column(Boolean, default=True)
    endpoint: Mapped[str] = mapped_column(String(255))
    request_payload: Mapped[dict] = mapped_column(JSON)
    remote_id: Mapped[str | None] = mapped_column(String(128))
    error: Mapped[str | None] = mapped_column(Text)
    attempted_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    post: Mapped["Post"] = relationship(back_populates="attempts")
