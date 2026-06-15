# 🧯 Audit, Failure, Contamination, and Verifier Attacks

> CoT faithfulness, leakage, contamination, reward hacking, judge attacks, synthetic-data collapse, live benchmarks, and verifier robustness.

## What this category means

Use this page as the hazard map for reasoning data: what can leak, what can be gamed, what can be contaminated, and what can silently fail.

Reasoning data creates new failure surfaces because the feedback signal is often more structured and more trusted than ordinary labels. A verifier can be gamed. A judge can be attacked. A chain-of-thought can be unfaithful or leak private information. A benchmark can be contaminated at training time or even search time. Synthetic traces can transmit hidden traits. Data reuse can blur train/test boundaries. Audit papers make these hazards visible.

This category includes Language Models Don’t Always Say What They Think, Measuring Faithfulness in Chain-of-Thought Reasoning, GSM-Symbolic, Spurious Rewards, One Token to Fool LLM-as-a-Judge, Leaky Thoughts, Subliminal Learning, Search-Time Data Contamination, LastingBench, LiveBench, HLE, A Sober Look at Progress in Language Model Reasoning, verifier robustness studies, LLMs Gaming Verifiers, Imperfect Verifier Is Good Enough, model-collapse papers, soft contamination, and related diagnostics.

For practitioners, the audit lens should be active before data collection starts. If the final verifier can be exploited, log adversarial examples. If a benchmark might appear in prompt sources, record decontamination. If a rubric judge can be flipped by a token, test the judge before using it as a reward. If chain-of-thought is stored, check privacy and policy exposure. If synthetic data is recursively reused, track lineage and diversity.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| DeepMath-103K | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md) | Math release highlighted for verifier pinning and decontamination. |
| A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | 2025 | Conference on Language Modeling (COLM) | [Paper](https://arxiv.org/abs/2504.07086) · [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains. |
| HealthBench | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.08775) · [Card](../cards/verifiers/healthbench.md) | It is a high-stakes example of judgment-required reasoning data where rubric design matters more than exact-match scoring. |
| One Token to Fool LLM-as-a-Judge | 2025 | arXiv | [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md) | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. |
| PRMBench: A fine-grained and challenging benchmark for process-level reward models | 2025 | arXiv | [Paper](https://arxiv.org/abs/2501.03124) · [Card](../cards/verifiers/prmbench.md) | Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure. |
| Spurious Rewards | 2025 | arXiv | [Paper](https://arxiv.org/abs/2506.10947) · [Card](../cards/verifiers/spurious_rewards.md) | Reward-signal audit for spurious behavior in RLVR. |
| TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning | 2025 | arXiv | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Card](../cards/verifiers/tinyv.md) | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |
| LiveBench: A challenging, contamination-free benchmark for large language models | 2024 | arXiv | [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) | It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items. |
| OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments | 2024 | NeurIPS | [Paper](https://arxiv.org/abs/2404.07972) · [Card](../cards/agents/osworld.md) | Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation. |
| An Imperfect Verifier is Good Enough: Learning with Noisy Rewards | 2026 | arXiv preprint arXiv:2604.07666 | [Paper](https://arxiv.org/abs/2604.07666) | Use this entry as a verified citation waypoint until a paper-specific audit note is added. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[An Imperfect Verifier is Good Enough: Learning with Noisy Rewards](https://arxiv.org/abs/2604.07666)**
  <sub>2026 · arXiv preprint arXiv:2604.07666 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.07666)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Dual Consensus: Escaping from Spurious Majority in Unsupervised RLVR via Two-Stage Vote Mechanism](https://arxiv.org/abs/2603.16223)**
  <sub>2026 · arXiv preprint arXiv:2603.16223 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2603.16223)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking](https://arxiv.org/abs/2604.15149)**
  <sub>2026 · arXiv preprint arXiv:2604.15149 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.15149)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.12413)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Spurious Rewards Paradox: Mechanistically Understanding How RLVR Activates Memorization Shortcuts in LLMs](https://arxiv.org/abs/2601.11061)**
  <sub>2026 · arXiv preprint arXiv:2601.11061 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2601.11061)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · unknown · unknown · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2504.07086) · [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
  _Why it matters:_ It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.
- 🧭 **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2410.13210)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.22203)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[LastingBench: Defend Benchmarks Against Knowledge Leakage](https://arxiv.org/abs/2506.21614)**
  <sub>2025 · arXiv preprint arXiv:2506.21614 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2506.21614)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · arXiv preprint arXiv:2505.20411 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.20411)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Search-Time Data Contamination](https://arxiv.org/abs/2508.13180)**
  <sub>2025 · arXiv preprint arXiv:2508.13180 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2508.13180)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

### 🧰 Benchmark

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038)
  _Why it matters:_ Benchmark for epistemic boundaries and non-answering behavior.
- 🧰 **[HealthBench](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08775) · [Card](../cards/verifiers/healthbench.md)
  _Why it matters:_ It is a high-stakes example of judgment-required reasoning data where rubric design matters more than exact-match scoring.
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124) · [Card](../cards/verifiers/prmbench.md)
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 🧰 **[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · mixed · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
  _Why it matters:_ It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.
- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972) · [Card](../cards/agents/osworld.md)
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.

### 📦 Data Release

- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.

### 🧯 Audit Failure

- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · judgment required · evaluation · safety alignment · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674)
  _Why it matters:_ Shows reasoning traces can expose private fields.
- 🧯 **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · judgment required · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2507.08794) · [Card](../cards/verifiers/one_token_to_fool_judge.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- 🧯 **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · programmatic · rlvr · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.10947) · [Card](../cards/verifiers/spurious_rewards.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- 🧯 **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · mixed · distillation · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2507.14805)
  _Why it matters:_ Lineage-risk study for hidden trait transfer in synthetic data.

### 🧪 Verifier Reward

- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Card](../cards/verifiers/tinyv.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

### ⚠️ Needs search or metadata

- 🧭 **Terminal-Bench: A benchmark and task environment for terminal agents**
  <sub>2026 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Humanity's Last Exam**
  <sub>2025 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **MegaScience: A benchmark and data resource for scientific reasoning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **The Agent Company: Benchmarking and analyzing agent work in enterprise-like environments**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Why we no longer evaluate on SWE-bench Verified**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **AI models collapse when trained on recursively generated data**
  <sub>2024 · Nature · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **BRIGHT: A realistic and challenging benchmark for reasoning-intensive retrieval**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **ChemBench: A benchmark for evaluating large language models in chemistry**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **GSM-Symbolic**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Is model collapse inevitable?**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Overoptimization in direct alignment algorithms**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **SciCode: A benchmark for scientific code generation and reasoning**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **ToolSandbox: A stateful, conversational, interactive evaluation benchmark for tool use**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **tau-bench: A benchmark for tool-agent-user interaction in real-world domains**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **API-Bank: A benchmark for tool-augmented LLMs**
  <sub>2023 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **FinanceBench: A benchmark for financial question answering**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Language models do not always say what they think: Unfaithful explanations in chain-of-thought prompting**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Measuring faithfulness in chain-of-thought reasoning**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Scaling laws for reward model overoptimization**
  <sub>2022 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance**
  <sub>2021 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **miniF2F: A cross-system benchmark for formal olympiad-level mathematics**
  <sub>2021 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

## What to audit

- What can leak, contaminate, or be optimized as a shortcut?
- Is the attack tested against the actual judge/verifier setup?
- Does the paper preserve enough evidence to reproduce the failure?

## Related cards

- [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md)
- [DeepMath-103K](../cards/releases/deepmath_103k.md)
- [HealthBench](../cards/verifiers/healthbench.md)
- [One Token to Fool LLM-as-a-Judge](../cards/verifiers/one_token_to_fool_judge.md)
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](../cards/verifiers/prmbench.md)
- [Spurious Rewards](../cards/verifiers/spurious_rewards.md)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../cards/verifiers/tinyv.md)
- [LiveBench: A challenging, contamination-free benchmark for large language models](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
- [OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](../cards/agents/osworld.md)

## Open gaps

- What verifier-attack tests should be mandatory before using a reward signal for RLVR?
- How can live benchmarks remain useful without making longitudinal comparison impossible?
- What metadata proves that synthetic reasoning traces did not carry hidden benchmark or behavioral leakage?
- When should chain-of-thought be hidden, summarized, or omitted from public data releases for privacy and safety?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
