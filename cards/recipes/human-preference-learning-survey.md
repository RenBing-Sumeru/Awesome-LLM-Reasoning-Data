<!-- entry_id: a-survey-on-human-preference-learning-for-large-language-models-2024 -->
<!-- card_type: recipes -->
# A Survey on Human Preference Learning for Large Language Models

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-on-human-preference-learning-for-large-language-models-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-on-human-preference-learning-for-large-language-models-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=a-survey-on-human-preference-learning-for-large-language-models-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2406.11191)

## TL;DR

This survey organizes human preference learning for LLMs around feedback sources, feedback formats, preference modeling, preference usage, and evaluation.

It is useful as a taxonomy card. It is not a data release, reward model, benchmark, or verifier artifact.

## 1. What is this work?

This is a survey paper for curators and readers who need vocabulary before classifying preference/reward feedback entries. It covers human feedback, model feedback, inductive-bias feedback, pairwise and listwise formats, scalar scores, textual critiques, reward modeling, DPO-style methods, RLHF, and evaluation.

Use it to route primary papers. Do not cite it as evidence that a particular dataset is reusable.

## 2. What data object does it expose?

The data object is a literature taxonomy:

- preference source,
- feedback format,
- preference model type,
- preference usage objective,
- evaluation protocol.

There is no released trainable preference corpus attached to this card. The reusable artifact is the survey structure, not rows of feedback data.

## 3. What is the verifier / reward / judge / environment?

The paper describes feedback contracts rather than introducing one. Its taxonomy includes:

- direct human feedback,
- model-generated feedback,
- feedback from inductive biases,
- pairwise comparison,
- listwise ranking,
- numerical scores,
- binary labels,
- feedback texts.

The verification contract for this card is therefore `mixed` and `judgment_required` at the literature level. Any concrete verifier must be checked in the primary paper being surveyed.

## 4. How is the data constructed?

The construction recipe is a survey recipe:

- collect and organize preference-learning literature,
- classify feedback sources and formats,
- distinguish explicit and implicit preference modeling,
- organize preference usage by training objective,
- summarize evaluation protocols.

Unknown: exact search query, inclusion/exclusion policy, and whether the survey bibliography is exhaustive.

## 5. How can it enter post-training?

Recorded use: audit and orientation.

The card can help decide whether a new paper belongs under human preference data, DPO/preference optimization, RLAIF, scalar reward, reward-model benchmark, or rubric-conditioned rewards. It should not be used directly for SFT, reward-model training, or RLHF.

## 6. What should readers audit?

- Survey categories can hide concrete data-object differences.
- A method taxonomy can blur whether feedback is human, model-generated, programmatic, or rubric-based.
- Surveys can lag fast-moving releases.
- Training use can be overstated if readers treat surveyed methods as released artifacts.
- Secondary claims still need primary-source verification before entering `data/papers.yaml`.

## 7. What is missing or risky?

- Whether a cited primary paper has official links.
- Whether the primary paper releases data, code, model weights, or only a method.
- Whether the feedback object is pairwise, scalar, textual critique, rubric score, or benchmark label.
- Whether the label source is human, AI, expert, synthetic, or unknown.
- Whether the survey's taxonomy matches the atlas enum values.
- Whether the cited work belongs in Preference & Reward Feedback or only in Foundations.

## 8. Why it matters for post-training reasoning data

Preference/reward papers often reuse overloaded terms such as feedback, reward, preference, judge, and alignment. This survey helps readers keep those concepts separate before writing metadata.

The reusable lesson is that preference data should be classified by source, format, model, objective, and evaluation surface, not only by method name.

## 9. Links and citation

- Institution: Harbin Institute of Technology; Harbin Institute of Technology (Shenzhen); Soochow University.
- Paper: https://arxiv.org/abs/2406.11191
- DOI: https://doi.org/10.48550/arXiv.2406.11191
- Data ID: `a-survey-on-human-preference-learning-for-large-language-models-2024`
- Citation status: verified
- Confidence: high
