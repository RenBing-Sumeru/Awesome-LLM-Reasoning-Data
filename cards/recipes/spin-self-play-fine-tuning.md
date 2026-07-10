<!-- entry_id: spin-self-play-fine-tuning-converts-weak-language-models-to-strong-language-mode-2024 -->
<!-- card_type: recipes -->
# SPIN: Self-Play Fine-Tuning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spin-self-play-fine-tuning-converts-weak-language-models-to-strong-language-mode-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spin-self-play-fine-tuning-converts-weak-language-models-to-strong-language-mode-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spin-self-play-fine-tuning-converts-weak-language-models-to-strong-language-mode-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2401.01335) · [Code](https://github.com/uclaml/SPIN) · [Data](https://huggingface.co/datasets/UCLA-AGI/SPIN_iter0) · [Project](https://uclaml.github.io/SPIN/) · [HF](https://huggingface.co/UCLA-AGI/zephyr-7b-sft-full-SPIN-iter0) · [DOI](https://doi.org/10.48550/arXiv.2401.01335)

## TL;DR

SPIN pairs real SFT responses with model-generated responses and iteratively fine-tunes through a self-play objective.

It is a compact example of demonstration-anchored self-play where the model's own responses become contrastive training records.

## 1. What is this work?

- Year / venue: 2024 · ICML.
- Atlas role: construction_recipe.
- Track decision: Track 01 · Self-training / STaR.
- Domains: instruction_following, self_training, self_play.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: UltraChat200k-derived prompts sampled for self-play.
- Trace/action author: Current or previous-iteration model generates responses.
- Answer/artifact format: Pair of real SFT response and generated response for the same prompt.
- Process fields: real_prompt_response, generated_prompt_response, iteration, dataset_mixer.
- Environment or substrate: Offline self-play fine-tuning pipeline.
- Terminal predicate: Training objective improves alignment toward target data distribution.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required.
- Recorded verifier/reward/environment: SPIN objective distinguishes self-generated responses from target SFT responses.
- Supervision granularity: pairwise_preference.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Original SFT data acts as target distribution.
- Generator: Model checkpoints from previous SPIN iterations.
- Filtering rule: Iteration data conversion/mixing; no new human preference labels.
- Sampling protocol: Generate synthetic responses per iteration, convert to paired data, fine-tune.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: SPIN self-play fine-tuning objective.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, preference_learning.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Pin checkpoint revision, prompt sample, generated data version, and iteration.
- Audit self-generated style bias and benchmark overfitting.
- Check dataset/model licenses.

## 7. What is missing or risky?

- Official proceedings URL was not pinned.
- Complete HF collection and split details should be checked before reuse.

## 8. Why it matters for post-training reasoning data

It is a compact example of demonstration-anchored self-play where the model's own responses become contrastive training records.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2401.01335) · [Code](https://github.com/uclaml/SPIN) · [Data](https://huggingface.co/datasets/UCLA-AGI/SPIN_iter0) · [Project](https://uclaml.github.io/SPIN/) · [HF](https://huggingface.co/UCLA-AGI/zephyr-7b-sft-full-SPIN-iter0) · [DOI](https://doi.org/10.48550/arXiv.2401.01335)

- Data ID: `spin-self-play-fine-tuning-converts-weak-language-models-to-strong-language-mode-2024`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
