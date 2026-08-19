# SanityProtector

Guidelines are split by scope. `shared` always applies; apply `frontend` or `backend` rules based on which part of the stack the current work touches.

@.claude/rules/shared.md
@.claude/rules/frontend.md
@.claude/rules/backend.md

## Build Plan

Product: connects to a user's Notion workspace (bring-your-own-workspace) and proactively notifies them when a new page matches a problem they've already solved, citing the exact past page(s).

### Competitive moat

- Proactive analysis, not reactive search.
- Layered on top of Notion, not a replacement for it.
- Citation-grounded: every match links to real past pages, never synthesized-only.
- Matches on problem shape, not mood/sentiment.

### Foundation

- Public Notion integration via OAuth 2.0.
- Account sign-in: magic link + sessions.
- Multi-tenant Postgres schema with RLS.
- Embedding pipeline: page content → vector, stored via pgvector. No full-text mirror of the workspace beyond what matching needs — matching only, not storage, per the bring-your-own-workspace approach.
- CI: lint, typecheck, test on every PR.
- Test harness.

### MVP

- Scheduled Notion scan: cron job pulls pages created/edited since the last cursor.
- Problem classifier: LLM call decides "is this a problem?".
- Semantic vector search (pgvector cosine similarity) as the first-pass matcher over the per-workspace embedding index.
- On match: link the exact past page(s) and draft a recap.
- Golden-file snapshots for extraction logic; regression tests for the ranking function.

### Improvements

- Feed of detected problems, each with confidence score and matched pages.
- Scan controls: frequency, scope, quiet hours.
- Golden-file snapshots for the classifier.
- RLS policy tests.

### Monetization

Semantic matching is baseline for both tiers; tiers differ on cadence, scope, and delivery only.

- Free tier: daily scan cadence, capped databases/pages per month.
- Pro tier: hourly cadence, unlimited databases/pages, push/Slack/Telegram delivery, weak-signal detection.
- Billing webhook tests.

### Localization

- All UI strings externalized.
- AI output localized to the user's language.
