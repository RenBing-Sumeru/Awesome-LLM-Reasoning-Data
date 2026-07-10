# 🔁 Rollout, Search, and Test-Time Trace Data

> Multiple rollouts, search trees, best-of-N samples, self-consistency traces, MCTS records, selected/rejected candidates, and test-time compute logs.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=rollout_search_test_time_trace_data&mode=find_papers)
> Try: `What should I read first for 🔁 Rollout / Search / TTC Trace?`
> Try: `Compare the data objects and verifier types in 🔁 Rollout / Search / TTC Trace.`
> Try: `Generate an audit checklist for 🔁 Rollout / Search / TTC Trace.`

## 1. What This Track Studies

Use this track when the important data is not one answer but a set of sampled attempts, search paths, selector scores, or inference-budget traces.

A growing part of reasoning data is produced by search. A model samples many attempts, a verifier or value function scores them, and the system keeps accepted candidates, sometimes with rejected traces, budgets, tree nodes, or pass-rate bands. These records connect data construction, process supervision, RLVR, and test-time compute.

This track exists because search traces are often hidden inside other categories. If a paper relies on best-of-N, self-consistency, MCTS, rejection sampling, long-to-short reasoning, or repeated sampling, contributors should record the rollout budget and selector, not just the final chosen answer.

For curation, the most important audit question is attribution: did performance improve because of better data, more samples, a stronger verifier, a different optimizer, or a larger inference budget?

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🎲 Multiple rollouts / best-of-N | sets of sampled attempts and selected accepted answers | only accepted traces are visible |
| 🌳 Search trees / MCTS | tree search, MCTS, verifier-guided search, and path selection | tree policy or value model is hidden |
| 🔎 Rejection sampling traces | accepted and rejected candidates produced during filtering | rejected examples are not released |
| 🧠 Self-consistency / repeated sampling | vote-based or agreement-based reasoning from repeated samples | sampling budget is not comparable |
| ⏱️ Test-time compute logs | thinking budgets, inference-time scaling, and runtime search traces | training and inference budget effects are conflated |
| ✂️ Long2short / distill-from-search | using long search traces to train shorter or cheaper behavior | teacher search artifacts become hidden data lineage |

### Contents

- [🎲 Multiple rollouts / best-of-N](#multiple-rollouts-best-of-n)
- [🌳 Search trees / MCTS](#search-trees-mcts)
- [🔎 Rejection sampling traces](#rejection-sampling-traces)
- [🧠 Self-consistency / repeated sampling](#self-consistency-repeated-sampling)
- [⏱️ Test-time compute logs](#test-time-compute-logs)
- [✂️ Long2short / distill-from-search](#long2short-distill-from-search)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314) | 2024 | [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024) | Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks. | Dense process-based verifier reward models plus answer-level evaluation. | Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution. |
| [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171) | 2023 | [Paper](https://arxiv.org/abs/2203.11171) · [DOI](https://doi.org/10.48550/arXiv.2203.11171) · [Paper Card Source](../../paper_cards/sources/self-consistency-chain-of-thought-2023) | Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer.; process: sample index, chain-of-thought path, answer extraction; Repeated inference sampling over answer-verifiable and judgment-required reasoning tasks. | Answer agreement and final-answer checking act as an implicit verifier. | Top-conference paper that turns repeated sampled reasoning paths into a simple test-time compute scaling primitive. |
| [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601) | 2023 | [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm) · [Paper Card Source](../../paper_cards/sources/tree-of-thoughts-2023) | Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units. | Self-evaluation, task-specific checks, and final outcome scoring. | Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects. |

## 5. Full Paper List

### <a id="multiple-rollouts-best-of-n"></a>🎲 Multiple rollouts / best-of-N

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="search-trees-mcts"></a>🌳 Search trees / MCTS

- 📈 **[Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601)**
  <sub>2023 · NeurIPS 2023 · 📈 scaling study · 🏗️ construction recipe · judgment required · mixed · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm) · [Paper Card Source](../../paper_cards/sources/tree-of-thoughts-2023)
  _Data object:_ Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units.
  _Feedback / verifier:_ Self-evaluation, task-specific checks, and final outcome scoring.
  _Recipe signal:_ teacher: Task instructions and final evaluators.; generator: Policy model expands tree nodes into candidate thoughts.
  _Audit focus:_ Value estimates may be prompt-sensitive., Search budget can dominate model ranking., Small task suites can overfit scaffolds.
  _Why it matters:_ Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.

### <a id="rejection-sampling-traces"></a>🔎 Rejection sampling traces

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="self-consistency-repeated-sampling"></a>🧠 Self-consistency / repeated sampling

- 📈 **[Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR 2023 · 📈 scaling study · 🏗️ construction recipe · judgment required · mixed · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2203.11171) · [DOI](https://doi.org/10.48550/arXiv.2203.11171) · [Paper Card Source](../../paper_cards/sources/self-consistency-chain-of-thought-2023)
  _Data object:_ Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer.; process: sample index, chain-of-thought path, answer extraction; Repeated inference sampling over answer-verifiable and judgment-required reasoning tasks.
  _Feedback / verifier:_ Answer agreement and final-answer checking act as an implicit verifier.
  _Recipe signal:_ teacher: Few-shot chain-of-thought exemplars and benchmark answer keys.; generator: Policy model generates diverse traces at inference time.
  _Audit focus:_ More samples can hide answer-extraction bias., Majority vote can amplify a common wrong shortcut., Sampling budget may be incomparable across papers.
  _Why it matters:_ Top-conference paper that turns repeated sampled reasoning paths into a simple test-time compute scaling primitive.

### <a id="test-time-compute-logs"></a>⏱️ Test-time compute logs

- 📈 **[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314)**
  <sub>2024 · arXiv · 📈 scaling study · 🧪 verifier reward · mixed · judgment required · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
  _Data object:_ Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks.
  _Feedback / verifier:_ Dense process-based verifier reward models plus answer-level evaluation.
  _Recipe signal:_ teacher: Benchmark answers and trained verifier reward models provide selection signal.; generator: Policy model generates multiple candidate traces under a budget.
  _Audit focus:_ Verifier quality can dominate the measured scaling curve., Difficulty estimation can leak benchmark-specific assumptions., More samples can be mistaken for more unique data.
  _Why it matters:_ Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution.

### <a id="long2short-distill-from-search"></a>✂️ Long2short / distill-from-search

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- Are accepted and rejected rollouts both visible enough to audit selector behavior?
- Is pass@k, search budget, sampling temperature, verifier score, or tree-search policy disclosed?
- Can gains be attributed to data, search, verifier, or inference budget rather than a hidden scaffold?

## 7. Open Problems

- How much of a reasoning-data gain comes from search rather than the final dataset?
- Should open releases include rejected rollouts and search trees by default?
- How can pass@k and training-data scale be compared fairly?
- Can selector behavior be audited without exposing proprietary verifier details?

## 8. Related Paper-Card Sources

- [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](../../paper_cards/sources/scaling-llm-test-time-compute-optimally-2024)
- [Self-Consistency Improves Chain of Thought Reasoning in Language Models](../../paper_cards/sources/self-consistency-chain-of-thought-2023)
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](../../paper_cards/sources/tree-of-thoughts-2023)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
