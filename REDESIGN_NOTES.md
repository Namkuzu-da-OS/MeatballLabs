# Meatball Labs landing page redesign

This folder is a deployable static homepage for `meatball-labs.com`.

## Files
- `index.html` — page structure and links
- `styles.css` — responsive design and animations
- `app.js` — mobile navigation + Know Thyself dialog
- `assets/hero-temple.png` — generated visual background
- `assets/favicon.svg` — simple brand mark

## Deployment
Copy the contents of this `site/` folder into the web root for `meatball-labs.com`.

**Important:** preserve the existing `about.html` file. This redesign intentionally links to it rather than replacing it.

## Current destinations preserved
- Research: `https://research.meatball-labs.com/`
- Twitch: `https://www.twitch.tv/0nespicymeatball`
- X: `https://x.com/OneSpicyMeatBol`
- Telegram: `https://t.me/+BkAbnREOApsxMjYx`
- About: `about.html`
- Know Thyself:
  - Zen: `https://zen.meatball-labs.com/`
  - Breaking Your Genetic Code: `https://breakthecode.meatball-labs.com/`
  - Ancients: `https://ancients.meatball-labs.com/`

## Responsive intent
- Desktop (1180px+): six destination cards appear together.
- Tablet (861–1179px): 3x2 card grid.
- Mobile (860px and below): full-screen cinematic hero followed by stacked cards — a vertical journey through the same visual world.

## Before production
1. Verify every destination URL once on the production host.
2. Confirm whether the social links should open in a new tab (currently yes).
3. The build already includes optimized WebP hero assets with PNG fallbacks; AVIF can be added later if desired.
4. Run Lighthouse after deployment and tune caching/compression at the host.
5. Keep `prefers-reduced-motion` support intact.

No external JavaScript, font, icon, or CSS dependencies are required.
