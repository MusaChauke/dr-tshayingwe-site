#!/usr/bin/env bash
# Production deploy to Vercel (HealthHalo team) using VERCEL_TOKEN from .env.
# First run creates the project "dr-tshayingwe-site"; later runs redeploy it.
set -euo pipefail
cd "$(dirname "$0")"
set -a; . ./.env; set +a
[ -n "${VERCEL_TOKEN:-}" ] || { echo "VERCEL_TOKEN is empty in .env"; exit 1; }
rm -rf out .vercel/output
npx next build
npx vercel deploy --prod --yes --token "$VERCEL_TOKEN" --scope "$VERCEL_ORG_ID" --name dr-tshayingwe-site
echo "Deployed. Add the domain once: npx vercel domains add ${NEXT_PUBLIC_SITE_URL#https://} dr-tshayingwe-site --token \$VERCEL_TOKEN --scope \$VERCEL_ORG_ID"
