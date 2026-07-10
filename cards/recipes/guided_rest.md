<!-- entry_id: guided-rest-2025 -->
<!-- card_type: recipes -->
# Guided ReST

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guided-rest-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guided-rest-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=guided-rest-2025&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

Guided ReST converts scored policy samples into reinforced self-training data while injecting training-time subgoal or reference-code guidance.

## 1. What is this work?

An iterative self-training recipe, not a released frozen trace dataset.

## 2. What data object does it expose?

Scripts consume public prompt datasets and generate prompt/response/score records; buffers are not released.

## 3. What is the verifier / reward / judge / environment?

Task-specific scoring retains samples only when score is greater than zero.

## 4. How is the data constructed?

The current policy samples responses, receives task scores, and uses guidance to create the next training buffer.

## 5. How can it enter post-training?

It can support self-training or preference-style filtering after reproducing each task scorer and source revision.

## 6. What should readers audit?

Prompt revisions, scorer implementation, truncation, guidance source, retention rates, and failed samples.

## 7. What is missing or risky?

Subgoals/reference code are privileged signals; no immutable rollouts, buffers, or checkpoints are published.

## 8. Why it matters for post-training reasoning data

It makes the boundary between deployable inputs and training-only oracle guidance explicit.

## 9. Links and citation

- [arXiv](https://arxiv.org/abs/2502.04327)
- [Official repository](https://github.com/Meta-Llama/guided-rest)
