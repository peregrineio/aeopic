# Session Snapshot — 2026-06-17 15:40 CDT
**Agent:** Orchestrator (cwd: root workspace)
**Project:** Aeopic Website (`projects/Aeopic/website/`, repo: peregrineio/aeopic — Next.js 16 + MDX/Velite)
**Workspace:** Peregrine IO root

## Where we are
GEO content system fully built — both skills (`/geo-blog`, `/new-geo-project`), config + backlog files, and master process doc are done. Aeopic is `/geo-blog`-ready. NDA for independent caller delivered as PDF + HTML source. Opportunities page live with sales-team roles (SDR, AM, AE, CSM). SEO foundation complete (canonical bug fixed, unique metadata on all pages, Bing + GSC connected, sitemap 45 pages).

## What's next (exact next step)
1. Run `/geo-blog college-station` to kick off the pilot batch — first real GEO posts.
2. Add `SUPABASE_SERVICE_ROLE_KEY` to Vercel (still empty — blocks /opportunities Apply forms).
3. Review Bing Site Scan results when available.

## Files currently being edited
- None actively open

## Key files from this session
- `geo-content/config.json` — Aeopic's GEO site config (brand, frontmatter schema, data sources, publish settings)
- `geo-content/backlog.json` — matrix: 7 cities × 4 services × 10 industries × 6 formats, pilotCity=college-station
- `.claude/skills/geo-blog/SKILL.md` — config-driven multi-site blog post generator
- `.claude/skills/new-geo-project/SKILL.md` — study-first site setup skill
- `project-manager/processes/geo-content-system.md` — master flow reference doc
- `projects/Aeopic/legal-docs/Aeopic-Caller-NDA.pdf` + `.html` — NDA for independent callers

## Open questions Sam hasn't answered
- NDA entity: drafted under Aeopic LLC — confirm if correct or should be Peregrine IO
- Legal agent review: offered to route NDA for compliance pass — no response yet

## Blockers
- `SUPABASE_SERVICE_ROLE_KEY` still empty in Vercel — Apply forms on /opportunities won't work until added
- Bing site scan results pending

## Anything Sam needs to remember
- **Vercel project for aeopic.com** = `aeopic` under **"peregrine io's projects"** team, deploys from `peregrineio/aeopic`. NOT the "Aeopic" team.
- **Never** set a layout-level `canonical` — pages self-canonicalize. Root title template appends "| Aeopic".
- Supabase project: `dhavmrdnnfcjckzlkhnn` ("Official Aeopic"). Editing `src/lib/chat/knowledgeBase.ts` requires `npm run chat:embeddings` after.
- GEO pilot plan: ~30 posts for College Station first → measure 6-8 weeks → scale to remaining 6 cities
- NDA fill-in fields (blue): [EFFECTIVE DATE], [RECIPIENT NAME], [RECIPIENT ADDRESS]. Non-solicitation = 12 months, confidentiality = 2 years.
- Design language: mono microlabels, ruled ledgers, outline-stroke type, dark terminal/artifact windows, square purple CTAs.
