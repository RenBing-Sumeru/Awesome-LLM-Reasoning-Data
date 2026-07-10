<!-- entry_id: optune-efficient-online-preference-tuning-2024 -->
<!-- card_type: recipes -->
# OPTune: Efficient Online Preference Tuning

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=optune-efficient-online-preference-tuning-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=optune-efficient-online-preference-tuning-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=optune-efficient-online-preference-tuning-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2406.07657)

## TL;DR

OPTune improves online preference tuning efficiency by regenerating lower-reward prompts and weighting response pairs by reward gaps.

The data object is an online stream of policy responses scored by a reward model. It is not a new audited preference dataset release.

## 1. What is this work?

OPTune is an online preference-tuning recipe. It tries to spend generation and training budget on prompts whose new responses are likely to provide useful preference signal.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- current policy response,
- regenerated response,
- reward score,
- reward gap,
- selected preferred response,
- selected rejected response,
- prompt selection rank.

The local metadata records UltraChat 200K prompts, with 48K prompts randomly sampled for the fixed online-training prompt set.

## 3. What is the verifier / reward / judge / environment?

The verifier is a reward model with a Mistral-7B backbone, used to score online generated responses.

This is model-judged feedback. Reward-model bias affects both which prompts are selected and how response pairs are weighted.

## 4. How is the data constructed?

The reported recipe includes:

- start from Zephyr-7b-sft-full, SFT-ed on UltraChat200K,
- sample online responses from the current policy,
- rank prompts by reward,
- regenerate low-reward prompts while reusing high-reward responses,
- select response pairs,
- weight pairs by reward gap,
- train with online DPO or weighted DPO for three main iterations.

Recorded decoding and training details include temperature 1.0, top_p 0.9, prompt length 512, generation length 512, RMSProp, learning rate 5e-7, warmup ratio 0.1, and batch size 128.

Unknown in the local metadata: official code, standalone data artifact, exact random seed, source-data license, and decontamination.

## 5. How can it enter post-training?

Recorded use:

- preference learning.

Use OPTune to study online preference-data selection and weighting. Do not use training speedup or benchmark gains as evidence that the reward labels are clean.

## 6. What should readers audit?

- Reward-model bias can drive both prompt selection and training weight.
- Low-reward prompt selection may over-focus on reward-model-specific weaknesses.
- Reusing high-reward responses changes the effective data distribution.
- UltraChat and UltraFeedback provenance should be audited separately.
- Efficiency gains can be confused with data-quality claims.

## 7. What is missing or risky?

- Exact UltraChat and UltraFeedback revisions.
- Reward-model checkpoint and license.
- Prompt-sampling random seed.
- Whether response pairs are released or must be regenerated.
- Temperature, top_p, sequence lengths, and training iterations.
- License and decontamination status of all source data.

## 8. Why it matters for post-training reasoning data

OPTune shows that preference data can be treated as an online acquisition process. The important object is not just a chosen/rejected pair, but the loop that decides which prompts deserve new responses.

## 9. Links and citation

- Institution: University of Maryland; Carnegie Mellon University; Texas A&M University; Sony AI.
- arXiv: https://arxiv.org/abs/2406.07657
- DOI: https://doi.org/10.48550/arXiv.2406.07657
- Code: null
- Data: null
- Data ID: `optune-efficient-online-preference-tuning-2024`
- Citation status: verified
- Confidence: medium
