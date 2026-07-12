# 🪜 Process and Trace Supervision Data

> Step-level labels, process reward models, rollout values, first-error localization, automatic process supervision, and PRM evaluation.

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

## 5. Core PRM Paper List

These entries are promoted into the core list because they already expose a paper-specific data object, feedback/verifier contract, recipe signal, and audit focus. Link-only waypoints are kept in a separate section so they do not dilute the learning path.

### <a id="human-step-level-labels"></a>🪜 Human step-level labels

_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._

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

## 6. What to Audit

- Where does feedback attach: step, transition, rollout, or final answer?
- How were first-error labels, rollout values, or process rewards produced?
- Does process reward improve final correctness or only intermediate-looking scores?

## 7. Open Problems

- When does a PRM add signal beyond an outcome verifier plus search?
- How should uncertainty and annotator disagreement be represented in step labels?
- Can process supervision scale to long agent trajectories?
- What diagnostics reveal reward of trace style rather than causal progress?

## 8. Related Paper-Card Sources

- No paper-card sources are linked for this category yet.

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
