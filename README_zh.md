# 🌟 Awesome LLM Reasoning Data

> 面向大模型后训练推理数据的可检索、可验证、学习优先的 atlas：覆盖数据集、验证器、奖励信号、构造 recipe、benchmark、前沿模型报告与审计字段。

[论文：A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113)

## 这个项目是什么？

这个仓库关注推理模型后训练背后的数据层，不只是收集论文标题，而是尽量回答：

`任务/上下文 -> 推理轨迹/动作 -> 答案/产物 -> 验证器/奖励/裁判/环境 -> 元数据`

读者可以用它快速找到官方论文链接，理解每篇工作暴露的数据对象、反馈契约、训练用途和审计风险。

## 快速入口

| 我想要... | 入口 |
|---|---|
| 快速理解领域 | [docs/00_start_here.md](docs/00_start_here.md) |
| 找论文地图 | [papers/README.md](papers/README.md) |
| 看可搜索网页 | [docs/index.html](docs/index.html) |
| 看卡片库 | [cards/README.md](cards/README.md) |
| 看链接覆盖率 | [reports/link_coverage.md](reports/link_coverage.md) |
| 贡献论文或卡片 | [CONTRIBUTING.md](CONTRIBUTING.md) |

## 当前快照

| 指标 | 数量 |
|---|---:|
| 总条目 | 271 |
| 已验证官方主链接 | 124 |
| 有 paper/arXiv/venue/DOI 链接 | 124 |
| 卡片 | 54 |
| 仍需搜索 | 147 |

## Starter Pack：20 篇必读

| # | Work | Link | Card | Why it matters |
|---:|---|---|---|---|
| 1 | Datasheets for datasets | [Paper](https://arxiv.org/abs/1803.09010) | [Card](cards/releases/datasheets-for-datasets.md) | Reasoning-data releases need the same discipline: source mixture, split policy, lineage, licensing, and known limitations should be visible before reuse. |
| 2 | Data statements for natural language processing | [Paper](https://aclanthology.org/Q18-1041/) | [Card](cards/releases/data-statements-for-natural-language-processing.md) | It gives the atlas a documentation baseline for asking what a reasoning dataset discloses about source population, provenance, and generalization limits. |
| 3 | Training language models to follow instructions with human feedback | [Paper](https://arxiv.org/abs/2203.02155) | [Card](cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) | InstructGPT/RLHF reference for demonstrations, preference comparisons, reward models, and post-training behavior shaping. |
| 4 | Chain-of-thought prompting elicits reasoning in large language models | [Paper](https://arxiv.org/abs/2201.11903) | [Card](cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) | Foundational chain-of-thought prompting paper; useful for understanding traces as elicited reasoning behavior before trace data became a release object. |
| 5 | Training verifiers to solve math word problems | [Paper](https://arxiv.org/abs/2110.14168) | [Card](cards/verifiers/training-verifiers-to-solve-math-word-problems.md) | It is an early anchor for treating math reasoning data as answer-level problems plus a verifier/reward selection surface. |
| 6 | STaR: Bootstrapping reasoning with reasoning | [Paper](https://arxiv.org/abs/2203.14465) | [Card](cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) | Self-training recipe that turns generated rationales into new supervision, connecting prompting, filtering, and iterative reasoning data construction. |
| 7 | Self-Instruct: Aligning language models with self-generated instructions | [Paper](https://arxiv.org/abs/2212.10560) | [Card](cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) | Instruction-generation recipe showing how synthetic prompts, filtering, and tuning data become an alignment data pipeline. |
| 8 | Direct preference optimization: Your language model is secretly a reward model | [Paper](https://arxiv.org/abs/2305.18290) | [Card](cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) | Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step. |
| 9 | Let's Verify Step by Step | [Paper](https://arxiv.org/abs/2305.20050) | [Card](cards/verifiers/prm800k.md) | Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning. |
| 10 | GSM8K: Grade School Math 8K | [Paper](https://arxiv.org/abs/2110.14168) | [Card](cards/benchmarks/gsm8k-grade-school-math-8k.md) | GSM8K is the dataset anchor for early verifier-based math reasoning and remains a common sanity check for post-training reasoning data. |
| 11 | Measuring mathematical problem solving with the MATH dataset | [Paper](https://arxiv.org/abs/2103.03874) | [Card](cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) | MATH became a core answer-verifiable reasoning surface for evaluating and training math reasoning behavior. |
| 12 | HumanEval: Hand-Written Evaluation Set | [Paper](https://arxiv.org/abs/2107.03374) | [Card](cards/benchmarks/humaneval-hand-written-evaluation-set.md) | HumanEval made executable unit tests a standard verifier for code reasoning, pass@k evaluation, and later code-data recipes. |
| 13 | SWE-bench: Can language models resolve real-world GitHub issues? | [Paper](https://arxiv.org/abs/2310.06770) | [Card](cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) | SWE-bench turns real GitHub issue fixing into an environmental reasoning-data object with codebase state, patch actions, and test-backed outcomes. |
| 14 | RewardBench: Evaluating Reward Models for Language Modeling | [Paper](https://arxiv.org/abs/2403.13787) | [Card](cards/verifiers/rewardbench.md) | Reward-model benchmark for understanding where preference/judge signals generalize and where they fail under distribution shift. |
| 15 | HealthBench | [Paper](https://arxiv.org/abs/2505.08775) | [Card](cards/verifiers/healthbench.md) | Health-domain benchmark where rubric/judgment design matters more than simple exact-match verification. |
| 16 | LiveBench: A challenging, contamination-free benchmark for large language models | [Paper](https://arxiv.org/abs/2406.19314) | [Card](cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) | It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items. |
| 17 | OpenThoughts: Data recipes for reasoning models | [Paper](https://arxiv.org/abs/2506.04178) | [Card](cards/releases/openthoughts.md) | Open reasoning-data recipe with controlled ablations around question sourcing, filtering, and answer generation. |
| 18 | DeepSeek-R1 | [Paper](https://arxiv.org/abs/2501.12948) | [Card](cards/recipes/deepseek_r1.md) | Frontier reasoning report central to public RLVR and reasoning post-training recipes. |
| 19 | s1: Simple Test-Time Scaling | [Paper](https://arxiv.org/abs/2501.19393) | [Card](cards/releases/s1.md) | Small-pool and test-time scaling reference. |
| 20 | A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | [Paper](https://arxiv.org/abs/2504.07086) | [Card](cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | Official paper link is pinned; curator should next add a paper-specific reasoning-data summary and audit note. |

## Curation Levels

| Level | Meaning |
|---|---|
| `L0_seeded` | Only a title or bibliography seed is known. |
| `L1_link_verified` | Official paper, arXiv, venue, or DOI link is pinned. |
| `L2_artifact_verified` | Code, data, project, or model artifact links are also checked. |
| `L3_summary_ready` | One-line summary and why-it-matters rationale are present. |
| `L4_carded` | A local card explains data object, verifier, use, and audit fields. |
| `L5_audit_ready` | The card includes concrete risks, missing fields, and audit questions. |

## 引用

如果这个 atlas 对你的相关工作、数据构造、验证器设计或 reading group 有帮助，请引用配套论文并链接本仓库。引用信息见 [CITATION.cff](CITATION.cff)。
