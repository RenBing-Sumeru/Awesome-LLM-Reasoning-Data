<!-- entry_id: scaling-laws-for-reward-model-overoptimization-in-direct-alignment-algorithms-2024 -->
<!-- card_type: failures -->
# Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-laws-for-reward-model-overoptimization-in-direct-alignment-algorithms-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-laws-for-reward-model-overoptimization-in-direct-alignment-algorithms-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-laws-for-reward-model-overoptimization-in-direct-alignment-algorithms-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, audit_failure_contamination_verifier_attacks, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2406.02900)

## TL;DR

This paper audits reward-model overoptimization in direct alignment algorithms across KL budgets, objectives, datasets, and model scales.

Its contribution is an overoptimization audit surface. It does not prove that the underlying preference data is clean.

## 1. What is this work?

The paper studies whether direct alignment algorithms can over-optimize proxy rewards, even when they do not explicitly train and optimize a separate reward model in the classic RLHF loop.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- chosen response,
- rejected response,
- alignment algorithm,
- beta or KL budget,
- proxy reward,
- gold-reward proxy,
- win rate,
- model scale.

The local metadata records a curated OpenAI Reddit TL;DR summarization preference dataset and Anthropic-HH appendix experiments.

## 3. What is the verifier / reward / judge / environment?

The verifier surface is proxy reward plus GPT-4-turbo-2024-04-09 win-rate diagnostics.

GPT-4 win rate is a quality proxy, not direct human ground truth. It should be treated as an audit signal rather than a replacement for human preference.

## 4. How is the data constructed?

The reported audit recipe includes:

- train direct alignment algorithms on preference data,
- vary objectives such as DPO, IPO, and SLiC-style losses,
- vary KL budgets and beta values,
- compare proxy reward against a gold-quality proxy,
- repeat across model scales.

Recorded settings include Pythia 1B, 2.8B, and 6.9B, Gemma2-2B in appendix, 92K TL;DR preference completions for training, 256 held-out prompts, batch size 128, 8 gradient accumulation steps, RMSProp, 150 warmup steps, and 1 epoch.

Unknown locally: official author code, temperature, rendered max-length and learning-rate values, exact dataset revisions, and decontamination.

## 5. How can it enter post-training?

Recorded use:

- audit,
- evaluation.

Use this card to audit proxy-reward overoptimization in preference training. Do not treat its benchmark or win-rate results as data-quality proof.

## 6. What should readers audit?

- GPT-4 win rate is a proxy and can have judge bias.
- Overoptimization trends depend on KL budget, beta, model scale, and dataset.
- Proxy/gold reward definitions may not transfer to other tasks.
- TL;DR and Anthropic-HH licenses and revisions need separate checks.
- Direct alignment algorithms can still optimize the wrong signal.

## 7. What is missing or risky?

- Exact TL;DR comparison dataset revision.
- Whether official author code exists.
- DPO codebase version used.
- GPT-4 judging prompt and model snapshot.
- Max-length and learning-rate values from the PDF.
- License and decontamination status.
- Whether target evaluation uses similar summarization prompts.

## 8. Why it matters for post-training reasoning data

This card is a reminder that preference objectives do not remove verifier risk. Even direct alignment can overfit proxy feedback when the proxy and target quality diverge.

## 9. Links and citation

- Institution: Stanford University; The University of Texas at Austin; Cornell University.
- arXiv: https://arxiv.org/abs/2406.02900
- DOI: https://doi.org/10.48550/arXiv.2406.02900
- Code: null
- Data: null
- Data ID: `scaling-laws-for-reward-model-overoptimization-in-direct-alignment-algorithms-2024`
- Citation status: verified
- Confidence: medium
