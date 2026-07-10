<!-- entry_id: a-comprehensive-survey-of-reward-models-taxonomy-applications-challenges-and-future-2025 -->
<!-- card_type: recipes -->
# A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-comprehensive-survey-of-reward-models-taxonomy-applications-challenges-and-future-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-comprehensive-survey-of-reward-models-taxonomy-applications-challenges-and-future-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-comprehensive-survey-of-reward-models-taxonomy-applications-challenges-and-future-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data
> Links: [arXiv](https://arxiv.org/abs/2504.12328) - [Project](https://github.com/JLZhong23/awesome-reward-models)

## TL;DR

This survey organizes reward-model research across preference collection, reward-model training, use cases, applications, benchmarks, and failure modes.

It is useful as a taxonomy. It is not itself a reusable preference dataset or proof that any listed artifact is high quality.

## 1. What is this work?

The paper is a reward-model survey for the LLM era. In this atlas, it belongs as background for classifying feedback sources, reward forms, and evaluation surfaces.

## 2. What data object does it expose?

The relevant object is a literature taxonomy rather than a row-level dataset:

- preference source,
- reward model type,
- reward granularity,
- usage mode,
- benchmark,
- challenge or failure mode.

There are no per-example prompts, traces, chosen/rejected labels, or verifier outputs released by the paper itself.

## 3. What is the verifier / reward / judge / environment?

The survey describes reward models as proxy objectives for post-training, selection, evaluation, and agentic feedback.

The local verifier contract is `judgment_required` and `mixed` only at taxonomy level. There is no per-example verifier contract to reuse.

## 4. How is the data constructed?

The reported construction is a literature review and companion resource list. It organizes reward models by:

- collection of preference data,
- reward-model methods,
- use in post-training or inference,
- application domains,
- benchmark/evaluation setup,
- challenges and risks.

Unknown locally: companion repository license and exact inclusion criteria for every resource-list item.

## 5. How can it enter post-training?

Recorded use:

- audit,
- survey_background.

Use it to classify reward-model papers before comparing artifacts. Do not cite it as evidence that a specific reward dataset, reward model, or benchmark is clean.

## 6. What should readers audit?

- Survey coverage can be incomplete.
- Taxonomy placement can hide artifact-level provenance differences.
- Resource-list inclusion is not quality validation.
- Benchmark summaries can blur label source, split, license, and contamination details.

## 7. What is missing or risky?

- Whether a cited item has official code, data, and license.
- The concrete feedback object for each referenced work.
- Whether the reward signal is human, AI, programmatic, or mixed.
- Whether benchmark results are being confused with data quality.
- Companion repository license and update policy.

## 8. Why it matters for post-training reasoning data

The survey gives readers a map for separating preference data, reward models, verifier rewards, and benchmark surfaces before curating concrete entries.

## 9. Links and citation

- Institution: Peking University; Fudan University; Huazhong University of Science and Technology; Ant Group.
- Official links: arXiv, DOI, and companion project.
- arXiv: https://arxiv.org/abs/2504.12328
- DOI: https://doi.org/10.48550/arXiv.2504.12328
- Project: https://github.com/JLZhong23/awesome-reward-models
- Code: null
- Data: null
- Data ID: `a-comprehensive-survey-of-reward-models-taxonomy-applications-challenges-and-future-2025`
- Citation status: verified
- Confidence: high
