<!-- entry_id: vl-rewardbench-a-challenging-benchmark-for-vision-language-generative-reward-models-2024 -->
<!-- card_type: verifiers -->
# VL-RewardBench: A Challenging Benchmark for Vision-Language Generative Reward Models
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=vl-rewardbench-a-challenging-benchmark-for-vision-language-generative-reward-models-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=vl-rewardbench-a-challenging-benchmark-for-vision-language-generative-reward-models-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=vl-rewardbench-a-challenging-benchmark-for-vision-language-generative-reward-models-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data
> Links: [arXiv](https://arxiv.org/abs/2411.17451) - [Project](https://vl-rewardbench.github.io/) - [Data](https://huggingface.co/datasets/MMInstruction/VL-RewardBench)

## TL;DR

VL-RewardBench evaluates vision-language reward models with 1,250 human-verified multimodal preference examples.

It is an evaluation benchmark, not evidence that a multimodal judge or reward model is visually grounded in all deployment settings.

## 1. What is this work?

The paper releases a vision-language reward-model benchmark covering general multimodal queries, hallucination detection, and multimodal knowledge/math reasoning.

## 2. What data object does it expose?

The relevant record is:

- id,
- query,
- image,
- response pair,
- human_ranking,
- models,
- judge,
- rationale,
- query_source,
- ground_truth.

## 3. What is the verifier / reward / judge / environment?

The verifier is AI-assisted and human-verified. The benchmark uses model assistance for sample selection and labeling, then human verification to remove ambiguous or incorrect pairs.

The terminal predicate is whether the VL reward model or judge selects the human-verified better response.

## 4. How is the data constructed?

The reported recipe includes:

- source examples from VLFeedback, WildVision, POVID, RLAIF-V, RLHF-V, MMMU-Pro, and MathVerse,
- filter challenging cases with small LVLMs,
- use stronger models and GPT-4o quality assessment for reasoning tasks,
- apply human verification,
- release benchmark examples and evaluation code.

Unknown locally: generation temperature and exact source-dataset license compatibility.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling.

Use it to evaluate multimodal reward models. Do not treat benchmark correlation with other vision-language benchmarks as data-quality proof.

## 6. What should readers audit?

- Multimodal judges can fail from visual perception errors.
- AI-assisted labels can inherit model bias before human verification.
- Image/source dataset licensing needs reuse-time checking.
- Visual hallucination and reasoning subsets should be audited separately.

## 7. What is missing or risky?

- HF dataset revision and MIT license details.
- Image provenance and source-dataset constraints.
- Human verification protocol.
- Generation settings for candidate responses.
- Whether local reward models trained on overlapping source datasets.

## 8. Why it matters for post-training reasoning data

It adds multimodal preference feedback to the track and makes visual perception an explicit failure mode for reward/verifier models.

## 9. Links and citation

- Institution: HKU; SCUT; SJTU; PKU; University of Washington; Allen Institute for AI.
- Official links: arXiv, project, code, and Hugging Face dataset.
- arXiv: https://arxiv.org/abs/2411.17451
- DOI: https://doi.org/10.48550/arXiv.2411.17451
- Project: https://vl-rewardbench.github.io/
- Code: https://github.com/vl-rewardbench/VL_RewardBench
- Data: https://huggingface.co/datasets/MMInstruction/VL-RewardBench
- Data ID: `vl-rewardbench-a-challenging-benchmark-for-vision-language-generative-reward-models-2024`
- Citation status: verified
- Confidence: high
