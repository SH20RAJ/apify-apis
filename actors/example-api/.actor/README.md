# Example Standby API

A lightweight [Standby](https://docs.apify.com/platform/actors/development/programming-interface/standby) API actor that provides a fast, low-latency HTTP endpoint for URL normalization. This actor demonstrates monetization via **Pay Per Event (PPE)**.

## Features
- Runs a lightweight HTTP server in standby mode
- Fast API responses with minimal startup time
- Ready for Pay Per Event monetization
- Uses shared utilities for URL normalization

## Input

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `port` | `integer` | No | `4321` | Local server port (ignored on Apify platform) |

## Endpoints

### `GET /health`
Returns the actor health status.

**Response:**
```json
{
    "status": "ok",
    "actor": "example-api"
}
```

### `GET /normalize?url=<URL>`
Normalizes a given URL.

**Response:**
```json
{
    "original": "https://example.com/path/?",
    "normalized": "https://example.com/path",
    "timestamp": "2026-05-01T10:00:00.000Z"
}
```

## Monetization

This actor is designed for **Pay Per Event (PPE)** monetization. You can configure pricing events in the Apify Console to charge per API call.

Recommended pricing events:
- `normalize-url`: charged for each `/normalize` request

To enable charging, uncomment the `Actor.charge()` line in `src/main.ts` and define the event in the Actor's **Publication > Monetization** settings in Apify Console.

## Usage

### Local
```bash
cd actors/example-api
apify run
```

Then test:
```bash
curl http://localhost:4321/health
curl "http://localhost:4321/normalize?url=https://example.com/path/?"
```

### Deploy
```bash
cd actors/example-api
apify push
```

## Support

If you encounter any issues, please open an issue in the [GitHub repository](https://github.com/your-username/apify-apis).
