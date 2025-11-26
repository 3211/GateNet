# Architecture overview

GateNet is designed as a modular full-stack application with the following components:

- **API service (`api/`)**: Node.js + Express, serving JSON endpoints under `/api/v1`. Handles authentication, content management, search, and moderation workflows.
- **Web client (`web/`)**: React single-page app built with Vite. Communicates with the API via REST (and later websockets for live updates).
- **Database**: PostgreSQL for relational content and user data.
- **Cache**: Redis for sessions, rate limiting, and hot content caching.
- **Reverse proxy**: Nginx or Caddy terminating TLS and routing traffic to API and web.

## Runtime responsibilities
- **Authentication**: OAuth/social logins and JWT sessions (to be implemented). CSRF protection and rate limiting handled in the API layer.
- **Content**: Versioned wiki pages with audit trails, media uploads using pre-signed URLs, and tagging for discovery.
- **Observability**: Structured logs, health endpoints, metrics exporters, and error tracking hooks.

## Deployment model
- Local development uses Docker Compose. Production targets a single VPS (Ubuntu 24.04) with systemd-managed containers or a reverse proxy + process manager.
- IaC and provisioning stubs live in `infra/` to codify firewall rules, TLS via Let's Encrypt, and backups.
