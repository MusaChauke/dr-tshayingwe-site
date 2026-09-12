# Dr S Tshayingwe practice website

View-only brochure site for Dr Sivuyile Tshayingwe, General Practitioner, 3 Matakata Street, Mbekweni, Paarl.
Next.js 14 (App Router) static export + Tailwind. No backend, no forms, no cookies.

## Edit the facts

Everything the site says about the practice lives in `src/lib/practice.ts`: name, numbers, address, hours,
services, bio, emergency numbers. Pages, footer and structured data all read from it.

- `SITE_URL`: set to the real domain before the first deploy.
- `toConfirm.*`: facts the doctor has not yet signed off. They stay hidden until `confirmed: true`.
- Opening hours on public holidays follow the weekend hours; the holiday list is in `src/lib/openingStatus.ts`.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npx next build     # static site in out/
```

## Preview (GitHub Pages)

Live preview, not indexed by search engines: https://musachauke.github.io/dr-tshayingwe-site/
Redeploy after changes with `bash deploy-preview.sh` (builds with the `/dr-tshayingwe-site` base path and pushes `out/` to the `gh-pages` branch).

## Deploy (Vercel, HealthHalo team)

Live at `https://drtshayingwe.vercel.app` (free Vercel address, project `drtshayingwe` on the HealthHalo team). If a domain is bought later: add it to the project, set `NEXT_PUBLIC_SITE_URL` there, redeploy.

1. Copy `.env.example` to `.env` and paste a Vercel token (Account > Tokens, scoped to the HealthHalo team).
2. `bash deploy-prod.sh` deploys (Vercel builds the static export itself).

Any static host also works: upload the contents of `out/`.

Any static host also works: upload the contents of `out/`.

## Photos

`public/photos/` holds cleaned copies (rotated, EXIF and GPS stripped, resized) of the practice photos.
Source photos and the print-collateral prompts are in `Downloads\Dr S Tshayingwe Practice\`.

## Compliance notes

- Copy is factual and avoids comparative or promotional claims (HPCSA ethical rules 3 and 4).
- No patient testimonials on the site.
- The practice sees medical emergencies during opening times; every service page says so and gives 10177 / 112 / Paarl Hospital for after hours and ambulances.
- The Google Map is loaded only after the visitor presses "Show map"; the site sets no cookies (POPIA).
