# cucusenok.github.io

Personal site: CV, projects, stack and writing. Vite + React + TypeScript, deployed to GitHub Pages.

```bash
pnpm install
pnpm dev            # http://localhost:4500
pnpm build          # dist/ (+ 404.html for SPA routing on Pages)
pnpm pages          # build and push dist/ to the gh-pages branch
```

## Content

- `src/data/resume.json` — JSON Resume, the source for the Experience section. Synced from the
  sibling `~/resume` project together with the PDF: `pnpm sync:resume`.
- `src/data/projects.ts` — projects with galleries; images live in `src/assets/projects/<slug>/N.jpg`,
  logos in `src/assets/logos/<slug>.*`.
- `src/data/stack.ts` — stack grouped by area, with years and a short note each.
- `src/data/articles.ts` — Medium posts, maintained by hand.
- `design/` — the design canvas artboards the implementation follows.
