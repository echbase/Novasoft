"""Le connecteur Meta ne doit JAMAIS toucher le réseau en Phase 1."""
import pytest

from app.connectors.meta import GRAPH_API_BASE, MetaConnector


@pytest.fixture(autouse=True)
def _no_network(monkeypatch):
    """Toute tentative de socket fait échouer le test."""
    import socket

    def _blocked(*args, **kwargs):  # pragma: no cover - garde-fou
        raise AssertionError("appel réseau interdit en dry-run")

    monkeypatch.setattr(socket.socket, "connect", _blocked)


def test_live_mode_refuse():
    with pytest.raises(RuntimeError, match="App Review"):
        MetaConnector(dry_run=False)


def test_publish_texte_simule_sans_reseau():
    result = MetaConnector().publish_post("123456789", "Nouveau restock !", link="https://example-rog.com")
    assert result.dry_run is True
    assert result.endpoint == f"{GRAPH_API_BASE}/123456789/feed"
    assert result.payload == {"message": "Nouveau restock !", "link": "https://example-rog.com"}
    assert result.remote_id is None


def test_publish_photo_simule():
    result = MetaConnector().publish_post(
        "123456789", "Collier GPS de retour", image_url="https://example-rog.com/img/collier-gps.jpg"
    )
    assert result.endpoint.endswith("/photos")
    assert result.payload["caption"] == "Collier GPS de retour"


def test_flux_instagram_deux_etapes():
    steps = MetaConnector().publish_instagram_media(
        "178000001", "Restock ✔", "https://example-rog.com/img/collier-gps.jpg"
    )
    assert [s.endpoint.rsplit("/", 1)[-1] for s in steps] == ["media", "media_publish"]
    assert all(s.dry_run for s in steps)
