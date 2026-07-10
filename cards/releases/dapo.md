<!-- entry_id: dapo-2025 -->
<!-- card_type: releases -->
# DAPO: An Open-Source LLM Reinforcement Learning System at Scale

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dapo-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dapo-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=dapo-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: programmatically_verifiable_outcome_data, data_construction_open_release_recipes, training_usage_optimization_objectives, scaling_rlvr_test_time_compute
> Links: [Paper](https://arxiv.org/abs/2503.14476) | [Project](https://dapo-sia.github.io/) | [Code](https://github.com/BytedTsinghua-SIA/DAPO) | [Data](https://huggingface.co/datasets/BytedTsinghua-SIA/DAPO-Math-17k) | [Hugging Face](https://huggingface.co/collections/BytedTsinghua-SIA/dapo) | [OpenReview](https://openreview.net/forum?id=2a36EMSSTp)

## TL;DR

DAPO releases an open large-scale RLVR system around math prompts, rule-based final-answer rewards, dynamic sampling, and length-aware overlong shaping.

Read it as a data and optimizer recipe for RLVR: the reusable object is not just DAPO-Math-17K, but the contract connecting prompt sourcing, answer normalization, rollout grouping, reward computation, and policy-gradient updates.

## 1. What is this work?

- Year / venue: 2025 | arXiv; OpenReview page pinned.
- Atlas role: data_release, construction_recipe, verifier_reward, scaling_study, infrastructure.
- Domains: math, rlvr, reasoning.
- Current status: verified.
- Why it belongs: It exposes official paper, code, project, Hugging Face data/model artifacts, and a concrete recipe for large-scale RL with verifiable rewards.

## 2. What data object does it expose?

**Data object:** math prompt plus ground-truth answer used for rule-based RLVR, with online policy rollouts scored during training.

| Field | Local value |
|---|---|
| Prompt/source | DAPO-Math-17K prompts sourced from web pages and official competition homepages, then manually annotated and transformed toward integer-answer format. |
| Trace/action author | Online policy rollouts during RL. The released DAPO-Math-17K artifact should not be treated as a released teacher-rationale corpus. |
| Answer/artifact format | Math prompt plus integer ground-truth answer; generated responses are scored by extracting the final answer. |
| Process fields | Local training metadata records prompt/question, integer answer, sampled response, rule-based correctness reward, response length/overlong status, and token-level policy-gradient loss terms. |
| Released HF schema | `data_source`, `prompt`, `ability`, `reward_model.ground_truth`, `reward_model.style`, `extra_info.index`. |
| Environment or substrate | verl-based distributed RL training system with math answer parser/verifier. |
| Terminal predicate | Extracted final answer matches the integer ground truth under the released verifier rules. |

The Hugging Face dataset server currently reports a `train` split with 1,791,700 rows for `BytedTsinghua-SIA/DAPO-Math-17k`. That does not by itself explain the relationship between rows, unique prompts, and the "17K" release name; pin the exact revision and row semantics before reuse.

## 3. What is the verifier / reward / judge / environment?

**Feedback / verifier:** programmatic outcome reward from final-answer correctness, plus length-aware overlong reward shaping.

- The primary reward is rule-based: parse or extract the final answer and compare it with the integer ground-truth answer.
- Overlong Reward Shaping adds a length-sensitive penalty region; it should be read as reward shaping, not as proof of answer correctness.
- The release does not expose a learned reward model as the primary verifier.
- Parser and answer-extraction behavior can create false positives or false negatives, especially after forcing problems into integer-answer form.
- Benchmark scores characterize the reported training recipe; they do not prove that every prompt, answer, or verifier decision is correct.

Supervision granularity: answer_level, scalar_reward.

## 4. How is the data constructed?

**Construction recipe:**

- Collect math tasks from the web and official competition homepages.
- Manually annotate and process them into a rule-verifiable integer-answer format.
- Use Qwen2.5-32B base in the reported large-scale RL experiments.
- Sample online rollouts during RL and score them with the rule-based answer verifier.
- Use prompt batch size 512 and 16 sampled responses per prompt in the reported training setup.
- Apply Dynamic Sampling so all-correct and all-wrong sampled prompt groups do not drive the same gradient update.
- Train with DAPO on top of verl, including Clip-Higher, Dynamic Sampling, token-level policy-gradient loss, and Overlong Reward Shaping.

Known recipe fields:

| Recipe field | Local value |
|---|---|
| Base model | Qwen2.5-32B base model in the reported experiments. |
| Teacher | None reported for target traces; web/competition answers plus manual annotation provide ground-truth answers. |
| Generator | Online policy rollouts sampled during DAPO/GRPO-style RL. |
| Filtering rule | Dynamic sampling filters sampled prompt groups with all-correct or all-wrong rewards; overlong shaping penalizes responses beyond the expected length region. |
| Sampling protocol | Prompt batch size 512; 16 sampled responses per prompt; dynamic sampling continues until the batch contains non-degenerate reward prompts. |
| Rollout count | 16 per prompt in the reported setting. |
| Temperature | unknown. |
| Inference budget | Maximum generation length 20,480 tokens; overlong shaping uses a 16,384-token expected maximum with a 4,096-token soft-punishment cache. |
| Optimizer/scaffold | DAPO algorithm on verl, including Clip-Higher, Dynamic Sampling, token-level policy-gradient loss, and Overlong Reward Shaping. |

## 5. How can it enter post-training?

**Training or evaluation use:** rlvr.

Use it to study or reproduce RLVR-style math post-training where prompts, final-answer ground truth, rollout sampling, and reward shaping are all part of the training data contract.

Do not relabel it as SFT or distillation data unless a downstream project separately creates supervised traces. Do not treat AIME-style benchmark results as a substitute for auditing prompt provenance, answer normalization, verifier behavior, split policy, and release version.

## 6. What should readers audit?

**Audit risks:**

- Integer-answer transformation can change problem semantics, difficulty, or ambiguity.
- Rule-based answer extraction can accept malformed reasoning or reject equivalent correct answers.
- Dynamic sampling changes the effective training distribution by removing all-correct and all-wrong sampled groups from the update path.
- Overlong Reward Shaping can conflate response length, truncation behavior, and correctness.
- The public release name, HF row count, and unique-prompt semantics need revision-pinned reconciliation.
- Web and competition sources may carry license, provenance, and benchmark-contamination constraints.
- The local metadata does not verify decontamination against every target evaluation suite.

## 7. What is missing or risky?

- Temperature is unknown in the local metadata.
- Exact HF dataset revision, row semantics, and split policy are not pinned.
- Decontamination is unknown.
- Upstream web/competition source terms need review before redistribution or commercial reuse.
- The dataset-server info endpoint does not expose a license string; local metadata records an Apache-2.0 release-level note, but source-level rights still need audit.
- Rejected, ambiguous, all-correct, and all-wrong prompt groups are important for understanding the effective RL distribution but are not fully represented by headline benchmark results.

## 8. What to verify before reuse

- Pin the exact Hugging Face dataset revision and record whether rows mean unique prompts, repeated prompt instances, or another expanded representation.
- Confirm the released schema, split names, sample count, and any processed variants used by your training stack.
- Inspect the answer parser and final-answer extraction code for false positives, false negatives, and formatting assumptions.
- Re-check contamination against the evaluation suites you care about, including AIME-style math benchmarks.
- Review upstream problem-source licenses and terms, not only the release-level license.
- Record rollout count, prompt batch size, maximum generation length, temperature if available, and whether Dynamic Sampling and Overlong Reward Shaping are enabled.
- Keep prompt/answer supervision separate from online rollout traces and token-level optimizer state when building derivative datasets.

## 9. Links and citation

**Official links:**

- Paper: [https://arxiv.org/abs/2503.14476](https://arxiv.org/abs/2503.14476)
- Project page: [https://dapo-sia.github.io/](https://dapo-sia.github.io/)
- Code: [https://github.com/BytedTsinghua-SIA/DAPO](https://github.com/BytedTsinghua-SIA/DAPO)
- Hugging Face dataset: [https://huggingface.co/datasets/BytedTsinghua-SIA/DAPO-Math-17k](https://huggingface.co/datasets/BytedTsinghua-SIA/DAPO-Math-17k)
- Hugging Face collection: [https://huggingface.co/collections/BytedTsinghua-SIA/dapo](https://huggingface.co/collections/BytedTsinghua-SIA/dapo)
- DAPO-Qwen-32B model: [https://huggingface.co/BytedTsinghua-SIA/DAPO-Qwen-32B](https://huggingface.co/BytedTsinghua-SIA/DAPO-Qwen-32B)
- OpenReview: [https://openreview.net/forum?id=2a36EMSSTp](https://openreview.net/forum?id=2a36EMSSTp)
- DOI: [https://doi.org/10.48550/arXiv.2503.14476](https://doi.org/10.48550/arXiv.2503.14476)

- Data ID: `dapo-2025`
- Citation status: verified
- Confidence: high
