# Example Web Scraper

A simple and efficient web scraper built with [Crawlee](https://crawlee.dev) and the [Apify SDK](https://docs.apify.com/sdk/js). This actor demonstrates best practices for scraping page titles and meta descriptions from websites.

## Features
- Extracts page titles and meta descriptions
- Follows links within the same origin
- Configurable crawl depth via max requests
- Built on shared utilities for URL validation and normalization

## Input

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `startUrls` | `string[]` | Yes | `["https://apify.com"]` | URLs to start scraping from |
| `maxRequests` | `integer` | No | `10` | Maximum number of pages to visit |

## Output

The actor stores results in a dataset with the following fields:

```json
{
    "url": "https://example.com/page",
    "title": "Page Title",
    "description": "Meta description text",
    "scrapedAt": "2026-05-01T10:00:00.000Z"
}
```

## Usage

### Local
```bash
cd actors/example-scraper
apify run
```

### Deploy
```bash
cd actors/example-scraper
apify push
```

### Apify Store
This actor is available on the Apify Store. You can run it directly from the console or API.

## Monetization

This actor is published under a **Pay Per Usage** model. You only pay for the platform compute resources consumed during runs.

## Support

If you encounter any issues, please open an issue in the [GitHub repository](https://github.com/your-username/apify-apis).
