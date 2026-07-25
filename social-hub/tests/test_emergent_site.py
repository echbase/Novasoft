"""Tests du connecteur Emergent en mode mock — le mock EST le contrat."""
from datetime import datetime, timezone

import pytest

from app.context_layer.base import EVENT_TYPES
from app.context_layer.emergent_site import EmergentSiteConnector


@pytest.fixture()
def connector() -> EmergentSiteConnector:
    return EmergentSiteConnector("rog-hunting", mock=True)


def test_products_shape(connector):
    products = connector.get_products()
    assert len(products) == 3
    for p in products:
        assert {"id", "name", "price", "currency", "stock", "images", "url"} <= set(p)


def test_events_ids_stables_et_types_valides(connector):
    first = connector.get_events(since=datetime(2026, 7, 1, tzinfo=timezone.utc))
    second = connector.get_events(since=datetime(2026, 7, 1, tzinfo=timezone.utc))
    # id = clé de déduplication : stable entre deux appels identiques
    assert [e["id"] for e in first] == [e["id"] for e in second]
    assert len({e["id"] for e in first}) == len(first)
    assert all(e["type"] in EVENT_TYPES for e in first)
    assert all(isinstance(e["payload"], dict) for e in first)


def test_since_filtre_les_evenements(connector):
    all_july = connector.get_events(since=datetime(2026, 7, 1, tzinfo=timezone.utc))
    after_9am = connector.get_events(since=datetime(2026, 7, 24, 9, 0, tzinfo=timezone.utc))
    assert len(all_july) == 3
    assert [e["id"] for e in after_9am] == ["evt-2002", "evt-2003"]


def test_since_filtre_les_commandes(connector):
    orders = connector.get_orders(since=datetime(2026, 7, 23, tzinfo=timezone.utc))
    assert [o["id"] for o in orders] == ["order-1042"]
    none_after = connector.get_orders(since=datetime(2026, 7, 24, tzinfo=timezone.utc))
    assert none_after == []


def test_mode_reel_sans_cle_api_refuse(monkeypatch):
    c = EmergentSiteConnector("rog-hunting", base_url="https://example-rog.com", api_key=None)
    with pytest.raises(RuntimeError, match="clé API absente"):
        c.get_products()
