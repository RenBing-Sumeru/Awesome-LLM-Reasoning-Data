<!-- entry_id: multimodal-rewardbench-2-evaluating-omni-reward-models-for-interleaved-text-and-image-2025 -->
<!-- card_type: verifiers -->
# Multimodal RewardBench 2: Evaluating Omni Reward Models for Interleaved Text and Image
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=multimodal-rewardbench-2-evaluating-omni-reward-models-for-interleaved-text-and-image-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=multimodal-rewardbench-2-evaluating-omni-reward-models-for-interleaved-text-and-image-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=multimodal-rewardbench-2-evaluating-omni-reward-models-for-interleaved-text-and-image-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data
> Links: [arXiv](https://arxiv.org/abs/2512.16899) - [Code](https://github.com/facebookresearch/MMRB2) - [Data](https://huggingface.co/datasets/rl-research/multimodal-rewardbench-2)

## TL;DR

Multimodal RewardBench 2 releases 4,000 expert-annotated preference pairs for evaluating omni reward models across text-to-image, image editing, interleaved generation, and multimodal reasoning.

It is a benchmark for reward-model evaluation. Expert agreement and leaderboard results should not be treated as proof of downstream reward quality.

## 1. What is this work?

The paper builds a multimodal reward-model benchmark where prompts and responses can contain interleaved text and images.

## 2. What data object does it expose?

The relevant record is:

- pair_id,
- prompt text/images,
- response_a text/images,
- response_b text/images,
- chosen label,
- response model identifiers,
- human annotations,
- prompt source,
- prompt metadata.

## 3. What is the verifier / reward / judge / environment?

The verifier is an expert-annotated preference label. The benchmark also uses ensemble filtering and a positional-consistent evaluation protocol.

The terminal predicate is whether a reward model or judge selects the expert-preferred multimodal response.

## 4. How is the data constructed?

The reported recipe includes:

- collect prompts from 21 existing and newly created task sources,
- generate candidate outputs from 23 models and agents,
- cover text-to-image, image editing, interleaved generation, and multimodal reasoning,
- use ensemble filtering,
- keep preference pairs with strong expert agreement.

Unknown locally: generation temperature and broader model-training contamination.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling.

Use it to audit omni/multimodal reward models. Do not treat benchmark performance as proof that a reward model is reliable for training.

## 6. What should readers audit?

- Multimodal judges can fail from image understanding errors.
- AI-generated outputs may carry model/provider-specific artifacts.
- Third-party prompt and image licenses need reuse-time checks.
- Existing benchmark test splits reduce one leakage path but do not prove broad decontamination.

## 7. What is missing or risky?

- HF dataset revision and CC BY-NC 4.0 terms.
- Third-party prompt/image licenses.
- Source-dataset overlap with local training or evaluation data.
- Human annotation protocol and agreement thresholds.
- Whether the target use is allowed under non-commercial licensing.

## 8. Why it matters for post-training reasoning data

It extends preference/reward feedback from text-only judgments to interleaved text-image outputs where visual and textual correctness interact.

## 9. Links and citation

- Institution: FAIR at Meta Superintelligence Labs; University of Washington.
- Official links: arXiv, GitHub, and Hugging Face dataset.
- arXiv: https://arxiv.org/abs/2512.16899
- DOI: https://doi.org/10.48550/arXiv.2512.16899
- Code: https://github.com/facebookresearch/MMRB2
- Data: https://huggingface.co/datasets/rl-research/multimodal-rewardbench-2
- Data ID: `multimodal-rewardbench-2-evaluating-omni-reward-models-for-interleaved-text-and-image-2025`
- Citation status: verified
- Confidence: high
