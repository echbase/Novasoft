"""Session SQLAlchemy — SQLite par défaut (Phase 1), surchargable par env."""
from __future__ import annotations

import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from .models import Base

DATABASE_URL = os.environ.get("SOCIAL_HUB_DATABASE_URL", "sqlite:///social_hub.db")

engine = create_engine(DATABASE_URL, future=True)
SessionLocal = sessionmaker(bind=engine, expire_on_commit=False)


def init_db() -> None:
    """Crée les tables (Phase 1 : pas encore de migrations Alembic)."""
    Base.metadata.create_all(engine)
