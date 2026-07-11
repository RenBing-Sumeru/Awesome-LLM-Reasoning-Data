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
| [ReST-MCTS*](https://arxiv.org/abs/2406.03816) | 2024 | [Paper](https://arxiv.org/abs/2406.03816) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th) · [Project](https://rest-mcts.github.io/) · [Paper Card Source](../../paper_cards/library/cards/rest-mcts-2024/sources) | searched reasoning trajectory with intermediate node states, final answer, verifier outcome, and inferred process reward.; process: problem, partial solution state, candidate next step; MCTS-style reasoning tree | process reward model guided by final-answer oracle feedback and MCTS-derived value targets. | It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects. |
| [AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802) | 2024 | [Paper](https://arxiv.org/abs/2405.16802) · [DOI](https://doi.org/10.48550/arXiv.2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV) · [Paper Card Source](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources) | reasoning trace with step-level confidence-change annotations.; process: problem, candidate solution, reasoning step; offline reasoning traces | answer-trained verifier converted into automated process annotations. | It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision. |
| [PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456) | 2025 | [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Data](https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout) · [HF](https://huggingface.co/PRIME-RL) · [Paper Card Source](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources) | policy rollout with final outcome label, implicit process reward estimates, and policy update signal.; process: prompt, policy rollout, outcome label; online RL training loop | implicit process rewards derived from outcome labels and updated on policy rollouts. | It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds. |
| [ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861) | 2025 | [Paper](https://arxiv.org/abs/2501.07861) · [DOI](https://doi.org/10.48550/arXiv.2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR) · [Paper Card Source](../../paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources) | step-level preference data with retrieval context, process reward score, process explanation, and final answer.; process: query, retrieval context, partial reasoning state; RAG reasoning pipeline | Process Reward Model plus Process Explanation Model, with MCTS-guided search. | It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object. |

## 5. Core PRM Paper List

These entries are promoted into the core list because they already expose a paper-specific data object, feedback/verifier contract, recipe signal, and audit focus. Link-only waypoints are kept in a separate section so they do not dilute the learning path.

### <a id="human-step-level-labels"></a>🪜 Human step-level labels

_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._

### <a id="process-reward-models"></a>🧪 Process reward models

- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [DOI](https://doi.org/10.48550/arXiv.2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR) · [Paper Card Source](../../paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources)
  _Data object:_ step-level preference data with retrieval context, process reward score, process explanation, and final answer.; process: query, retrieval context, partial reasoning state; RAG reasoning pipeline
  _Feedback / verifier:_ Process Reward Model plus Process Explanation Model, with MCTS-guided search.
  _Recipe signal:_ teacher: PRM/PEM feedback and benchmark supervision.; generator: MCTS-guided retrieval-augmented rollouts
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.
- 🪜 **[ReST-MCTS*](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · NeurIPS · 🪜 process supervision · 🏗️ construction recipe · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.03816) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th) · [Project](https://rest-mcts.github.io/) · [Paper Card Source](../../paper_cards/library/cards/rest-mcts-2024/sources)
  _Data object:_ searched reasoning trajectory with intermediate node states, final answer, verifier outcome, and inferred process reward.; process: problem, partial solution state, candidate next step; MCTS-style reasoning tree
  _Feedback / verifier:_ process reward model guided by final-answer oracle feedback and MCTS-derived value targets.
  _Recipe signal:_ teacher: oracle final answers and search-derived value estimates, not manual dense step labels.; generator: policy rollouts expanded by MCTS
  _Audit focus:_ search policy may overfit process reward artifacts, accepted traces can hide rejected rollout distribution, inference budget may be conflated with data quality
  _Why it matters:_ It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.

### <a id="rollout-value-supervision"></a>🔁 Rollout-value supervision

_No metadata-rich primary-source entries are assigned here yet. Keep link-only papers in Emerging Verified Work until their data object and verifier fields are curated._

### <a id="automatic-process-supervision"></a>🛠️ Automatic process supervision

- 🪜 **[PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · rlvr · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Data](https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout) · [HF](https://huggingface.co/PRIME-RL) · [Paper Card Source](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources)
  _Data object:_ policy rollout with final outcome label, implicit process reward estimates, and policy update signal.; process: prompt, policy rollout, outcome label; online RL training loop
  _Feedback / verifier:_ implicit process rewards derived from outcome labels and updated on policy rollouts.
  _Recipe signal:_ teacher: outcome verifiers rather than dense human process labels.; generator: policy rollouts
  _Audit focus:_ implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes
  _Why it matters:_ It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.
- 🪜 **[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802)**
  <sub>2024 · NeurIPS · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.16802) · [DOI](https://doi.org/10.48550/arXiv.2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV) · [Paper Card Source](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources)
  _Data object:_ reasoning trace with step-level confidence-change annotations.; process: problem, candidate solution, reasoning step; offline reasoning traces
  _Feedback / verifier:_ answer-trained verifier converted into automated process annotations.
  _Recipe signal:_ teacher: answer-level verifier trained from final-answer correctness.; generator: model-generated candidate reasoning
  _Audit focus:_ answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies
  _Why it matters:_ It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.

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

- [PRIME: Process reinforcement through implicit rewards](../../paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources)
- [ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](../../paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources)
- [AutoPSV: Automated Process-Supervised Verifier](../../paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources)
- [ReST-MCTS*](../../paper_cards/library/cards/rest-mcts-2024/sources)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
