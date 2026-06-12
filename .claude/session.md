# Session Snapshot — 2026-06-12 01:01 CDT
**Agent:** Software Engineer (running from workspace root)
**Project:** Aeopic Website (`projects/Aeopic/website/`, repo: peregrineio/aeopic)
**Workspace:** unknown

## Where we are
Massive multi-day session: shipped opportunities page, full chatbot overhaul ($0-cost BM25 + lead flows + in-browser semantic layer), 4–8 week copy site-wide, /about + homepage + navbar + /process redesigns (dossier/pipeline design language). Everything committed and pushed to main through `0c176d6`; Vercel auto-deploys.

## What's next (exact next step)
1. Verify deploy watcher result (background poll checks aeopic.com/process for "pipeline run" + homepage "systems nominal").
2. Sam still owes Vercel env vars (peregrine-ios-projects → aeopic → Settings): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (copy from `.env.local`), `SUPABASE_SERVICE_ROLE_KEY` (Supabase dashboard — also still EMPTY in `.env.local`), `REVALIDATE_SECRET` (generated, in `.env.local`). Until then /opportunities shows empty state in prod.
3. Likely next redesign targets in the dossier language: /pricing, /work, /services pages.

## Files currently being edited
- None — all work committed clean.

## Open questions Sam hasn't answered
- None — all unblocked.

## Blockers
- Vercel env vars (above) — Sam-only, dashboard access.

## Anything Sam needs to remember
- Editing `src/lib/chat/knowledgeBase.ts` requires `npm run chat:embeddings` afterward (also saved in memory).
- Site-wide design language now: mono microlabels, ruled ledgers, outline-stroke type, dark terminal/artifact windows, square purple CTAs. Footer link lists are hardcoded in `footer.tsx`, NOT from `constants.ts`.
- 4–8 weeks is now the site-wide launch claim (was 8–12) — team must honor it on discovery calls.
- QA handoff for opportunities: `qa-agent/handoffs/aeopic-website-opportunities_2026-06-11.md` (audit not yet run).
- Chatbot research/audit doc: `projects/Aeopic/research/chatbot-audit_2026-06-11.md`.
- Dev server may still be running on :3000 (background shell).
