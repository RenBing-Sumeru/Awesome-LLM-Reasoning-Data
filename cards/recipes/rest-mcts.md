<!-- entry_id: rest-mcts-2024 -->
<!-- card_type: recipes -->
# ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, programmatically_verifiable_outcome_data, process_trace_supervision_data, rollout_search_test_time_trace_data, data_construction_open_release_recipes, training_usage_optimization_objectives, scaling_rlvr_test_time_compute
> Links: [Paper](https://arxiv.org/abs/2406.03816) | [NeurIPS](https://papers.nips.cc/paper_files/paper/2024/hash/76ec4dc30e9faaf0e4b6093eaa377218-Abstract-Conference.html) | [Project](https://rest-mcts.github.io/) | [Code](https://github.com/THUDM/ReST-MCTS) | [Policy data](https://huggingface.co/datasets/zd21/ReST-MCTS_Llama3-8b-Instruct_ReST-MCTS_Policy_1st) | [PRM data](https://huggingface.co/datasets/zd21/ReST-MCTS-Llama3-8b-Instruct-PRM-1st)

## TL;DR

ReST-MCTS* is a self-training recipe that uses process-reward-guided tree search to turn answer-keyed science and math questions into policy-training traces and PRM/value-target data.

Read it as a data-construction pipeline, not as a benchmark-result claim: the reusable object is the coupling between input questions, final-answer checks, search traces, inferred step values, and selected training records.

## 1. What is this work?

- Year / venue: 2024 | NeurIPS.
- Atlas role: data_release, process_supervision, verifier_reward, construction_recipe, scaling_study.
- Domains: math, science, reasoning.
- Current status: verified.
- Why it belongs: It exposes code, a project page, policy-data releases, and PRM-data releases for a search-guided self-training pipeline.

## 2. What data object does it expose?

**Data object:** answer-keyed reasoning questions expanded into MCTS* search traces, selected policy-training solutions, and process-reward/value-model examples.

| Field | Local value |
|---|---|
| Prompt/source | Science and math reasoning question sets. The official README says the initial value-training set uses a lean science dataset within SciInstruct; exact source mixture per HF artifact is not fully pinned locally. |
| Trace/action author | Policy-model rollouts guided by MCTS* and a process reward/value model. Reported policy backbones include Llama3-8B-Instruct, MetaMath-Mistral-7B, and SciGLM-6B. |
| Answer/artifact format | Question plus final answer, searched step-by-step solution, selected policy-training output, and inferred per-step value/process-reward labels. |
| Policy data schema | The pinned Llama3 ReST-MCTS policy dataset exposes `instruction` and `output`; HF dataset-server reports `train` with 33,722 rows for the checked revision. |
| PRM data schema | The pinned Llama3 PRM dataset exposes `prompt_answer` and numeric `label`; HF dataset-server reports train/validation/test splits for the checked revision. |
| Environment or substrate | Offline MCTS* reasoning tree plus iterative policy/reward-model self-training pipeline. |
| Terminal predicate | Candidate reasoning reaches the correct final answer under the task answer key or benchmark checker. |

Keep the policy data and PRM data separate during reuse. The policy release is selected output text for SFT-style training; the PRM release is a process-reward/value-target surface with positive and negative samples.

## 3. What is the verifier / reward / judge / environment?

**Feedback / verifier:** final-answer correctness plus an inferred/learned process reward model used to guide tree search.

- Final-answer correctness is the grounding signal: a completed trajectory is useful only if it reaches the oracle answer.
- MCTS* estimates whether intermediate reasoning states are likely to lead to the correct answer.
- Those inferred values serve two roles: guide search and provide targets for refining a process reward/value model.
- The PRM labels are not human step annotations; they are derived from search behavior and final-answer supervision.
- Benchmark improvements characterize the training/search recipe, but they do not prove that every accepted step is logically correct.

Supervision granularity: answer_level, step_level, process_reward, trajectory_value.

## 4. How is the data constructed?

**Construction recipe:**

- Start from science and math questions with final answers.
- Train or initialize a process reward/value model from available step-by-step solution data.
- Run MCTS* over intermediate reasoning states using a policy model and process reward/value guidance.
- Use final-answer correctness to estimate which steps and trajectories are useful.
- Select high-value/correct traces for policy self-training.
- Build PRM data from positive and negative process samples, then iterate policy and reward-model training.
- Release method-specific policy datasets and a Llama3 PRM dataset through Hugging Face.

Known recipe fields:

| Recipe field | Local value |
|---|---|
| Base model | Policy backbones reported in the official README include Llama3-8B-Instruct, MetaMath-Mistral-7B, and SciGLM-6B; value-model backbones include Mistral-7B for Llama/Mistral policies and ChatGLM3-6B for SciGLM policy. |
| Teacher | No single teacher model; oracle final answers and tree-search-estimated step values provide supervision. |
| Generator | Policy rollouts expanded by MCTS* and guided by a process reward/value model. |
| Filtering rule | Select policy-training traces using process-reward-guided tree search and final-answer correctness; construct PRM data from positive and negative process samples. |
| Sampling protocol | MCTS* search over intermediate reasoning states; exact per-dataset branch, iteration, and budget settings should be pinned from scripts/configs before reuse. |
| Rollout count | unknown. |
| Temperature | unknown. |
| Inference budget | unknown in local metadata; the paper and code should be audited for branch/iteration limits used by each artifact. |
| Optimizer/scaffold | Iterative ReST-MCTS* self-training: train policy models on selected search traces and train/refine process reward models from inferred value targets. |

## 5. How can it enter post-training?

**Training or evaluation use:** sft, process_supervision, reward_modeling, test_time_compute.

Use the policy datasets for SFT-style self-training on selected search traces. Use the PRM datasets for process reward/value-model training or evaluation, after checking label semantics and split policy.

Do not relabel it as RLVR unless a downstream project defines an RL objective, online rollout policy, and reward-use contract. Do not use benchmark scores as a substitute for auditing source mixture, tree-search budget, accepted/rejected branches, label noise, and dataset revisions.

## 6. What should readers audit?

**Audit risks:**

- Final-answer correctness can still admit flawed, shortcut, or lucky intermediate reasoning.
- Process rewards are inferred from search and can encode the strengths and biases of the current policy/value model.
- Accepted traces hide rejected branches unless the rejected distribution is preserved or regenerated.
- Search budget, branch factor, and value-model calibration can be mistaken for data quality.
- Iterative self-training can amplify early PRM/value-model errors.
- Different HF artifacts may use different backbones, methods, iterations, schemas, split policies, and licenses.
- Source mixture and decontamination are not fully pinned in the local metadata.

## 7. What is missing or risky?

- Exact HF dataset revisions, row counts for every released artifact, schemas, and licenses need to be pinned.
- Decontamination is unknown.
- Full source mixture and split policy are unknown locally.
- Rollout count, temperature, and per-artifact search budget are unknown in local metadata.
- OpenReview is not pinned locally; the NeurIPS proceedings page is the venue link.
- The release-level code repository has no license detected through the GitHub API in local review, so reuse terms need manual review.

## 8. What to verify before reuse

- Pin the exact Hugging Face revision for each policy or PRM dataset you use.
- Record dataset schema, split names, row counts, and whether the artifact is policy data, PRM data, baseline data, or a later self-training iteration.
- Inspect how final-answer correctness is checked for each math/science source.
- Re-run or audit MCTS* branch/iteration limits, value-model checkpoint, policy checkpoint, and temperature/sampling settings.
- Check whether rejected branches, failed rollouts, and ambiguous paths are available or reproducible.
- Verify source licenses and release licenses before redistribution or commercial use.
- Check train/eval overlap and benchmark contamination for your target evaluation suite.
- Keep policy traces, PRM labels, final-answer labels, and search-state metadata distinct in downstream training.

## 9. Links and citation

**Official links:**

- Paper: [https://arxiv.org/abs/2406.03816](https://arxiv.org/abs/2406.03816)
- NeurIPS proceedings: [https://papers.nips.cc/paper_files/paper/2024/hash/76ec4dc30e9faaf0e4b6093eaa377218-Abstract-Conference.html](https://papers.nips.cc/paper_files/paper/2024/hash/76ec4dc30e9faaf0e4b6093eaa377218-Abstract-Conference.html)
- Project page: [https://rest-mcts.github.io/](https://rest-mcts.github.io/)
- Code: [https://github.com/THUDM/ReST-MCTS](https://github.com/THUDM/ReST-MCTS)
- Llama3 ReST-MCTS policy data: [https://huggingface.co/datasets/zd21/ReST-MCTS_Llama3-8b-Instruct_ReST-MCTS_Policy_1st](https://huggingface.co/datasets/zd21/ReST-MCTS_Llama3-8b-Instruct_ReST-MCTS_Policy_1st)
- Llama3 PRM data: [https://huggingface.co/datasets/zd21/ReST-MCTS-Llama3-8b-Instruct-PRM-1st](https://huggingface.co/datasets/zd21/ReST-MCTS-Llama3-8b-Instruct-PRM-1st)
- Initial PRM data: [https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th)
- DOI: [https://doi.org/10.48550/arXiv.2406.03816](https://doi.org/10.48550/arXiv.2406.03816)

- Data ID: `rest-mcts-2024`
- Citation status: verified
- Confidence: high
