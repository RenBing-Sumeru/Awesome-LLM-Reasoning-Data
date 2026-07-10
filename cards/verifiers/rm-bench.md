<!-- entry_id: rm-bench-benchmarking-reward-models-of-language-models-with-subtlety-and-style-2024 -->
<!-- card_type: verifiers -->
# RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rm-bench-benchmarking-reward-models-of-language-models-with-subtlety-and-style-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rm-bench-benchmarking-reward-models-of-language-models-with-subtlety-and-style-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rm-bench-benchmarking-reward-models-of-language-models-with-subtlety-and-style-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2410.16184) - [Code/Data](https://github.com/THU-KEG/RM-Bench) - [HF dataset](https://huggingface.co/datasets/THU-KEG/RM-Bench)

## TL;DR

RM-Bench tests whether reward models can prefer subtle substantive correctness over response style across chat, code, math, and safety.

It is a style-bias benchmark for reward models, not proof that a reward model is safe or useful for downstream policy training.

## 1. What is this work?

The paper builds style-controlled preference comparisons where chosen and rejected responses are paired across concise, detailed plain-text, and detailed markdown styles.

## 2. What data object does it expose?

The relevant record is:

- id,
- prompt,
- chosen responses,
- rejected responses,
- domain,
- chosen/rejected reward scores,
- style variant.

The construction creates three chosen and three rejected style variants per prompt, enabling a 3x3 style-substance evaluation matrix.

## 3. What is the verifier / reward / judge / environment?

The verifier is mixed. Depending on domain, correctness is checked by human annotation, unit tests, math ground truth, safety rules, or generated safe/unsafe response design.

Reward models are evaluated by whether they score chosen responses above rejected responses under style variation.

## 4. How is the data constructed?

The reported recipe includes:

- source prompts from AlpacaEval, HumanEvalPack, MATH, XSTest, DoNotAnswer, AI2 Refusal, and generated safety prompts,
- create domain-specific chosen/rejected response tuples,
- generate style variants with GPT-4o,
- use Llama-3.1-8B-Lexi-Uncensored-V2 for harmful rejected safety responses,
- filter failed correctness validations and inappropriate refusals,
- evaluate reward models with a style-substance matrix.

Unknown locally: generation temperature, exact split revisions, decontamination, and repository/HF license.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling.

Use it to audit whether a reward model rewards verbosity, formatting, or refusal style instead of substantive correctness. Do not use RM-Bench performance as standalone evidence of downstream alignment quality.

## 6. What should readers audit?

- GPT-4o-generated style variants can introduce generator artifacts.
- Human validation details and agreement statistics need closer inspection.
- Safety examples include harmful prompts/responses and need handling controls.
- Style bias may differ across languages, domains, and deployment settings.
- Unknown decontamination limits reuse confidence.

## 7. What is missing or risky?

- Repository and HF dataset license.
- Exact dataset revision and split files.
- Domain-level verifier rule for chat, code, math, and safety.
- Human annotation protocol and agreement details.
- Whether safety data handling fits the target project policy.
- Whether evaluated reward models have seen source prompts or style templates.

## 8. Why it matters for post-training reasoning data

It makes a common reward-model failure concrete: scalar rewards can prefer surface form over correctness. That is directly relevant when preference feedback is reused to train reasoning or safety behavior.

## 9. Links and citation

- Institution: Fudan University; Tsinghua University; Hong Kong University of Science and Technology.
- Official links: arXiv, code/data repository, and Hugging Face dataset.
- arXiv: https://arxiv.org/abs/2410.16184
- DOI: https://doi.org/10.48550/arXiv.2410.16184
- Code/Data: https://github.com/THU-KEG/RM-Bench
- HF dataset: https://huggingface.co/datasets/THU-KEG/RM-Bench
- Data ID: `rm-bench-benchmarking-reward-models-of-language-models-with-subtlety-and-style-2024`
- Citation status: verified
- Confidence: high
