# Ops and deployment notes

## VPS baseline (Ubuntu 24.04)
- Create a non-root deploy user with sudo.
- Enable UFW with allow rules for SSH (port 22), HTTP (80), and HTTPS (443); deny all else by default.
- Install Docker, Docker Compose, and fail2ban.
- Configure unattended-upgrades and log rotation.

## Application deployment
1. Pull the repository and copy `.env.example` files to `.env` with real secrets.
2. Build and start services via `docker compose up -d --build`.
3. Place Nginx/Caddy config from `infra/reverse-proxy` and enable TLS with certbot.
4. Create systemd units to manage the compose stack (see `infra/systemd`).

## Backups and observability
- **Database**: Nightly `pg_dump` to off-site storage; test restores regularly.
- **Media**: Store uploads in an S3-compatible bucket with lifecycle policies.
- **Monitoring**: Collect logs (JSON) to a centralized sink, expose `/health` for uptime probes, and add metrics endpoints for API and web.
