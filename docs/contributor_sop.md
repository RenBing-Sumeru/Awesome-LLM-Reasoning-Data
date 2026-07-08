# Contributor SOP for Scaling the Atlas

This SOP is the operating manual for expanding `Awesome-LLM-Reasoning-Data`.
It is written for new contributors who did not participate in the original
build-out. Follow it strictly: the goal is not to make the repository longer;
the goal is to make it more useful, searchable, verifiable, and auditable.

## 0. Project Goal

This repository is a learning-first atlas for post-training reasoning data. It
should help a reader answer:

> When a model improves at reasoning after post-training, what data object,
> feedback signal, verifier, reward, environment, judge, or construction recipe
> made that possible?

Every contribution must preserve the four-layer design:

1. `README.md` gives the high-level map.
2. `docs/` teaches concepts and reading paths.
3. `papers/` organizes papers by research track and subfield.
4. `cards/` turns important papers/releases into auditable engineering records.
5. `data/` is the structured source of truth that powers the README, website,
   paper pages, exports, reports, and Ask the Atlas RAG corpus.

## 1. Non-Negotiable Rules

- Do not add a bare title or bare link.
- Do not guess arXiv IDs, venue pages, DOI links, code repositories, dataset
  pages, Hugging Face pages, or project pages.
- Do not mark an entry `verified` unless an official primary source is pinned.
- Do not promote an entry to `L4_carded` or `L5_audit_ready` unless an actual
  card exists and passes validation.
- Do not hide uncertainty. Use `unknown`, `needs_search`, `needs_url`,
  `needs_metadata`, or `ambiguous`.
- Do not broaden `training_use` beyond what the source supports.
- Do not treat a verified paper link as proof that the data, code, license,
  split, verifier, or lineage is known.
- Do not put API keys, OAuth secrets, database URLs, tokens, private prompts,
  internal logs, or screenshots with secrets anywhere in the repository.
- Every paper/card must answer the practical questions: source, behavior/data
  object, feedback, construction/selection, and audit risk.

## 2. Source-of-Truth Map

Use these files as the canonical workflow map:

| Area | File or directory | Purpose |
|---|---|---|
| Main metadata | `data/papers.yaml` | Canonical paper/release/model-report entries. |
| Schema | `data/schema.json` | Required fields and allowed enum values. |
| Track taxonomy | `data/categories.yaml`, `data/research_tracks.yaml` | The 14 research tracks, grouped into 3 paper-atlas sections, and their subfields. |
| Starter paths | `data/starter_packs.yaml` | Curated reading routes. |
| Cards | `cards/` | Human-readable audit cards. |
| Paper pages | `papers/` | Generated track pages. Do not hand-edit generated lists unless you know the renderer. |
| Website | `docs/index.html`, `docs/assets/*` | Searchable GitHub Pages atlas. |
| Ask assistant | `docs/ask/`, `apps/ask-atlas/` | AI assistant frontend/backend. |
| Reports | `reports/` | Coverage, needs-search, link checks, release notes, audits. |
| Contribution rules | `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md` | Public contribution expectations. |

## 3. Standard Workflow Overview

Use this exact sequence for every batch:

1. Choose a work queue.
2. Search official sources.
3. Decide whether the item belongs in the atlas.
4. Add or update `data/papers.yaml`.
5. Create or improve a card when the item is important enough.
6. Regenerate derived outputs.
7. Run QA checks.
8. Open a PR with evidence and residual unknowns.
9. Reviewer checks metadata, links, cards, and generated outputs.
10. Maintainer merges only after CI passes.

Recommended batch size for new contributors: 3-8 entries. Larger batches are
hard to review and often hide metadata mistakes.

## 4. Work Queues

Pick one queue per PR. Do not mix unrelated work.

| Queue | Typical task | Source file/report |
|---|---|---|
| Needs-search cleanup | Find official links and missing artifacts. | `reports/needs_search.md` |
| Link verification | Confirm official paper/code/data/project links. | `reports/link_coverage.md`, `reports/link_check.md` |
| L1 to L3 promotion | Add summaries, data-object fields, audit notes. | `data/papers.yaml` |
| Card creation | Create cards for high-impact verified entries. | `cards/*_template.md`, `cards/README.md` |
| L4 to L5 promotion | Remove placeholders and add audit-ready detail. | Existing card + `data/papers.yaml` |
| Track enrichment | Improve one research track/subfield. | `papers/`, `data/research_tracks.yaml` |
| Website/Ask sync | Update generated assets and RAG corpus after metadata changes. | `docs/assets/`, `apps/ask-atlas/` |

## 5. Candidate Paper Screening

### 5.1 Inclusion Criteria

Include a work if it helps readers understand at least one of these:

- A data release for reasoning, math, code, proof, tool use, agents, rubrics, or
  domain reasoning.
- A benchmark whose tasks or scoring can function as a feedback contract.
- A verifier, reward model, PRM, judge, rubric, environment, terminal predicate,
  or evaluation harness.
- A construction recipe: prompt sourcing, teacher trace generation, search,
  rejection sampling, filtering, self-play, RLVR, distillation, or release
  metadata.
- A frontier model report that discloses post-training reasoning data, reward
  design, RLVR, distillation, inference budget, or data mixture details.
- A scaling or test-time compute study that changes how data, verifiers, or
  inference budget are interpreted.
- An audit/failure paper: contamination, leakage, reward hacking, verifier
  gaming, LLM-as-judge attacks, spurious rewards, reproducibility failures.
- A survey/primer that helps readers navigate the above categories.

### 5.2 Exclusion Criteria

Do not include a work if:

- It is only a generic model paper with no visible connection to reasoning data,
  post-training, verifier design, evaluation, construction, or audit.
- It is a secondary blog/post/thread and a primary source exists.
- It is a duplicate of an existing entry and adds no new official source.
- It cannot be traced to an official source and is not worth keeping as a
  `needs_search` lead.
- It is outside LLM post-training reasoning data, even if it is generally
  interesting.

### 5.3 The Five-Sentence Triage

Before editing files, write these five sentences in your notes or issue:

1. Data object: "One row/episode contains ..."
2. Feedback contract: "The behavior is checked by ..."
3. Training/evaluation use: "This could enter post-training as ..."
4. Construction recipe: "The data is produced by ..."
5. Audit risk: "The main thing that could make the claim misleading is ..."

If you cannot write these sentences, the item is not ready for promotion.

## 6. Official Source Search Protocol

Use discovery tools if needed, but record only official sources. Search in this
priority order:

1. Venue page: ACL Anthology, OpenReview, PMLR, NeurIPS proceedings, CVF, ACM,
   IEEE, Springer, Nature/Science, or official conference page.
2. arXiv abs page, not the raw PDF when the abs page exists.
3. DOI page.
4. Official project page from authors or organization.
5. Official code repository from authors or organization.
6. Official dataset/model page, including Hugging Face when it is the release
   source.
7. Secondary sources only when no primary paper exists; label them clearly.

For each official source, record:

- exact title;
- year;
- venue/source;
- official URL;
- authors if available;
- code URL if official;
- data URL if official;
- Hugging Face URL if official;
- project page if official;
- license/provenance notes if visible;
- missing fields that still need search.

Never infer code/data links from a title. If the source does not say the code or
data exists, leave it `null`.

## 7. Research Track Classification

Every entry should have one or more `category` values from the 14 atlas tracks.
These tracks are grouped into three paper-atlas sections: background/foundations,
core reasoning-data types, and data lifecycle.

| Category id | Track |
|---|---|
| `foundations_and_primers` | Foundations & Primers |
| `instruction_demonstration_rationale_data` | Instruction / Demonstration / Rationale Data |
| `preference_reward_feedback_data` | Preference & Reward Feedback Data |
| `programmatically_verifiable_outcome_data` | Programmatically Verifiable Outcome Data |
| `process_trace_supervision_data` | Process / Trace Supervision Data |
| `rollout_search_test_time_trace_data` | Rollout / Search / Test-Time Trace Data |
| `environment_agent_trajectory_data` | Environment & Agent Trajectory Data |
| `judgment_rubric_domain_expert_data` | Judgment / Rubric / Domain-Expert Data |
| `data_construction_open_release_recipes` | Data Construction & Open Release Recipes |
| `training_usage_optimization_objectives` | Training Usage & Optimization Objectives |
| `scaling_rlvr_test_time_compute` | Scaling, RLVR & Test-Time Compute |
| `benchmarks_evaluation_surfaces` | Benchmarks & Evaluation Surfaces |
| `frontier_reports_data_disclosure_ledger` | Frontier Reports & Data Disclosure Ledger |
| `audit_failure_contamination_verifier_attacks` | Audit, Failure, Contamination & Verifier Attacks |

Use `data/research_tracks.yaml` to choose the finer subfield. The subfield is
inferred by renderer keywords, so make `tags`, `domains`, summaries, and
`inclusion_reason` specific enough for the correct placement.

## 8. `data/papers.yaml` Entry SOP

### 8.1 Required Fields

Every entry must include the fields required by `data/schema.json`:

```yaml
id:
title:
year:
venue:
authors:
source_role:
verification_contract:
supervision_granularity:
domains:
training_use:
construction_layer:
artifacts:
data_object:
recipe_metadata:
audit:
inclusion_reason:
related:
tags:
status:
```

The repository also uses these practical fields:

```yaml
category:
one_line_summary:
why_it_matters:
card:
needs:
verification:
curation_level:
```

### 8.2 ID Rules

- Use lowercase kebab-case.
- Include year when helpful for disambiguation.
- Keep IDs stable after cards or links point to them.
- If a duplicate exists, do not create a second active ID; update the existing
  entry or mark the weaker one `duplicate`.

Examples:

```yaml
id: prm800k-2023
id: deepseek-r1-2025
id: webarena-a-realistic-web-environment-for-building-autonomous-agents-2023
```

### 8.3 Enum Values

Use only the enum values in `data/schema.json`.

`source_role`:

- `model_report`
- `data_release`
- `benchmark`
- `verifier_reward`
- `process_supervision`
- `agent_environment`
- `construction_recipe`
- `scaling_study`
- `audit_failure`
- `survey_background`
- `infrastructure`
- `related_awesome_list`

`verification_contract`:

- `programmatic`
- `environmental`
- `judgment_required`
- `mixed`
- `unknown`

`supervision_granularity`:

- `answer_level`
- `step_level`
- `state_action_level`
- `full_episode`
- `pairwise_preference`
- `scalar_reward`
- `process_reward`
- `trajectory_value`
- `unknown`

`training_use`:

- `sft`
- `distillation`
- `preference_learning`
- `reward_modeling`
- `process_supervision`
- `rlvr`
- `agent_training`
- `evaluation`
- `audit`
- `safety_alignment`
- `test_time_compute`
- `unknown`

`construction_layer`:

- `prompt_sourcing`
- `trace_writing`
- `search_substrate`
- `self_play_anchor`
- `reward_verifier_layer`
- `optimizer_scaffold`
- `frontier_pipeline`
- `scaling_report`
- `release_audit`

`status`:

- `verified`
- `partial`
- `needs_url`
- `needs_metadata`
- `needs_search`
- `ambiguous`
- `misattributed`
- `duplicate`
- `excluded`

### 8.4 Artifact Field Rules

Use this structure:

```yaml
artifacts:
  paper: null
  arxiv: null
  code: null
  data: null
  project: null
  huggingface: null
  doi: null
  venue: null
  openreview: null
  acl: null
  pmlr: null
  cvf: null
  bibtex: null
```

Rules:

- `paper` should be the best primary paper/report URL.
- `arxiv` should be an arXiv abs URL.
- `venue`, `openreview`, `acl`, `pmlr`, `cvf`, `doi` are official primary
  citation links when available.
- `code`, `data`, `project`, `huggingface` must be official.
- Unknown or missing links stay `null`.
- Do not use raw PDFs as the preferred link when an abs/venue page exists.

### 8.5 Data Object Fields

The `data_object` section describes what a reusable record contains:

```yaml
data_object:
  prompt_source:
  trace_author:
  answer_format:
  process_fields:
  environment_or_substrate:
  verifier_or_reward:
  terminal_predicate:
```

Ask:

- What is the prompt/task/context source?
- Who or what writes the trace/actions?
- What is the answer/artifact format?
- Are there step labels, tool calls, rollouts, preference pairs, rewards,
  environment states, or terminal outcomes?
- What verifies the behavior?
- What terminal predicate decides success?

Use `unknown` when the official source does not disclose it.

### 8.6 Recipe Metadata Fields

The `recipe_metadata` section describes construction:

```yaml
recipe_metadata:
  base_model:
  teacher:
  generator:
  filtering_rule:
  sampling_protocol:
  rollout_count:
  temperature:
  inference_budget:
  optimizer_or_scaffold:
```

Important: do not invent teacher/base model/sampling details. If the paper says
only "we use a strong model" or "we filter by correctness" without details,
write that limitation in `audit.notes`.

### 8.7 Audit Fields

Use this structure:

```yaml
audit:
  source_mixture:
  split:
  decontamination:
  license:
  lineage:
  known_failure_modes:
  citation_status:
  confidence:
  notes:
```

Minimum audit questions:

- Does the paper disclose source mixture?
- Does it disclose train/test/dev split?
- Does it perform decontamination or overlap checks?
- Is the license/provenance clear?
- Is teacher/data lineage visible?
- What false positive, false negative, leakage, reward hacking, judge attack,
  or reproducibility failure could happen?
- Is confidence `high`, `medium`, or `low`?

### 8.8 Summary Writing Rules

`one_line_summary` must be factual and paper-specific.

Good:

> Provides step-level human labels for mathematical reasoning traces and trains
> process reward models to identify correct intermediate reasoning.

Bad:

> Important paper for LLM reasoning.

`why_it_matters` must explain why the entry matters for post-training reasoning
data, not why it is famous.

Good:

> It is the process-supervision anchor for moving from answer-level math rewards
> to step-level feedback in reasoning-model training and evaluation.

Bad:

> It is useful for LLMs.

## 9. Status and Curation Level SOP

Use `status` for citation/metadata state and `curation_level` for atlas depth.

| Level | Meaning | Minimum bar |
|---|---|---|
| `L0_seeded` | Seed lead only. | Title known; official link may be missing. |
| `L1_link_verified` | Official primary link pinned. | `verification.link_verified=true`; paper/arXiv/venue/DOI exists. |
| `L2_artifact_verified` | More artifacts pinned. | Official code/data/HF/project/venue links checked when available. |
| `L3_summary_ready` | Reader-facing summary is useful. | Good `one_line_summary`, `why_it_matters`, data object, and audit note. |
| `L4_carded` | Card exists. | `card:` points to a real card with `entry_id`. |
| `L5_audit_ready` | Card is detailed enough for reuse/audit decisions. | No placeholder markers; clear data object, verifier, construction, use, risk, official links. |

Promotion rules:

- `verified` requires official primary link.
- `L4_carded` and `L5_audit_ready` require a card path.
- `L5_audit_ready` must not contain placeholder text such as "needs curator
  review", "Prompt/source: unknown" as the main content, or generic boilerplate.
- `partial` can have official links but still miss important release details.
- `needs_metadata` means the work likely belongs but fields remain unresolved.
- `needs_search` means official source is not pinned.

## 10. Paper Card SOP

### 10.1 When To Create a Card

Create or improve a card when the entry is:

- in a starter pack;
- central to a research track;
- frequently cited or likely to be reused;
- a data release, verifier, benchmark, agent environment, recipe, frontier
  report, scaling paper, or failure/audit paper;
- important enough that a reader should understand it without opening the full
  paper first.

### 10.2 Card Location

Choose exactly one primary directory:

| Card type | Directory | Use for |
|---|---|---|
| Release card | `cards/releases/` | datasets, trace releases, documentation foundations, reusable data artifacts |
| Verifier card | `cards/verifiers/` | verifiers, rewards, PRMs, judges, rubrics |
| Agent card | `cards/agents/` | tools, web, OS, app, SWE, terminal/replay environments |
| Recipe card | `cards/recipes/` | construction recipes, model reports, pipelines |
| Benchmark card | `cards/benchmarks/` | evaluation surfaces and benchmark ledgers |
| Failure card | `cards/failures/` | contamination, leakage, reward hacking, judge attacks, verifier gaming |

### 10.3 Required Card Header

Every non-template card must start with:

```markdown
<!-- entry_id: <data/papers.yaml id> -->
<!-- card_type: releases|verifiers|agents|recipes|benchmarks|failures -->
# <Readable title>
```

Then include the Ask block:

```markdown
<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** Explain this card · Generate audit checklist · Compare with related work
<!-- ask_atlas:end -->
```

You can add or refresh these links with:

```bash
python scripts/add_card_ask_links.py
```

Use check mode in PRs:

```bash
python scripts/add_card_ask_links.py --check
```

### 10.4 L5 Card Structure

For a modern `L5_audit_ready` card, prefer this numbered structure:

```markdown
## TL;DR
## 1. What is this work?
## 2. What data object does it expose?
## 3. What is the verifier / reward / judge / environment?
## 4. How is the data constructed?
## 5. How can it enter post-training?
## 6. What should readers audit?
## 7. What is missing or risky?
## 8. Why it matters for post-training reasoning data
## 9. Links and citation
```

Older cards may use the compatible structure:

```markdown
## One-line takeaway
## Why this matters
## What is the data object?
## Verification contract
## Supervision granularity
## Construction recipe
## How it can be used
## Audit checklist
## Known limitations / failure modes
## Links
## Citation
```

### 10.5 Card Writing Checklist

Every card must include:

- TL;DR or one-line takeaway.
- What the work is.
- Data object fields.
- Verifier/reward/judge/environment.
- Construction recipe.
- Post-training use.
- Audit questions.
- Risks/limitations.
- Official links and citation notes.

For agent/environment cards, explicitly record:

- environment;
- initial state;
- goal/constraints;
- action schema;
- observations;
- state diffs;
- terminal predicate;
- replayability;
- scaffold metadata;
- budget/sampling;
- lineage/split.

For verifier cards, explicitly record:

- input format;
- output format;
- native signal;
- training/filtering/evaluation/reward/selection use;
- false positives;
- false negatives;
- brittleness;
- bias;
- reward hacking;
- attack surface;
- versioning/calibration/refresh policy.

For recipe/model-report cards, explicitly record:

- data sources;
- prompt sourcing;
- trace generation;
- search/rejection sampling;
- filtering;
- verifier/reward;
- training method;
- evaluation;
- scaling fields;
- attribution risks;
- reproduction notes.

## 11. `needs_search` SOP

Use `needs_search` or `needs_metadata` honestly. Do not hide unresolved work.

When an entry remains unresolved:

1. Keep missing links as `null`.
2. Keep `status: needs_search` or `status: needs_metadata`.
3. Add a clear `needs:` list.
4. Add `audit.notes` explaining what remains unknown.
5. Re-run `python scripts/coverage_report.py`; this updates
   `reports/needs_search.md`.

Do not promote an unresolved entry just because it looks important.

## 12. Updating an Existing Entry

Before adding a new entry:

```bash
rg -n "paper title|short title|arxiv id|existing id" data cards papers README.md
```

If the entry already exists:

- update the existing `data/papers.yaml` block;
- preserve the ID if cards or links depend on it;
- improve artifacts/summaries/audit fields;
- update or create the card;
- do not create duplicate active entries.

If two entries are true duplicates:

- keep the stronger ID;
- mark the weaker one `duplicate` or remove it only if no links/cards depend on it;
- mention the deduplication in `audit.notes`.

## 13. Generated Outputs

Most public pages are generated from structured metadata. After editing
`data/`, `cards/`, `docs/`, or Ask-related files, use the correct renderer.

Common render commands:

```bash
python scripts/render_site.py
python scripts/render_papers.py
python scripts/render_readme.py
python scripts/render_cards.py
python scripts/coverage_report.py
python scripts/export_csv_json.py
python scripts/build_bib_index.py
python scripts/summarize_counts.py
```

Check mode:

```bash
python scripts/render_site.py --check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
python scripts/render_cards.py --check
```

Use renderer output instead of manually editing generated tables.

## 14. Website SOP

The searchable website is generated from:

- `data/papers.yaml`
- `data/categories.yaml`
- `data/research_tracks.yaml`
- `data/starter_packs.yaml`
- cards and reports

Important website assets:

- `docs/index.html`
- `docs/assets/entries.json`
- `docs/assets/categories.json`
- `docs/assets/research_tracks.json`
- `docs/assets/starter_packs.json`
- `docs/assets/cards.json`
- `docs/assets/counts.json`
- `docs/assets/atlas-data.js`

After metadata changes, run:

```bash
python scripts/render_site.py
python scripts/render_site.py --check
```

Do not put secrets in `docs/` because GitHub Pages publishes it.

## 15. Ask the Atlas SOP

Ask the Atlas uses repository content as source-grounded context. Any change to
README, docs, paper pages, cards, or metadata can affect retrieval quality.

Contributor rules:

- Keep Ask entry links present in README, docs, papers, and cards.
- Run Ask entrypoint checks after changing public docs:

```bash
python scripts/check_ask_entrypoints.py
python scripts/add_card_ask_links.py --check
```

- Run RAG corpus check after changing docs/papers/cards/data:

```bash
npm --prefix apps/ask-atlas run rag:check
```

- Run backend tests if you touch `apps/ask-atlas/`:

```bash
npm --prefix apps/ask-atlas test
```

Security rules:

- Model API keys must only live in backend secrets.
- Never commit `.env` files, provider keys, OAuth secrets, database URLs, Redis
  tokens, screenshots with secrets, or terminal logs containing secrets.
- `docs/assets/ask-config.js` may contain only the public backend URL.
- If changing backend config, run:

```bash
python scripts/set_ask_backend_url.py --check
npm --prefix apps/ask-atlas run production:status
```

## 16. Local QA SOP

Before opening a PR, run the fast full check:

```bash
python scripts/validate_data.py
python scripts/secret_scan.py
python scripts/render_site.py --check
python scripts/set_ask_backend_url.py --check
python scripts/check_ask_entrypoints.py
npm --prefix apps/ask-atlas run rag:check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
python scripts/add_card_ask_links.py --check
python scripts/render_cards.py --check
python scripts/coverage_report.py
python scripts/check_links.py --soft
python scripts/summarize_counts.py
```

If you changed Ask backend code:

```bash
npm --prefix apps/ask-atlas test
```

If you changed external links and are preparing a release audit, run live link
checks separately:

```bash
python scripts/check_links.py --live
```

Live checks can fail because external sites rate-limit. Use `--soft` for normal
PRs and live checks for release audits.

## 17. PR SOP

Every PR must include:

- work queue type;
- entries/cards changed;
- official sources checked;
- fields still unknown;
- generated files updated;
- local QA commands run;
- whether Ask Atlas RAG/frontend/backend was affected.

Use the PR checklist in `.github/PULL_REQUEST_TEMPLATE.md`.

Recommended PR title patterns:

- `Add verifier cards for <topic>`
- `Verify official links for <track>`
- `Promote <entry> to L5 audit-ready`
- `Expand process supervision paper map`
- `Refresh site assets after metadata update`

## 18. Review SOP

Reviewers should check in this order:

1. Does the work belong in the atlas?
2. Are official links truly official?
3. Does `status` match evidence?
4. Does `curation_level` match depth?
5. Are enum values valid?
6. Are `data_object`, `recipe_metadata`, and `audit` fields specific?
7. Is the card linked by `entry_id`?
8. Does the card say what data object and feedback contract exist?
9. Are unknowns preserved rather than guessed?
10. Do generated files match renderers?
11. Do QA commands pass?
12. Does the PR avoid secrets and internal workflow leakage?

Reject or request changes if:

- a link is guessed;
- a card is generic;
- `verified` is used without a primary source;
- a `L5_audit_ready` card still has placeholders;
- training use is broader than the source supports;
- generated files are stale;
- Ask entry links or RAG checks are broken;
- secrets or internal logs appear.

## 19. Team Scaling SOP

For multiple students, use this division:

| Role | Responsibility | Output |
|---|---|---|
| Source verifier | Find official paper/code/data/project links. | Updated artifacts and evidence notes. |
| Metadata curator | Fill schema fields and statuses. | Clean `data/papers.yaml` entries. |
| Card writer | Write release/verifier/agent/recipe/benchmark/failure cards. | Card markdown with `entry_id`. |
| Track owner | Keep one paper category coherent. | Improved subfield coverage and read-first order. |
| QA runner | Run scripts and inspect reports. | Passing checks and updated reports. |
| Reviewer | Enforce SOP and request changes. | Review comments or approval. |

Suggested weekly cadence:

1. Monday: assign queue and target entries.
2. Tuesday-Wednesday: source verification and metadata.
3. Thursday: card writing and generated outputs.
4. Friday: QA, review, and merge.
5. Weekend/next Monday: update roadmap and needs-search queue.

Keep each PR narrow enough that a reviewer can check it in under 30 minutes.

## 20. Definition of Done

A contribution is done only when:

- metadata is valid;
- official links are pinned or missing fields are explicit;
- status and curation level are honest;
- important entries have cards;
- cards include audit risks, not only summaries;
- generated paper pages, website assets, card index, README sections, and
  reports are up to date when affected;
- Ask entrypoints and RAG checks pass when affected;
- secret scan passes;
- PR checklist is complete;
- CI passes.

## 21. Quick Commands

Install dependencies:

```bash
pip install -r requirements.txt
npm ci --prefix apps/ask-atlas
```

Full normal PR check:

```bash
python scripts/validate_data.py
python scripts/secret_scan.py
python scripts/render_site.py --check
python scripts/set_ask_backend_url.py --check
python scripts/check_ask_entrypoints.py
npm --prefix apps/ask-atlas run rag:check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
python scripts/add_card_ask_links.py --check
python scripts/render_cards.py --check
python scripts/coverage_report.py
python scripts/check_links.py --soft
python scripts/summarize_counts.py
```

Ask backend check:

```bash
npm --prefix apps/ask-atlas test
```

Regenerate common outputs:

```bash
python scripts/render_site.py
python scripts/render_papers.py
python scripts/render_readme.py
python scripts/render_cards.py
python scripts/coverage_report.py
python scripts/export_csv_json.py
python scripts/build_bib_index.py
python scripts/summarize_counts.py
```

## 22. Contributor Self-Check

Before asking for review, answer yes/no:

- Can I point to the official source for every link I added?
- Did I avoid guessing missing artifacts?
- Can I explain the data object in one sentence?
- Can I explain the verifier/reward/judge/environment in one sentence?
- Did I record construction details and missing knobs?
- Did I record at least one audit risk?
- Did I choose valid enum values?
- Did I avoid over-promoting status or curation level?
- Did I update cards or generated outputs if needed?
- Did I run the required QA commands?
- Did I avoid secrets and private implementation notes?

If any answer is "no", the PR is not ready.
