# Portfolio repo conventions

This file is the source of truth for how this repo is organised, how changes get in, and how it deploys. Portable across machines via git — clone the repo and this doc travels with it. Claude Code auto-discovers `CLAUDE.md` files, so any AI collaborator on any machine picks these rules up automatically.

## Overview

Personal portfolio site. Static Next.js 16 (`output: 'export'`) → GitHub Pages.

Repo URL: `https://github.com/IanTsung/IanTsung.github.io`
Live URL: `https://iantsung.github.io`

## Branches

Three long-lived branches:

| Branch | Contents | Notes |
|---|---|---|
| `main` | **Deploy config only** — `.github/workflows/*` | No application code. Direct commits allowed. |
| `v1` | Classic version (frozen) | Only touch for maintenance. |
| `v2` | Apple redesign — dark/light theme, current active version | Where new features land. |

Working branches:
- `feature/v2-<slug>` for new features
- `fix/v2-<slug>` for bug fixes
- `chore/v2-<slug>` for tooling / config
- Same pattern for `v1` (rare)

## How to make a change

**Never commit directly to `v1` or `v2`.** Use feature branches + PR + squash-merge.

```bash
git checkout v2
git pull origin v2
git checkout -b feature/v2-<slug>

# ...make changes, commit locally...

git push -u origin feature/v2-<slug>
gh pr create --base v2 --title "..." --body "..."
```

- **Merge strategy:** squash and merge. One PR = one commit on `v2`.
- **PR title:** short, imperative (`add magnetic hero buttons`, not `Added...`).
- **PR body:** what changed + why. Auto-linked to any related issues.
- After merge, delete the feature branch (locally + on GitHub).

`main` is different — it holds only CI/deploy config, so direct commits are fine for hotfixing workflows.

## Deployment

GitHub Pages, manual dispatch only (no auto-deploy on push).

To deploy:
1. GitHub → **Actions** tab → **Deploy to GitHub Pages**
2. **Run workflow** → pick `v1` or `v2` (default `v2`)
3. Workflow checks out that branch, runs lint + test + build, publishes `./out` to `gh-pages`

Pre-deploy gates (must pass or deploy fails):
- `npm ci`
- `npm run lint --if-present`
- `npm run test --if-present`
- `npm run build`

## Pre-merge gates (PR CI)

`.github/workflows/ci.yml` runs on `pull_request` against `v1` or `v2`. Same steps as deploy minus the actual publish. Turns the PR green/red before you squash-merge.

## Local development

```bash
npm ci               # install (reproducible)
npm run dev          # dev server @ localhost:3000
npm run lint         # ESLint 9 flat config (eslint.config.mjs)
npm run test         # Vitest (run once)
npm run test:watch   # Vitest in watch mode
npm run build        # static export → ./out
```

## Testing

- Framework: **Vitest**.
- Test files co-located with source: `foo.test.js` next to `foo.js`.
- Convention: pure logic modules get unit tests. React component behaviour tested via extracted logic modules (avoid DOM/renderer overhead).
- Current suite: `src/app/components/contact-guard.test.js` — 20 tests covering the contact form anti-abuse module.

## Environment variables

All prefixed `NEXT_PUBLIC_` so they're bundled into the static export.

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template identifier |
| `NEXT_PUBLIC_EMAILJS_USER_ID` | EmailJS public key |

Set as **GitHub Actions secrets** for build time. Set in local `.env.local` for dev.

## Contact form anti-abuse (v2 only)

`src/app/components/contact-guard.js` — pure module with:
- `isOnCooldown` / `startCooldown` / `getCooldownRemainingMs` — 60s cooldown persisted to `localStorage` (survives refresh).
- `isHoneypotTriggered` — checks a hidden `website` input off-screen. Bots often auto-fill it; silently drop those submissions.

Client-side only. EmailJS API keys are in the bundle by design — front-end can never fully prevent motivated abuse. For a real anti-abuse layer, add EmailJS Dashboard domain allowlist + eventually a serverless proxy.

## Theme system (v2)

- Dark by default, light opt-in.
- Colour tokens in CSS variables at `:root` (dark) with overrides on `html.light` (light).
- Tailwind config references `rgb(var(--apple-*) / <alpha-value>)` so opacity modifiers work in both themes.
- Theme toggle in NavBar → `useTheme()` from `src/app/components/ThemeProvider.jsx`.
- Preference persisted in `localStorage`. Inline script in `layout.js` `<head>` sets `.light` class **before hydration** to prevent FOUC.

## Files worth knowing about

```
CLAUDE.md                              ← (optional root shim if you add one)
.claude/CLAUDE.md                      ← this file
.github/workflows/deployment.yml       ← manual deploy (main only)
.github/workflows/ci.yml               ← PR gates (v1/v2)
src/app/components/                    ← React components
src/app/components/contact-guard.js    ← anti-abuse logic + tests
src/app/components/ThemeProvider.jsx   ← theme context
src/app/globals.css                    ← CSS vars, theme tokens
tailwind.config.js                     ← Tailwind + Apple palette
eslint.config.mjs                      ← ESLint 9 flat config
vitest.config.js                       ← Vitest
next.config.mjs                        ← Next static export
```
