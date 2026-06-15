# 🪜 Process Supervision and Process Reward Models

> Step labels, rollout values, first-error localization, PRM datasets, process verifiers, and studies of when process rewards help or fail.

## What this category means

Use this page to understand the move from final-answer feedback to intermediate feedback that can train, rank, or debug reasoning traces.

Process supervision asks a different question from outcome supervision. Instead of only asking whether the final answer is right, it asks where the reasoning path becomes reliable, uncertain, or wrong. That makes the data object richer: a prompt, a chain of steps, step-level labels or values, sometimes a first-error marker, and a reward model or verifier trained to score intermediate states. The extra structure is expensive, but it can make feedback denser and more diagnostic.

The category begins with landmark human-labeled step data such as PRM800K / Let’s Verify Step by Step, then follows automated and semi-automated routes: Math-Shepherd-style rollout values, OmegaPRM, ProcessBench, PRMBench, Qwen2.5-Math-PRM, PRIME, PROF, and newer analyses that connect GRPO, outcome rewards, and process-like credit assignment. For code and tool tasks, process supervision can mean execution traces, first failing assertion, or partial credit for reaching a better state.

Practitioners should be skeptical and precise. A process reward model can improve search, reranking, and training, but it can also reward plausible-looking steps, overfit annotation style, or disagree with the final verifier. A first-error label is not the same as a scalar reward; a rollout value is not the same as human step correctness; an implicit process signal in a policy-gradient method is not the same as a supervised PRM dataset. The page keeps those distinctions visible.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| DeepMath-103K | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md) | Math release highlighted for verifier pinning and decontamination. |
| Let's Verify Step by Step | 2023 | arXiv | [Paper](https://arxiv.org/abs/2305.20050) · [Card](../cards/verifiers/prm800k.md) | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| Training verifiers to solve math word problems | 2021 | arXiv | [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../cards/verifiers/training-verifiers-to-solve-math-word-problems.md) | It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows. |
| One Token to Fool LLM-as-a-Judge | 2025 | arXiv | [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md) | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. |
| PRMBench: A fine-grained and challenging benchmark for process-level reward models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.03124) · [Card](../cards/verifiers/prmbench.md) | Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure. |
| TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Card](../cards/verifiers/tinyv.md) | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |
| Math-Shepherd | 2024 | arXiv | [Paper](https://arxiv.org/abs/2312.08935) · [Card](../cards/verifiers/math_shepherd.md) | Monte-Carlo-style process signal reference for step supervision. |
| OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision | 2024 | arXiv | [Paper](https://arxiv.org/abs/2406.06592) · [Card](../cards/verifiers/omegaprm.md) | Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels. |
| ProcessBench: Identifying Process Errors in Mathematical Reasoning | 2024 | arXiv | [Paper](https://arxiv.org/abs/2412.06559) · [Card](../cards/verifiers/processbench.md) | Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training. |
| Rewarding progress: Scaling automated process verifiers for LLM reasoning | 2024 | ICLR | [Paper](https://arxiv.org/abs/2410.08146) · [OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW) · [Card](../cards/verifiers/rewarding-progress.md) | It gives process supervision a concrete target beyond dense labels: measure progress under a prover policy and use that signal for search or RL. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[An Imperfect Verifier is Good Enough: Learning with Noisy Rewards](https://arxiv.org/abs/2604.07666)**
  <sub>2026 · arXiv preprint arXiv:2604.07666 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.07666)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[CoVerRL: Breaking the Consensus Trap in Label-Free Reasoning via Generator-Verifier Co-Evolution](https://arxiv.org/abs/2603.17775)**
  <sub>2026 · arXiv preprint arXiv:2603.17775 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.17775)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking](https://arxiv.org/abs/2604.15149)**
  <sub>2026 · arXiv preprint arXiv:2604.15149 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.15149)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)](https://arxiv.org/abs/2509.03403)**
  <sub>2025 · arXiv preprint arXiv:2509.03403 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.03403)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22203)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[GRPO is Secretly a Process Reward Model](https://arxiv.org/abs/2509.21154)**
  <sub>2025 · arXiv preprint arXiv:2509.21154 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2509.21154)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

### 📦 Data Release

- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.

### 🧯 Audit Failure

- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.

### 🧰 Benchmark

- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124) · [Card](../cards/verifiers/prmbench.md)
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559) · [Card](../cards/verifiers/processbench.md)
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- 🧰 **[Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv · 🧰 benchmark · 🧪 verifier reward · programmatic · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../cards/verifiers/training-verifiers-to-solve-math-word-problems.md)
  _Why it matters:_ It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.

### 🧪 Verifier Reward

- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Card](../cards/verifiers/tinyv.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- 🧪 **[Rewarding progress: Scaling automated process verifiers for LLM reasoning](https://arxiv.org/abs/2410.08146)**
  <sub>2024 · ICLR · 🧪 verifier reward · 🪜 process supervision · programmatic · mixed · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2410.08146) · [OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW) · [Card](../cards/verifiers/rewarding-progress.md)
  _Why it matters:_ It gives process supervision a concrete target beyond dense labels: measure progress under a prover policy and use that signal for search or RL.

### 🪜 Process Supervision

- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [Card](../cards/verifiers/math_shepherd.md)
  _Why it matters:_ Monte-Carlo-style process signal reference for step supervision.
- 🪜 **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · mixed · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2406.06592) · [Card](../cards/verifiers/omegaprm.md)
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [Card](../cards/verifiers/prm800k.md)
  _Why it matters:_ It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.

### ⚠️ Needs search or metadata

- 🧭 **PRIME: Process reinforcement through implicit rewards**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Process reward models for code reasoning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Qwen2.5-Math-PRM**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Improve mathematical reasoning in language models by automated process supervision**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Math-Shepherd: Verify and reinforce LLMs step-by-step without human annotations**
  <sub>2023 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Solving math word problems with process- and outcome-based feedback**
  <sub>2022 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

## What to audit

- Where does feedback attach: step, transition, rollout, or final answer?
- How were first-error labels, rollout values, or process rewards produced?
- Does process reward improve final correctness or only intermediate-looking scores?

## Related cards

- [DeepMath-103K](../cards/releases/deepmath_103k.md)
- [One Token to Fool LLM-as-a-Judge](../cards/verifiers/one_token_to_fool_judge.md)
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](../cards/verifiers/prmbench.md)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../cards/verifiers/tinyv.md)
- [Math-Shepherd](../cards/verifiers/math_shepherd.md)
- [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](../cards/verifiers/omegaprm.md)
- [ProcessBench: Identifying Process Errors in Mathematical Reasoning](../cards/verifiers/processbench.md)
- [Rewarding progress: Scaling automated process verifiers for LLM reasoning](../cards/verifiers/rewarding-progress.md)
- [Let's Verify Step by Step](../cards/verifiers/prm800k.md)
- [Training verifiers to solve math word problems](../cards/verifiers/training-verifiers-to-solve-math-word-problems.md)

## Open gaps

- When does a process reward model add signal beyond a strong outcome verifier plus search?
- How should PRM datasets annotate uncertainty when human labels disagree about a step?
- Can process rewards scale to agent trajectories where state transitions are long and partially observable?
- What diagnostics reveal that a PRM is rewarding trace style rather than causal progress?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
