# Ask the Atlas

`Ask the Atlas` is a source-grounded AI assistant for the
`Awesome-LLM-Reasoning-Data` repository.

It is designed to answer questions about post-training reasoning data using:

- the public companion-paper seed in `docs/companion_paper_primer.md`;
- the companion paper full text, when a backend-only local text copy is configured;
- repository learning guides, paper maps, cards, and generated metadata;
- strict quota, reward, logging, and admin controls.

Every answer is labeled by evidence mode. The assistant first uses companion
paper snippets, then repository atlas evidence, and only then lower-confidence
model background for in-scope questions. Completely source-empty retrieval is
blocked with a narrowing suggestion.

The bundled companion seed is intentionally compact and public. For higher
recall paper-grounded answers, configure `ASK_ATLAS_PRIMER_TEXT_PATH` on the
backend to point at a text extraction of the paper. Do not expose that path or
full-text file through GitHub Pages.

## Security Model

The model API key must only live on the backend as `QIHOO_API_KEY`.
Do not put API keys in `docs/`, frontend JavaScript, README files, screenshots, or committed `.env` files.

The public GitHub Pages site hosts the canonical `/ask/` frontend, with
`/ask.html` kept as a compatibility fallback. All expensive or private
operations still run through the backend:

- GitHub OAuth;
- quota checks;
- star and fork reward verification;
- model calls;
- request logging;
- admin dashboard data.

## Local Development

```bash
cd apps/ask-atlas
npm run dev
```

The development command enables mock auth and mock model responses so the UI can be tested without spending tokens:

```text
http://localhost:8787/ask
http://localhost:8787/admin
```

For real GitHub OAuth and model calls, set:

```text
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
QIHOO_API_KEY
ASK_ATLAS_SESSION_SECRET
ASK_ATLAS_BASE_URL
ASK_ATLAS_ADMIN_GITHUB_IDS
```

Then run:

```bash
npm start
```

`.env.example` is a reference file for local shells and deployment platforms; the plain Node server does not automatically load `.env` files. Export variables in your shell, configure them in the host, or use your preferred secret manager.

The GitHub OAuth App should request only the `read:user` scope. Star and fork rewards are checked from public repository metadata and do not require write access to user repositories.
Encrypted OAuth tokens are retained only for reward checks and expire after
`ASK_ATLAS_GITHUB_TOKEN_RETENTION_DAYS` days by default. Set that value to `0`
to avoid persisting OAuth tokens at all; reward checks then rely on unauthenticated
public GitHub API calls and may be more rate-limited.

## Quota Rules

Default public users receive 2 questions per day.

One-time rewards:

- starring `RenBing-Sumeru/Awesome-LLM-Reasoning-Data`: +10 bonus questions;
- forking the repository: +20 bonus questions.

Admin and allowlisted users are controlled by:

```text
ASK_ATLAS_ADMIN_LOGINS=RenBing-Sumeru
ASK_ATLAS_ADMIN_GITHUB_IDS=<stable numeric owner id>
ASK_ATLAS_ALLOWLIST_GITHUB_IDS=
```

Allowlisted users can view private usage/cost dashboards. Owner/admin-only mutations such as ban, allowlist, admin promotion, and bonus reset require the admin identity, preferably matched by stable GitHub numeric ID. Admin routes are not linked from the public README. They still require backend authorization.

Production deployments reject login-based allowlists because GitHub logins are
mutable. Use `ASK_ATLAS_ALLOWLIST_GITHUB_IDS` or database roles bound to
`githubId` for dashboard viewers.

## Deployment Notes

This Node service can run on hosts such as Render, Fly.io, Railway, a VPS, or a container service.

The repository also includes a Vercel serverless adapter:

```text
api/index.mjs
vercel.json
.github/workflows/deploy-ask-atlas-vercel.yml
```

When deploying this app directory as a Vercel project, every request is routed
to the same backend `route()` function used by local development. That means
`/admin` and `/api/*` keep the same GitHub OAuth, quota, cost, logging, and
admin authorization gates. Keep this route-first setup; do not deploy the
`public/` directory as an independently accessible static app, because
`/admin.html` must pass through backend authorization. The user-facing Ask UI
is published from `docs/ask/index.html` on GitHub Pages, with `docs/ask.html`
as a compatibility fallback, and calls the backend via `docs/assets/ask-config.js`.

Minimal Vercel flow:

```bash
cd apps/ask-atlas
npm install
npm run secret:generate
vercel link
vercel env add ASK_ATLAS_ENV production
vercel env add ASK_ATLAS_BASE_URL production
vercel env add ASK_ATLAS_PAGES_BASE_URL production
vercel env add ASK_ATLAS_SESSION_SECRET production
vercel env add ASK_ATLAS_TOKEN_ENCRYPTION_SECRET production
vercel env add GITHUB_CLIENT_ID production
vercel env add GITHUB_CLIENT_SECRET production
vercel env add QIHOO_API_KEY production
vercel env add ASK_ATLAS_STORE_BACKEND production
vercel env add ASK_ATLAS_ADMIN_GITHUB_IDS production
vercel env add DATABASE_URL production
vercel env add UPSTASH_REDIS_REST_URL production
vercel env add UPSTASH_REDIS_REST_TOKEN production
vercel env add ASK_ATLAS_TRUST_PROXY production
vercel env add ASK_ATLAS_ALLOW_JSON_STORE production
vercel env add ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT production
vercel env add ASK_ATLAS_REQUIRE_MODEL_RATES production
vercel env add ASK_ATLAS_MODEL_RATES_JSON production
npm run db:setup
vercel --prod
```

If you prefer GitHub Actions, configure the `production` environment with:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

plus the backend secrets listed above, then run **Deploy Ask Atlas backend to
Vercel** from the Actions tab. The workflow validates production config, applies
the Postgres schema, deploys the backend, and runs the deployed smoke check. It
intentionally fails if the public Pages config is still blank or points
somewhere other than `ASK_ATLAS_BASE_URL`. It also compares the freshly deployed
Vercel URL against the configured public backend using `/api/health` deployment
metadata, so a wrong Vercel project, stale alias, or mismatched OAuth callback
cannot be hidden by an older healthy backend.

To print copyable production setup command templates without exposing values:

```bash
npm run secret:generate
npm run production:configure -- --check
npm run doctor:prod
npm run env:github
npm run env:vercel
```

`npm run secret:generate` prints two independent high-entropy values for
`ASK_ATLAS_SESSION_SECRET` and `ASK_ATLAS_TOKEN_ENCRYPTION_SECRET`. Store those
values only in backend deployment secrets and GitHub Environment secrets; do
not commit or paste them into public logs.

`npm run doctor:prod` prints a safe production readiness report with blockers,
warnings, and missing environment names. It intentionally omits concrete URLs,
secret values, provider keys, and numeric cost-cap values. After you have
GitHub/Vercel inventory files, run it with `--strict` to fail on any remaining
launch blocker.

`npm run production:configure -- --apply-github` can write GitHub production
variables and secrets after every required value has been exported in the
current shell. It refuses partial writes and never prints secret values.

The GitHub template uses `gh variable set` for public configuration and
`gh secret set` from shell environment variables for secrets. The Vercel
template uses `vercel env add`, which prompts for values instead of writing
them into committed files. Do not run the secret commands with shell tracing
or debug echo enabled.

For public traffic, set `ASK_ATLAS_ENV=prod`, `ASK_ATLAS_BASE_URL` to the deployed non-local HTTPS backend, `ASK_ATLAS_STORE_BACKEND=postgres`, `ASK_ATLAS_ALLOW_JSON_STORE=0`, `ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT=0`, and configure `DATABASE_URL` plus Redis/Upstash atomic counters. JSON file storage and process-local rate windows are for local development or private single-instance experiments only. Configure `ASK_ATLAS_MAX_SINGLE_REQUEST_COST_USD`, positive numeric model rates, and `ASK_ATLAS_QUOTA_RESERVATION_TTL_MS` so expensive or crashed requests do not quietly consume the project budget.

For stronger companion-paper grounding, set `ASK_ATLAS_PRIMER_TEXT_PATH` to a
backend-local text extraction of the paper under `ASK_ATLAS_SAFE_RAG_ROOT`.
The backend refuses paths outside that safe root, non-`.txt`/`.md` files,
oversized files, and config/secret/log/database-like filenames. If no private
full-text path is set, Ask still uses the public seed at
`docs/companion_paper_primer.md` and labels those snippets as companion-paper
evidence.

Before launch, run:

```bash
npm run db:check
npm run doctor:prod -- --strict
npm run launch:check
npm run config:check
npm test
```

`launch:check` is the verbose maintainer diagnostic: blockers and warnings both
fail by default, so public launch cannot silently proceed with localhost URLs,
missing pricing, missing Redis/Postgres, or a Pages frontend pointed at the
wrong backend. Use `npm run launch:check -- --smoke` after deployment to call
the configured backend `/api/health?db=1` endpoint and verify that the deployed
runtime is backed by Postgres and can see the expected database schema.

Production planning files:

- `PRODUCTION.md` defines the launch gates, required secrets, retention policy, and deployment flow.
- `db/schema.sql` defines the Postgres runtime state table plus `ask_atlas_*` reporting tables for users, usage, bonus credits, quota reservations, request logs, feedback, admin allowlists, bans, model cost summaries, source chunks, and retrieval events. Use `npm run db:setup` to apply it and `npm run db:check` to verify required tables, privacy columns, and RLS. In production, the backend keeps `ask_atlas_state` as the authoritative transactional snapshot and mirrors each committed state into the normalized reporting tables with upserts and stale-row cleanup for admin analytics. Reporting-table failures are isolated with a Postgres savepoint and recorded as internal events so a dashboard mirror issue does not block core question/quota state.

After deploying the backend, update:

```text
docs/assets/ask-config.js
```

so the GitHub Pages `/ask/` frontend calls the deployed service:

```bash
python3 scripts/set_ask_backend_url.py https://your-secure-backend.example
python3 scripts/set_ask_backend_url.py --check --require-url
```

```js
window.ASK_ATLAS_FRONTEND = "pages";
window.ASK_ATLAS_BACKEND_URL = "https://your-secure-backend.example";
```

The helper refuses non-HTTPS, localhost, URL credentials, query strings,
fragments, and secret-like values because this file is published by GitHub
Pages. To return to the safe pre-deployment state, run
`python3 scripts/set_ask_backend_url.py --clear`.

Two-stage launch is supported: the first backend-deployment commit may leave
the public backend URL empty while the backend project is being created. The
manual launch gate requires `--require-url` before `/ask/` is announced as live.
