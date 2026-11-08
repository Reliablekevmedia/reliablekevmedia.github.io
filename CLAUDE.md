# Reliable Kev Media (formerly Sixth Sense Studios)

The business is Reliable Kev Media (renamed from Sixth Sense Studios; the Gmail and repo URL keep the old name).
The business website lives in `website/` (Astro). It is live at https://sixthsensestudiosllc.github.io/Kevin-Moreno/,
served by GitHub Pages from the `docs/` folder on the `main` branch.

## Updating the live site

1. Make changes in `website/src/` (business details are in `website/src/site.ts`).
2. `cd website && npm ci && npm run build` to check it builds.
3. `npm run publish` rebuilds the live site into `docs/` (via `scripts/publish.mjs`, which keeps old files in `docs/_astro` so cached pages never lose their stylesheet; never delete them). Always commit `docs/` with the source change.
4. Get the change onto `main` (merge your working branch into `main` and push). Pushing to `main` puts it live in a minute or two.

Links are rewritten to relative paths after each build (`website/integrations/relative-links.mjs`),
so always link with root paths like `/services` in source; never hand-edit `docs/`.

## Adding videos

Kev uploads raw footage as assets on a GitHub Release in this repo (github.com is reachable; most
file-sharing hosts are not). Download it, then run `website/scripts/add-video.sh <raw> <name> [start] [length]`
to write a small 1080p `public/videos/<name>.mp4` plus a `<name>.jpg` poster still, and list the clip in
`website/src/data/drone.ts` (`DRONE_CLIPS`). Never commit raw footage; keep each clip a few MB.

## Homepage hero reel

The video behind the homepage headline is a montage. Its shots are listed in `website/scripts/hero-reel.txt`
(file, start, length; raw footage paths give the best quality). Kev wants it to mix his latest content, so when
new footage comes in, add a shot or two there and run `website/scripts/build-hero-reel.sh`. Keep it about 30s
and under ~8 MB so it autoplays quickly. It opens on the bar-carry shot (Kev's request).

## Waiting on Kev

- **Certifications**: when Kev is an FAA-certified drone pilot (Part 107) and Adobe certified, add them to the
  value points (`VALUE_POINTS` in `src/data/home.ts`, already drafted in a comment there).
- **$150 single video details**: the Good tier in `src/data/pricing.ts` assumes about an hour on site and one
  short vertical video (up to 60 seconds). Confirm with Kev and adjust.
- **Phone scroll go-ahead**: on phones the homepage can be one menu-free scroll (`src/components/PhoneHome.astro`).
  It is preview-only (a phone that opened the site with `?phone=1`) until Kev approves; then set
  `PHONE_SCROLL_LIVE = true` in `src/layouts/Base.astro`.

## Business back end (never shown on the site)

Kev's contracts and templates live in his Google Drive folder "Reliable Kev Media — Business System" (Business
Playbook, Video Proposal v3, Monthly Content Proposal, Collaboration Agreement v3, Appearance Release, Lead
Tracker). Keep website promises in line with the Playbook's house rules: 1 revision round, captions included on short
vertical clips, raw footage is an add-on, delivery 2–3 weeks. Do not put deposits, rate card or contract terms on the
site. Do not claim FAA compliance or Part 107 until Kev is certified.

## Look: Liquid Glass

The site follows Apple's Liquid Glass style (iOS 26). The recipe lives in `src/styles/global.css` (`--glass-*`
tokens, `.glass`, `.btn`): glass with blur, a light-catching rim and pill/rounded shapes on the navigation layer
(menu capsule, dropdown, buttons, phone bar, forms); a lighter sheen without blur on content cards (`--card-*`).
Reuse those tokens for anything new instead of square boxes or solid fills.

## Business card QR code (do not break)

Printed business cards point at `/card/` (the project intake, `src/pages/card.astro`). Never rename,
move or remove that page. `/card/` and the website's `/start/` share one form, `src/components/IntakeForm.astro`.
The build fails on purpose (`integrations/guard-qr-page.mjs`) if `/card/` or its form is missing.
QR artwork lives in `brand/business-card/`.
