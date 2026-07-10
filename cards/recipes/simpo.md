<!-- entry_id: simpo-simple-preference-optimization-with-a-reference-free-reward-2024 -->
<!-- card_type: recipes -->
# SimPO: Simple Preference Optimization with a Reference-Free Reward

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=simpo-simple-preference-optimization-with-a-reference-free-reward-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=simpo-simple-preference-optimization-with-a-reference-free-reward-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=simpo-simple-preference-optimization-with-a-reference-free-reward-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [NeurIPS](https://proceedings.neurips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html) - [arXiv](https://arxiv.org/abs/2405.14734) - [Code](https://github.com/princeton-nlp/SimPO)

## TL;DR

SimPO trains on prompt/chosen/rejected preference pairs using a reference-free implicit reward margin.

Its useful lesson is about the optimizer contract for preference pairs; it does not prove that the underlying preference data is clean or high quality.

## 1. What is this work?

SimPO is a reference-free preference optimization method. It uses average log probability as an implicit reward and adds a target reward margin between chosen and rejected responses.

## 2. What data object does it expose?

The required data object is:

- prompt,
- chosen response,
- rejected response,
- average log probability,
- target reward margin.

The preference pair remains the central supervision object. The margin changes how the pair is consumed.

## 3. What is the verifier / reward / judge / environment?

The feedback signal is pairwise preference from source datasets, primarily UltraFeedback in the reported recipe.

The verifier/reward is implicit: a policy-derived average-log-probability reward plus a target margin. That can create length or format incentives if not audited.

## 4. How is the data constructed?

The reported recipe includes:

- Mistral, Llama-3, and Gemma-2 model families,
- UltraFeedback as the primary preference dataset,
- UltraChat-200k SFT for base-model setups,
- one epoch of preference optimization,
- batch size 128,
- max sequence length 2048,
- cosine learning-rate schedule with 10% warmup,
- reference-free reward margin optimization.

Unknown in the local metadata: dataset split, decontamination, license, rollout count, temperature, inference budget, and standalone official data artifact.

## 5. How can it enter post-training?

Recorded use:

- preference learning.

Use SimPO to compare reference-free preference objectives. Do not use leaderboard gains as evidence that UltraFeedback or any derived mixture is intrinsically high quality.

## 6. What should readers audit?

- Average log probability can encode length preference.
- Margin settings can reward formatting artifacts.
- Dataset quality and objective design are easy to conflate.
- UltraChat SFT and UltraFeedback preference stages should be separated.
- Evaluation gains may reflect model family and tuning details.

## 7. What is missing or risky?

- Exact UltraFeedback revision and preprocessing.
- Whether UltraChat-200k SFT was used.
- Margin, beta, batch size, and sequence length.
- Base model and tokenizer.
- License and provenance of the source preference data.
- Whether response length or format shifts after training.

## 8. Why it matters for post-training reasoning data

SimPO is a useful card because it shows how the same pairwise preference record can be consumed with a different reward definition. The data object is still the pair; the optimizer changes the supervision contract.

## 9. Links and citation

- Institution: Princeton University.
- NeurIPS: https://proceedings.neurips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html
- arXiv: https://arxiv.org/abs/2405.14734
- Code: https://github.com/princeton-nlp/SimPO
- DOI: https://doi.org/10.48550/arXiv.2405.14734
- Data ID: `simpo-simple-preference-optimization-with-a-reference-free-reward-2024`
- Citation status: verified
- Confidence: high
