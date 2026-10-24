<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CI & branch protection

Every push to `main` and every pull request runs `.github/workflows/ci.yml`
(job name: **verify**). It does a clean install from the lockfile and then
runs, in order:

1. `npm audit --audit-level=high` — fails on high/critical advisories
2. `npm run lint` — eslint + content-lint (`scripts/content-lint.ts`)
3. `npm run build` — `next build`

`main` is protected: the **verify** check is a required status check, so a PR
cannot merge while any of those steps is red. Keep changes passing locally
before you push — run `npm run lint` and `npm run build`, and resolve any
high/critical `npm audit` finding (bump the dependency; don't silence it).
Don't weaken the audit gate or skip/disable a failing check to get green.
