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
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 2023 | [Paper](https://arxiv.org/abs/2305.20050) · [Card](../../cards/verifiers/prm800k.md) | step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces | process reward model trained from step labels | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| [Math-Shepherd](https://arxiv.org/abs/2312.08935) | 2024 | [Paper](https://arxiv.org/abs/2312.08935) · [Card](../../cards/verifiers/math_shepherd.md) | step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces | rollout-derived process reward signal | It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer. |
| [ReST-MCTS*](https://arxiv.org/abs/2406.03816) | 2024 | [Paper](https://arxiv.org/abs/2406.03816) | reasoning trajectory with intermediate search states; process: node state, rollout candidate, process reward score; MCTS-style reasoning tree | process reward guided tree search | It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects. |
| [AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802) | 2024 | [Paper](https://arxiv.org/abs/2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV) | step-level confidence-change annotations; process: reasoning step, verifier confidence, relative confidence change; offline reasoning traces | answer-trained verifier converted into process annotations | It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision. |
| [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592) | 2024 | [Paper](https://arxiv.org/abs/2406.06592) · [Card](../../cards/verifiers/omegaprm.md) | process supervision annotations; process: partial reasoning prefix, first-error signal, positive/negative step examples; offline math search tree | automated process reward signal | Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels. |
| [Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629) | 2024 | [Paper](https://arxiv.org/abs/2406.18629) | step-wise preference pairs; process: reasoning step, preferred continuation, rejected continuation; offline long-chain reasoning traces | step-wise preference optimization objective | It helps readers see how preference optimization becomes a process-level data problem when the chosen/rejected object is an intermediate continuation rather than a whole answer. |
| [PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456) | 2025 | [Paper](https://arxiv.org/abs/2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) | rollout with implicit process reward signal; process: policy rollout, outcome label, implicit process reward; online RL training loop | implicit process rewards derived from outcome labels | It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds. |
| [ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861) | 2025 | [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR) | step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline | process reward model plus process explanation model | It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object. |
| [PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124) | 2025 | [Paper](https://arxiv.org/abs/2501.03124) · [Card](../../cards/verifiers/prmbench.md) | step-level labels or scores; process: step, label, error type; offline reasoning traces | process-level reward model benchmark | Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure. |
| [ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559) | 2024 | [Paper](https://arxiv.org/abs/2412.06559) · [Card](../../cards/verifiers/processbench.md) | step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces | process-error detector | Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training. |

## 5. Core PRM Paper List

These entries are promoted into the core list because they already expose a paper-specific data object, feedback/verifier contract, recipe signal, and audit focus. Link-only waypoints are kept in a separate section so they do not dilute the learning path.

### <a id="human-step-level-labels"></a>🪜 Human step-level labels

- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [Card](../../cards/verifiers/prm800k.md)
  _Data object:_ step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces
  _Feedback / verifier:_ process reward model trained from step labels
  _Recipe signal:_ reward verifier layer; release audit; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.

### <a id="process-reward-models"></a>🧪 Process reward models

- 🪜 **[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · process supervision · preference learning · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)
  _Data object:_ step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline
  _Feedback / verifier:_ process reward model plus process explanation model
  _Recipe signal:_ generator: MCTS-guided retrieval-augmented rollouts; filtering rule: trustworthy process rewarding and iterative preference optimization
  _Audit focus:_ PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search
  _Why it matters:_ It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.
- 🪜 **[GenPRM: Scaling Test-Time Compute of Process Reward Models via Generative Reasoning](https://arxiv.org/abs/2504.00891)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · mixed · reward modeling · process supervision · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2504.00891)
  _Data object:_ step-level judgments produced after explicit reasoning and code verification.
  _Feedback / verifier:_ generative PRM that reasons and executes code checks before scoring each step, trained with Relative Progress Estimation.
  _Recipe signal:_ generator: rationale synthesis framework combining chain-of-thought and code verification.
  _Audit focus:_ Generative judging spends extra inference compute and can still rationalize incorrect steps if code checks do not cover the claim.
  _Why it matters:_ It reframes the process verifier as a reasoning-data generator whose judgment quality is a function of test-time compute, letting 7B-scale PRMs outperform much larger scalar judges on ProcessBench.
- 🪜 **[Free Process Rewards without Process Labels](https://arxiv.org/abs/2412.01981)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · reward modeling · process supervision · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2412.01981) · [Code](https://github.com/lifan-yuan/ImplicitPRM)
  _Data object:_ response-level outcome labels on math reasoning, reused as implicit step-level rewards.
  _Feedback / verifier:_ implicit PRM parameterized as the log-likelihood ratio between policy and reference model, trained only on outcome labels.
  _Recipe signal:_ reward verifier layer; reward modeling; process supervision
  _Audit focus:_ Implicit step rewards inherit any noise or bias present in the response-level outcome labels.
  _Why it matters:_ It undercuts the assumption that process supervision requires expensive step-level labels, reporting that added step labels brought no further improvement over the implicit PRM.
- 🪜 **[ReST-MCTS*](https://arxiv.org/abs/2406.03816)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · programmatic · mixed · process supervision · reward modeling · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.03816)
  _Data object:_ reasoning trajectory with intermediate search states; process: node state, rollout candidate, process reward score; MCTS-style reasoning tree
  _Feedback / verifier:_ process reward guided tree search
  _Recipe signal:_ generator: policy rollouts expanded by MCTS; filtering rule: process-reward-guided trajectory selection
  _Audit focus:_ search policy may overfit process reward artifacts, accepted traces can hide rejected rollout distribution, inference budget may be conflated with data quality
  _Why it matters:_ It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.

### <a id="rollout-value-supervision"></a>🔁 Rollout-value supervision

- 🧪 **[Rewarding progress: Scaling automated process verifiers for LLM reasoning](https://arxiv.org/abs/2410.08146)**
  <sub>2024 · ICLR · 🧪 verifier reward · 🪜 process supervision · programmatic · mixed · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.08146) · [OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW) · [Card](../../cards/verifiers/rewarding-progress.md)
  _Data object:_ step-level process advantage score plus final answer/correctness signal.; process: problem, partial trace before step, step, future success estimate, verifier score, final outcome.; reasoning search and online RL setup using process rewards.
  _Feedback / verifier:_ Process Advantage Verifier trained to predict progress toward correct answer.
  _Recipe signal:_ teacher: automated success estimates from prover policies and final correctness signals.; generator: policies produce traces used to train process verifiers.
  _Audit focus:_ Progress estimates can be policy-specific., Verifier-guided search can exploit reward artifacts., Step rewards can encourage short-term progress that hurts final correctness.
  _Why it matters:_ It gives process supervision a concrete target beyond dense labels: measure progress under a prover policy and use that signal for search or RL.
- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [Card](../../cards/verifiers/math_shepherd.md)
  _Data object:_ step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces
  _Feedback / verifier:_ rollout-derived process reward signal
  _Recipe signal:_ generator: model rollouts from intermediate reasoning steps; filtering rule: rollout success rate converted to step reward
  _Audit focus:_ rollout policy strength can leak into labels, step rewards may favor locally plausible continuations, generated solutions can inherit base-model shortcuts
  _Why it matters:_ It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer.

### <a id="automatic-process-supervision"></a>🛠️ Automatic process supervision

- 🪜 **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.06592) · [Card](../../cards/verifiers/omegaprm.md)
  _Data object:_ process supervision annotations; process: partial reasoning prefix, first-error signal, positive/negative step examples; offline math search tree
  _Feedback / verifier:_ automated process reward signal
  _Recipe signal:_ reward verifier layer; optimizer scaffold; process supervision
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- 🪜 **[PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456)**
  <sub>2025 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · rlvr · process supervision · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2502.01456) · [Code](https://github.com/PRIME-RL/PRIME)
  _Data object:_ rollout with implicit process reward signal; process: policy rollout, outcome label, implicit process reward; online RL training loop
  _Feedback / verifier:_ implicit process rewards derived from outcome labels
  _Recipe signal:_ generator: policy rollouts; filtering rule: outcome labels converted into implicit process rewards
  _Audit focus:_ implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes
  _Why it matters:_ It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.
- 🪜 **[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L2_artifact_verified</sub>
  [Paper](https://arxiv.org/abs/2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV)
  _Data object:_ step-level confidence-change annotations; process: reasoning step, verifier confidence, relative confidence change; offline reasoning traces
  _Feedback / verifier:_ answer-trained verifier converted into process annotations
  _Recipe signal:_ generator: model-generated candidate reasoning; filtering rule: changes in verifier confidence across steps
  _Audit focus:_ answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies
  _Why it matters:_ It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.

### <a id="first-error-localization"></a>❌ First-error localization

- 🪜 **[Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs](https://arxiv.org/abs/2406.18629)**
  <sub>2024 · arXiv · 🪜 process supervision · 🏗️ construction recipe · mixed · process supervision · preference learning · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2406.18629)
  _Data object:_ step-wise preference pairs; process: reasoning step, preferred continuation, rejected continuation; offline long-chain reasoning traces
  _Feedback / verifier:_ step-wise preference optimization objective
  _Recipe signal:_ generator: multi-step reasoning policy; filtering rule: step-wise preferences over reasoning continuations
  _Audit focus:_ local step preference may not align with final correctness, preference construction can hide teacher or scorer bias, long-chain traces can overfit style instead of reasoning validity
  _Why it matters:_ It helps readers see how preference optimization becomes a process-level data problem when the chosen/rejected object is an intermediate continuation rather than a whole answer.

### <a id="prm-benchmarks-and-evaluation"></a>📊 PRM benchmarks and evaluation

- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124) · [Card](../../cards/verifiers/prmbench.md)
  _Data object:_ step-level labels or scores; process: step, label, error type; offline reasoning traces
  _Feedback / verifier:_ process-level reward model benchmark
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559) · [Card](../../cards/verifiers/processbench.md)
  _Data object:_ step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces
  _Feedback / verifier:_ process-error detector
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.

## 6. Adjacent Verified Work

These entries are useful context for PRM readers, but they are not promoted as core PRM papers because they do not yet map cleanly onto a process-supervision subfield. Keep them visible without giving them equal weight in the main learning path.

- 🧭 **[A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future](https://arxiv.org/abs/2504.12328)**
  <sub>2025 · arXiv · 🧭 survey background · judgment required · mixed · reward modeling · preference learning · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2504.12328) · [DOI](https://doi.org/10.48550/arXiv.2504.12328) · [Project](https://github.com/JLZhong23/awesome-reward-models)
  _Data object:_ taxonomy of reward-model data sources, objectives, applications, evaluations, and challenges.; process: preference source, reward model architecture, usage mode; LLM reward-model training and evaluation pipelines.
  _Feedback / verifier:_ reward model as proxy objective for downstream post-training.
  _Recipe signal:_ teacher: human and AI preference sources summarized across reward-model literature.; generator: survey taxonomy and accompanying awesome list
  _Audit focus:_ Reward models may encode annotator bias, style bias, or length preference., Proxy rewards can be overoptimized or attacked when used as training objectives., Benchmark scores can obscure whether the reward model is useful for reasoning data.
  _Why it matters:_ It gives readers a reward-model-specific map, which is essential before comparing learned human-preference rewards with PRMs, rubric rewards, and programmatic RLVR verifiers.
- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../../cards/releases/deepmath_103k.md)
  _Data object:_ answer level
  _Feedback / verifier:_ programmatic
  _Recipe signal:_ prompt sourcing; reward verifier layer; release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Card](../../cards/verifiers/tinyv.md)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 🧰 **[Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../../cards/verifiers/training-verifiers-to-solve-math-word-problems.md)
  _Data object:_ answer level; scalar reward
  _Feedback / verifier:_ programmatic, judgment required
  _Recipe signal:_ reward verifier layer; release audit; evaluation
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.

## 7. Emerging Verified Work

These papers have official primary links but still need paper-specific metadata before they become core teaching entries. Treat them as a watchlist, not as equal-weight canonical reads.

### 🧪 Process reward models

- **[GRPO is Secretly a Process Reward Model](https://arxiv.org/abs/2509.21154)** <sub>2025 · arXiv preprint arXiv:2509.21154 · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.21154)
  _Curation note:_ link verified; add paper-specific data object, verifier/reward contract, recipe signal, and audit notes before promoting it into the core PRM list.

### 🛠️ Automatic process supervision

- **[Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)](https://arxiv.org/abs/2509.03403)** <sub>2025 · arXiv preprint arXiv:2509.03403 · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.03403)
  _Curation note:_ link verified; add paper-specific data object, verifier/reward contract, recipe signal, and audit notes before promoting it into the core PRM list.

### Other related work

- **[An Imperfect Verifier is Good Enough: Learning with Noisy Rewards](https://arxiv.org/abs/2604.07666)** <sub>2026 · arXiv preprint arXiv:2604.07666 · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.07666)
  _Curation note:_ link verified; add paper-specific data object, verifier/reward contract, recipe signal, and audit notes before promoting it into the core PRM list.
- **[CoVerRL: Breaking the Consensus Trap in Label-Free Reasoning via Generator-Verifier Co-Evolution](https://arxiv.org/abs/2603.17775)** <sub>2026 · arXiv preprint arXiv:2603.17775 · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.17775)
  _Curation note:_ link verified; add paper-specific data object, verifier/reward contract, recipe signal, and audit notes before promoting it into the core PRM list.
- **[LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking](https://arxiv.org/abs/2604.15149)** <sub>2026 · arXiv preprint arXiv:2604.15149 · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.15149)
  _Curation note:_ link verified; add paper-specific data object, verifier/reward contract, recipe signal, and audit notes before promoting it into the core PRM list.
- **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)** <sub>2025 · arXiv preprint arXiv:2505.22203 · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22203)
  _Curation note:_ link verified; add paper-specific data object, verifier/reward contract, recipe signal, and audit notes before promoting it into the core PRM list.

## 8. Needs Search or Metadata

These entries are intentionally separated from verified work. Add official links and enough metadata to identify the data object and verifier before promoting them.

- 📄 **Process reward models for code reasoning**
  <sub>2025 · unknown · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Qwen2.5-Math-PRM**
  <sub>2025 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 📄 **Solving math word problems with process- and outcome-based feedback**
  <sub>2022 · arXiv preprint · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ metadata pending
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.
- 🧭 **A primer in BERTology: What we know about how BERT works**
  <sub>2020 · TACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Data object:_ survey background
  _Feedback / verifier:_ metadata pending
  _Recipe signal:_ release audit
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.

## 9. What to Audit

- Where does feedback attach: step, transition, rollout, or final answer?
- How were first-error labels, rollout values, or process rewards produced?
- Does process reward improve final correctness or only intermediate-looking scores?

## 10. Open Problems

- When does a PRM add signal beyond an outcome verifier plus search?
- How should uncertainty and annotator disagreement be represented in step labels?
- Can process supervision scale to long agent trajectories?
- What diagnostics reveal reward of trace style rather than causal progress?

## 11. Related Cards

- [DeepMath-103K](../../cards/releases/deepmath_103k.md)
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](../../cards/verifiers/prmbench.md)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../cards/verifiers/tinyv.md)
- [Math-Shepherd](../../cards/verifiers/math_shepherd.md)
- [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](../../cards/verifiers/omegaprm.md)
- [ProcessBench: Identifying Process Errors in Mathematical Reasoning](../../cards/verifiers/processbench.md)
- [Rewarding progress: Scaling automated process verifiers for LLM reasoning](../../cards/verifiers/rewarding-progress.md)
- [Let's Verify Step by Step](../../cards/verifiers/prm800k.md)
- [Training verifiers to solve math word problems](../../cards/verifiers/training-verifiers-to-solve-math-word-problems.md)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
