<!-- entry_id: kto-model-alignment-as-prospect-theoretic-optimization-2024 -->
<!-- card_type: recipes -->
# KTO: Model Alignment as Prospect Theoretic Optimization

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=kto-model-alignment-as-prospect-theoretic-optimization-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=kto-model-alignment-as-prospect-theoretic-optimization-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=kto-model-alignment-as-prospect-theoretic-optimization-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2402.01306) - [OpenReview](https://openreview.net/forum?id=iUwHnoENnl) - [Code](https://github.com/ContextualAI/HALOs) - [Models](https://huggingface.co/collections/ContextualAI/archangel)

## TL;DR

KTO trains from binary desirable/undesirable feedback instead of requiring strictly paired chosen/rejected comparisons.

Its contribution is a different feedback contract, not a new guarantee that binary labels are high quality.

## 1. What is this work?

KTO is a preference-optimization recipe based on prospect-theoretic utility. It belongs in Preference & Reward Feedback because it changes the minimum data object: a single response can be labeled desirable or undesirable without a paired alternative.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- response,
- desirable or undesirable label,
- KTO objective weight.

Pairwise datasets can be converted by treating preferred outputs as desirable and rejected outputs as undesirable, but the resulting object is binary feedback.

## 3. What is the verifier / reward / judge / environment?

The feedback signal is a binary desirability label. It may come from native binary feedback or from transformed preference datasets such as HH, SHP, and OASST.

This coarser signal should not be described as equivalent to pairwise comparison. It says whether an output is good or bad under a label policy, not why one output beats another.

## 4. How is the data constructed?

The recipe includes:

- use binary feedback examples directly,
- convert pairwise preference data into desirable/undesirable examples when needed,
- optionally threshold score or rating data, although score-based HALOs are left to future work,
- in some experiments, subsample one output per input to remove paired-preference structure,
- optimize the KTO prospect-theoretic objective.

Unknown in the local metadata: dataset split, decontamination, license, rollout count, temperature, and inference budget.

## 5. How can it enter post-training?

Recorded use:

- preference learning.

Use KTO to reason about data requirements for alignment objectives. Do not list it as a new preference dataset release.

## 6. What should readers audit?

- Binary labels hide the comparison context.
- Class imbalance changes the effective objective.
- Pairwise-to-binary conversion can discard useful disagreement structure.
- Prospect-theoretic utility is an optimization assumption, not data-quality evidence.
- Model results do not prove that the binary labels are robust.

## 7. What is missing or risky?

- Whether labels are native binary labels or converted pairwise preferences.
- Positive/negative class balance.
- Source dataset license and label policy.
- Whether prompts with multiple responses were collapsed.
- Whether model artifacts and training code match the paper version.
- Whether evaluation data influenced label conversion or hyperparameter search.

## 8. Why it matters for post-training reasoning data

KTO makes binary feedback a first-class object for the atlas. It helps curators avoid assuming that all preference optimization starts from chosen/rejected pairs.

## 9. Links and citation

- Institution: Stanford University; Contextual AI.
- arXiv: https://arxiv.org/abs/2402.01306
- OpenReview: https://openreview.net/forum?id=iUwHnoENnl
- Code: https://github.com/ContextualAI/HALOs
- Models: https://huggingface.co/collections/ContextualAI/archangel
- DOI: https://doi.org/10.48550/arXiv.2402.01306
- Data ID: `kto-model-alignment-as-prospect-theoretic-optimization-2024`
- Citation status: verified
- Confidence: high
