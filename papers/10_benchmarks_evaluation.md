# 🧰 Benchmarks and Evaluation Surfaces

> Math/code/live/agent/domain/process/reward benchmarks organized by what they measure and what feedback they can support.

## Why this category matters

Benchmarks are not just scoreboards in a reasoning-data repository. They define task distributions, answer formats, hidden tests, judge prompts, and sometimes executable environments. A benchmark can become a filter for construction, a verifier for RLVR, a source of prompts, a reward-model evaluation suite, or a contamination risk. The same artifact can be useful and dangerous depending on how it is reused.

This category reorganizes overlapping papers by evaluation surface: math and code benchmarks such as GSM8K, MATH, FrontierMath, LiveCodeBench, BigCodeBench, HumanEval, APPS, SciCode, and KodCode; live and contamination-aware benchmarks such as LiveBench, LastingBench, HLE, GSM-Symbolic, and SWE-bench lifecycle work; agent benchmarks such as WebArena, BrowserGym, OSWorld, AndroidWorld, AppWorld, tau-bench, ToolSandbox, and The Agent Company; domain benchmarks such as HealthBench, FinanceBench, LegalBench, PubMedQA, BioASQ, GPQA, LAB-Bench, ChemBench, SciFact, and Qasper; and process/reward benchmarks such as PRMBench, ProcessBench, RewardBench, and MT-Bench.

For practitioners, the key distinction is evaluation-only versus trainable feedback. A benchmark with hidden tests may evaluate code well but be hard to use as open training data. A public math benchmark may be excellent for history but risky for RLVR if it leaks into prompt sources. A domain benchmark can expose expert reasoning requirements, but the labels may be too expensive or ambiguous to turn into rewards. A live benchmark can improve contamination resistance while complicating reproducibility.

Read benchmark papers by writing down the surface: task source, answer type, judge/verifier, split, refresh policy, public artifacts, and known leakage risk. Then decide whether the benchmark belongs in training, validation, evaluation, or audit only. This page intentionally overlaps with every other category because evaluation is the mirror that reveals whether a data recipe actually worked.

## How to read this category

- Identify what is being measured: final answer, executable code, proof validity, tool task success, expert judgment, process error, reward-model preference, or factuality.
- Check whether the benchmark exposes trainable artifacts or only evaluation prompts and labels.
- Inspect public/private splits, benchmark refresh policy, contamination checks, and hidden-test availability.
- Avoid using benchmark prompts as training data unless the atlas and paper clearly document the split and downstream evaluation risk.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| OpenR1-Math-220k (2025) · 🟡 partial | 2025 | Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields. | linked |
| [HealthBench](https://arxiv.org/abs/2505.08775) (2025) · 🟡 partial | 2025 | Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification. | linked |
| [AbstentionBench](https://arxiv.org/abs/2506.09038) (2025) · 🟡 partial | 2025 | Benchmark for epistemic boundaries and non-answering behavior. | linked |
| [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) (2025) · 🟡 partial | 2025 | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. | linked |
| [Aegis2.0](https://arxiv.org/abs/2501.09004) (2025) · 🟡 partial | 2025 | Safety dataset with risk categories and label provenance. | linked |
| [R2E-Gym](https://arxiv.org/abs/2504.07164) (2025) · 🟡 partial | 2025 | Verifiable SWE environment for reasoning-to-edit tasks. | linked |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) (2023) · 🟡 partial | 2023 | Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning. | linked |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) (2025) · 🟡 partial | 2025 | Math release highlighted for verifier pinning and decontamination. | linked |
| Qwen3-Coder (2025) · 🟡 partial | 2025 | Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release. | linked |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025) · 🟡 partial | 2025 | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. | linked |
| [Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903) (2022) · 🟡 partial | 2022 | Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object. | linked |
| [Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171) (2023) · 🟡 partial | 2023 | Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views. | linked |
| [Math-Shepherd](https://arxiv.org/abs/2312.08935) (2024) · 🟡 partial | 2024 | Monte-Carlo-style process signal reference for step supervision. | linked |
| [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592) (2024) · 🟡 partial | 2024 | Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels. | linked |
| [Leaky Thoughts](https://arxiv.org/abs/2506.15674) (2025) · 🟡 partial | 2025 | Shows reasoning traces can expose private fields. | linked |
| [One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) (2025) · 🟡 partial | 2025 | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. | linked |
| [OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891) (2025) · 🟡 partial | 2025 | Large-scale math reasoning trace release for programmatic verification. | linked |
| [SWE-Gym](https://arxiv.org/abs/2412.21139) (2025) · 🟡 partial | 2025 | Repository-scale training environment showing substrate as data. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 📐 Math, code, and proof benchmarks

- **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [🐙 Code](https://github.com/huggingface/open-r1) · [🤗 Hugging Face](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.
- **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 rlvr, sft · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.17387) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · 📦 data release · ⚖️ judgment required · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.20050) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.
- **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.11456) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · 🧮 programmatic · 🌐 environmental · 🪜 answer level, full episode · 🎯 sft, rlvr · 🟡 partial</sub>
  [🐙 Code](https://github.com/QwenLM/Qwen3-Coder) · [🌐 Project](https://qwenlm.github.io/blog/qwen3-coder/) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · 🏗️ construction recipe · 🧮 programmatic · ⚖️ judgment required · 🪜 answer level, scalar reward · 🎯 rlvr, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.14625) · [🐙 Code](https://github.com/uw-nsl/TinyV) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2312.08935) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Monte-Carlo-style process signal reference for step supervision.
- **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🏗️ construction recipe · 🧮 programmatic · 🔀 mixed · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2406.06592) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.
- **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.16891) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.

### ⚖️ Domain, process, and reward benchmarks

- **[HealthBench](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · ⚖️ judgment required · 🪜 scalar reward, answer level · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.08775) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification.

### 📚 Additional local seeds

- **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · ⚖️ judgment required · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.09038) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Benchmark for epistemic boundaries and non-answering behavior.
- **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · ⚖️ judgment required · 🪜 scalar reward · 🎯 safety alignment, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.09004) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Safety dataset with risk categories and label provenance.
- **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.07164) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.
- **[Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903)**
  <sub>2022 · NeurIPS · 🧭 survey background · ❔ unknown · 🪜 answer level · 🎯 evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2201.11903) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object.
- **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 🧭 survey background · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 evaluation, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.11171) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views.
- **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · ⚖️ judgment required · 🪜 step level · 🎯 evaluation, safety alignment · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.15674) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Shows reasoning traces can expose private fields.
- **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · ⚖️ judgment required · 🪜 scalar reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.08794) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.21139) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- **[Spurious Rewards](https://arxiv.org/abs/2506.10947)**
  <sub>2025 · arXiv · 🧯 audit failure · 📈 scaling study · 🧮 programmatic · 🪜 scalar reward · 🎯 rlvr, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.10947) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Reward-signal audit for spurious behavior in RLVR.
- **[Subliminal Learning](https://arxiv.org/abs/2507.14805)**
  <sub>2025 · arXiv · 🧯 audit failure · 🔀 mixed · 🪜 answer level · 🎯 distillation, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.14805) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lineage-risk study for hidden trait transfer in synthetic data.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2407.18901) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2404.07972) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · 🧪 verifier reward · ⚖️ judgment required · 🧮 programmatic · 🪜 step level · 🎯 evaluation, process supervision · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.06559) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · ⚖️ judgment required · 🔀 mixed · 🪜 pairwise preference, scalar reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2403.13787) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · 🪜 process supervision · ⚖️ judgment required · 🔀 mixed · 🪜 step level, process reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.03124) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **VisualWebArena: Evaluating multimodal agents on realistic visual web tasks**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AndroidWorld: A dynamic benchmarking environment for autonomous agents](https://arxiv.org/abs/2405.14573)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2405.14573) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ToolSandbox: A stateful, conversational, interactive evaluation benchmark for tool use**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2307.13854) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **FinanceBench: A benchmark for financial question answering**
  <sub>2023 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **tau-bench: A benchmark for tool-agent-user interaction in real-world domains**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 state action level · 🎯 sft, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2307.16789) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LiveBench: A challenging, contamination-free benchmark for large language models**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **HealthBench: Evaluating large language models towards improved human health**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Why we no longer evaluate on SWE-bench Verified**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[BrowserGym: A gym environment for web agents](https://arxiv.org/abs/2412.05467)**
  <sub>2024 · arXiv · 🛠️ infrastructure · 🌐 agent environment · 🧰 benchmark · 🌐 environmental · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.05467) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ChemBench: A benchmark for evaluating large language models in chemistry**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LegalBench**
  <sub>2023 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SWE-bench: Can language models resolve real-world GitHub issues?**
  <sub>2023 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **GSM-Symbolic**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Introducing SWE-bench Verified**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **RewardBench 2**
  <sub>2026 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SciCode: A benchmark for scientific code generation and reasoning**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **The Agent Company: Benchmarking and analyzing agent work in enterprise-like environments**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Terminal-Bench: A benchmark and task environment for terminal agents**
  <sub>2026 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · 🏗️ construction recipe · 🔀 mixed · 🧮 programmatic · 🪜 answer level, full episode · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.13585) · [🐙 Code](https://github.com/MiniMax-AI/MiniMax-M1) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · arXiv preprint arXiv:2505.20411 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.20411) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · 🧰 benchmark · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2503.02951) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance**
  <sub>2021 · ACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **miniF2F: A cross-system benchmark for formal olympiad-level mathematics**
  <sub>2021 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Judging LLM-as-a-judge with MT-Bench and Chatbot Arena**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **BRIGHT: A realistic and challenging benchmark for reasoning-intensive retrieval**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ChemLLMBench and chemistry reasoning evaluations for language models**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MegaScience: A benchmark and data resource for scientific reasoning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2410.13210) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[LastingBench: Defend Benchmarks Against Knowledge Leakage](https://arxiv.org/abs/2506.21614)**
  <sub>2025 · arXiv preprint arXiv:2506.21614 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.21614) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 🔀 mixed · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.13124) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Autorubric: Unifying Rubric-based LLM Evaluation](https://arxiv.org/abs/2603.00077)**
  <sub>2026 · arXiv preprint arXiv:2603.00077 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2603.00077) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.12413) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **PubMedQA: A dataset for biomedical research question answering**
  <sub>2019 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Measuring coding challenge competence with APPS**
  <sub>2021 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Measuring mathematical problem solving with the MATH dataset**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **GPQA**
  <sub>2023 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **API-Bank: A benchmark for tool-augmented LLMs**
  <sub>2023 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **LAB-Bench: Measuring capabilities of language models for biology research**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SWE-Gym: Advancing software engineering agents with training and evaluation environments**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **WorkArena: How capable are web agents at solving common knowledge work tasks?**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MCP-Universe: Tool and environment infrastructure for agent evaluation and training**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique](https://arxiv.org/abs/2507.09075)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · 📈 scaling study · 🧮 programmatic · 🔀 mixed · 🪜 answer level, scalar reward · 🎯 sft, distillation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.09075) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **CaseHOLD: A dataset for legal holding statement prediction**
  <sub>2021 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ContractNLI: A dataset for document-level natural language inference for contracts**
  <sub>2021 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Evaluating large language models trained on code**
  <sub>2021 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Qasper: A dataset of information-seeking questions and answers over scientific research papers**
  <sub>2021 · NAACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **TruthfulQA**
  <sub>2022 · ACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Mind2Web: Towards a generalist agent for the web**
  <sub>2023 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- Which benchmarks should be protected from training reuse, and which can safely serve as verifier-bearing training sources?
- How should benchmark maintainers publish contamination audits without exposing hidden-test content?
- What evaluation surfaces best predict industrial post-training usefulness rather than leaderboard specialization?
- How can benchmark cards encode refresh policy, hidden tests, license, and train/eval separation concisely?

## Related docs

- [02_verifier_anchored_taxonomy.md](../docs/02_verifier_anchored_taxonomy.md)
- [04_data_quality.md](../docs/04_data_quality.md)
- [08_scaling_and_test_time_compute.md](../docs/08_scaling_and_test_time_compute.md)
- [09_audit_and_failure_modes.md](../docs/09_audit_and_failure_modes.md)

## Related cards

- [math_reasoning_release_card.md](../cards/examples/math_reasoning_release_card.md)
- [agent_environment_release_card.md](../cards/examples/agent_environment_release_card.md)
- [verifier_card_template.md](../cards/verifier_card_template.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
