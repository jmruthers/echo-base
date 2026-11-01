# Echo Base

Marketing site for **Echo Base – Alpine Family Retreat** in Dinner Plain, Victoria.

Static Vite + React + TypeScript + Tailwind CSS v4 site. Booking stays on Airbnb — no database.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this repo to GitHub (or another Git host Vercel supports).
2. In Vercel: **Add New Project** → import the repo.
3. Framework preset: **Vite** (defaults are fine).
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. SPA routing is handled by [`vercel.json`](vercel.json).

Optional: attach a custom domain in the Vercel project settings.

## Content

Edit copy, amenities, reviews, and links in [`src/content/listing.ts`](src/content/listing.ts).

Airbnb booking URL: https://www.airbnb.com.au/rooms/17964453  
Host email: echobase@therutherfords.com.au
