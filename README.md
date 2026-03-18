This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Color Palette (Design System)

Palette principale adottata (regola dei 3 colori):

1. Primary: `#0f172a` (deep navy)
2. Accent: `#f59e0b` (amber)
3. Secondary: `#22d3ee` (cyan)

Support colors:

1. Background base: `#030712`
2. Foreground text: `#f8fafc`
3. Surface overlays: `rgba(15, 23, 42, 0.38)`

Regole d'uso:

1. Primary: struttura, sezioni scure, card base.
2. Accent: CTA, focus states, elementi che devono emergere subito.
3. Secondary: elementi di supporto (badge, icone, glow, progress line).
4. Titoli gradient: `from-amber-300` -> `to-cyan-300`.

Nota importante:

1. I colori hover delle icone social restano intenzionalmente invariati per preservare il riconoscimento dei brand.

### Scelta Sfondo

Lo sfondo resta scuro (`#030712` / `#0f172a`) per questi motivi:

1. Migliore contrasto su testi e titoli gradient.
2. Coerenza con il mood tech/cinematico del portfolio.
3. Maggiore leggibilità su sezioni dense di contenuto.
4. Piu' spazio visivo per accenti amber/cyan senza effetto caotico.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
