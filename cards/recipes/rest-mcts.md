<!-- entry_id: rest-mcts-2024 -->
<!-- card_type: recipes -->
# ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: rollout_search_test_time_trace_data
> Links: [Paper](https://arxiv.org/abs/2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Project](https://rest-mcts.github.io/) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th)

## TL;DR

ReST-MCTS* combines process-reward-guided tree search with reinforced self-training. The important data object is not just a final correct answer, but a searched reasoning trace with inferred per-step value targets that can train both a policy model and a process reward model.

It matters for Track 05 because it makes the search budget, PRM guidance, accepted traces, and per-step value targets part of the reusable record.

## 1. What is this work?

- Year / venue: 2024 · NeurIPS.
- Author affiliations: The Knowledge Engineering Group (KEG), Tsinghua University; California Institute of Technology.
- Atlas role: process_supervision, construction_recipe, scaling_study.
- Domains: math, scientific reasoning, search-based self-training.
- Current status: verified.
- Why it belongs: ReST-MCTS* is a direct example of MCTS/search traces becoming policy-training data and PRM value targets.

## 2. What data object does it expose?

- Prompt/source: math and science reasoning problems, including tasks prepared for MCTS evaluation and value-model training.
- Trace/action author: policy models generate intermediate reasoning steps while MCTS* expands a search tree.
- Answer/artifact format: searched reasoning paths with node states, intermediate steps, final answers, verifier outcomes, and inferred process rewards.
- Process fields: problem, partial solution state, candidate next step, PRM/value score, search policy choice, final answer, and correctness label where available.
- Environment or substrate: MCTS* reasoning tree over natural-language solution steps.
- Terminal predicate: final answer matches the oracle answer or task checker under the reported evaluation setup.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed. Final answers provide an oracle correctness signal, while inferred process rewards estimate whether a partial step helps reach that correct answer.
- Recorded verifier/reward/environment: a process reward model guides search and is refined from MCTS-derived value targets.
- Supervision granularity: step_level and process_reward.

## 4. How is the data constructed?

- Base model: Llama, Mistral, and GLM/SciGLM-family policy or value models appear in the released implementation paths.
- Teacher: oracle final answers and search-derived value estimates, not manual dense step labels.
- Generator: policy rollouts expanded by MCTS* under PRM guidance.
- Filtering rule: select higher-quality traces from search and infer value targets from whether search states can lead to correct answers.
- Sampling protocol: tree search over intermediate reasoning states; exact rollout budget should be pinned per experiment before reuse.
- Optimizer/scaffold: ReST-style iterative self-training of policy and process reward models.

## 5. How can it enter post-training?

Recorded training/evaluation use: process_supervision, reward_modeling, test_time_compute.

The searched traces can enter policy SFT or self-training as accepted reasoning trajectories. The inferred per-step values can enter PRM training. For evaluation, the same method is a test-time search baseline against best-of-N, self-consistency, and Tree-of-Thought style methods.

## 6. What should readers audit?

- How many node expansions, rollouts, or sampled candidates are used per problem?
- Are rejected branches or failed candidates released, or only accepted traces?
- Is the PRM trained on data that overlaps with the evaluation tasks?
- Does the reported gain persist under matched search budgets against best-of-N and Tree-of-Thought?
- Are final-answer oracles reliable enough to infer process rewards from partial traces?
- Can the value model learn shortcut features of the search procedure instead of reasoning quality?

## 7. What is missing or risky?

- Full source mixture and decontamination details are not fully captured in this atlas entry.
- Tree-search improvements can be misattributed to better training data when the search budget or PRM changes.
- Inferred process rewards can be wrong when an intermediate step happens to lead to a correct final answer through later correction.
- Released artifacts should be checked for split, license, and exact relationship between policy data and PRM data before reuse.

## 8. Why it matters for post-training reasoning data

ReST-MCTS* is a compact case where rollout/search records become both a data-construction mechanism and a supervision source. It helps readers separate the policy, verifier, tree-search budget, accepted trace, and PRM target instead of treating "self-training" as one opaque improvement.

## 9. Links and citation

- [Paper](https://arxiv.org/abs/2406.03816)
- [Code](https://github.com/THUDM/ReST-MCTS)
- [Project](https://rest-mcts.github.io/)
- [PRM data example](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th)
- Data ID: `rest-mcts-2024`
- Citation status: verified
- Confidence: high
