#!/usr/bin/env bash
# Production deploy to Vercel (HealthHalo team) using VERCEL_TOKEN from .env.
# First run creates the project "dr-tshayingwe-site"; later runs redeploy it.
set -euo pipefail
cd "$(dirname "$0")"
set -a; . <(sed "s/$//" ./.env); set +a
[ -n "${VERCEL_TOKEN:-}" ] || { echo "VERCEL_TOKEN is empty in .env"; exit 1; }
npx vercel deploy --prod --yes --token "$VERCEL_TOKEN" --scope "$VERCEL_ORG_ID"
echo "Deployed to https://drtshayingwe.vercel.app (project drtshayingwe on the HealthHalo team)."
