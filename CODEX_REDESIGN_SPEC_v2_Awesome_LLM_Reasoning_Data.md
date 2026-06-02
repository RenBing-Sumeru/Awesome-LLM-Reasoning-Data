# CODEX REDESIGN SPEC v2 — Awesome LLM Reasoning Data

> Use this document as the **single source of truth** for redesigning the repository.
> Every phase below requires re-reading this file before editing.

Repository:

```text
https://github.com/RenBing-Sumeru/Awesome-LLM-Reasoning-Data
```

Mission:

Build the repo into a **highly readable, learning-first, citation-friendly, high-impact GitHub project** about post-training reasoning data for LLMs.

The repo must become more than an Awesome list. It should become a practical learning atlas where a newcomer can learn:

1. what post-training reasoning data is;
2. what kinds of data objects exist;
3. how verifiers, rewards, judges, rubrics, and environments define trainable feedback;
4. how reasoning data is constructed;
5. how to audit data quality, leakage, lineage, verifier failure, and scaling claims;
6. how to read frontier reasoning-model reports;
7. how to quickly become useful in an industrial LLM post-training team.

The final repo must feel like a polished combination of:

- a high-quality Awesome list;
- a paper companion repository;
- a beginner-to-practitioner course;
- a structured data atlas;
- a practical engineering playbook.

Do **not** produce shallow placeholder pages. Do **not** create empty folders just for appearance. Every major folder must contain useful reading material.

---

## 0. Mandatory ritual before every phase

Before starting each phase, run:

```bash
cat CODEX_REDESIGN_SPEC_v2_Awesome_LLM_Reasoning_Data.md > /tmp/current_spec_read.txt
mkdir -p reports
{
  echo ""
  echo "## Phase <PHASE_NUMBER> spec reread"
  date
  echo "I reread CODEX_REDESIGN_SPEC_v2_Awesome_LLM_Reasoning_Data.md before starting this phase."
} >> reports/phase_log.md
```

Replace `<PHASE_NUMBER>` with the current phase number.

You must reread this spec before every phase because the repo should be designed coherently, not as disconnected generated files.

---

## 1. Current problem diagnosis

The current repo has the correct high-level intent but not enough usable content.

Problems to fix:

1. `README.md` is an entry portal, but it is too short and does not look like a strong Awesome repository.
2. The visible paper list is too small. It shows selected entries, but not the broader 400-paper literature survey.
3. `docs/*.md` pages are very shallow. Many are only around 1–2 KB and read like outlines rather than lessons.
4. `cards/` currently has templates, but very few high-quality filled example cards.
5. `data/papers.yaml` is huge but not human-friendly. It appears generated, mostly unknown metadata, and not presented clearly to readers.
6. `data/benchmarks.yaml`, `data/verifiers.yaml`, and similar files are empty or underused.
7. `docs/index.html` is minimal and not visually engaging.
8. There are no rich, category-specific paper pages like:
   - programmatic math/code/proof data;
   - process reward models;
   - agent/environment trajectory data;
   - judgment-required rubric/safety/medical data;
   - construction recipes;
   - scaling/test-time compute;
   - audit/failure/contamination.
9. There are not enough emojis, badges, icons, visual hooks, or “paper card” formatting.
10. The project does not yet teach a beginner enough to enter an industrial LLM post-training team.

The redesign must fix all of these.

---

## 2. Reference repos to study and imitate

Before editing content, create:

```text
reports/reference_repo_redesign_study.md
```

Study these projects and write what to copy and what to avoid.

### 2.1 Awesome Dataset Distillation

```text
https://github.com/Guang000/Awesome-Dataset-Distillation
```

Copy these ideas:

- badges at the top;
- short conceptual introduction;
- Latest Updates;
- detailed Contents;
- emoji/icon link style;
- many paper sections with real entries;
- project/code/bibtex icons;
- website files;
- citations folder;
- a strong sense that this is a maintained resource.

Do **not** copy its exact categories, because our field is different.

### 2.2 Awesome LLM Post-training

```text
https://github.com/mbzuai-oryx/awesome-llm-post-training
```

Copy these ideas:

- clean taxonomy figure at the top;
- section/subsection table;
- emoji section headers;
- venue/date badges;
- paper entries grouped by topic;
- active research update feeling.

Do **not** become a generic post-training list. Our focus is reasoning data, verifiers, recipes, and audit fields.

### 2.3 Awesome LLM Reasoning

```text
https://github.com/atfortes/Awesome-LLM-Reasoning
```

Copy:

- year-based paper grouping;
- survey / analysis / technique separation;
- clean, scannable paper entries.

Avoid:

- being too broad about generic reasoning methods.

### 2.4 mlabonne/llm-datasets

```text
https://github.com/mlabonne/llm-datasets
```

Copy:

- “what makes a good dataset?” before listing datasets;
- dataset tables with notes;
- practical training-use orientation;
- license and Hugging Face links.

### 2.5 Awesome LLM Reasoning Failures

```text
https://github.com/Peiyang-Song/Awesome-LLM-Reasoning-Failures
```

Copy:

- paper companion repo style;
- BibTeX section;
- taxonomy image;
- structured reasoning/failure categories;
- author/venue annotations.

### 2.6 Awesome LLM

```text
https://github.com/Hannibal046/Awesome-LLM
```

Copy:

- milestone timeline;
- trending projects;
- broad entry-point feel;
- LLM Data / Evaluation / Training / Inference organization.

Avoid:

- becoming too broad.

### 2.7 Microsoft course-style repos

```text
https://github.com/microsoft/generative-ai-for-beginners
https://github.com/microsoft/ai-agents-for-beginners
```

Copy:

- lesson structure;
- beginner-friendly path;
- practical tasks;
- “Learn / Build / Check Yourself / Continue Learning” pattern.

---

## 3. New identity of the repo

Use this identity everywhere:

```text
# Awesome LLM Reasoning Data
```

Subtitle:

```text
A learning-first atlas of post-training reasoning data, verifiers, reward signals, construction recipes, and audit fields.
```

Core idea:

```text
Post-training reasoning data is not just a prompt and answer. It is a verifier-bearing feedback record that connects task context, model behavior, trace or trajectory, judging feedback, and attribution metadata.
```

Reader promise:

```text
After reading this repository, a newcomer should understand what post-training reasoning data is, how it is constructed, how to audit it, and how to read frontier reasoning-model reports.
```

Avoid:

- “complete list”;
- “definitive ranking”;
- “best dataset leaderboard”;
- overclaiming completeness.

Use:

- “living atlas”;
- “learning-first guide”;
- “curated paper map”;
- “engineering playbook”;
- “attribution-oriented resource”.

---

## 4. New information architecture

Do not only keep many empty folders. Use folders that readers actually need.

Target structure:

```text
.
├── README.md
├── README_zh.md
├── CONTRIBUTING.md
├── CITATION.cff
├── LICENSE
├── requirements.txt
├── CODEX_REDESIGN_SPEC_v2_Awesome_LLM_Reasoning_Data.md
├── papers/
│   ├── README.md
│   ├── 00_surveys_and_primers.md
│   ├── 01_foundations_instruction_preference_alignment.md
│   ├── 02_programmatic_math_code_proof.md
│   ├── 03_process_supervision_prm.md
│   ├── 04_environmental_agents_tools_web_swe.md
│   ├── 05_judgment_required_rubrics_safety_domain.md
│   ├── 06_construction_recipes_open_reasoning_data.md
│   ├── 07_frontier_model_reports.md
│   ├── 08_scaling_test_time_compute_rlvr.md
│   ├── 09_audit_failure_contamination_verifier_attacks.md
│   └── 10_benchmarks_evaluation.md
├── docs/
│   ├── index.html
│   ├── _sidebar.md
│   ├── 00_start_here.md
│   ├── 01_what_is_post_training_reasoning_data.md
│   ├── 02_verifier_anchored_taxonomy.md
│   ├── 03_reasoning_data_objects.md
│   ├── 04_data_quality.md
│   ├── 05_construction_cookbook.md
│   ├── 06_verifiers_and_rewards.md
│   ├── 07_agent_trajectory_data.md
│   ├── 08_scaling_and_test_time_compute.md
│   ├── 09_audit_and_failure_modes.md
│   ├── 10_industry_onboarding_path.md
│   ├── glossary.md
│   └── assets/
│       └── entries.json
├── cards/
│   ├── README.md
│   ├── release_card_template.md
│   ├── verifier_card_template.md
│   ├── recipe_card_template.md
│   ├── agent_trajectory_card_template.md
│   ├── releases/
│   ├── verifiers/
│   ├── recipes/
│   ├── agents/
│   ├── benchmarks/
│   └── failures/
├── data/
│   ├── schema.json
│   ├── papers.yaml
│   ├── categories.yaml
│   ├── updates.yaml
│   ├── starter_packs.yaml
│   ├── related_lists.yaml
│   ├── glossary.yaml
│   └── _generated/
│       ├── entries.json
│       ├── counts.json
│       └── bib_index.json
├── assets/
│   ├── overview.svg
│   ├── taxonomy.svg
│   ├── construction_stack.svg
│   ├── quality_matrix.svg
│   ├── scaling_ledger.svg
│   ├── paper_map.svg
│   └── social-preview.png
├── scripts/
│   ├── build_bib_index.py
│   ├── collect_sources.py
│   ├── enrich_links.py
│   ├── render_readme.py
│   ├── render_paper_pages.py
│   ├── render_site_data.py
│   ├── validate_data.py
│   ├── check_links.py
│   └── summarize_counts.py
├── reports/
│   ├── phase_log.md
│   ├── inventory.md
│   ├── reference_repo_redesign_study.md
│   ├── paper_coverage_report.md
│   ├── needs_search.md
│   ├── citation_audit.md
│   ├── link_check.md
│   ├── build_report.md
│   └── self_review.md
└── .github/
    ├── PULL_REQUEST_TEMPLATE.md
    ├── ISSUE_TEMPLATE/
    │   ├── add_paper.yml
    │   ├── add_dataset.yml
    │   └── metadata_fix.yml
    └── workflows/
        └── validate.yml
```

If files already exist, improve them. If a file is shallow, rewrite it. If a folder is empty, either fill it or remove it.

---

## 5. README redesign

README must be beautiful, not long and dead.

### 5.1 Top header

Use:

```markdown
# 🌟 Awesome LLM Reasoning Data

> A learning-first atlas of post-training reasoning data, verifiers, reward signals, construction recipes, and audit fields.

[![Awesome](...)](...)
[![Paper](...)](...)
[![Website](...)](...)
[![Entries](...)](...)
[![PRs Welcome](...)](...)
[![License](...)](...)
```

Add hero visual:

```markdown
<p align="center">
  <img src="assets/overview.svg" width="92%">
</p>
```

### 5.2 60-second explanation

Add a boxed section:

```markdown
## 🚀 60-second version

Post-training reasoning data is the data used after pretraining to teach, reinforce, or audit reasoning behavior.

A useful sample is usually not only:

`prompt → answer`

but:

`task/context → trace/actions → answer/artifact → verifier/reward/judge/environment → metadata`

This repo helps you understand and compare those data objects.
```

### 5.3 Navigation table

Use a visually rich table like the screenshot style:

```markdown
## 📌 Contents

| Section | What you will learn | Go |
|---|---|---|
| 🧭 Start Here | Zero-to-field overview | [docs/00](docs/00_start_here.md) |
| 🧮 Programmatic Data | Math, code, proof, unit tests | [papers](papers/02_programmatic_math_code_proof.md) |
| 🪜 Process Supervision | PRM, step labels, rollout values | [papers](papers/03_process_supervision_prm.md) |
| 🌐 Agent Trajectories | Tool/web/app/OS/SWE episodes | [papers](papers/04_environmental_agents_tools_web_swe.md) |
| ⚖️ Judgment-Required Data | Rubrics, safety, medical, factuality | [papers](papers/05_judgment_required_rubrics_safety_domain.md) |
| 🏗️ Recipes | Prompt sourcing, trace writing, self-play | [papers](papers/06_construction_recipes_open_reasoning_data.md) |
| 🚀 Frontier Reports | DeepSeek-R1, Kimi, Qwen, Magistral | [papers](papers/07_frontier_model_reports.md) |
| 📈 Scaling | RLVR, test-time compute, reuse | [papers](papers/08_scaling_test_time_compute_rlvr.md) |
| 🧯 Audit & Failures | leakage, reward hacking, judge attacks | [papers](papers/09_audit_failure_contamination_verifier_attacks.md) |
| 🎓 Industry Path | 6-week onboarding plan | [docs/10](docs/10_industry_onboarding_path.md) |
```

### 5.4 Featured sections

README should include:

- `🔥 Latest Updates`
- `🧭 Starter Pack: 20 papers to read first`
- `🧮 Core Paper Map`
- `🧰 How to build a reasoning dataset`
- `🧪 How to audit a verifier`
- `🌐 How to audit agent trajectory data`
- `📈 How to interpret scaling claims`
- `📚 Full Paper Atlas`
- `🃏 Release Cards`
- `🤝 Contributing`
- `📖 Citation`

Keep README around 250–400 lines. Do not dump all papers into README.

---

## 6. Paper pages: the most important missing part

Create real, useful paper pages in `papers/`.

Each page must have:

```markdown
# <Emoji> <Category Title>

## Why this category matters

2–4 paragraphs explaining the category for beginners and practitioners.

## How to read this category

- What questions to ask.
- What metadata to inspect.
- What common traps to avoid.

## Must-read starter set

Table of 10–20 core papers.

## Full curated list

Grouped by subtopic or year.

## Open questions

## Related cards

## Back to map
```

### 6.1 Paper entry format

Use a lively but consistent entry format:

```markdown
- **OpenThoughts: Data Recipes for Reasoning Models**
  <sub>2025 · arXiv · 🏗️ construction recipe · 🧮 math/general · 🧪 verifier/filtering · 🃏 [card](../cards/releases/openthoughts.md)</sub>
  [Paper](...) · [Code](...) · [Data](...) · [Project](...) · [BibTeX](...)
  _Why it matters:_ exposes prompt sources, filtering, teacher traces, and ablations for open reasoning-data construction.
```

For simple lists, use compact format:

```markdown
- 🏗️ **OpenThoughts** (2025) — data recipes for open reasoning models. [`paper`] [`code`] [`data`] `construction` `filtering` `teacher-trace`
```

Use emojis consistently:

```text
🧭 survey / primer
🧱 foundation
🧮 programmatic verification
💻 code
📐 math
🧾 formal proof
🪜 process supervision
🧪 verifier / reward
🌐 agent / environment
🛠️ tool use
🧑‍⚖️ judgment / rubric
🛡️ safety
🩺 medical
🏦 finance/legal
🏗️ construction recipe
🚀 frontier model report
📈 scaling
⏱️ test-time compute
🧯 audit / failure
🧬 lineage
📦 dataset
🤗 Hugging Face
🐙 code
📄 paper
🃏 card
```

### 6.2 Minimum page depth

Each of the 11 paper pages must have at least:

- 800 words of explanation;
- 30 paper/resource entries if enough sources exist;
- a starter set;
- open questions;
- links to related docs and cards.

No page should be a placeholder.

---

## 7. Core paper categories and seed entries

Use local BibTeX, local notes, and online search to verify links. Do not hallucinate links.

### 7.1 `papers/00_surveys_and_primers.md` 🧭

Include surveys/primers on:

- post-training LLMs;
- reasoning LLMs;
- reinforced reasoning;
- RLHF/RLAIF/RLVR;
- process supervision;
- LLM agents;
- data-centric LLM training;
- contamination/evaluation surveys.

Starter set should include the companion primer if safe, plus major public surveys.

### 7.2 `papers/01_foundations_instruction_preference_alignment.md` 🧱

Include:

- InstructGPT;
- RLHF foundations;
- Constitutional AI / helpful-harmless;
- DPO;
- reward overoptimization;
- UltraFeedback;
- FLAN, T0, Self-Instruct;
- STaR;
- Chain-of-Thought prompting.

Goal: show how older post-training data objects evolved into reasoning-data objects.

### 7.3 `papers/02_programmatic_math_code_proof.md` 🧮

Subsections:

- 📐 Math answer-verifiable data;
- 💻 Code execution-verifiable data;
- 🧾 Formal proof / Lean / theorem proving;
- 🧪 verifier robustness in programmatic domains.

Seed entries:

- GSM8K;
- MATH;
- HumanEval;
- APPS;
- BigCodeBench;
- LiveCodeBench;
- OpenMathReasoning;
- NuminaMath-CoT;
- DeepMath-103K;
- Big-Math;
- NaturalReasoning;
- OpenCodeReasoning / OpenCodeReasoning-II;
- KodCode;
- DeepSeekMath;
- DeepSeek-Prover;
- DeepSeek-Prover-V1.5;
- DeepSeek-Prover-V2;
- Goedel-Prover-V2;
- LeanDojo;
- ProofNet;
- miniF2F;
- HOList.

### 7.4 `papers/03_process_supervision_prm.md` 🪜

Subsections:

- step-level human labels;
- rollout values;
- first-error localization;
- process reward models;
- PRM benchmarks;
- PRM robustness and failure.

Seed entries:

- PRM800K / Let’s Verify Step by Step;
- Math-Shepherd;
- OmegaPRM;
- ProcessBench;
- PRMBench;
- Qwen2.5-Math-PRM;
- PRIME;
- PROF;
- AutoPSV;
- ReST-MCTS*;
- Free Process Rewards without Process Labels;
- Outcome-Refining Process Supervision for Code Generation;
- ToolComp;
- OVM;
- Step-DPO;
- Universal PRM / AURORA if verified.

### 7.5 `papers/04_environmental_agents_tools_web_swe.md` 🌐

Subsections:

- tool-use datasets;
- web/browser environments;
- app/OS environments;
- software-engineering agents;
- state/action/replayable episode benchmarks.

Seed entries:

- ReAct;
- Toolformer;
- ToolLLM / ToolBench;
- APIBank;
- Gorilla;
- APIGen;
- BFCL;
- ToolSandbox;
- τ-bench;
- Mind2Web;
- WebLINX;
- BrowserGym;
- WebArena;
- VisualWebArena;
- WorkArena;
- OSWorld;
- AndroidWorld;
- AppWorld;
- SWE-Bench;
- SWE-Bench Verified;
- SWE-Gym;
- R2E-Gym;
- OpenHands;
- TheAgentCompany.

### 7.6 `papers/05_judgment_required_rubrics_safety_domain.md` ⚖️

Subsections:

- rubric reward;
- health/medical;
- factuality/hallucination;
- safety/guardrail reasoning;
- legal/financial/scientific domain reasoning;
- LLM-as-judge.

Seed entries:

- HealthBench;
- FaithBench;
- AEGIS2.0;
- WildGuard;
- HarmBench;
- OR-Bench;
- AbstentionBench;
- Safety through Reasoning;
- RewardBench;
- JudgeLM;
- Prometheus 2;
- Rubrics as Rewards;
- OnlineRubrics;
- Omni-RRM;
- AutoRubric;
- Rubric-ARM;
- R3;
- FinanceBench;
- FinQA;
- TAT-QA;
- LegalBench;
- CUAD;
- CaseHOLD;
- ContractNLI;
- PubMedQA;
- BioASQ;
- SciFact;
- GPQA;
- HLE.

### 7.7 `papers/06_construction_recipes_open_reasoning_data.md` 🏗️

Subsections:

- prompt sourcing;
- teacher traces;
- filtering and pass-rate bands;
- self-play anchors;
- generator-verifier co-evolution;
- distill-then-RL;
- pure RL / zero data;
- open reproduction pipelines.

Seed entries:

- OpenThoughts;
- OpenThoughts3;
- OpenR1;
- OpenR1-Math;
- DeepMath-103K;
- Big-Math;
- NaturalReasoning;
- DAPO;
- DeepScaleR;
- TinyZero;
- s1;
- LIMO;
- STaR;
- R-Zero;
- Absolute Zero;
- TTRL;
- AlphaEvolve;
- CoVerRL;
- DeepSeekMath-V2;
- Multi-Agent Evolve.

### 7.8 `papers/07_frontier_model_reports.md` 🚀

Subsections:

- public reasoning-model reports;
- open-weight reasoning models;
- agentic frontier reports;
- model reports with post-training data disclosures.

Seed entries:

- OpenAI o1 learning-to-reason report;
- DeepSeek-R1;
- DeepSeekMath;
- DeepSeek-V3.2 if relevant;
- Kimi K1.5;
- Kimi K2;
- Qwen3;
- Qwen3-Coder;
- Magistral;
- Phi-4-reasoning;
- Llama-Nemotron;
- MiniMax-M1;
- Skywork-OR1;
- OpenReasoner-Zero;
- AM-Thinking-v1.

### 7.9 `papers/08_scaling_test_time_compute_rlvr.md` 📈

Subsections:

- RLVR scaling;
- data reuse and uniqueness;
- distillation scaling;
- test-time compute;
- pass@k and pass@(k,T);
- inference budget / search topology.

Seed entries:

- Large Language Monkeys;
- s1;
- The Art of Scaling RL Compute for LLMs;
- Scaling behaviors of LLM RL post-training;
- Distillation Scaling Laws;
- Does RLHF Scale?;
- ProRL;
- RL-PLUS;
- CoT-Pass@K;
- PASS@(k,T);
- MiGrATe;
- Markovian Thinker;
- Long-context / budget forcing papers if verified.

### 7.10 `papers/09_audit_failure_contamination_verifier_attacks.md` 🧯

Subsections:

- CoT faithfulness;
- leakage and contamination;
- verifier failure;
- judge attacks;
- reward hacking;
- synthetic data collapse;
- benchmark refresh/live evaluation.

Seed entries:

- Language Models Don’t Always Say What They Think;
- Measuring Faithfulness in Chain-of-Thought Reasoning;
- GSM-Symbolic;
- Spurious Rewards;
- One Token to Fool LLM-as-a-Judge;
- Leaky Thoughts;
- Subliminal Learning;
- Search-Time Data Contamination;
- LastingBench;
- LiveBench;
- HLE;
- A Sober Look at Progress in LLM Reasoning;
- From Accuracy to Robustness: rule/model verifier study;
- TinyV;
- LLMs Gaming Verifiers;
- Imperfect Verifier Is Good Enough;
- Model collapse paper.

### 7.11 `papers/10_benchmarks_evaluation.md` 🧰

Subsections:

- math/code benchmarks;
- live/contamination-aware benchmarks;
- agent benchmarks;
- domain benchmarks;
- process-supervision benchmarks;
- reward-model benchmarks.

Seed entries should overlap with categories above but be organized by evaluation surface.

---

## 8. Docs: turn shallow pages into a course

Each `docs/*.md` page must become a real lesson, not a skeleton.

Minimum for each lesson:

- 1200–2500 words;
- clear beginner explanation;
- technical framing;
- at least 10 paper/resource links;
- one diagram or ASCII table;
- one “how to apply this in practice” section;
- one “common traps” section;
- one “exercise / self-check” section;
- one “what to read next” section.

### 8.1 Standard lesson template

```markdown
# <Emoji> Lesson title

## What you will learn

## TL;DR

## Beginner explanation

## Technical view

## Mental model

## Representative papers

## Practical checklist

## Industrial use case

## Common traps

## Self-check exercises

## What to read next
```

### 8.2 Specific lesson goals

#### `docs/00_start_here.md`

Make it the onboarding page. Explain the entire repo and reading paths.

Include:

- “I am new — what should I read first?”
- “I want to build data — where do I go?”
- “I want to audit a model report — where do I go?”
- “I want to contribute a paper — what metadata do I need?”

#### `docs/01_what_is_post_training_reasoning_data.md`

Explain:

- pretraining vs post-training;
- SFT, distillation, preference learning, reward modeling, process supervision, RLVR, agent training;
- why reasoning data is not only prompt-answer;
- verifier-bearing sample;
- task/context, trace/actions, answer/artifact, feedback, metadata.

#### `docs/02_verifier_anchored_taxonomy.md`

Explain:

- programmatic verification;
- environmental verification;
- judgment-required verification;
- cross-cutting axes:
  - supervision granularity;
  - behavior bounds;
  - lineage;
- why domains are not enough.

#### `docs/03_reasoning_data_objects.md`

Explain data objects:

- prompt-answer pair;
- prompt-trace-answer;
- step-labeled trace;
- rollout set;
- preference pair;
- scalar reward record;
- process reward record;
- state-action trajectory;
- replayable episode;
- verifier card;
- rubric record;
- frontier model report.

#### `docs/04_data_quality.md`

Use the four quality dimensions:

- correctness is verifier-relative;
- trace quality is trajectory-relative;
- difficulty is base-relative;
- coverage/leakage/lineage is lineage-relative.

Include practical checklists.

#### `docs/05_construction_cookbook.md`

This should become one of the strongest pages.

Explain the construction stack:

1. prompt sourcing;
2. trace writing;
3. search substrate;
4. self-play anchor;
5. reward/verifier layer;
6. optimizer/scaffold;
7. release metadata.

Add practical recipes:

- building math/code reasoning data;
- building a PRM dataset;
- building an agent trajectory dataset;
- building rubric-reward data;
- turning test-time search into training data.

#### `docs/06_verifiers_and_rewards.md`

Explain:

- answer verifiers;
- code execution;
- proof checkers;
- process reward models;
- learned reward models;
- rubric judges;
- LLM-as-judge;
- implicit selectors;
- verifier cards;
- attack surfaces.

#### `docs/07_agent_trajectory_data.md`

Explain:

- state/action/observation;
- terminal predicate;
- scaffold metadata;
- budget;
- replayability;
- why cleaned success transcripts are insufficient;
- how to release replayable episodes.

#### `docs/08_scaling_and_test_time_compute.md`

Explain:

- asymptote vs efficiency;
- unique data vs reuse;
- RLVR;
- inference budget;
- pass@k;
- pass@(k,T);
- search topology;
- release timeline as a scaling object.

#### `docs/09_audit_and_failure_modes.md`

Explain:

- leakage;
- contamination;
- search-time contamination;
- soft contamination;
- verifier gaming;
- judge attacks;
- reward hacking;
- hidden trait transfer;
- synthetic data collapse.

#### `docs/10_industry_onboarding_path.md`

This must be practical and memorable.

Structure:

```markdown
# 🎓 6-week onboarding path for an LLM post-training data engineer

## Week 1 — Understand the map
## Week 2 — Classify data objects
## Week 3 — Learn verifiers and rewards
## Week 4 — Build construction recipes
## Week 5 — Audit scaling and failure modes
## Week 6 — Design a mini pipeline

## Capstone project
```

Tasks:

- classify 30 papers by verification contract;
- write 5 release cards;
- audit one math/code dataset;
- audit one agent trajectory benchmark;
- compare DeepSeek-R1, Kimi K1.5, Qwen3, and OpenThoughts as data recipes;
- design a minimal verifier card;
- design contamination checklist.

---

## 9. Cards: make the repo useful for researchers and engineers

Create filled cards, not only templates.

Initial target: at least **25 high-quality cards**.

### 9.1 Release cards

Create under `cards/releases/`:

- `openthoughts.md`
- `deepmath_103k.md`
- `big_math.md`
- `naturalreasoning.md`
- `openmathreasoning.md`
- `opencodereasoning_ii.md`
- `kodcode.md`
- `limo.md`
- `s1.md`
- `openr1.md`
- `dapo.md`

### 9.2 Verifier / reward cards

Create under `cards/verifiers/`:

- `prm800k.md`
- `math_shepherd.md`
- `omegaprm.md`
- `processbench.md`
- `prmbench.md`
- `healthbench.md`
- `rewardbench.md`
- `one_token_to_fool_judge.md`
- `spurious_rewards.md`
- `tinyv.md`

### 9.3 Agent cards

Create under `cards/agents/`:

- `toolllm_toolbench.md`
- `webarena.md`
- `browsergym.md`
- `osworld.md`
- `androidworld.md`
- `appworld.md`
- `swe_gym.md`
- `r2e_gym.md`
- `openhands.md`

### 9.4 Frontier recipe cards

Create under `cards/recipes/`:

- `deepseek_r1.md`
- `kimi_k15.md`
- `qwen3.md`
- `qwen3_coder.md`
- `magistral.md`
- `phi4_reasoning.md`
- `llama_nemotron.md`
- `minimax_m1.md`
- `absolute_zero.md`
- `ttrl.md`

### 9.5 Card content standard

Every card must include:

```markdown
# <Emoji> <Work Name>

## One-line takeaway

## Why this matters

## What is the data object?

| Field | Value |
|---|---|
| Prompt/source | ... |
| Trace/action | ... |
| Answer/artifact | ... |
| Feedback/verifier | ... |
| Metadata | ... |

## Verification contract

## Supervision granularity

## Construction recipe

## How it can be used

## Audit checklist

## Known limitations / failure modes

## Links

## Citation
```

If metadata is unknown, write `unknown` and `needs_verification`. Do not hallucinate.

---

## 10. Data files

### 10.1 Fix `data/papers.yaml`

The current `data/papers.yaml` is huge and not human-friendly. Convert it to readable multi-line YAML.

Each entry should include:

```yaml
- id: "openthoughts-2025"
  title: "OpenThoughts: Data Recipes for Reasoning Models"
  year: 2025
  venue: "arXiv"
  category:
    - construction_recipe
    - data_release
  verification_contract:
    - mixed
  domains:
    - math
    - general_reasoning
  training_use:
    - sft
    - distillation
    - rlvr
  artifacts:
    paper: null
    code: null
    data: null
    project: null
    huggingface: null
  card: "cards/releases/openthoughts.md"
  one_line: "Open reasoning-data recipe exposing source mixture, filtering, teacher traces, and ablations."
  tags:
    - "🏗️ recipe"
    - "📦 data"
    - "🧪 filtering"
  status: "partial"
  needs:
    - "verify official code/data links"
```

### 10.2 Add `data/categories.yaml`

It should define the repo taxonomy and emoji labels.

### 10.3 Add `data/updates.yaml`

This powers Latest Updates.

### 10.4 Add `data/starter_packs.yaml`

Starter packs:

- `beginner_20`;
- `builder_30`;
- `verifier_reward_25`;
- `agent_data_25`;
- `scaling_20`;
- `audit_failure_20`;
- `industry_onboarding_40`.

### 10.5 Do not leave empty YAML files

If `data/benchmarks.yaml`, `data/verifiers.yaml`, etc. are kept, populate them. Otherwise remove them and reference all entries through `papers.yaml` plus categories.

---

## 11. Website

The current `docs/index.html` is too minimal. Rebuild it into an attractive static atlas.

Acceptable options:

1. **Docsify-style static site**:
   - attractive sidebar;
   - search plugin;
   - Markdown pages;
   - no heavy build step.

2. **Vanilla HTML/CSS/JS atlas**:
   - card grid;
   - filters;
   - colorful category chips;
   - timeline;
   - starter pack panel;
   - links to cards.

Use whichever is easier, but make it visually strong.

Features:

- search title/tags/domain;
- filter by category;
- filter by verification contract;
- filter by training use;
- filter by status;
- show tags with emojis;
- show links to paper/code/data/card;
- show “why it matters” one-liners;
- show counts by category;
- show latest updates.

Add:

```text
docs/_sidebar.md
docs/assets/entries.json
docs/assets/site.css
docs/assets/site.js
```

---

## 12. Visual design

Create or improve these assets:

```text
assets/overview.svg
assets/taxonomy.svg
assets/construction_stack.svg
assets/quality_matrix.svg
assets/scaling_ledger.svg
assets/paper_map.svg
assets/social-preview.png
```

Style:

- friendly;
- modern;
- not too dense;
- use consistent colors;
- use emoji labels in text;
- make them readable inside GitHub README.

The visuals should explain the core mental models:

1. prompt-answer is insufficient;
2. verifier-bearing sample;
3. programmatic/environmental/judgment-required taxonomy;
4. construction stack;
5. quality support matrix;
6. scaling attribution ledger;
7. agent trajectory audit fields.

---

## 13. Scripts

Create or improve:

```text
scripts/validate_data.py
scripts/render_readme.py
scripts/render_paper_pages.py
scripts/render_site_data.py
scripts/check_links.py
scripts/summarize_counts.py
scripts/enrich_links.py
```

### 13.1 Validation requirements

Fail if:

- empty docs page under `docs/`;
- empty YAML file;
- duplicate IDs;
- missing title/year/category/status;
- invalid link format;
- status `verified` with missing official paper link;
- category page has fewer than 10 entries unless intentionally marked as early;
- card file missing required headings;
- README generated count does not match data.

### 13.2 Human-friendly report

Generate:

```text
reports/paper_coverage_report.md
```

It should count:

- total entries;
- entries by category;
- entries by verification contract;
- entries by year;
- entries by status;
- cards created;
- missing links;
- needs_search items.

---

## 14. Search and metadata enrichment

Use local sources first:

- `EMNLP/build/references.bib`
- `EMNLP/build/references_verified.bib`
- `EMNLP/build/citation_verification.md`
- `EMNLP/build/TODO_unresolved_citations.md`
- Part 0–Part 4 notes
- existing `data/papers.yaml`

Then use online search if available.

Preferred sources:

- arXiv;
- OpenReview;
- ACL Anthology;
- official project pages;
- official GitHub;
- Hugging Face datasets/models;
- publisher pages.

Avoid:

- random blogs as primary links;
- hallucinated GitHub repos;
- hallucinated dataset names;
- marking unverified items as verified.

Every uncertain item goes to:

```text
reports/needs_search.md
```

---

## 15. README/papers visual style examples

Use lively badges and icons. Examples:

```markdown
- 🏗️ **OpenThoughts: Data Recipes for Reasoning Models**
  <sub>2025 · arXiv · 📦 data release · 🧪 filtering · 🧬 lineage</sub>
  [📄 Paper](...) · [🐙 Code](...) · [🤗 Data](...) · [🃏 Card](../cards/releases/openthoughts.md)
  _Why it matters:_ exposes source mixture, teacher traces, filtering, and ablation variables for open reasoning-data construction.
```

```markdown
- 🪜 **PRM800K / Let’s Verify Step by Step**
  <sub>2023 · process supervision · step labels · verifier/reward</sub>
  [📄 Paper](...) · [🃏 Card](../cards/verifiers/prm800k.md)
  _Why it matters:_ landmark step-level supervision dataset showing how feedback can enter intermediate reasoning.
```

```markdown
- 🌐 **SWE-Gym**
  <sub>2025 · SWE agents · environmental verification · replayable episodes</sub>
  [📄 Paper](...) · [🐙 Code](...) · [🃏 Card](../cards/agents/swe_gym.md)
  _Why it matters:_ makes repository-level agent data trainable through environment, tests, trajectories, and verifiers.
```

---

## 16. Quality gates

Before final commit, the repo must satisfy:

1. README looks good on GitHub.
2. README contains:
   - hero;
   - contents table;
   - starter pack;
   - paper atlas links;
   - latest updates;
   - citation;
   - contribution instructions.
3. `papers/` contains 11 substantial category pages.
4. Each category page has real paper entries.
5. `docs/` lessons are deep enough to learn from.
6. At least 25 cards exist.
7. No major YAML file is empty.
8. `data/papers.yaml` is readable.
9. Searchable site works locally.
10. Visual assets exist and render.
11. Counts are generated.
12. No hallucinated metadata is introduced.
13. Needs-search items are clearly separated.
14. CI passes.
15. The repo is pushed to GitHub safely.

---

## 17. Git workflow

Do not force push.

Start a branch:

```bash
git checkout -b redesign-learning-atlas-v2
```

Commit in logical chunks:

```bash
git add README.md README_zh.md assets docs papers cards data scripts reports .github requirements.txt
git commit -m "Redesign repository as learning-first reasoning data atlas"
```

Run validation again:

```bash
python scripts/validate_data.py
python scripts/render_site_data.py
python scripts/render_readme.py --check || python scripts/render_readme.py
python scripts/check_links.py --soft
python scripts/summarize_counts.py
```

Push branch:

```bash
git push -u origin redesign-learning-atlas-v2
```

Do not push to `main` unless explicitly instructed after review.

---

## 18. Final response format

When finished, report:

```text
Created/updated:
- ...

Paper pages:
- ...

Docs:
- ...

Cards:
- ...

Data:
- total entries:
- verified:
- partial:
- needs_search:

Visual/site:
- ...

Validation:
- validate_data:
- render_site_data:
- render_readme:
- check_links:

Git:
- branch:
- commit:
- pushed:

Remaining work:
- ...
```

---

## 19. Final self-review questions

Create:

```text
reports/self_review.md
```

Answer:

1. Does the repo now look interesting and lively?
2. Can a beginner understand post-training reasoning data from the README and docs?
3. Are paper lists broad enough to reflect the 400-paper survey?
4. Are categories meaningful rather than arbitrary?
5. Are entries annotated with why they matter?
6. Are cards useful for auditing real releases?
7. Are verifiers, rewards, environments, recipes, and scaling claims represented?
8. Are empty placeholder files removed or filled?
9. Are unknown fields marked honestly?
10. Are unverified items separated from verified ones?
11. Does the website work?
12. Does the README invite stars, citations, and contributions without overclaiming?
13. Is the repo safe for anonymous review, if applicable?
14. What still needs manual curation?

---

## 20. Absolute rules

- Do not hallucinate links.
- Do not mark unknown metadata as verified.
- Do not create shallow placeholder docs.
- Do not leave empty YAML files.
- Do not dump 400 papers into README.
- Do not delete useful existing files without backup.
- Do not force push.
- Re-read this spec before every phase.
