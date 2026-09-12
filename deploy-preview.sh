#!/usr/bin/env bash
# Rebuild the site for the GitHub Pages preview and push it to the gh-pages branch.
# Preview URL: https://musachauke.github.io/dr-tshayingwe-site/ (production: bash deploy-prod.sh, needs VERCEL_TOKEN in .env)
set -euo pipefail
cd "$(dirname "$0")"
rm -rf out
MSYS_NO_PATHCONV=1 MSYS2_ARG_CONV_EXCL="*" NEXT_PUBLIC_BASE_PATH=/dr-tshayingwe-site NEXT_PUBLIC_PREVIEW=1 npx next build
touch out/.nojekyll
cd out
rm -rf .git
git init -q && git checkout -q -b gh-pages && git add -A
git -c user.name="deploy" -c user.email="deploy@local" commit -q -m "Preview build $(date +%F)"
git push -f https://github.com/MusaChauke/dr-tshayingwe-site.git gh-pages
rm -rf .git
echo "Pushed. GitHub Pages rebuilds in about a minute: https://musachauke.github.io/dr-tshayingwe-site/"
