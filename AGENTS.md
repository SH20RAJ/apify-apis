# Agent Guide: Apify APIs Monorepo

## Project Overview

This is a TypeScript monorepo for Apify Actors using npm workspaces and TypeScript project references.

## Build System

- **Package Manager**: npm (workspaces enabled)
- **Language**: TypeScript (ESM, NodeNext module resolution)
- **Build**: `tsc --build` with composite projects
- **Docker**: Each actor has its own Dockerfile. For monorepo builds, `dockerContextDir` is used.

## Key Conventions

- **ESM Only**: All packages use `"type": "module"`
- **NodeNext**: `module` and `moduleResolution` are both `NodeNext`
- **Actor Definition**: Each actor has a `.actor/actor.json` file defining metadata, input schema, and docker context
- **Shared Code**: Use `packages/shared-utils` for utilities shared across actors
- **Apify CLI**: Use `apify push` to deploy actors to the platform

## Monorepo Build Notes

When Apify builds an actor from this monorepo via GitHub:
1. The `dockerContextDir` in `actor.json` determines the Docker build context
2. The `ACTOR_PATH_IN_DOCKER_CONTEXT` build arg is passed automatically by Apify
3. The Dockerfile copies both the actor source and shared packages into the image

## Scripts

- `npm run build` - Build all packages and actors
- `npm run lint` - Lint all TypeScript/JavaScript files
- `cd actors/<name> && apify run` - Run actor locally
- `cd actors/<name> && apify push` - Deploy actor to Apify platform

## Adding an Actor

1. Copy an existing actor as a template
2. Update `.actor/actor.json` with a unique `name`
3. Ensure `dockerContextDir` is set correctly (usually `../..` for actors inside `actors/`) so shared packages are accessible
4. Add the actor's `tsconfig.json` to the root `tsconfig.json` `references` array
