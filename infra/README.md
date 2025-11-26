# Infrastructure

This folder tracks infrastructure-as-code and ops assets for GateNet.

## Contents
- `systemd/`: Example systemd units to run the Docker Compose stack.
- `reverse-proxy/`: Starter Nginx/Caddy configuration for TLS termination and routing.
- `backups/`: Placeholder for backup scripts and cron files.

## VPS setup (Ubuntu 24.04)
- Install Docker Engine and Docker Compose plugin.
- Configure a deploy user with passwordless sudo for Docker commands.
- Enable UFW rules for SSH (22), HTTP (80), and HTTPS (443).
