"""Mock payloads mimicking the RoG Hunting /api/social-hub/* endpoints.

Used while the Emergent agent hasn't yet exposed the real endpoints — the
shapes here ARE the contract to request from the Emergent side (build guide,
section 4).
"""

MOCK_PRODUCTS = [
    {
        "id": "prod-001",
        "name": "Collier GPS Tracker Pro",
        "price": 189.90,
        "currency": "EUR",
        "stock": 12,
        "images": ["https://example-rog.com/img/collier-gps.jpg"],
        "url": "https://example-rog.com/products/collier-gps-tracker-pro",
    },
    {
        "id": "prod-002",
        "name": "Gilet de protection sanglier",
        "price": 129.00,
        "currency": "EUR",
        "stock": 0,
        "images": ["https://example-rog.com/img/gilet-protection.jpg"],
        "url": "https://example-rog.com/products/gilet-protection-sanglier",
    },
    {
        "id": "prod-003",
        "name": "Sifflet ultrason dressage",
        "price": 24.50,
        "currency": "EUR",
        "stock": 87,
        "images": ["https://example-rog.com/img/sifflet.jpg"],
        "url": "https://example-rog.com/products/sifflet-ultrason",
    },
]

MOCK_ORDERS = [
    {
        "id": "order-1042",
        "created_at": "2026-07-23T14:12:00Z",
        "total": 189.90,
        "currency": "EUR",
        "utm_source": "instagram",
        "utm_campaign": "relance-gps",
        "items": [{"product_id": "prod-001", "qty": 1}],
    },
]

MOCK_EVENTS = [
    {
        "id": "evt-2001",
        "type": "stock_change",
        "occurred_at": "2026-07-24T08:30:00Z",
        "payload": {
            "product_id": "prod-001",
            "product_name": "Collier GPS Tracker Pro",
            "previous_stock": 0,
            "new_stock": 12,
            "direction": "restock",
            "url": "https://example-rog.com/products/collier-gps-tracker-pro",
            "image": "https://example-rog.com/img/collier-gps.jpg",
        },
    },
    {
        "id": "evt-2002",
        "type": "promo",
        "occurred_at": "2026-07-24T09:00:00Z",
        "payload": {
            "promo_code": "ETE2026",
            "discount_pct": 15,
            "scope": "sitewide",
            "ends_at": "2026-08-15T23:59:59Z",
        },
    },
    {
        "id": "evt-2003",
        "type": "new_listing",
        "occurred_at": "2026-07-24T10:15:00Z",
        "payload": {
            "product_id": "prod-004",
            "product_name": "Longe biothane 10m",
            "price": 34.90,
            "url": "https://example-rog.com/products/longe-biothane-10m",
            "image": "https://example-rog.com/img/longe.jpg",
        },
    },
]
