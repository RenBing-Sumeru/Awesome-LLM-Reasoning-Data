<!-- entry_id: understanding-likelihood-over-optimisation-in-direct-alignment-algorithms-2024 -->
<!-- card_type: failures -->
# Understanding Likelihood Over-optimisation in Direct Alignment Algorithms

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=understanding-likelihood-over-optimisation-in-direct-alignment-algorithms-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=understanding-likelihood-over-optimisation-in-direct-alignment-algorithms-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=understanding-likelihood-over-optimisation-in-direct-alignment-algorithms-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, audit_failure_contamination_verifier_attacks, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2410.11677)

## TL;DR

This paper audits likelihood over-optimisation in direct alignment algorithms using likelihood, entropy, top-k probability mass, and reward-model win-probability diagnostics.

Its role is diagnostic. Higher preferred-completion likelihood should not be treated as direct evidence of better preference data or better alignment.

## 1. What is this work?

The paper studies DPO, IPO, and Hinge-style direct alignment runs and asks when optimizing preferred-completion likelihood starts to harm diversity or generalization.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- preferred completion,
- non-preferred completion,
- alignment algorithm,
- completion likelihood,
- likelihood margin,
- entropy over top-k tokens,
- top-k probability mass,
- win probability,
- factuality or diversity metric.

The local metadata records binarized UltraFeedback, BinarizedPref, NaturalQuestionsOpen, and TriviaQA. BinarizedPref split details remain unknown.

## 3. What is the verifier / reward / judge / environment?

The verifier surface combines preference objectives with reward-model or LLM-as-judge win-probability diagnostics.

Likelihood, entropy, and top-k mass are audit measurements. They are not human preference labels.

## 4. How is the data constructed?

The reported audit recipe includes:

- train direct-alignment models on binarized preference data,
- compare DPO, IPO, and Hinge-style objectives,
- vary regularization and hyperparameters,
- measure preferred-completion likelihood and likelihood margin,
- inspect entropy and top-k probability mass,
- compare with reward-model win-probability and task metrics.

Recorded setup includes Cohere Command R 7B and 35B, batch size 32, max sequence length 8192, one epoch, 128 warmup steps, and Adam. Unknown locally: official code/data artifacts, source licenses, exact decoding temperature, and decontamination.

## 5. How can it enter post-training?

Recorded use:

- audit,
- evaluation.

Use this card to audit DPO-like training dynamics. Do not use likelihood diagnostics as proof that preference labels are clean.

## 6. What should readers audit?

- Higher preferred likelihood can reflect memorization.
- Likelihood margin can be misread as alignment quality.
- Reward-model win probability is a proxy for human preference.
- Diversity loss may be hidden by aggregate win rates.
- Source preference datasets need separate license and contamination checks.

## 7. What is missing or risky?

- Exact binarized UltraFeedback and BinarizedPref revisions.
- BinarizedPref split and filtering.
- Official code or reproduction scripts.
- Decoding settings and evaluation prompts.
- Reward-model or judge used for win probability.
- Source licenses and decontamination.

## 8. Why it matters for post-training reasoning data

The card keeps a failure mode visible: optimizing the preference objective can improve the training signal while narrowing model behavior. That matters whenever reasoning traces are selected through likelihood-weighted preference optimization.

## 9. Links and citation

- Institution: Cohere; Cohere For AI.
- arXiv: https://arxiv.org/abs/2410.11677
- DOI: https://doi.org/10.48550/arXiv.2410.11677
- Code: null
- Data: null
- Data ID: `understanding-likelihood-over-optimisation-in-direct-alignment-algorithms-2024`
- Citation status: verified
- Confidence: medium
