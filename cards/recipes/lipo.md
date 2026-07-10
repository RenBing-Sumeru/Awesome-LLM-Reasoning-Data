<!-- entry_id: lipo-listwise-preference-optimization-through-learning-to-rank-2024 -->
<!-- card_type: recipes -->
# LiPO: Listwise Preference Optimization through Learning-to-Rank

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=lipo-listwise-preference-optimization-through-learning-to-rank-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=lipo-listwise-preference-optimization-through-learning-to-rank-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=lipo-listwise-preference-optimization-through-learning-to-rank-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2402.01878)

## TL;DR

LiPO treats preference optimization as learning from a ranked list of responses, rather than only from one chosen/rejected pair.

The card is about the listwise supervision contract; it is not a standalone data release.

## 1. What is this work?

LiPO is a preference-optimization recipe that maps language-model alignment onto learning-to-rank objectives. DPO and SLiC are discussed as special cases when the list size is two.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- ranked response list,
- response label or rank,
- ranking loss,
- pairwise projection if used.

The local metadata records Reddit TL;DR, AnthropicHH, and OpenAssistant in the experiments.

## 3. What is the verifier / reward / judge / environment?

The feedback signal is a ranked list. It can come from human rankings, reward-model rankings, or AI-feedback rankings.

This should not be flattened into ordinary pairwise data without recording the projection rule, because listwise feedback can encode ordering among more than two responses.

## 4. How is the data constructed?

The reported recipe includes:

- sample multiple responses per prompt from an SFT policy,
- rank responses with human labels or a reward-ranking model,
- train with listwise learning-to-rank objectives,
- compare objectives that reduce to pairwise preference learning when list size is two,
- filter the OpenAssistant subset to non-English-free examples with exactly three ranked responses.

Recorded model details include T5-large and T5-XXL policy settings. Unknown in the local metadata: temperature, inference budget, license, decontamination, and official code/data artifacts.

## 5. How can it enter post-training?

Recorded use:

- preference learning.

Use LiPO to classify listwise preference records and objective choices. Do not cite it as releasing a curated listwise preference dataset.

## 6. What should readers audit?

- Rankings may be inconsistent across annotators or reward models.
- Listwise-to-pairwise projection can hide disagreement structure.
- A reward-ranking model can introduce model-specific label bias.
- Dataset splits come from several sources and need separate license checks.
- Ranking-objective gains should not be treated as direct evidence of label quality.

## 7. What is missing or risky?

- Whether the ranking source is human, reward-model, or AI feedback.
- List size for each dataset.
- Projection rule when converting lists to pairs.
- Exact Reddit TL;DR, AnthropicHH, and OpenAssistant revisions.
- License and filtering rules for each source.
- Whether evaluation data influenced ranking-model or hyperparameter choices.

## 8. Why it matters for post-training reasoning data

LiPO helps the atlas distinguish pairwise preference supervision from richer ranked-list supervision, which matters when multiple candidate reasoning traces are available for one prompt.

## 9. Links and citation

- Institution: Google DeepMind; Google.
- arXiv: https://arxiv.org/abs/2402.01878
- DOI: https://doi.org/10.48550/arXiv.2402.01878
- Code: null
- Data: null
- Data ID: `lipo-listwise-preference-optimization-through-learning-to-rank-2024`
- Citation status: verified
- Confidence: medium
