# 🪜 Process and Trace Supervision Data

> Step-level labels, process reward models, rollout values, first-error localization, automatic process supervision, and PRM evaluation.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=process_trace_supervision_data&mode=find_papers)
> Try: `What should I read first for 🪜 Process / Trace Supervision?`
> Try: `Compare the data objects and verifier types in 🪜 Process / Trace Supervision.`
> Try: `Generate an audit checklist for 🪜 Process / Trace Supervision.`

## 1. What This Track Studies

Use this track to move from final-answer feedback to intermediate feedback attached to reasoning steps or trace states.

Process supervision asks where the reasoning path becomes right, wrong, uncertain, or useful. Its data objects are richer than outcome labels: a prompt, intermediate steps, labels or values over those steps, sometimes a first-error marker, and a process reward model or verifier trained to score partial progress.

This track keeps human step labels, PRM training, rollout-value supervision, automatic process labels, and PRM benchmarks in one place. It is deliberately separate from generic CoT data because a trace is not process supervision unless there is a feedback contract attached to intermediate states.

Contributors should be skeptical. A process reward can improve search or reranking while failing to improve final correctness. It can reward plausible-looking traces or annotation style. Paper cards should therefore state label granularity, label source, use case, and failure modes.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🪜 Human step-level labels | human-labeled intermediate steps and first-error annotations | step boundaries and label policy are ambiguous |
| 🧪 Process reward models | PRMs, process verifiers, calibration, and reward-model training | process reward rises while final correctness does not |
| 🔁 Rollout-value supervision | rollout values, search-derived labels, and automated progress signals | rollout policy leaks solver strength into labels |
| 🛠️ Automatic process supervision | programmatic or model-generated process labels without dense human annotation | automatic labels silently inherit verifier bias |
| ❌ First-error localization | where a solution first becomes invalid and how that signal is used | localized errors are not causally linked to correction |
| 📊 PRM benchmarks and evaluation | ProcessBench, PRMBench, Qwen PRM, and evaluation surfaces for process rewards | PRM benchmark success does not transfer to training use |

### Contents

- [🪜 Human step-level labels](#human-step-level-labels)
- [🧪 Process reward models](#process-reward-models)
- [🔁 Rollout-value supervision](#rollout-value-supervision)
- [🛠️ Automatic process supervision](#automatic-process-supervision)
- [❌ First-error localization](#first-error-localization)
- [📊 PRM benchmarks and evaluation](#prm-benchmarks-and-evaluation)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) | 2025 | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025) | candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack | small LLM verifier augmenting rules | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |
| [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314) | 2024 | [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024) | Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks. | Dense process-based verifier reward models plus answer-level evaluation. | Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution. |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/sources/lets-verify-step-by-step-2023) | Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning. | Process reward model trained from human step-level labels. | Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection. |

## 5. Core PRM Paper List

These entries are promoted into the core list because they already expose a paper-specific data object, feedback/verifier contract, recipe signal, and audit focus. Link-only waypoints are kept in a separate section so they do not dilute the learning path.

### <a id="human-step-level-labels"></a>🪜 Human step-level labels

- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [DOI](https://doi.org/10.48550/arXiv.2305.20050) · [Paper Card Source](../../paper_cards/sources/lets-verify-step-by-step-2023)
  _Data object:_ Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning.
  _Feedback / verifier:_ Process reward model trained from human step-level labels.
  _Recipe signal:_ teacher: Human step-level labels over model-generated reasoning.; generator: Policy model produces candidate math traces.
  _Audit focus:_ Human step labels can encode style preferences., PRM scores can reward locally plausible but globally wrong paths., Verifier calls add TTC cost that must be disclosed.
  _Why it matters:_ Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection.

### <a id="process-reward-models"></a>🧪 Process reward models

_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._

### <a id="rollout-value-supervision"></a>🔁 Rollout-value supervision

_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._

### <a id="automatic-process-supervision"></a>🛠️ Automatic process supervision

_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._

### <a id="first-error-localization"></a>❌ First-error localization

_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._

### <a id="prm-benchmarks-and-evaluation"></a>📊 PRM benchmarks and evaluation

_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._

## 6. Adjacent Verified Work

These entries are useful context for PRM readers, but they are not promoted as core PRM papers because they do not yet map cleanly onto a process-supervision subfield. Keep them visible without giving them equal weight in the main learning path.

- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

## 7. What to Audit

- Where does feedback attach: step, transition, rollout, or final answer?
- How were first-error labels, rollout values, or process rewards produced?
- Does process reward improve final correctness or only intermediate-looking scores?

## 8. Open Problems

- When does a PRM add signal beyond an outcome verifier plus search?
- How should uncertainty and annotator disagreement be represented in step labels?
- Can process supervision scale to long agent trajectories?
- What diagnostics reveal reward of trace style rather than causal progress?

## 9. Related Paper-Card Sources

- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)
- [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
- [Let's Verify Step by Step](../../paper_cards/sources/lets-verify-step-by-step-2023)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
