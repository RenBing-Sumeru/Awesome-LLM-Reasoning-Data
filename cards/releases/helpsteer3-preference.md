<!-- entry_id: helpsteer3-preference-open-human-annotated-preference-data-across-diverse-tasks-and-langua-2025 -->
<!-- card_type: releases -->
# HelpSteer3-Preference: Open Human-Annotated Preference Data across Diverse Tasks and Languages

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=helpsteer3-preference-open-human-annotated-preference-data-across-diverse-tasks-and-langua-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=helpsteer3-preference-open-human-annotated-preference-data-across-diverse-tasks-and-langua-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=helpsteer3-preference-open-human-annotated-preference-data-across-diverse-tasks-and-langua-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2505.11475) - [Data](https://huggingface.co/datasets/nvidia/HelpSteer3) - [Code](https://github.com/NVIDIA/NeMo-Aligner) - [NeurIPS](https://neurips.cc/virtual/2025/loc/san-diego/poster/121485)

## TL;DR

HelpSteer3-Preference releases human preference annotations over paired responses across General, STEM, Code, and Multilingual task groups.

It is a useful open preference-data release because the record exposes response pairs, domain/language metadata, aggregated preference strength, and short annotator justifications. Its benchmark results should be read as downstream evidence about trained reward models, not as proof that every preference label is reusable.

## 1. What is this work?

This is a NVIDIA preference-data release for reward-model and RLHF research. The paper reports a CC-BY-4.0 human-annotated preference dataset with more than 40,000 samples, specialist annotator pools, and experiments training Bradley-Terry reward models, generative reward models, and aligned policy models.

It belongs in Preference & Reward Feedback Data because the primary artifact is a feedback-bearing preference dataset, not only a model report.

## 2. What data object does it expose?

The reusable record is a preference sample:

- conversation context,
- `response1`,
- `response2`,
- domain metadata,
- language or code metadata,
- individual preference annotations,
- short annotator justifications,
- aggregated overall preference score.

Prompt sourcing is split by subset. Code and Multilingual prompts come from ShareGPT; General and STEM prompts come from WildChat-1M. The response pairs are generated from a pool of commercially permissive models.

## 3. What is the verifier / reward / judge / environment?

The feedback contract is `judgment_required`.

Each sample receives multiple independent human preference annotations. The paper reports specialist annotator pools managed through Scale AI for General, STEM, and Code, and through Translated for Multilingual. The preference signal is post-processed into an overall score from response 1 much better to response 2 much better.

This is not an executable verifier. The preference label can be useful for reward modeling, but it remains a human judgment under a specific annotation protocol.

## 4. How is the data constructed?

The construction pipeline includes:

- prompt sampling from ShareGPT and WildChat-1M,
- stratification by language, topic, and prompt complexity depending on subset,
- response generation from 17 commercially permissive models,
- multi-turn context construction while avoiding legacy assistant-generated turns in context,
- unsafe prompt/response filtering using automated and manual checks,
- 3-5 independent preference annotations per sample,
- outlier and high-disagreement filtering,
- aggregation into an overall preference score.

Unknown or still worth pinning: exact dataset revision used for each experiment, train/validation split construction, sampling temperatures, and full response-generation settings.

## 5. How can it enter post-training?

Recorded uses:

- reward modeling,
- preference learning,
- RLHF policy alignment,
- generative reward-model training.

The paper reports RM-Bench and JudgeBench results for reward models trained from this data. Those benchmark scores should not be treated as standalone data-quality proof; they are downstream evaluations under the paper's model and benchmark setup.

## 6. What should readers audit?

- Specialist annotation still reflects vendor, geography, task, and language assumptions.
- Different subsets use different annotation vendors, which can change preference distributions.
- High-disagreement filtering can remove subjective cases that matter in deployment.
- ShareGPT and WildChat lineage can create privacy, license, and benchmark-overlap concerns.
- Response models and prompt sources may make style cues easier to learn than substantive preference.
- Reward-model benchmark wins can overstate dataset generality if downstream policy behavior is not separately audited.

## 7. What is missing or risky?

- Exact Hugging Face dataset revision.
- Whether the `preference` subset, split, and filtering status match the paper.
- License compatibility for ShareGPT, WildChat-1M, generated responses, and annotations.
- Annotator guidelines and subset-specific qualification rules.
- How samples with overall preference `0` are handled.
- Whether high-disagreement and outlier filtering removes needed ambiguity.
- Overlap with evaluation benchmarks used in downstream training or reporting.
- Whether reward-model training uses the same split that downstream evaluation assumes.

## 8. Why it matters for post-training reasoning data

HelpSteer3-Preference is valuable because it expands open preference data beyond English general chat into STEM, coding, and multilingual settings while retaining a concrete feedback object.

The reusable lesson is to keep the preference record, annotator policy, source mixture, aggregation rule, and failure modes attached to any reward-model or RLHF claim.

## 9. Links and citation

- Institution: NVIDIA.
- Paper: https://arxiv.org/abs/2505.11475
- NeurIPS: https://neurips.cc/virtual/2025/loc/san-diego/poster/121485
- Data: https://huggingface.co/datasets/nvidia/HelpSteer3
- Code: https://github.com/NVIDIA/NeMo-Aligner
- DOI: https://doi.org/10.48550/arXiv.2505.11475
- Data ID: `helpsteer3-preference-open-human-annotated-preference-data-across-diverse-tasks-and-langua-2025`
- Citation status: verified
- Confidence: high
