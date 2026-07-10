<!-- entry_id: rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025 -->
<!-- card_type: recipes -->
# ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: rollout_search_test_time_trace_data
> Links: [Paper](https://arxiv.org/abs/2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)

## TL;DR

ReARTeR combines retrieval-augmented reasoning with trustworthy process rewarding. It uses a process reward model and process explanation model at test time, then uses MCTS-guided search to collect step-level preference data for post-training.

For Track 05, the reusable object is a retrieval-grounded search trace: retrieved context, reasoning step, PRM score, PEM explanation, search decision, and preference signal.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Author affiliations: Gaoling School of Artificial Intelligence, Renmin University of China; School of Information Technology and Management, University of International Business and Economics; Kuaishou Technology Co., Ltd.
- Atlas role: process_supervision, verifier_reward, construction_recipe.
- Domains: retrieval, multi-hop reasoning.
- Current status: verified.
- Why it belongs: ReARTeR shows how RAG, process rewards, explanations, MCTS, and preference optimization interact in one rollout/search pipeline.

## 2. What data object does it expose?

- Prompt/source: retrieval-augmented multi-step reasoning tasks.
- Trace/action author: retrieval-augmented reasoning policy under PRM/PEM-guided search.
- Answer/artifact format: step-level preference data with retrieval context, scalar process reward, explanation, and final answer.
- Process fields: query, retrieved evidence, partial reasoning step, PRM score, PEM explanation, MCTS branch, preference pair, final answer.
- Environment or substrate: RAG reasoning pipeline plus tree search over reasoning steps.
- Terminal predicate: final answer quality on multi-step reasoning benchmarks.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed. PRM scalar scores guide search, while PEM explanations help refine steps and expose reasoning quality.
- Recorded verifier/reward/environment: Process Reward Model, Process Explanation Model, retrieval context, and MCTS-guided search.
- Supervision granularity: step_level and process_reward.

## 4. How is the data constructed?

- Base model: unknown in the atlas entry.
- Teacher: PRM/PEM feedback and benchmark supervision.
- Generator: retrieval-augmented rollouts expanded by MCTS.
- Filtering rule: trustworthy process rewarding plus iterative preference optimization.
- Sampling protocol: tree search over retrieval-augmented reasoning steps; look-ahead search is used to reduce early-step bias.
- Optimizer/scaffold: off-policy preference learning and iterative preference optimization.

## 5. How can it enter post-training?

Recorded training/evaluation use: process_supervision, preference_learning, test_time_compute.

The searched traces can become step-level preference data for post-training a retrieval-augmented reasoner. At inference time, the same PRM/PEM stack can act as a selector or refinement mechanism, so training-data effects and test-time search effects must be separated.

## 6. What should readers audit?

- Does the retrieved evidence actually support each reasoning step?
- Are PRM scalar scores and PEM explanations aligned, or can they disagree?
- Is the step-level preference data balanced across easy and hard examples?
- Does look-ahead search reduce early-step bias without hiding failed branches?
- Are rejected branches and low-score explanations visible?
- Are gains attributable to retrieval quality, process reward, MCTS budget, or preference optimization?

## 7. What is missing or risky?

- Retrieval context can leak answer evidence unevenly across examples.
- PRM scores may favor steps that sound plausible but are not grounded in retrieved evidence.
- PEM explanations can rationalize PRM decisions rather than provide faithful error localization.
- Dataset split, license, and release completeness need stronger pinning before L5 promotion.

## 8. Why it matters for post-training reasoning data

ReARTeR broadens Track 05 beyond pure math search: the trace includes retrieval evidence and process explanations in addition to scalar rewards. That makes it a useful example for auditing how search traces become preference data in knowledge-intensive reasoning.

## 9. Links and citation

- [Paper](https://arxiv.org/abs/2501.07861)
- [Code](https://github.com/Jeryi-Sun/ReARTeR)
- Data ID: `rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025`
- Citation status: verified
- Confidence: high
