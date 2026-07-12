# 🏗️ Data Construction and Open Release Recipes

> Prompt sourcing, teacher traces, rejection sampling, self-play, filtering, verifier refresh, open releases, lineage, and release metadata.

## 1. What This Track Studies

Use this track to learn how reasoning datasets are actually built, filtered, packaged, and released.

A high-impact Awesome repo must teach recipes, not just cite papers. This track collects the construction pipeline: task sourcing, teacher trace generation, rollout/search expansion, rejection sampling, self-improvement, verifier refresh, filtering, deduplication, decontamination, release packaging, and metadata.

Open releases vary widely. Some expose data and scripts; others expose only a report. Contributors should identify what is reproducible and what is hidden: teacher models, sampling rules, prompts, filters, accepted/rejected traces, splits, license, lineage, and known failures.

This track is where students can turn a paper into operational knowledge: what should another lab do if it wants to build a similar dataset?

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧱 Prompt sourcing | question pools, seed sources, licenses, difficulty, and base-model pass rates | prompt sources are mixed without attribution |
| ✍️ Teacher trace generation | teacher models, trace policies, sampling settings, and distillation targets | teacher identity or sampling protocol is hidden |
| 🔎 Rejection sampling / search-generated data | candidate generation, search budget, filtering, and accepted/rejected examples | only accepted traces are released |
| 🔁 Self-play / self-improvement | self-improvement, co-evolution, generator-verifier cycles, and curricula | feedback loop amplifies hidden shortcuts |
| 🧪 Filtering and verifier refresh | answer filters, judge filters, decontamination, and verifier updates | filter thresholds become hidden objectives |
| 🏗️ Open reasoning data releases | open datasets, code, HF releases, recipes, ablations, and reproducibility | dataset is open but recipe details are not |
| 🧬 Data lineage and release metadata | datasheets, splits, lineage, licensing, versioning, and known failures | reuse loses the release context |

### Contents

- [🧱 Prompt sourcing](#prompt-sourcing)
- [✍️ Teacher trace generation](#teacher-trace-generation)
- [🔎 Rejection sampling / search-generated data](#rejection-sampling-search-generated-data)
- [🔁 Self-play / self-improvement](#self-play-self-improvement)
- [🧪 Filtering and verifier refresh](#filtering-and-verifier-refresh)
- [🏗️ Open reasoning data releases](#open-reasoning-data-releases)
- [🧬 Data lineage and release metadata](#data-lineage-and-release-metadata)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|

## 5. Full Paper List

### <a id="prompt-sourcing"></a>🧱 Prompt sourcing

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="teacher-trace-generation"></a>✍️ Teacher trace generation

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rejection-sampling-search-generated-data"></a>🔎 Rejection sampling / search-generated data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="self-play-self-improvement"></a>🔁 Self-play / self-improvement

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="filtering-and-verifier-refresh"></a>🧪 Filtering and verifier refresh

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="open-reasoning-data-releases"></a>🏗️ Open reasoning data releases

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="data-lineage-and-release-metadata"></a>🧬 Data lineage and release metadata

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- Are prompt sources, teacher models, sampling rules, and filters disclosed?
- Can another team reproduce the accepted and rejected examples?
- Is the release license and lineage clear enough for reuse?

## 7. Open Problems

- What is the minimum release metadata for safe reuse?
- Should rejected traces be released as first-class data?
- How can open projects document proprietary teacher effects?
- Which filtering rules become hidden training objectives?

## 8. Related Paper-Card Sources

- No paper-card sources are linked for this category yet.

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
