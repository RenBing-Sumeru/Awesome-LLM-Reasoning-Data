<!-- entry_id: preference-trees-a-dataset-for-modeling-human-preferences-over-conversational-responses-2024 -->
<!-- card_type: releases -->
# Advancing LLM Reasoning Generalists with Preference Trees

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=preference-trees-a-dataset-for-modeling-human-preferences-over-conversational-responses-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=preference-trees-a-dataset-for-modeling-human-preferences-over-conversational-responses-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=preference-trees-a-dataset-for-modeling-human-preferences-over-conversational-responses-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, process_trace_supervision_data, data_construction_open_release_recipes
> Links: [arXiv](https://arxiv.org/abs/2404.02078) - [Code/Data](https://github.com/OpenBMB/Eurus)

## TL;DR

Preference Trees / UltraInteract turns multi-branch reasoning trajectories into tree-structured preference data for reasoning alignment.

It is useful because it moves beyond flat chosen/rejected pairs, but reuse depends on auditing source tasks, rollout policy, verifier coverage, and tree-construction rules.

## 1. What is this work?

The paper builds UltraInteract, a reasoning preference-tree resource used to train Eurus models. It samples actions for math, code, logic, and complex reasoning tasks, organizes correct and incorrect branches, and derives preference relations over reasoning trajectories.

## 2. What data object does it expose?

The exposed data object is a reasoning preference tree:

- prompt,
- reasoning chain,
- interaction trajectory,
- tree node,
- candidate branch,
- pairwise preference,
- verifier or task outcome.

This is both preference data and trace supervision. A branch preference only makes sense with the task, rollout policy, and verifier/task outcome attached.

## 3. What is the verifier / reward / judge / environment?

The feedback contract is mixed:

- ground-truth task outcomes,
- Python execution for code-like checks,
- GPT-4 critique grounded by gold answers,
- preference relations between correct and incorrect actions or branches.

The verifier is not uniform across domains. Correctness signals for code, math, and general reasoning should be audited separately.

## 4. How is the data constructed?

The recipe includes:

- select challenging problems GPT-3.5 Turbo fails,
- restrict to datasets with ground-truth solutions,
- exclude instances failing Python syntax checks,
- sample correct and incorrect actions,
- directly sample 20 actions and, if needed, retry up to three times with stronger actors,
- expand incorrect actions across turns,
- cap preference trees at five turns,
- add extra action pairs for challenging multi-solution problems.

Known decontamination: LeetCode uses exact substring matching; other tasks use 8-gram matching against same-task test sets. Unknown: license and standalone Hugging Face dataset page.

## 5. How can it enter post-training?

Recorded use:

- preference learning,
- SFT,
- evaluation.

Use it when reasoning alignment needs branch-level feedback or trajectory-level preference structure. Do not treat final benchmark scores as proof that the tree labels are causally good.

## 6. What should readers audit?

- Rejected rollout distribution can be hidden by the released tree.
- GPT-4 critique can introduce judge-model bias.
- Verifier-backed branches can reward answer format or shortcut behavior.
- Math, code, logic, and general reasoning have different verifier contracts.
- A five-turn cap is a data-construction choice, not a universal reasoning limit.

## 7. What is missing or risky?

- Exact Eurus repository commit and released data path.
- Which source tasks enter training versus evaluation.
- Whether MATH reuse is acceptable for the target evaluation.
- Actor model versions and retry policy.
- Python execution environment and syntax filters.
- License and redistribution rights for source tasks and generated traces.

## 8. Why it matters for post-training reasoning data

It shows how preference feedback can be attached to reasoning structure. For the atlas, the important move is preserving branch context, verifier signal, and rollout policy instead of flattening everything into a single preference pair.

## 9. Links and citation

- Institution: Tsinghua University; OpenBMB; complete affiliation list should be verified from the paper PDF.
- arXiv: https://arxiv.org/abs/2404.02078
- Code/Data: https://github.com/OpenBMB/Eurus
- DOI: https://doi.org/10.48550/arXiv.2404.02078
- Data ID: `preference-trees-a-dataset-for-modeling-human-preferences-over-conversational-responses-2024`
- Citation status: verified
- Confidence: high
