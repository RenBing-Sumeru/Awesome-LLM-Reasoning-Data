<!-- entry_id: meta-rewarding-language-models-self-improving-alignment-with-llm-as-a-meta-judge-2024 -->
<!-- card_type: recipes -->
# Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=meta-rewarding-language-models-self-improving-alignment-with-llm-as-a-meta-judge-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=meta-rewarding-language-models-self-improving-alignment-with-llm-as-a-meta-judge-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=meta-rewarding-language-models-self-improving-alignment-with-llm-as-a-meta-judge-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, data_construction_open_release_recipes, training_usage_optimization_objectives, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2407.19594)

## TL;DR

Meta-Rewarding adds an LLM-as-a-meta-judge step so a model can generate feedback about its own judgments during self-improving alignment.

The feedback object includes judgments about judgments. This adds an audit layer, but it does not make the labels independent of the model's own biases.

## 1. What is this work?

The paper extends self-rewarding loops by training both actor behavior and judge behavior. The same model acts as actor, judge, and meta-judge.

For this atlas, it is a synthetic feedback recipe centered on recursive evaluator improvement.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- candidate response,
- judge output,
- judge score,
- meta-judge feedback,
- chosen judgment,
- rejected judgment,
- chosen response,
- rejected response,
- iteration.

The prompt pool comes from Self-Rewarding Language Models, with 5,000 prompts sampled per iteration.

## 3. What is the verifier / reward / judge / environment?

The verifier is model-judged. A meta-judge compares or critiques the model's own judge outputs.

The terminal predicate is whether a model judgment is judged acceptable or improvable by the meta-judge procedure.

## 4. How is the data constructed?

Reported construction details include:

- use Llama-3-8B-Instruct,
- generate responses, judgments, and meta-judgments,
- parse 5-point judge scores,
- discard malformed judgments,
- apply length controls to actor preferences,
- train with DPO over actor and judge preference pairs.

The paper reports four iterations, with actor and judge preference pairs used in the first two iterations.

## 5. How can it enter post-training?

Recorded use:

- preference_learning,
- evaluation.

Use it as a recipe for recursive synthetic feedback. Keep actor-preference and judge-preference data separate in any downstream analysis.

## 6. What should readers audit?

- Meta-judge and base judge can share blind spots.
- Recursive self-judgment can amplify evaluation artifacts.
- Meta-judge training can develop score and positional biases.
- The model may improve judging format without improving label validity.
- Benchmark improvements are not proof of meta-feedback quality.

## 7. What is missing or risky?

- Whether code/data artifacts have been released.
- Exact prompt pool and iteration split.
- Score-parsing and malformed-judgment filtering rules.
- How positional and score biases are measured.
- Whether the meta-judge rubric matches the intended feedback standard.

## 8. Why it matters for post-training reasoning data

Meta-Rewarding makes evaluator quality part of the training data loop. That is useful, but it also makes provenance more recursive and harder to audit.

## 9. Links and citation

- Institution: Meta FAIR; University of California, Berkeley; New York University.
- Official links: arXiv and DOI.
- arXiv: https://arxiv.org/abs/2407.19594
- DOI: https://doi.org/10.48550/arXiv.2407.19594
- Code: null
- Data: null
- Project: null
- Hugging Face: null
- Data ID: `meta-rewarding-language-models-self-improving-alignment-with-llm-as-a-meta-judge-2024`
- Citation status: verified
- Confidence: high