# 🧯 Audit, Failure, Contamination, and Verifier Attacks

> CoT faithfulness, leakage, contamination, reward hacking, judge attacks, synthetic-data collapse, live benchmarks, and verifier robustness.

## Why this category matters

Reasoning data creates new failure surfaces because the feedback signal is often more structured and more trusted than ordinary labels. A verifier can be gamed. A judge can be attacked. A chain-of-thought can be unfaithful or leak private information. A benchmark can be contaminated at training time or even search time. Synthetic traces can transmit hidden traits. Data reuse can blur train/test boundaries. Audit papers make these hazards visible.

This category includes Language Models Don’t Always Say What They Think, Measuring Faithfulness in Chain-of-Thought Reasoning, GSM-Symbolic, Spurious Rewards, One Token to Fool LLM-as-a-Judge, Leaky Thoughts, Subliminal Learning, Search-Time Data Contamination, LastingBench, LiveBench, HLE, A Sober Look at Progress in Language Model Reasoning, verifier robustness studies, LLMs Gaming Verifiers, Imperfect Verifier Is Good Enough, model-collapse papers, soft contamination, and related diagnostics.

For practitioners, the audit lens should be active before data collection starts. If the final verifier can be exploited, log adversarial examples. If a benchmark might appear in prompt sources, record decontamination. If a rubric judge can be flipped by a token, test the judge before using it as a reward. If chain-of-thought is stored, check privacy and policy exposure. If synthetic data is recursively reused, track lineage and diversity.

The practical output of this category is an audit checklist: source lineage, split hygiene, verifier false positives, judge robustness, privacy leakage, benchmark refresh, reward hacking, and failure telemetry. Entries with missing official URLs remain marked as `needs_search`, because audit pages are especially vulnerable to citation drift and scary-sounding but unverified claims.

## How to read this category

- Classify the failure: contamination, leakage, unfaithful trace, verifier false positive, judge attack, reward hacking, collapse, or benchmark drift.
- Check whether the paper demonstrates the failure on training data, evaluation data, search-time behavior, or deployed interaction.
- Look for proposed mitigations and whether they are operational enough to add to a release checklist.
- Avoid treating a negative result as universal unless the model family, domain, verifier, and evaluation protocol are clear.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| [Spurious Rewards](https://arxiv.org/abs/2506.10947) (2025) · 🟡 partial | 2025 | Reward-signal audit for spurious behavior in RLVR. | linked |
| [One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) (2025) · 🟡 partial | 2025 | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. | linked |
| [Leaky Thoughts](https://arxiv.org/abs/2506.15674) (2025) · 🟡 partial | 2025 | Shows reasoning traces can expose private fields. | linked |
| [Subliminal Learning](https://arxiv.org/abs/2507.14805) (2025) · 🟡 partial | 2025 | Lineage-risk study for hidden trait transfer in synthetic data. | linked |
| [AbstentionBench](https://arxiv.org/abs/2506.09038) (2025) · 🟡 partial | 2025 | Benchmark for epistemic boundaries and non-answering behavior. | linked |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025) · 🟡 partial | 2025 | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. | linked |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) (2025) · 🟡 partial | 2025 | Math release highlighted for verifier pinning and decontamination. | linked |
| [HealthBench](https://arxiv.org/abs/2505.08775) (2025) · 🟡 partial | 2025 | Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification. | linked |
| [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025) · 🟡 partial | 2025 | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 🧠 CoT faithfulness and privacy

- **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · ⚖️ judgment required · 🪜 step level · 🎯 evaluation, safety alignment · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.15674) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Shows reasoning traces can expose private fields.

### 🧬 Leakage and contamination

- **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.11456) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.

### 🧪 Verifier failure and reward hacking

- **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · ⚖️ judgment required · 🪜 scalar reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.08794) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · 🧮 programmatic · 🪜 scalar reward · 🎯 rlvr, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.10947) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · 🏗️ construction recipe · 🧮 programmatic · ⚖️ judgment required · 🪜 answer level, scalar reward · 🎯 rlvr, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.14625) · [🐙 Code](https://github.com/uw-nsl/TinyV) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

### 🧯 Judge attacks and synthetic-data collapse

- **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · 🔀 mixed · 🪜 answer level · 🎯 distillation, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.14805) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lineage-risk study for hidden trait transfer in synthetic data.
- **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · ⚖️ judgment required · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.09038) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Benchmark for epistemic boundaries and non-answering behavior.

### 📚 Additional local seeds

- **[HealthBench](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · ⚖️ judgment required · 🪜 scalar reward, answer level · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.08775) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification.
- **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 rlvr, sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.17387) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.12413) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LiveBench: A challenging, contamination-free benchmark for large language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[LastingBench: Defend Benchmarks Against Knowledge Leakage](https://arxiv.org/abs/2506.21614)**
  <sub>2025 · arXiv preprint arXiv:2506.21614 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.21614) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Spurious Rewards Paradox: Mechanistically Understanding How RLVR Activates Memorization Shortcuts in LLMs](https://arxiv.org/abs/2601.11061)**
  <sub>2026 · arXiv preprint arXiv:2601.11061 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2601.11061) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Language models do not always say what they think: Unfaithful explanations in chain-of-thought prompting**
  <sub>2023 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Measuring faithfulness in chain-of-thought reasoning**
  <sub>2023 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086)**
  <sub>2025 · Conference on Language Modeling (COLM) · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.07086) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking](https://arxiv.org/abs/2604.15149)**
  <sub>2026 · arXiv preprint arXiv:2604.15149 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2604.15149) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning](https://arxiv.org/abs/2505.22203)**
  <sub>2025 · arXiv preprint arXiv:2505.22203 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.22203) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Search-Time Data Contamination](https://arxiv.org/abs/2508.13180)**
  <sub>2025 · arXiv preprint arXiv:2508.13180 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2508.13180) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **AI models collapse when trained on recursively generated data**
  <sub>2024 · Nature · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **GSM-Symbolic**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Humanity's Last Exam**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · 🧪 verifier reward · ⚖️ judgment required · 🧮 programmatic · 🪜 step level · 🎯 evaluation, process supervision · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.06559) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · 🪜 process supervision · ⚖️ judgment required · 🔀 mixed · 🪜 step level, process reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.03124) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[An Imperfect Verifier is Good Enough: Learning with Noisy Rewards](https://arxiv.org/abs/2604.07666)**
  <sub>2026 · arXiv preprint arXiv:2604.07666 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2604.07666) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AndroidWorld: A dynamic benchmarking environment for autonomous agents](https://arxiv.org/abs/2405.14573)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2405.14573) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2407.18901) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2404.07972) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · ⚖️ judgment required · 🔀 mixed · 🪜 pairwise preference, scalar reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2403.13787) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2410.13210) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · arXiv preprint arXiv:2505.20411 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.20411) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Dual Consensus: Escaping from Spurious Majority in Unsupervised RLVR via Two-Stage Vote Mechanism](https://arxiv.org/abs/2603.16223)**
  <sub>2026 · arXiv preprint arXiv:2603.16223 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2603.16223) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance**
  <sub>2021 · ACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **miniF2F: A cross-system benchmark for formal olympiad-level mathematics**
  <sub>2021 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Scaling laws for reward model overoptimization**
  <sub>2022 · ICML · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **API-Bank: A benchmark for tool-augmented LLMs**
  <sub>2023 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **FinanceBench: A benchmark for financial question answering**
  <sub>2023 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **BRIGHT: A realistic and challenging benchmark for reasoning-intensive retrieval**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ChemBench: A benchmark for evaluating large language models in chemistry**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Is model collapse inevitable?**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Overoptimization in direct alignment algorithms**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SciCode: A benchmark for scientific code generation and reasoning**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ToolSandbox: A stateful, conversational, interactive evaluation benchmark for tool use**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **tau-bench: A benchmark for tool-agent-user interaction in real-world domains**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MegaScience: A benchmark and data resource for scientific reasoning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **The Agent Company: Benchmarking and analyzing agent work in enterprise-like environments**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Why we no longer evaluate on SWE-bench Verified**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Terminal-Bench: A benchmark and task environment for terminal agents**
  <sub>2026 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- What verifier-attack tests should be mandatory before using a reward signal for RLVR?
- How can live benchmarks remain useful without making longitudinal comparison impossible?
- What metadata proves that synthetic reasoning traces did not carry hidden benchmark or behavioral leakage?
- When should chain-of-thought be hidden, summarized, or omitted from public data releases for privacy and safety?

## Related docs

- [09_audit_and_failure_modes.md](../docs/09_audit_and_failure_modes.md)
- [04_data_quality.md](../docs/04_data_quality.md)
- [06_verifiers_and_rewards.md](../docs/06_verifiers_and_rewards.md)
- [needs_search.md](../reports/needs_search.md)

## Related cards

- [verifier_card_template.md](../cards/verifier_card_template.md)
- [release_card_template.md](../cards/release_card_template.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
