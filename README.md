# GateNet

GateNet is a social media wiki platform. This repository provides a full-stack skeleton for running on Ubuntu 24.04 with Docker-based local development.

## Project structure
- `api/`: Express-based API service with health endpoints and placeholder routes.
- `web/`: React + Vite single-page app scaffold.
- `infra/`: Operational docs and provisioning stubs (systemd, reverse proxy guidance, TLS, backups).
- `docs/`: Architectural notes and runbooks.
- `scripts/`: Helper scripts for bootstrapping and local development.
- `docker-compose.yml`: Local orchestration for API, web, Postgres, and Redis.

## Getting started
1. Install dependencies (Node.js 20+, Docker, Docker Compose).
2. Copy environment examples and fill values:
   ```bash
   cp .env.example .env
   cp api/.env.example api/.env
   cp web/.env.example web/.env
   ```
3. Install service dependencies:
   ```bash
   (cd api && npm install)
   (cd web && npm install)
   ```
4. Run locally with Docker Compose:
   ```bash
   docker compose up --build
   ```
   - API available at http://localhost:8080/api/v1/health
   - Web app available at http://localhost:5173

## Development notes
- The API uses Express with CORS, security headers, and structured logging.
- The web client is a minimal React/Vite app ready for auth, routing, and data fetching layers.
- CI pipeline runs install + tests for API and web.
- See `docs/architecture.md` for component responsibilities and `docs/ops.md` for deployment considerations.
