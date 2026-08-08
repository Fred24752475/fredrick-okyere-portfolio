# Fredrick Okyere — Portfolio

Personal CV portfolio. Employers can browse projects, skills, and contact links.

## Stack

- Vite + React + TypeScript
- Custom CSS
- Cloudflare Pages hosting

## Local

```bash
npm install
npm run dev
```

## Edit content

Update [`src/content.ts`](src/content.ts) for bio, projects, skills, and links.

Add your photo as `public/fredrick.jpg`, then in `src/App.tsx` uncomment the `<img>` and remove the fallback block.

## Deploy (Cloudflare Pages)

```bash
npm run build
npx wrangler pages deploy dist --project-name fredrick-okyere-portfolio
```
