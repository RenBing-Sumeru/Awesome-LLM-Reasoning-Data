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
| 1 | Datasheets for datasets | [Paper](https://arxiv.org/abs/1803.09010) | [Card](cards/releases/datasheets-for-datasets.md) | It gives reasoning-data releases a minimum disclosure standard before anyone reuses prompts, traces, labels, rewards, or benchmark items. |
| 2 | Data statements for natural language processing | [Paper](https://aclanthology.org/Q18-1041/) | [Card](cards/releases/data-statements-for-natural-language-processing.md) | Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization. |
| 3 | Training language models to follow instructions with human feedback | [Paper](https://arxiv.org/abs/2203.02155) | [Card](cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) | It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models. |
| 4 | Chain-of-thought prompting elicits reasoning in large language models | [Paper](https://arxiv.org/abs/2201.11903) | [Card](cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) | It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets. |
| 5 | Training verifiers to solve math word problems | [Paper](https://arxiv.org/abs/2110.14168) | [Card](cards/verifiers/training-verifiers-to-solve-math-word-problems.md) | It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows. |
| 6 | STaR: Bootstrapping reasoning with reasoning | [Paper](https://arxiv.org/abs/2203.14465) | [Card](cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) | It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering. |
| 7 | Self-Instruct: Aligning language models with self-generated instructions | [Paper](https://arxiv.org/abs/2212.10560) | [Card](cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) | It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion. |
| 8 | Direct preference optimization: Your language model is secretly a reward model | [Paper](https://arxiv.org/abs/2305.18290) | [Card](cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) | It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization. |
| 9 | Let's Verify Step by Step | [Paper](https://arxiv.org/abs/2305.20050) | [Card](cards/verifiers/prm800k.md) | It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation. |
| 10 | GSM8K: Grade School Math 8K | [Paper](https://arxiv.org/abs/2110.14168) | [Card](cards/benchmarks/gsm8k-grade-school-math-8k.md) | It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training. |
| 11 | Measuring mathematical problem solving with the MATH dataset | [Paper](https://arxiv.org/abs/2103.03874) | [Card](cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) | MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems. |
| 12 | HumanEval: Hand-Written Evaluation Set | [Paper](https://arxiv.org/abs/2107.03374) | [Card](cards/benchmarks/humaneval-hand-written-evaluation-set.md) | It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes. |
| 13 | SWE-bench: Can language models resolve real-world GitHub issues? | [Paper](https://arxiv.org/abs/2310.06770) | [Card](cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) | It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes. |
| 14 | RewardBench: Evaluating Reward Models for Language Modeling | [Paper](https://arxiv.org/abs/2403.13787) | [Card](cards/verifiers/rewardbench.md) | It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences. |
| 15 | HealthBench | [Paper](https://arxiv.org/abs/2505.08775) | [Card](cards/verifiers/healthbench.md) | It is a high-stakes example of judgment-required reasoning data where rubric design matters more than exact-match scoring. |
| 16 | LiveBench: A challenging, contamination-free benchmark for large language models | [Paper](https://arxiv.org/abs/2406.19314) | [Card](cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) | It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items. |
| 17 | OpenThoughts: Data recipes for reasoning models | [Paper](https://arxiv.org/abs/2506.04178) | [Card](cards/releases/openthoughts.md) | It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance. |
| 18 | DeepSeek-R1 | [Paper](https://arxiv.org/abs/2501.12948) | [Card](cards/recipes/deepseek_r1.md) | It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior. |
| 19 | s1: Simple Test-Time Scaling | [Paper](https://arxiv.org/abs/2501.19393) | [Card](cards/releases/s1.md) | It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance. |
| 20 | A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | [Paper](https://arxiv.org/abs/2504.07086) | [Card](cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) | It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains. |

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
