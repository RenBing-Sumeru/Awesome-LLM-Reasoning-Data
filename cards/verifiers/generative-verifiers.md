<!-- entry_id: generative-verifiers-reward-modeling-as-next-token-prediction-2024 -->
<!-- card_type: verifiers -->
# Generative Verifiers: Reward Modeling as Next-Token Prediction

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-verifiers-reward-modeling-as-next-token-prediction-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-verifiers-reward-modeling-as-next-token-prediction-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-verifiers-reward-modeling-as-next-token-prediction-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, process_trace_supervision_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2408.15240)

## TL;DR

Generative Verifiers trains verifier models with next-token prediction over verification rationales and judgments for Best-of-N reasoning selection.

The useful signal is generative verification, not just a scalar score.

## 1. What is this work?

The paper reframes reward modeling as next-token prediction. A verifier generates rationales and correctness judgments, and those judgments can rank candidate solutions.

## 2. What data object does it expose?

The relevant record is:

- problem,
- candidate solution,
- generated solution,
- verification rationale,
- correctness label,
- verifier output token,
- majority-vote samples.

The local metadata records algorithmic tasks, GSM8K, MATH500, and MMLU abstract algebra.

## 3. What is the verifier / reward / judge / environment?

The verifier is a generative model trained to emit verification rationales and judgments. The supervision is mixed: programmatic oracle rationales for algorithmic tasks and Gemini-assisted synthetic rationales for GSM8K.

This is not equivalent to human step-level proof checking.

## 4. How is the data constructed?

The reported recipe includes:

- generate candidate solutions,
- generate or construct verification rationales,
- filter synthetic rationales using correctness,
- balance correct and incorrect solutions,
- train a generative verifier as next-token prediction,
- use Best-of-N or majority voting for selection.

Recorded details include Gemma-2B for algorithmic tasks, Gemma 2B/7B and Gemma-2 9B for GSM8K, Gemini 1.0 Pro for GSM8K synthetic rationale generation, and 16 solutions per GSM8K problem at test.

Unknown locally: official code/data artifacts, exact decoding settings, source licenses, and decontamination.

## 5. How can it enter post-training?

Recorded use:

- reward modeling,
- evaluation.

Use this as a verifier/reward-modeling recipe. Do not treat Best-of-N improvements as proof that verifier labels are calibrated.

## 6. What should readers audit?

- Synthetic rationales may contain errors.
- Programmatic and model-generated rationales have different reliability.
- Prompt format can affect next-token verifier outputs.
- Best-of-N can exploit verifier weaknesses.
- Dataset contamination needs separate audit for GSM8K and MATH500.

## 7. What is missing or risky?

- Exact task dataset revisions and splits.
- Gemini rationale-generation prompt.
- Balance rule for correct and incorrect solutions.
- Decoding settings for verifier samples.
- Whether generated rationales are released.
- License and decontamination details.

## 8. Why it matters for post-training reasoning data

Generative Verifiers makes verifier text part of the reward contract. That is especially relevant for reasoning data, where the rationale used to judge a solution may shape what models learn to imitate.

## 9. Links and citation

- Institution: Google DeepMind; Google Research.
- arXiv: https://arxiv.org/abs/2408.15240
- DOI: https://doi.org/10.48550/arXiv.2408.15240
- Code: null
- Data: null
- Data ID: `generative-verifiers-reward-modeling-as-next-token-prediction-2024`
- Citation status: verified
- Confidence: medium
