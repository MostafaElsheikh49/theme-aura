
# AURA — Salla Theme (Starter)

Futuristic, bilingual theme for tech & electronics stores on Salla Twilight.

## Quick Start (with Salla CLI)
1) Create a Salla Partners account and link GitHub.
2) Install Node.js LTS >=16 and Salla CLI.
3) In your repo root, keep `twilight.json` at top-level (this file is read by the portal).  
4) Push the repo to GitHub, then in **Salla Partners Portal → My Themes → Import** link this repository.
5) Use **Preview** in the portal or `salla twilight preview` locally.

### Useful Docs
- Setup themes & `twilight.json`: https://docs.salla.dev/421879m0
- Salla CLI (create/list/preview/publish): https://docs.salla.dev/429774m0

## Structure
- `layouts/master.twig` — global layout (header/footer, assets)
- `pages/home.twig` — homepage composition
- `pages/product.twig` — product page (basic)
- `components/*` — reusable sections (hero, features, products, newsletter)
- `locales/` — `en.json` and `ar.json` for bilingual strings
- `assets/` — CSS & JS

## Configure
Global settings are in **twilight.json → settings** (color scheme, fonts, hero headline, etc.).
Merchants can override these in the Salla Partners Portal.

— Generated 2025-10-30T19:27:18.543864
