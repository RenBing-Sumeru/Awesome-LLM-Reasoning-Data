<!-- entry_id: fastmcts-2025 -->
<!-- card_type: recipes -->
# FastMCTS: A Simple Sampling Strategy for Data Synthesis

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=fastmcts-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=fastmcts-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=fastmcts-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, process_trace_supervision_data, rollout_search_test_time_trace_data, data_construction_open_release_recipes, training_usage_optimization_objectives, scaling_rlvr_test_time_compute
> Links: [ACL Anthology](https://aclanthology.org/2025.acl-long.1190/) · [arXiv](https://arxiv.org/abs/2502.11476) · [Code](https://github.com/FlyingDutchman26/FastMCTS)

## TL;DR

FastMCTS is an offline reasoning-data synthesis recipe that represents partial solutions as tree states, reasoning steps as actions, and complete generations as retained search branches. Terminal judgments are backed up through the tree to select correct trajectories for SFT and construct step- or branch-level preference pairs.

The official implementation is public, but the experimental search trees, failed trajectories, rejected branches, SFT corpus, preference pairs, checkpoints, and split manifests are not. The reported 3.9-point comparison includes Branch-DPO and cannot be attributed to FastMCTS sampling alone; the cleaner SFT-only comparison reports a 2.9-point gain over rejection-sampling SFT.

## 1. What is this work?

- Year / venue: 2025 · ACL 2025 Long Paper.
- Atlas roles: construction recipe, process-supervision method, preference-data recipe, and token-budget scaling study.
- Domains: English and Chinese mathematical reasoning.
- Primary comparison: tree-structured synthesis versus independent rejection sampling under reported generation-token budgets.
- Artifact status: official code is available; experimental synthesized data and checkpoints are not.
- Current status: partial.

FastMCTS is a sampling and construction method, not a public reasoning-data release. Reproducing downstream claims requires regenerating the experimental trees and derived datasets.

## 2. What data object does it expose?

The paper defines a tree-structured object, but does not release experimental instances:

- root: mathematical problem and reference answer;
- state: partial mathematical solution;
- action/node: next numbered natural-language reasoning step;
- edge: parent-child relation between successive partial solutions;
- simulation: a complete trajectory retained as tree nodes;
- terminal signal: repeated LLM judgment against the standard answer;
- node statistics: visit count, win count, and `win_count / visit_count`;
- SFT object: verifier-accepted complete trajectories;
- preference object: chosen and rejected steps or branches derived from tree structure and backed-up outcomes.

These are method-level fields, not a verified public schema. No official tree dump, SFT dataset, or preference-pair dataset is linked.

Prompt sources are 46,000 English problems from NuminaMath, MetaMath, and InternLM-Math; 50,000 Chinese high-school problems collected from the internet; 300 AIME problems through 2023; and 1,000 Chinese high-school problems for efficiency experiments. English-source proportions, Chinese source URLs, per-item provenance, and redistribution rights are undisclosed.

## 3. What is the verifier / reward / judge / environment?

- Trace generator: Qwen2.5-72B-Instruct through SGLang.
- Difficulty screener: Qwen2.5-32B-Instruct with five sampled solutions per problem.
- Terminal verifier: Qwen2.5-72B-Instruct.
- Verifier input/output: complete trajectory, problem, and standard answer → binary success/failure.
- Protocol: judge each trajectory three times and repeat inconsistent cases until consensus; retry cap is `unknown`.
- Acceptance: answer must be correct, clear, and not guessed or vague.
- Tree reward: terminal outcomes are backed up; node score is wins divided by visits.

The verifier does not independently formally check each intermediate step. A node can receive high backed-up value because successful terminal trajectories pass through it even if its local reasoning is flawed or recoverable only later. Generator and verifier share a Qwen family and may share errors. Correct but unconventional derivations may be rejected, and low or zero node values may reflect sparse exploration rather than bad reasoning.

## 4. How is the data constructed?

1. Collect English and Chinese math problems.
2. Use Qwen2.5-32B-Instruct to sample five solutions for difficulty screening; exclude 100%-pass questions.
3. Exclude proofs, find-all tasks, image/URL dependencies, malformed, incomplete, ambiguous, and low-quality items.
4. Remove hash duplicates and stated evaluation overlaps; semantic and pretraining decontamination are not reported.
5. Prompt Qwen2.5-72B-Instruct with randomized, domain-diverse few-shot demonstrations.
6. Segment solutions into numbered steps and run adaptive-stay UCT with dynamic exploration.
7. Retain simulation steps as nodes, verify complete trajectories, and back up terminal outcomes.
8. Select accepted paths for SFT and derive chosen/rejected branch pairs for preference learning.

| Recipe field | Reported value |
|---|---|
| Generator temperature | 1 |
| Root / expansion degree | 3 / 2 |
| Main tree budget | 16 iterations |
| Rejection controls | 30 or 24 independent samples |
| Budget comparison | Average generated tokens, not equal complete-trajectory counts |

`rollout_count: 16` in metadata means tree iterations, not necessarily 16 independent complete rollouts.

SFT uses Qwen2.5-7B, three epochs, 4,096 maximum length, batch 32, Adam at `1e-5`. Branch-DPO uses three epochs, batch 16, AdamW at `1e-6`, `beta=0.4`, and cosine scheduling. Additional checks use Llama-3.2-3B-base and Qwen2.5-3B-base.

## 5. How can it enter post-training?

Verifier-accepted complete paths can become SFT targets if source, answer, generator, few-shot setup, search budget, path, verifier outcome, and tree lineage are retained. Tree branches can form chosen/rejected pairs for Branch-DPO or another explicit preference objective.

An unsuccessful or low-valued branch is not automatically a semantically wrong negative; it may be underexplored or affected by verifier error. Pair construction must preserve sampling and comparison rules.

Attribution boundaries:

- FastMCTS SFT versus rejection-sampling SFT: reported 2.9-point gain.
- FastMCTS plus Branch-DPO comparison: reported 3.9-point gain.

The second result combines data synthesis and optimization. Likewise, the reported 30%+ increase in correct paths is limited to two math sets and specific token-budget comparisons, not a universal guarantee.

## 6. What should readers audit?

- Exact source manifests, English-source proportions, Chinese URLs, rights, hashes, seeds, and exclusion lists.
- Semantic near-duplicate, benchmark, and model-pretraining overlap.
- SGLang, model, prompt, and code revisions; step segmentation rules.
- Complete simulations produced by 16 iterations and the verifier consensus retry cap.
- Verifier disagreements, retry histories, and intermediate-error rates among terminal-correct paths.
- Whether zero-score nodes are failures or underexplored states.
- Prefix repetition in SFT data and preservation of rejected branches.
- Identical token accounting across sampling methods.
- Separate SFT-only and Branch-DPO reporting.
- Isolation of data, search, verifier, and optimizer effects.
- Software and derived-data licenses.

## 7. What is missing or risky?

- Experimental trees, failed trajectories, rejected branches, SFT data, preference pairs, manifests, splits, hashes, seeds, and checkpoints are not public.
- The official repository declares no software or data license.
- English-source proportions and Chinese web provenance/rights are undisclosed.
- Decontamination is limited to hash deduplication and stated evaluation exclusion; semantic checks are not reported.
- Verifier retry cap is undisclosed; shared generator/verifier family may create correlated errors.
- Terminal backup can value flawed intermediate reasoning; sparse exploration can make scores unreliable.
- Shared prefixes reduce diversity, which the paper identifies as unresolved.
- The 30%+ result is limited to two math sets and specific budgets.
- The 3.9-point result includes Branch-DPO and cannot be attributed to FastMCTS alone.

## 8. Why it matters for post-training reasoning data

FastMCTS distinguishes independent rejection sampling from tree-structured synthesis. It reuses partial prefixes, retains simulation steps, and allocates further generation toward promising or underexplored states. One search can yield accepted paths for SFT, lower-valued branches for preference learning, visit/win statistics, and token-budget evidence.

It also shows why a recipe must be audited beyond headline scores: quality depends jointly on sourcing, tree policy, budget, generator, judge, backup, pair construction, and optimizer. Without experimental trees and derived datasets, the method is inspectable at the code and paper level but not fully auditable as a released corpus.

## 9. Links and citation

- ACL Anthology: [https://aclanthology.org/2025.acl-long.1190/](https://aclanthology.org/2025.acl-long.1190/)
- arXiv: [https://arxiv.org/abs/2502.11476](https://arxiv.org/abs/2502.11476)
- Official code: [https://github.com/FlyingDutchman26/FastMCTS](https://github.com/FlyingDutchman26/FastMCTS)
- DOI: [https://doi.org/10.18653/v1/2025.acl-long.1190](https://doi.org/10.18653/v1/2025.acl-long.1190)
- Official data release: `null`
- Official Hugging Face release: `null`

Peiji Li, Kai Lv, Yunfan Shao, Yichuan Ma, Linyang Li, Xiaoqing Zheng, Xipeng Qiu, and Qipeng Guo. 2025. "FastMCTS: A Simple Sampling Strategy for Data Synthesis." ACL 2025.

- Data ID: `fastmcts-2025`
- Citation status: verified
- Confidence: high
- Release status: partial
