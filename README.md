# Vallamdas Akhil: Portfolio

Personal portfolio built with Next.js (App Router), TypeScript (strict), and Tailwind CSS, in an editorial style: ivory paper (#F7F4ED), charcoal text (#252525), Fraunces serif headlines, Instrument Sans body text, and a muted blue accent. Fonts are self-hosted through Fontsource, so there is no runtime font request. Only the navigation is a client component; there is no animation library, and motion is CSS-only and disabled under `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run build        # production build
npm run start        # serve the production build
```

Requires Node.js 18.18 or newer.

## Update content

All personal content lives in `src/data/portfolio.ts` (profile, capabilities, projects, the three education qualifications, certifications). Components only render it.

- **Resume:** replace `public/resume/Akhil-Vallamdas-Resume.pdf` (keep the filename, or update `profile.resume`). The current PDF is a conversion of the resume .docx and is unchanged in content.
- **Location:** the portfolio uses Bhongir, Telangana, India (`profile.location`, the page metadata, and the share image in `src/app/opengraph-image.tsx`). The resume still says Hyderabad.
- **Projects:** each project has a `github` link and an optional `demo`. A live-demo button appears only when `demo` is set to a working URL. The Tourist Recommender has no repository link yet; add `github` to its entry when it is public.
- **Screenshots:** each project shows an original diagram (`ProjectPlate.tsx`), not a screenshot. To show a real screenshot, add the image to `public/images/` and render it in `ProjectPlate.tsx` with `next/image` and explicit width and height.
- **Education:** the three qualifications are in `qualifications`. No completion years were supplied, so none are shown; add a `years` field only when you have them.

## Site URL, canonical, and sitemap

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to your final domain once you have one, for example in Vercel under Project Settings, Environment Variables. When set, the site adds a canonical URL and a sitemap entry, and resolves absolute social-sharing URLs from it. When it is not set, no canonical URL is emitted. On Vercel, Next.js resolves the share-image URL from the deployment URL automatically. A local `next build` without the variable prints a `metadataBase` warning and uses `http://localhost:3000` for the share image, which only matters locally.

## Deploy to GitHub and Vercel

```bash
git init                      # skip if this folder is already a Git repo
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repository on GitHub first. If `git push` asks for credentials, sign in with the GitHub CLI (`gh auth login`) or use a personal access token.

1. Go to https://vercel.com/new and sign in with GitHub.
2. Import the repository. Vercel detects Next.js automatically; keep the default settings.
3. Click Deploy.

Every later `git push` to `main` redeploys the site automatically:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Notes on content accuracy

- AI SOC Assistant figures (424 samples, precision 1.0, recall 0.952, F1 0.975, no false positives, and the test counts) come from that repository's README, not from running its code. The card states the dataset is template-generated, the defense is pattern-based, and the project is not a production security tool.
- Sri Venkataramana Motors uses resume wording only. The repository currently contains only a README, so its features cannot be verified from the code. The resume figures (200+ listings, 12+ endpoints, 90%+ test coverage, 15+ bugs resolved) are deliberately not shown. Add them to `portfolio.ts` only when you can substantiate them.
- The Tourist Recommender card uses resume wording only, without its numeric claims.
- AI SOC Assistant's React and Vite dashboard and TinyDB persistence were verified in its repository source (`app/frontend/package.json`, `app/database.py`).
- Intermediate (768/1000, 76.8%) and Class 10 (CGPA 10.0) come from the redesign brief; the resume does not list them. The resume says Hyderabad, the site says Bhongir.

## Known issue

`npm audit` reports PostCSS advisories inside the Next.js 15 dependency tree. The only automatic fix is upgrading to Next.js 16, which is a breaking change, so the project stays on Next.js 15. These advisories concern processing untrusted CSS at build time, which this site does not do. Also, `next lint` is deprecated in Next.js 16; migrate to the ESLint CLI when you upgrade.

## Redesign notes (Oct 2026)

- Theme tokens: ivory `#F7F4ED`, charcoal `#252525`, defined in `tailwind.config.ts` and `src/app/globals.css`. The shared `.card` class gives plates and education entries a light surface, subtle border, and restrained shadow.
- The uploaded source contained no dark theme and already rendered three education entries; this pass aligned the colours, added card surfaces, and reworded the Intermediate and Class 10 entries to match the brief.
- Browser check (Playwright/Chromium) confirmed body colours, three education items, and no horizontal overflow at 1366px and 390px widths.
