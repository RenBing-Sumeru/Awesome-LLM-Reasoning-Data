<!-- entry_id: how-well-can-preference-optimization-generalize-under-noisy-feedback-2025 -->
<!-- card_type: failures -->
# How Well Can Preference Optimization Generalize Under Noisy Feedback?

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=how-well-can-preference-optimization-generalize-under-noisy-feedback-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=how-well-can-preference-optimization-generalize-under-noisy-feedback-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=how-well-can-preference-optimization-generalize-under-noisy-feedback-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, audit_failure_contamination_verifier_attacks, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2510.01458)

## TL;DR

This paper studies how preference optimization generalizes when pairwise feedback is noisy through mislabeling or uncertainty.

The card is an audit lens for noisy preference pairs, not a dataset card.

## 1. What is this work?

The paper analyzes preference optimization under noisy feedback. It is useful for curators because preference datasets often hide label noise, annotator disagreement, or uncertainty behind a single chosen/rejected pair.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- chosen response,
- rejected response,
- observed preference label,
- noise type,
- noise rate,
- preference loss.

Unknown in the local metadata: prompt source, base model, generator, source mixture, split, license, and decontamination.

## 3. What is the verifier / reward / judge / environment?

The verifier is a noisy preference label model covering mislabeling and uncertainty.

This is not the same as a human-preference release. The paper is mainly about what preference optimization can or cannot learn when the feedback process is imperfect.

## 4. How is the data constructed?

The recipe is analytical rather than a data release:

- define noisy preference-feedback settings,
- study finite-step preference optimization under those settings,
- compare behavior of DPO, IPO, SLiC, and related losses,
- use empirical validation, with exact empirical data lineage still unknown in local metadata.

Unknown locally: empirical datasets, base models, rollout count, temperature, inference budget, and released artifacts.

## 5. How can it enter post-training?

Recorded use:

- audit,
- preference learning.

Use this card to audit assumptions behind preference objectives. Do not cite it as a source of reusable preference examples.

## 6. What should readers audit?

- Modeled noise may not capture real annotator disagreement.
- Theoretical guarantees depend on preference-distribution assumptions.
- Empirical validation should not be treated as a released dataset.
- Noisy labels can include plural values, not only mistakes.
- Missing artifact details limit reuse.

## 7. What is missing or risky?

- Empirical datasets used in the paper.
- Base models and preference objectives.
- Whether code or data artifacts are officially released.
- Noise models and their assumptions.
- Whether label uncertainty is distinguishable from preference pluralism.
- License and decontamination details.

## 8. Why it matters for post-training reasoning data

The paper keeps a simple but important warning visible: chosen/rejected pairs are not automatically clean supervision. Preference feedback can be noisy, ambiguous, or mis-specified.

## 9. Links and citation

- Institution: New York University.
- arXiv: https://arxiv.org/abs/2510.01458
- DOI: https://doi.org/10.48550/arXiv.2510.01458
- Code: null
- Data: null
- Data ID: `how-well-can-preference-optimization-generalize-under-noisy-feedback-2025`
- Citation status: verified
- Confidence: medium
