# Apify APIs Monorepo

An open-source monorepo for developing, deploying, and monetizing [Apify Actors](https://docs.apify.com/platform/actors). This repository demonstrates best practices for building scalable web scraping and automation APIs using TypeScript, shared packages, and modern tooling.

## Structure

```
.
├── actors/                  # Apify Actors
│   ├── example-scraper/     # Example web scraper using Crawlee
│   └── example-api/         # Example standby API with PPE monetization
├── packages/                # Shared internal packages
│   └── shared-utils/        # Common utilities used across actors
├── .github/workflows/       # CI/CD pipelines
├── package.json             # Root workspace configuration
└── tsconfig.json            # TypeScript project references
```

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [Apify CLI](https://docs.apify.com/cli):
  ```bash
  npm install -g apify-cli
  ```
- An [Apify account](https://console.apify.com/sign-up)

## Quick Start

Install dependencies:
```bash
npm install
```

Run an actor locally:
```bash
# Example scraper
cd actors/example-scraper && apify run

# Example API
cd actors/example-api && apify run
```

Push to Apify platform:
```bash
# Example scraper
cd actors/example-scraper && apify push

# Example API
cd actors/example-api && apify push
```

## Development

This monorepo uses [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) and TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) for fast, incremental builds with correct dependency ordering.

### Shared Packages

Place common code in `packages/*` and import it from actors. The Dockerfiles are configured to copy shared packages into the build context.

### Adding a New Actor

1. Create a new directory under `actors/<actor-name>`
2. Add `.actor/actor.json`, `Dockerfile`, `package.json`, and `tsconfig.json`
3. Set `dockerContextDir` in `actor.json` so the Dockerfile can access `packages/`
4. Add a project reference in the root `tsconfig.json`
5. Update root `package.json` scripts if desired

## Monetization

Actors can be published to the [Apify Store](https://apify.com/store) and monetized using:
- **Pay Per Event (PPE)** - charge for specific results or actions (recommended)
- **Pay Per Usage** - free to use, platform costs only

Rental pricing is being sunset in 2026.

See each actor's README for monetization setup details.

## Deployment

### Via GitHub Integration

1. Push this repo to GitHub
2. In Apify Console, create a new Actor and select **Git repository** as the source
3. Set the Git URL with branch and folder: `https://github.com/<user>/<repo>#main:actors/example-scraper`
4. Enable automatic rebuilds on push

### Via CLI

```bash
apify login
apify push
```

## License

MIT © 2026 Your Name
