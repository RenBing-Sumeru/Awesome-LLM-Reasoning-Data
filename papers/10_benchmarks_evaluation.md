# 🧰 Benchmarks and Evaluation Surfaces

> Math/code/live/agent/domain/process/reward benchmarks organized by what they measure and what feedback they can support.

## What this category means

Use this page to tell evaluation surfaces apart from training data, and to understand when a benchmark can become a verifier, reward, or environment.

Benchmarks are not just scoreboards in a reasoning-data repository. They define task distributions, answer formats, hidden tests, judge prompts, and sometimes executable environments. A benchmark can become a filter for construction, a verifier for RLVR, a source of prompts, a reward-model evaluation suite, or a contamination risk. The same artifact can be useful and dangerous depending on how it is reused.

This category reorganizes overlapping papers by evaluation surface: math and code benchmarks such as GSM8K, MATH, FrontierMath, LiveCodeBench, BigCodeBench, HumanEval, APPS, SciCode, and KodCode; live and contamination-aware benchmarks such as LiveBench, LastingBench, HLE, GSM-Symbolic, and SWE-bench lifecycle work; agent benchmarks such as WebArena, BrowserGym, OSWorld, AndroidWorld, AppWorld, tau-bench, ToolSandbox, and The Agent Company; domain benchmarks such as HealthBench, FinanceBench, LegalBench, PubMedQA, BioASQ, GPQA, LAB-Bench, ChemBench, SciFact, and Qasper; and process/reward benchmarks such as PRMBench, ProcessBench, RewardBench, and MT-Bench.

For practitioners, the key distinction is evaluation-only versus trainable feedback. A benchmark with hidden tests may evaluate code well but be hard to use as open training data. A public math benchmark may be excellent for history but risky for RLVR if it leaks into prompt sources. A domain benchmark can expose expert reasoning requirements, but the labels may be too expensive or ambiguous to turn into rewards. A live benchmark can improve contamination resistance while complicating reproducibility.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| Big-Math-RL-Verified | 2025 | arXiv | [Paper](https://arxiv.org/abs/2502.17387) · [Card](../cards/releases/big_math.md) | Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering. |
| DeepMath-103K | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md) | Math release highlighted for verifier pinning and decontamination. |
| KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding | 2025 | ACL Findings | [Paper](https://arxiv.org/abs/2503.02951) · [Card](../cards/releases/kodcode.md) | Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR. |
| NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions | 2025 | arXiv | [Paper](https://arxiv.org/abs/2502.13124) · [Card](../cards/releases/naturalreasoning.md) | Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens. |
| OpenMathReasoning: A large-scale dataset of math reasoning traces | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.16891) · [Card](../cards/releases/openmathreasoning.md) | Large-scale math reasoning trace release for programmatic verification. |
| SWE-Gym | 2025 | arXiv | [Paper](https://arxiv.org/abs/2412.21139) · [Card](../cards/agents/swe_gym.md) | Repository-scale training environment showing substrate as data. |
| Let's Verify Step by Step | 2023 | arXiv | [Paper](https://arxiv.org/abs/2305.20050) · [Card](../cards/verifiers/prm800k.md) | Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning. |
| ToolLLM: Facilitating large language models to master 16000+ real-world APIs | 2023 | ICLR | [Paper](https://arxiv.org/abs/2307.16789) · [Card](../cards/agents/toolllm_toolbench.md) | Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback. |
| GSM8K: Grade School Math 8K | 2021 | arXiv / OpenAI dataset | [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../cards/benchmarks/gsm8k-grade-school-math-8k.md) | GSM8K is the dataset anchor for early verifier-based math reasoning and remains a common sanity check for post-training reasoning data. |
| HumanEval: Hand-Written Evaluation Set | 2021 | arXiv / OpenAI dataset | [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../cards/benchmarks/humaneval-hand-written-evaluation-set.md) | HumanEval made executable unit tests a standard verifier for code reasoning, pass@k evaluation, and later code-data recipes. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Autorubric: Unifying Rubric-based LLM Evaluation](https://arxiv.org/abs/2603.00077)**
  <sub>2026 · arXiv preprint arXiv:2603.00077 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2603.00077)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[Soft Contamination Means Benchmarks Test Shallow Generalization](https://arxiv.org/abs/2602.12413)**
  <sub>2026 · arXiv preprint arXiv:2602.12413 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2602.12413)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs](https://arxiv.org/abs/2410.13210)**
  <sub>2025 · arXiv preprint arXiv:2410.13210 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2410.13210)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[LastingBench: Defend Benchmarks Against Knowledge Leakage](https://arxiv.org/abs/2506.21614)**
  <sub>2025 · arXiv preprint arXiv:2506.21614 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.21614)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.
- 🧭 **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · arXiv preprint arXiv:2505.20411 · 🧭 survey background · unknown · unknown · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2505.20411)
  _Why it matters:_ Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note.

### 🧰 Benchmark

- 🧰 **[AbstentionBench](https://arxiv.org/abs/2506.09038)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧯 audit failure · judgment required · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2506.09038)
  _Why it matters:_ Benchmark for epistemic boundaries and non-answering behavior.
- 🧰 **[HealthBench](https://arxiv.org/abs/2505.08775)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2505.08775) · [Card](../cards/verifiers/healthbench.md)
  _Why it matters:_ Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification.
- 🧰 **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2501.03124) · [Card](../cards/verifiers/prmbench.md)
  _Why it matters:_ Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.
- 🧰 **[AndroidWorld: A dynamic benchmarking environment for autonomous agents](https://arxiv.org/abs/2405.14573)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.14573) · [Card](../cards/agents/androidworld.md)
  _Why it matters:_ Android tasks turn mobile UI state and action histories into evaluable agent trajectories.
- 🧰 **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.18901) · [Card](../cards/agents/appworld.md)
  _Why it matters:_ Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.
- 🧰 **[LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314)**
  <sub>2024 · arXiv · 🧰 benchmark · 🧯 audit failure · programmatic · mixed · evaluation · audit · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2406.19314) · [OpenReview](https://openreview.net/forum?id=sKYHBTAxVa) · [Project](https://livebench.ai/) · [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
  _Why it matters:_ It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.
- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972) · [Card](../cards/agents/osworld.md)
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- 🧰 **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · judgment required · programmatic · evaluation · process supervision · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.06559) · [Card](../cards/verifiers/processbench.md)
  _Why it matters:_ Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.
- 🧰 **[RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🧪 verifier reward · judgment required · mixed · evaluation · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2403.13787) · [Card](../cards/verifiers/rewardbench.md)
  _Why it matters:_ Reward-model benchmark for understanding where preference/judge signals generalize and where they fail under distribution shift.
- 🧰 **[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.06770) · [OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [Code](https://github.com/swe-bench/SWE-bench) · [Project](https://www.swebench.com/original.html) · [Card](../cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)
  _Why it matters:_ SWE-bench turns real GitHub issue fixing into an environmental reasoning-data object with codebase state, patch actions, and test-backed outcomes.
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.13854) · [Card](../cards/agents/webarena.md)
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.
- 🧰 **[Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval)
  _Why it matters:_ HumanEval made unit-test-backed code generation a standard programmatic verifier surface for reasoning-capable models.
- 🧰 **[GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math) · [HF](https://huggingface.co/datasets/openai/gsm8k) · [Card](../cards/benchmarks/gsm8k-grade-school-math-8k.md)
  _Why it matters:_ GSM8K is the dataset anchor for early verifier-based math reasoning and remains a common sanity check for post-training reasoning data.
- 🧰 **[HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374)**
  <sub>2021 · arXiv / OpenAI dataset · 🧰 benchmark · 📦 data release · programmatic · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2107.03374) · [Code](https://github.com/openai/human-eval) · [Card](../cards/benchmarks/humaneval-hand-written-evaluation-set.md)
  _Why it matters:_ HumanEval made executable unit tests a standard verifier for code reasoning, pass@k evaluation, and later code-data recipes.
- 🧰 **[Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874)**
  <sub>2021 · NeurIPS Datasets and Benchmarks · 🧰 benchmark · 📦 data release · programmatic · evaluation · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2103.03874) · [Code](https://github.com/hendrycks/math) · [Card](../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md)
  _Why it matters:_ MATH became a core answer-verifiable reasoning surface for evaluating and training math reasoning behavior.

### 📦 Data Release

- 📦 **[Aegis2.0](https://arxiv.org/abs/2501.09004)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · judgment required · safety alignment · evaluation · L3_summary_ready</sub>
  [Paper](https://arxiv.org/abs/2501.09004)
  _Why it matters:_ Safety dataset with risk categories and label provenance.
- 📦 **[Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387)**
  <sub>2025 · arXiv · 📦 data release · 🧰 benchmark · programmatic · rlvr · sft · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.17387) · [Card](../cards/releases/big_math.md)
  _Why it matters:_ Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.
- 📦 **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.11456) · [Card](../cards/releases/deepmath_103k.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- 📦 **[KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](https://arxiv.org/abs/2503.02951)**
  <sub>2025 · ACL Findings · 📦 data release · 🏗️ construction recipe · programmatic · sft · rlvr · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2503.02951) · [Card](../cards/releases/kodcode.md)
  _Why it matters:_ Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.
- 📦 **[NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](https://arxiv.org/abs/2502.13124)**
  <sub>2025 · arXiv · 📦 data release · 🏗️ construction recipe · mixed · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2502.13124) · [Card](../cards/releases/naturalreasoning.md)
  _Why it matters:_ Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.
- 📦 **[OpenMathReasoning: A large-scale dataset of math reasoning traces](https://arxiv.org/abs/2504.16891)**
  <sub>2025 · arXiv · 📦 data release · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.16891) · [Card](../cards/releases/openmathreasoning.md)
  _Why it matters:_ Large-scale math reasoning trace release for programmatic verification.
- 📦 **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.21139) · [Card](../cards/agents/swe_gym.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789) · [Card](../cards/agents/toolllm_toolbench.md)
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.

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

### 🌐 Agent Environment

- 🌐 **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.07164) · [Card](../cards/agents/r2e_gym.md)
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.

### 🪜 Process Supervision

- 🪜 **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · programmatic · process supervision · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2312.08935) · [Card](../cards/verifiers/math_shepherd.md)
  _Why it matters:_ Monte-Carlo-style process signal reference for step supervision.
- 🪜 **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · judgment required · programmatic · process supervision · reward modeling · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2305.20050) · [Card](../cards/verifiers/prm800k.md)
  _Why it matters:_ Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.

### ⚠️ Needs search or metadata

- 🧭 **RewardBench 2**
  <sub>2026 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Terminal-Bench: A benchmark and task environment for terminal agents**
  <sub>2026 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ChemLLMBench and chemistry reasoning evaluations for language models**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **HealthBench: Evaluating large language models towards improved human health**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **MCP-Universe: Tool and environment infrastructure for agent evaluation and training**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **MegaScience: A benchmark and data resource for scientific reasoning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **The Agent Company: Benchmarking and analyzing agent work in enterprise-like environments**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Why we no longer evaluate on SWE-bench Verified**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **BRIGHT: A realistic and challenging benchmark for reasoning-intensive retrieval**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions**
  <sub>2024 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ChemBench: A benchmark for evaluating large language models in chemistry**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **GSM-Symbolic**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Introducing SWE-bench Verified**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **LAB-Bench: Measuring capabilities of language models for biology research**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **LiveCodeBench: Holistic and contamination-free evaluation of large language models for code**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **SWE-Gym: Advancing software engineering agents with training and evaluation environments**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **SciCode: A benchmark for scientific code generation and reasoning**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ToolSandbox: A stateful, conversational, interactive evaluation benchmark for tool use**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧰 **VisualWebArena: Evaluating multimodal agents on realistic visual web tasks**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L0_seeded</sub>
  needs_search
  _Why it matters:_ Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.
- 🧭 **WorkArena: How capable are web agents at solving common knowledge work tasks?**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **tau-bench: A benchmark for tool-agent-user interaction in real-world domains**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **API-Bank: A benchmark for tool-augmented LLMs**
  <sub>2023 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **FinanceBench: A benchmark for financial question answering**
  <sub>2023 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **GPQA**
  <sub>2023 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Judging LLM-as-a-judge with MT-Bench and Chatbot Arena**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **LegalBench**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Mind2Web: Towards a generalist agent for the web**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **TruthfulQA**
  <sub>2022 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **CaseHOLD: A dataset for legal holding statement prediction**
  <sub>2021 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **ContractNLI: A dataset for document-level natural language inference for contracts**
  <sub>2021 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Measuring coding challenge competence with APPS**
  <sub>2021 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **Qasper: A dataset of information-seeking questions and answers over scientific research papers**
  <sub>2021 · NAACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance**
  <sub>2021 · ACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **miniF2F: A cross-system benchmark for formal olympiad-level mathematics**
  <sub>2021 · ICLR · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.
- 🧭 **PubMedQA: A dataset for biomedical research question answering**
  <sub>2019 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Seeded from local BibTeX for later atlas classification; needs curator review.

## What to audit

- What does the benchmark measure and what feedback can it support?
- Is scoring objective, human-judged, LLM-judged, or mixed?
- How does the benchmark handle refresh, contamination, and hidden tests?

## Related cards

- [Big-Math-RL-Verified](../cards/releases/big_math.md)
- [DeepMath-103K](../cards/releases/deepmath_103k.md)
- [HealthBench](../cards/verifiers/healthbench.md)
- [KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding](../cards/releases/kodcode.md)
- [NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions](../cards/releases/naturalreasoning.md)
- [One Token to Fool LLM-as-a-Judge](../cards/verifiers/one_token_to_fool_judge.md)
- [OpenMathReasoning: A large-scale dataset of math reasoning traces](../cards/releases/openmathreasoning.md)
- [PRMBench: A fine-grained and challenging benchmark for process-level reward models](../cards/verifiers/prmbench.md)
- [R2E-Gym](../cards/agents/r2e_gym.md)
- [SWE-Gym](../cards/agents/swe_gym.md)
- [Spurious Rewards](../cards/verifiers/spurious_rewards.md)
- [AndroidWorld: A dynamic benchmarking environment for autonomous agents](../cards/agents/androidworld.md)
- [AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](../cards/agents/appworld.md)
- [LiveBench: A challenging, contamination-free benchmark for large language models](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md)
- [Math-Shepherd](../cards/verifiers/math_shepherd.md)
- [OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](../cards/agents/osworld.md)
- [ProcessBench: Identifying Process Errors in Mathematical Reasoning](../cards/verifiers/processbench.md)
- [RewardBench: Evaluating Reward Models for Language Modeling](../cards/verifiers/rewardbench.md)

## Open gaps

- Which benchmarks should be protected from training reuse, and which can safely serve as verifier-bearing training sources?
- How should benchmark maintainers publish contamination audits without exposing hidden-test content?
- What evaluation surfaces best predict industrial post-training usefulness rather than leaderboard specialization?
- How can benchmark cards encode refresh policy, hidden tests, license, and train/eval separation concisely?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
