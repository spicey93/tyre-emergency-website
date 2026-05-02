# Tyre Digital — Astro site

Marketing site for **Tyre Emergency Ltd**, built with [Astro](https://astro.build/) 6, Bootstrap 5, and SCSS. Pages are mostly static; service and area pages are generated from TypeScript content modules.

## Requirements

- **Node.js** `>= 22.12.0` (see `package.json` → `engines`)

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

| Command        | Purpose                                      |
| -------------- | -------------------------------------------- |
| `npm run dev`  | Local dev server with hot reload             |
| `npm run build`| Production build → `dist/`                   |
| `npm run preview` | Serve `dist/` locally after a build       |

## Project layout (what to edit)

| Location | What it controls |
| -------- | ---------------- |
| [`src/config/site.ts`](src/config/site.ts) | Company name, phone, email, address, VAT/company numbers, social handles, production URL (`SITE_URL`), Google Tag Manager ID, top bar items, opening hours for structured data, cookie policy date, footer designer credit |
| [`src/content/pages.ts`](src/content/pages.ts) | Home, About, and Contact page copy (titles, descriptions, headings, body text) |
| [`src/content/services.ts`](src/content/services.ts) | Each service: URL slug (`link`), SEO fields, hero and main content. Routes are `/services/<link>/` via [`src/pages/services/[service].astro`](src/pages/services/[service].astro) |
| [`src/content/areas.ts`](src/content/areas.ts) | Each area page: same shape as services. Routes are `/areas/<link>/` via [`src/pages/areas/[area].astro`](src/pages/areas/[area].astro) |
| [`src/styles/main.scss`](src/styles/main.scss) | Global styles, theme colours, typography |
| [`src/assets/`](src/assets/) | Logo (`logo.png`), hero images, tyre brand images, etc. |
| [`public/`](public/) | Static files served as-is (e.g. `favicon.ico`, `robots.txt`) |
| Individual `.astro` files under [`src/pages/`](src/pages/) | Page structure and layout wiring; prefer changing copy in `src/content/*` and `src/config/site.ts` unless you are changing HTML structure |

[`src/consts.ts`](src/consts.ts) re-exports config and content for a single import surface across components; **edit `src/config/site.ts` and `src/content/*`**, not duplicate values in `consts.ts`.

## Adding or changing services and areas

1. Add or edit an object in `SERVICES` or `AREAS` in the matching content file.
2. Set `link` to a URL-safe slug (lowercase, hyphens). That slug becomes the path segment.
3. Run `npm run dev` and visit `/services/<link>/` or `/areas/<link>/` to check the page.

Removing an entry removes that route on the next build.

## Production URL and SEO

`SITE_URL` in `src/config/site.ts` is used by Astro’s `site` option in [`astro.config.ts`](astro.config.ts) for canonical URLs and metadata. Keep it aligned with the live domain before deploying.

## Styling notes

- Main entry stylesheet is SCSS; compiled CSS may exist alongside it for tooling—**edit `src/styles/main.scss`** as the source of truth unless your workflow says otherwise.
- Bootstrap and Bootstrap Icons are npm dependencies; icons referenced in config (e.g. top bar) use the `bi-` icon names.

## Assets and favicon

- **Logo and images:** place files under `src/assets/` (or `public/` if they must be at a fixed URL with no bundling).
- **Favicon:** put `favicon.ico` in `public/`. To convert from SVG, you can use a converter such as [CloudConvert](https://cloudconvert.com/svg-to-ico) (SVG → ICO).
- Placeholder brand imagery: [Logoipsum](https://logoipsum.com/) (only where appropriate for dev/mockups).

## Tech stack

- Astro 6, TypeScript (strict), Bootstrap 5, SCSS

If you adapt this repo for another business, treat **`src/config/site.ts`** and **`src/content/*`** as the main data entry points, then adjust imagery and any page-specific `.astro` markup as needed.
