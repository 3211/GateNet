#!/usr/bin/env bash
set -euo pipefail

# Install dependencies for API and web
pushd api >/dev/null
npm install
popd >/dev/null

pushd web >/dev/null
npm install
popd >/dev/null

echo "Bootstrap complete. Copy .env.example files and run docker compose up --build."
