# 🔁 Rollout, Search, and Test-Time Trace Data

> Multiple rollouts, search trees, best-of-N samples, self-consistency traces, MCTS records, selected/rejected candidates, and test-time compute logs.

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
| [Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787) | 2024 | [Paper](https://arxiv.org/abs/2407.21787) · [Paper Card Source](../../paper_cards/library/cards/large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024/sources) | candidate solution set for each problem, with final answers, code submissions, Lean proofs, or repository patches depending on task.; process: task, model, sample count; math benchmarks, Lean4 proof checker, programming contest tests, and SWE-bench Lite repository test suites. | automatic unit tests or Lean checker where available; oracle answer checks, majority voting, or reward-model scoring for math-answer selection. | It gives atlas readers a concrete way to audit whether a reasoning gain comes from more samples, a usable verifier, a better selector, or a genuinely stronger model or training recipe. |
| [Efficient Long CoT Reasoning in Small Language Models](https://arxiv.org/abs/2505.18440) | 2025 | [Paper](https://arxiv.org/abs/2505.18440) · [DOI](https://doi.org/10.48550/arXiv.2505.18440) · [Paper Card Source](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources) | Pruned long reasoning trace, final answer, validity outcome, and selected student-training example.; process: problem, teacher long cot, pruned steps; Mathematical-reasoning tasks with answer-based validation. | Programmatic or answer-based correctness checks validate traces selected for on-policy curation. | It makes long2short reasoning a data-lineage problem: teacher trace, pruning rule, student rollout, checker, and accepted compression all affect the result. |
| [ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861) | 2025 | [Paper](https://arxiv.org/abs/2501.07861) · [DOI](https://doi.org/10.48550/arXiv.2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR) · [Paper Card Source](../../paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources) | step-level preference data with retrieval context, process reward score, process explanation, and final answer.; process: query, retrieval context, partial reasoning state; RAG reasoning pipeline | Process Reward Model plus Process Explanation Model, with MCTS-guided search. | It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object. |
| [ReST-MCTS*](https://arxiv.org/abs/2406.03816) | 2024 | [Paper](https://arxiv.org/abs/2406.03816) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th) · [Project](https://rest-mcts.github.io/) · [Paper Card Source](../../paper_cards/library/cards/rest-mcts-2024/sources) | searched reasoning trajectory with intermediate node states, final answer, verifier outcome, and inferred process reward.; process: problem, partial solution state, candidate next step; MCTS-style reasoning tree | process reward model guided by final-answer oracle feedback and MCTS-derived value targets. | It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects. |
| [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314) | 2024 | [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources) | Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks. | Dense process-based verifier reward models plus answer-level evaluation. | Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution. |
| [Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models](https://arxiv.org/abs/2310.04406) | 2023 | [Paper](https://arxiv.org/abs/2310.04406) · [Code](https://github.com/lapisrocks/LanguageAgentTreeSearch) · [Paper Card Source](../../paper_cards/library/cards/language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023/sources) | A search tree of observations, actions, self-reflections, value estimates, environment feedback, and terminal result.; process: observation, action, reflection; Task environments including programming tests, WebShop-style interaction, and reasoning tasks. | External environment feedback together with LM-powered value functions and self-reflection. | It shows why a reusable agent-search trace must retain the environment state and feedback alongside the selected action path. |
| [Reasoning with Language Model is Planning with World Model](https://arxiv.org/abs/2305.14992) | 2023 | [Paper](https://arxiv.org/abs/2305.14992) · [Venue](https://aclanthology.org/2023.emnlp-main.507/) · [Paper Card Source](../../paper_cards/library/cards/reasoning-with-language-model-is-planning-with-world-model-2023/sources) | An MCTS reasoning tree containing states, candidate actions, predicted transitions, rewards, and chosen path.; process: problem, state, action or reasoning step; A language-model world model paired with Monte Carlo tree search. | Task-specific rewards and model-predicted state transitions guide MCTS selection. | It exposes an often-hidden search record—state prediction, task reward, and tree policy—that is essential for attributing planning gains. |
| [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601) | 2023 | [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm) · [Paper Card Source](../../paper_cards/library/cards/tree-of-thoughts-2023/sources) | Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units. | Self-evaluation, task-specific checks, and final outcome scoring. | Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects. |

## 5. Full Paper List

### <a id="multiple-rollouts-best-of-n"></a>🎲 Multiple rollouts / best-of-N

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="search-trees-mcts"></a>🌳 Search trees / MCTS

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
- 🏗️ **[Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models](https://arxiv.org/abs/2310.04406)**
  <sub>2023 · arXiv · 🏗️ construction recipe · 🌐 agent environment · environmental · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2310.04406) · [Code](https://github.com/lapisrocks/LanguageAgentTreeSearch) · [Paper Card Source](../../paper_cards/library/cards/language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023/sources)
  _Data object:_ A search tree of observations, actions, self-reflections, value estimates, environment feedback, and terminal result.; process: observation, action, reflection; Task environments including programming tests, WebShop-style interaction, and reasoning tasks.
  _Feedback / verifier:_ External environment feedback together with LM-powered value functions and self-reflection.
  _Recipe signal:_ teacher: Environment feedback and LM-generated reflection/value prompts.; generator: The agent generates candidate actions and reflections at search nodes.
  _Audit focus:_ Environment state, web content, and tool versions can make trajectories non-replayable., Reflection text may sound corrective without improving the underlying action policy., Search results can be dominated by interaction budget rather than agent quality.
  _Why it matters:_ It shows why a reusable agent-search trace must retain the environment state and feedback alongside the selected action path.
- 🏗️ **[Reasoning with Language Model is Planning with World Model](https://arxiv.org/abs/2305.14992)**
  <sub>2023 · EMNLP · 🏗️ construction recipe · mixed · evaluation · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.14992) · [Venue](https://aclanthology.org/2023.emnlp-main.507/) · [Paper Card Source](../../paper_cards/library/cards/reasoning-with-language-model-is-planning-with-world-model-2023/sources)
  _Data object:_ An MCTS reasoning tree containing states, candidate actions, predicted transitions, rewards, and chosen path.; process: problem, state, action or reasoning step; A language-model world model paired with Monte Carlo tree search.
  _Feedback / verifier:_ Task-specific rewards and model-predicted state transitions guide MCTS selection.
  _Recipe signal:_ teacher: Task prompts, task-specific reward definitions, and LM-predicted world states.; generator: The LM generates reasoning actions and simulates their next states.
  _Audit focus:_ A hallucinated world-model transition can steer search toward an invalid plan., Improvements can conflate MCTS budget, reward design, and base-model capability., The selected path hides the distribution of rejected branches unless logs are retained.
  _Why it matters:_ It exposes an often-hidden search record—state prediction, task reward, and tree policy—that is essential for attributing planning gains.
- 📈 **[Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601)**
  <sub>2023 · NeurIPS 2023 · 📈 scaling study · 🏗️ construction recipe · judgment required · mixed · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm) · [Paper Card Source](../../paper_cards/library/cards/tree-of-thoughts-2023/sources)
  _Data object:_ Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units.
  _Feedback / verifier:_ Self-evaluation, task-specific checks, and final outcome scoring.
  _Recipe signal:_ teacher: Task instructions and final evaluators.; generator: Policy model expands tree nodes into candidate thoughts.
  _Audit focus:_ Value estimates may be prompt-sensitive., Search budget can dominate model ranking., Small task suites can overfit scaffolds.
  _Why it matters:_ Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.

### <a id="rejection-sampling-traces"></a>🔎 Rejection sampling traces

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="self-consistency-repeated-sampling"></a>🧠 Self-consistency / repeated sampling

- 📈 **[Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787)**
  <sub>2024 · arXiv preprint arXiv:2407.21787 · 📈 scaling study · 🏗️ construction recipe · programmatic · mixed · evaluation · test time compute · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2407.21787) · [Paper Card Source](../../paper_cards/library/cards/large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024/sources)
  _Data object:_ candidate solution set for each problem, with final answers, code submissions, Lean proofs, or repository patches depending on task.; process: task, model, sample count; math benchmarks, Lean4 proof checker, programming contest tests, and SWE-bench Lite repository test suites.
  _Feedback / verifier:_ automatic unit tests or Lean checker where available; oracle answer checks, majority voting, or reward-model scoring for math-answer selection.
  _Recipe signal:_ teacher: benchmark labels, unit tests, proof checkers, and reward/selection methods rather than a teacher model.; generator: models repeatedly sample independent candidate solutions for each task.
  _Audit focus:_ Coverage can grow with sample budget even when practical selection precision remains poor., Automatic-verifier domains can overstate transfer to open-ended math or judgment-required tasks., Comparing repeated sampling against single attempts can conflate model quality with inference budget.
  _Why it matters:_ It gives atlas readers a concrete way to audit whether a reasoning gain comes from more samples, a usable verifier, a better selector, or a genuinely stronger model or training recipe.

### <a id="test-time-compute-logs"></a>⏱️ Test-time compute logs

- 📈 **[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314)**
  <sub>2024 · arXiv · 📈 scaling study · 🧪 verifier reward · mixed · judgment required · test time compute · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2408.03314) · [DOI](https://doi.org/10.48550/arXiv.2408.03314) · [Paper Card Source](../../paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources)
  _Data object:_ Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks.
  _Feedback / verifier:_ Dense process-based verifier reward models plus answer-level evaluation.
  _Recipe signal:_ teacher: Benchmark answers and trained verifier reward models provide selection signal.; generator: Policy model generates multiple candidate traces under a budget.
  _Audit focus:_ Verifier quality can dominate the measured scaling curve., Difficulty estimation can leak benchmark-specific assumptions., More samples can be mistaken for more unique data.
  _Why it matters:_ Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution.

### <a id="long2short-distill-from-search"></a>✂️ Long2short / distill-from-search

- 🏗️ **[Efficient Long CoT Reasoning in Small Language Models](https://arxiv.org/abs/2505.18440)**
  <sub>2025 · arXiv · 🏗️ construction recipe · programmatic · sft · distillation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.18440) · [DOI](https://doi.org/10.48550/arXiv.2505.18440) · [Paper Card Source](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources)
  _Data object:_ Pruned long reasoning trace, final answer, validity outcome, and selected student-training example.; process: problem, teacher long cot, pruned steps; Mathematical-reasoning tasks with answer-based validation.
  _Feedback / verifier:_ Programmatic or answer-based correctness checks validate traces selected for on-policy curation.
  _Recipe signal:_ teacher: A long-CoT reasoning model supplies initial traces for pruning and distillation.; generator: Teacher traces are pruned; the student generates on-policy candidates to curate useful valid long-CoT data.
  _Audit focus:_ Pruning can delete uncertainty, corrections, or premises that are important for a valid derivation., Answer correctness does not prove that the compressed rationale is faithful or pedagogically useful., On-policy curation can reinforce the student's existing shortcuts and reduce solution diversity.
  _Why it matters:_ It makes long2short reasoning a data-lineage problem: teacher trace, pruning rule, student rollout, checker, and accepted compression all affect the result.

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

- [Efficient Long CoT Reasoning in Small Language Models](../../paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources)
- [ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](../../paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources)
- [Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](../../paper_cards/library/cards/large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024/sources)
- [ReST-MCTS*](../../paper_cards/library/cards/rest-mcts-2024/sources)
- [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](../../paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources)
- [Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models](../../paper_cards/library/cards/language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023/sources)
- [Reasoning with Language Model is Planning with World Model](../../paper_cards/library/cards/reasoning-with-language-model-is-planning-with-world-model-2023/sources)
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](../../paper_cards/library/cards/tree-of-thoughts-2023/sources)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
