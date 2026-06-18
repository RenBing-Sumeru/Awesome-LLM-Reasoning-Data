# Ask the Atlas Production Guide

This guide describes the secure production shape for `Ask the Atlas`.

The local zero-dependency server is useful for development and demos. Public
traffic should use managed storage and atomic rate limits before the assistant
is promoted as a public feature.

## Recommended Stack

| Layer | Recommendation | Why |
| --- | --- | --- |
| Public atlas | GitHub Pages from `docs/` | Static, project-native, cheap, and easy to share. |
| Ask frontend | GitHub Pages `docs/ask/index.html` plus `docs/assets/ask.js` | The interactive learning console stays project-native and shareable at `/ask/`; `docs/ask.html` remains a fallback. |
| Ask backend | Current Node/Vercel server behind HTTPS | Keeps OAuth, quota, RAG, model calls, logs, `/admin`, and `/api/*` off the static site. |
| Secrets | Vercel/Cloudflare/Render environment secrets | API keys and OAuth secrets must never reach GitHub Pages. |
| Database | Supabase Postgres | Stores the authoritative runtime snapshot plus normalized `ask_atlas_*` reporting tables for users, quotas, reward ledger, chat logs, costs, and future RAG chunks. |
| Rate limit | Upstash Redis or equivalent atomic counter store | Enforces per-user, per-IP, and global caps across server instances. |
| RAG | Postgres full-text search first; `pgvector` later | Keeps answers grounded in repository sources before adding semantic search. |

## Required Secrets

Never commit real values. Configure these in the deployment platform:

```text
ASK_ATLAS_ENV=prod
ASK_ATLAS_BASE_URL=https://your-secure-backend.example
ASK_ATLAS_PAGES_BASE_URL=https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data
ASK_ATLAS_ALLOWED_ORIGINS=
ASK_ATLAS_SESSION_SECRET=<long random string>
ASK_ATLAS_TOKEN_ENCRYPTION_SECRET=<different long random string>
GITHUB_CLIENT_ID=<github oauth client id>
GITHUB_CLIENT_SECRET=
QIHOO_API_KEY=
ASK_ATLAS_STORE_BACKEND=postgres
DATABASE_URL=<postgres connection string>
ASK_ATLAS_DATABASE_SSL=auto
ASK_ATLAS_ALLOW_JSON_STORE=0
UPSTASH_REDIS_REST_URL=<redis rest url>
UPSTASH_REDIS_REST_TOKEN=<redis token>
ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT=0
ASK_ATLAS_TRUST_PROXY=1
ASK_ATLAS_ADMIN_GITHUB_IDS=<stable numeric GitHub id>
ASK_ATLAS_ADMIN_LOGINS=RenBing-Sumeru
ASK_ATLAS_REQUIRE_MODEL_RATES=1
ASK_ATLAS_MAX_SINGLE_REQUEST_COST_USD=<hard cap per model request>
ASK_ATLAS_QUOTA_RESERVATION_TTL_MS=300000
ASK_ATLAS_SAFE_RAG_ROOT=<backend-only directory for private .txt/.md primer extraction>
ASK_ATLAS_MAX_PRIMER_TEXT_BYTES=5242880
VERCEL_TOKEN=<deployment token, only if using the Vercel workflow>
VERCEL_ORG_ID=<Vercel team/user id, only if using the Vercel workflow>
VERCEL_PROJECT_ID=<Vercel project id, only if using the Vercel workflow>
```

Generate the two Ask-specific secrets locally with:

```bash
npm --prefix apps/ask-atlas run secret:generate
```

The command prints independent high-entropy values for
`ASK_ATLAS_SESSION_SECRET` and `ASK_ATLAS_TOKEN_ENCRYPTION_SECRET`, plus safe
storage command templates. Treat the output like credentials: do not commit it,
paste it into public logs, or run the command while shell tracing/debug echo is
enabled.

If a model API key has ever appeared in a chat, screenshot, issue, commit, or
terminal recording, rotate it before deployment.

## Security Gates

Do not publicly launch until all gates are true:

- `QIHOO_API_KEY` is rotated and exists only as a backend secret.
- GitHub OAuth requests only basic identity scope such as `read:user`.
- `ASK_ATLAS_DEV_AUTH=0` and `ASK_ATLAS_MOCK_PROVIDER=0` in every public deployment.
- `ASK_ATLAS_ADMIN_GITHUB_IDS` is configured, not only the mutable login name.
- `docs/assets/ask-config.js` points to the deployed HTTPS backend and contains no secrets.
- The backend CORS allowlist permits the GitHub Pages origin, not arbitrary origins.
- Production storage uses `ASK_ATLAS_STORE_BACKEND=postgres` for users,
  sessions, usage, rewards, logs, and feedback. JSON storage is allowed only
  for local development or explicitly private single-instance deployments.
- The backend mirrors each committed Postgres snapshot into normalized
  `ask_atlas_*` reporting tables with upserts and stale-row cleanup, so private
  admin cost, user, question, and knowledge-gap analysis is not trapped in one
  JSONB blob. Reporting-table sync is isolated with a savepoint and records an
  internal event if it fails, so a dashboard mirror problem does not block the
  core question/quota state.
- Rate limiting uses Redis/Upstash atomic counters, not process memory or JSON
  files. Redis failures should fail closed and block model calls to protect the
  project budget.
- Model pricing is configured with positive numeric input/output rates and
  `ASK_ATLAS_REQUIRE_MODEL_RATES=1`.
- Admin APIs require backend authorization for every request; allowlisted users may view dashboards, but owner/admin-only mutations such as ban, allowlist, admin promotion, and bonus reset are restricted to the admin identity.
- Production allowlists must use stable numeric GitHub IDs, not mutable GitHub
  login names.
- The private companion-paper full-text path, if configured, must live under
  `ASK_ATLAS_SAFE_RAG_ROOT`, must be `.txt` or `.md`, must stay below
  `ASK_ATLAS_MAX_PRIMER_TEXT_BYTES`, and must not point at config, secret, log,
  database, or structured data files.
- GitHub OAuth tokens are stored only in the authoritative runtime state when
  needed for GitHub reward checks, expire according to
  `ASK_ATLAS_GITHUB_TOKEN_RETENTION_DAYS`, and can be disabled with a value of
  `0`. The normalized reporting tables used for SQL analytics intentionally do
  not mirror encrypted OAuth tokens.
- Raw question and answer logging is disclosed in the UI, and users can opt out
  of storing raw question/answer text while preserving hashes and cost metadata.
- `/api/chat` requires the current usage notice consent version before any
  model call is made.
- Feedback can only be submitted for the authenticated user's own answer and
  feeds the private Knowledge Gaps dashboard.
- Star and fork bonuses are awarded once via a credit ledger.
- `/api/chat` reserves request quota, projected token usage, projected cost,
  and bonus credit before a model call; provider errors release the reservation.
- Stale quota reservations are released automatically, and actual provider cost
  overruns are logged as risk events for admin review.
- Source grounding is explicit in every answer. Zero-source retrieval produces
  a narrowing suggestion instead of a model call; weak-but-nonempty retrieval
  may answer only when the response labels limited repository evidence and
  separates lower-confidence model background from companion-paper or atlas
  evidence.
- `docs/companion_paper_primer.md` is present as the public companion-paper
  seed. For higher-recall paper grounding, configure `ASK_ATLAS_PRIMER_TEXT_PATH`
  to a backend-only full-text extraction.

## CI Gates

The repository workflow in `.github/workflows/validate.yml` protects the
public atlas and the Ask assistant together. It installs the Python and Node
toolchains, validates atlas metadata, checks generated README/site/paper/card
outputs, verifies card-level Ask links, scans for accidental provider-token
leaks, validates the public Ask backend config, and runs the Ask backend test
suite.

The CI intentionally does not require production secrets. Public launch still
requires `npm --prefix apps/ask-atlas run launch:check` against the deployed
backend environment, because GitHub Actions should never need the model API key
or database passwords just to validate a normal pull request.

For the real public launch, use the manual workflow in
`.github/workflows/ask-atlas-launch.yml`. It is bound to the `production`
environment and expects deployment secrets/variables such as
`QIHOO_API_KEY`, `DATABASE_URL`, Redis credentials, GitHub OAuth credentials,
`ASK_ATLAS_BASE_URL`, `ASK_ATLAS_ADMIN_GITHUB_IDS`, and
`ASK_ATLAS_MODEL_RATES_JSON`. That workflow verifies the browser-visible
`docs/assets/ask-config.js` with `--require-url`, runs production config
validation, and calls the deployed `/api/health?db=1` endpoint through
`launch:check -- --smoke --allow-warnings --redacted`. Warnings such as a
missing optional backend-only full-text primer do not block the workflow, but
any blocker still fails the launch gate.

## Deployment Flow

### Vercel backend option

The app directory includes a Vercel adapter:

```text
apps/ask-atlas/api/index.mjs
apps/ask-atlas/vercel.json
```

Deploy `apps/ask-atlas` as the Vercel project root. The route in
`vercel.json` sends every backend-hosted request to the route function before
serving application files, so there is no separate static admin shell or
unprotected API path. `/admin`, `/admin.html`, and `/api/*` all keep the same
authorization, quota, cost, logging, and topic-gate logic used by local
development. The public user-facing Ask UI is served by GitHub Pages from
`docs/ask/index.html`; it calls this backend with credentialed CORS.

Do not replace this route-first Vercel setup with a plain static deployment of
`public/`. A static deployment would expose `/admin.html` as an unprotected
shell even though the data APIs remain protected.

Use Vercel environment variables for every secret. Do not set any model key in
GitHub Pages, `docs/assets/ask-config.js`, README badges, or browser-visible
JavaScript.

The GitHub Actions deployment environment and the Vercel runtime environment
are two separate places. The workflow needs the secrets so it can validate and
deploy; the deployed Vercel function also needs the same runtime variables so
OAuth, Postgres, Redis, and the model provider work after cold start. The
deploy workflow therefore checks both the presence of runtime variable names
and the actual production runtime values before deployment:

```bash
node apps/ask-atlas/scripts/check-env-names.mjs --github-actions-deploy
vercel env ls production --token "$VERCEL_TOKEN" > /tmp/ask-atlas-vercel-env.txt
node apps/ask-atlas/scripts/check-env-names.mjs --vercel-list /tmp/ask-atlas-vercel-env.txt
vercel env run -e production --token "$VERCEL_TOKEN" -- npm run config:check
```

`vercel env run` is intentionally preferred over `vercel pull` for launch
checks. It runs the command with Vercel project environment variables without
writing secrets to `.vercel/.env.*.local`. The deploy workflow creates only a
minimal `.vercel/project.json` containing the project and org IDs, and
`.gitignore` excludes `.vercel/` and `.env*.local` for local safety.

After `vercel deploy --prod`, the workflow verifies that the freshly deployed
URL and the configured public `ASK_ATLAS_BASE_URL` both return an Ask the Atlas
`/api/health` payload for the same deployment commit. This prevents the unsafe
case where CI deploys one Vercel project or alias but GitHub Pages and GitHub
OAuth still point at an older or different backend.

To print the required Vercel variable names without exposing values:

```bash
npm --prefix apps/ask-atlas run env:print
```

To print copyable setup command templates without exposing values:

```bash
npm --prefix apps/ask-atlas run secret:generate
npm --prefix apps/ask-atlas run production:configure -- --check
npm --prefix apps/ask-atlas run doctor:prod
npm --prefix apps/ask-atlas run env:github
npm --prefix apps/ask-atlas run env:vercel
```

The GitHub template separates environment variables from secrets. Secret
commands read values from shell variables with `printf '%s' "$NAME" | gh secret
set ...`, so the command output never contains model keys, database URLs, OAuth
secrets, Redis tokens, or session secrets. The Vercel template uses
`vercel env add`, which prompts for values and keeps them out of the repository.
Do not run the secret commands with shell tracing or debug echo enabled.

If all production values are already exported in the current shell, the
configuration helper can write GitHub Environment variables and secrets without
printing values:

```bash
npm --prefix apps/ask-atlas run production:configure -- --check
npm --prefix apps/ask-atlas run production:configure -- --apply-github
```

The helper refuses partial writes: every required GitHub production variable
and secret must be present before it calls `gh variable set` or `gh secret set`.
For Vercel, use `npm --prefix apps/ask-atlas run production:configure --
--print-vercel` to print the required `vercel env add` commands while keeping
values out of logs.

To produce a safe gap report from platform inventories without printing secret
values:

```bash
gh variable list --repo RenBing-Sumeru/Awesome-LLM-Reasoning-Data --env production > /tmp/ask-atlas-gh-vars.txt
gh secret list --repo RenBing-Sumeru/Awesome-LLM-Reasoning-Data --env production > /tmp/ask-atlas-gh-secrets.txt
vercel env ls production --token "$VERCEL_TOKEN" > /tmp/ask-atlas-vercel-env.txt
npm --prefix apps/ask-atlas run doctor:prod -- \
  --github-vars-file /tmp/ask-atlas-gh-vars.txt \
  --github-secrets-file /tmp/ask-atlas-gh-secrets.txt \
  --vercel-env-file /tmp/ask-atlas-vercel-env.txt \
  --strict
```

The doctor extracts environment names only. It reports blockers, warnings, and
missing variable names, but it never echoes secret values, provider keys,
concrete URLs, or numeric cost-cap values. Use `launch:check` when a maintainer
needs a more verbose local diagnostic.

### Launch flow

1. Create a GitHub OAuth app.
2. Set the callback URL:

```text
https://your-secure-backend.example/api/auth/github/callback
```

3. Create the Postgres database and apply the schema. In production
   automation, run this through `vercel env run` so the schema is applied to
   the same database the deployed function will use:

```bash
npm --prefix apps/ask-atlas run db:setup
vercel env run -e production --token "$VERCEL_TOKEN" -- npm run db:setup
```

4. Configure Redis/Upstash for rate limits.
5. Add all secrets to the backend deployment platform.
6. Deploy the backend and verify:

```text
https://your-secure-backend.example/api/health
https://your-secure-backend.example/admin
```

7. Update `docs/assets/ask-config.js` with the safe helper:

```bash
python3 scripts/set_ask_backend_url.py https://your-secure-backend.example
python3 scripts/set_ask_backend_url.py --check --require-url
```

The helper refuses non-HTTPS, localhost, URL credentials, query strings,
fragments, and secret-like values because this file is browser-visible on
GitHub Pages. Use `python3 scripts/set_ask_backend_url.py --clear` to restore
the safe pre-deployment empty backend URL.

Normal pull requests and the first backend-deployment commit may keep an empty
backend URL while the app is still being configured. The public launch workflow
must pass `--require-url` before announcing `/ask/` as live.

```js
window.ASK_ATLAS_FRONTEND = "pages";
window.ASK_ATLAS_BACKEND_URL = "https://your-secure-backend.example";
```

8. Re-render and publish the GitHub Pages site. The public
   `https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/`
   page will host the Ask UI and call the configured backend.

9. Run repository checks:

```bash
npm --prefix apps/ask-atlas run launch:check
npm --prefix apps/ask-atlas run doctor:prod -- --strict
npm --prefix apps/ask-atlas run config:check
npm --prefix apps/ask-atlas run db:check
npm --prefix apps/ask-atlas test
python3 scripts/render_readme.py --check
python3 scripts/render_site.py --check
python3 scripts/validate_data.py
```

`launch:check` uses the same safe readiness snapshot shown in the private
`/admin` dashboard. It may display environment variable names and public URLs,
but it must never print API keys, OAuth secrets, Redis tokens, database
passwords, or raw admin logs. The default command is strict: both blockers and
warnings fail the process. The production launch workflow intentionally uses
`--allow-warnings` so optional enhancements, such as a backend-only full-text
primer, do not block launch after all security, storage, quota, OAuth, pricing,
and deployed health blockers are clear.

For an extra deployed-backend smoke test, run:

```bash
npm --prefix apps/ask-atlas run launch:check -- --smoke
```

The smoke mode calls the configured public backend `/api/health?db=1` endpoint
only after the backend URL is a non-local HTTPS URL, so it verifies the deployed
runtime is using Postgres and can see the expected database schema rather than
merely pinging the process.

## Rate Limiting

Public traffic must use backend-enforced limits. The frontend only displays
quota; it is never trusted.

The production limiter uses Upstash Redis REST with atomic counters. The keys
include an environment and version prefix so staging and production do not share
budgets:

```text
ask-atlas:<env>:rl:v1:attempt:user:<github_id>:<minute>      ttl 60s
ask-atlas:<env>:rl:v1:attempt:ip:<ip_hash>:<hour>            ttl 3600s
ask-atlas:<env>:rl:v1:chat:user:<github_id>:<minute>         ttl 60s
ask-atlas:<env>:rl:v1:chat:ip:<ip_hash>:<hour>               ttl 3600s
ask-atlas:<env>:rl:v1:reward-refresh:user:<github_id>:<hour> ttl 3600s
ask-atlas:<env>:rl:v1:<scope>:global:<minute>                ttl 60s
```

Each model request first increments an `attempt` limiter so out-of-scope spam
cannot flood logs, then increments the `chat` limiter before expensive RAG/model
work. Reward refreshes use a separate hourly limiter to protect GitHub API rate
limits. The Redis implementation uses one Lua/EVAL command per check to update
user, IP, and global counters together. If a counter exceeds its configured
limit, the backend returns `429`. If Redis is configured but unavailable, the
backend blocks the request rather than falling back to local counters.

Set `ASK_ATLAS_TRUST_PROXY=1` only when the backend is behind a trusted host such
as Vercel, Cloudflare, or a controlled reverse proxy. Otherwise the backend uses
the socket address and ignores spoofable `x-forwarded-for` headers.

The local JSON fallback is only for `npm run dev`, mock demos, or a private
single-instance deployment that explicitly sets:

```text
ASK_ATLAS_ALLOW_LOCAL_RATE_LIMIT=1
```

## Production Data Policy

The assistant should disclose that it logs:

- GitHub ID and login
- question and answer text unless the user opts out
- selected mode and model
- retrieved source IDs
- token usage and estimated cost
- answer status and feedback

Recommended retention:

- raw question and answer text: 90 days
- hashes, cost summaries, source IDs, and aggregate analytics: indefinite

The admin dashboard may expose raw questions, raw answers, and cost data only to
configured admins or allowlisted maintainers. If a user opts out, admin views
must show only hashes, usage, sources, and cost metadata for that exchange.

## Evidence Policy

Ask the Atlas is allowed to be useful without pretending every answer is fully
paper-backed. The backend uses a three-layer evidence contract:

1. Companion paper evidence: the public seed in
   `docs/companion_paper_primer.md`, plus fuller local snippets from
   `A Primer in Post-Training Reasoning Data` when `ASK_ATLAS_PRIMER_TEXT_PATH`
   is configured on the backend.
2. Repository atlas evidence: README, docs, paper maps, cards, generated
   metadata, and source links from this repository.
3. Model background knowledge: lower-confidence synthesis from the selected
   model, allowed only for in-scope post-training reasoning data or repository
   navigation questions.

The UI returns an `evidenceMode` label such as `companion paper + atlas
grounded`, `atlas grounded`, or `limited atlas evidence + model background`.
Users should be able to tell whether an answer is quoting project evidence or
using model background. Completely source-empty retrieval is blocked with a
narrowing suggestion to protect trust and budget.

## Public Integration

Keep the assistant visible but not isolated:

- README badge links to GitHub Pages `/ask/`.
- `docs/ask/index.html` hosts the canonical interactive Ask frontend.
- `docs/ask.html` remains available as a compatibility fallback.
- Track/category pages should link to `/ask/?track=<track_id>`.
- Paper cards should link to `/ask/?entry=<entry_id>&mode=explain`.
- Admin pages should not be linked from README or public navigation.
