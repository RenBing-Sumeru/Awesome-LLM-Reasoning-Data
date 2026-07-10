<!-- entry_id: test-time-preference-optimization-on-the-fly-alignment-via-iterative-textual-feedback-2025 -->
<!-- card_type: recipes -->
# Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=test-time-preference-optimization-on-the-fly-alignment-via-iterative-textual-feedback-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=test-time-preference-optimization-on-the-fly-alignment-via-iterative-textual-feedback-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=test-time-preference-optimization-on-the-fly-alignment-via-iterative-textual-feedback-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2501.12895) - [Code](https://github.com/yafuly/TPO)

## TL;DR

TPO converts reward-model scores into textual critiques and uses them to refine outputs at inference time without updating model parameters.

The feedback object is a test-time critique-and-revision trace, not an offline training dataset.

## 1. What is this work?

Test-Time Preference Optimization is an inference-time alignment recipe. It samples candidate responses, scores them with a reward model, translates score differences into textual feedback, and asks the model to revise.

## 2. What data object does it expose?

The relevant record is:

- query,
- sampled responses,
- reward-model score,
- chosen response,
- rejected response,
- textual loss or critique,
- textual gradient or revision instruction,
- refined response,
- test-time iteration.

The local metadata records AlpacaEval 2, Arena-Hard, HH-RLHF, BeaverTails-Evaluation, XSTest, and MATH-500 prompts as evaluation surfaces.

## 3. What is the verifier / reward / judge / environment?

The verifier is a reward model: FsfairX-LLaMA3-RM-v0.1 in the main setting, and Llama-3.1-Tulu-3-8B-RM for the unaligned-model setting.

The reward signal becomes textual critique. That makes prompt wording and critique-following behavior part of the verifier contract.

## 4. How is the data constructed?

The reported recipe includes:

- sample candidate responses with vLLM,
- score candidates with a reward model,
- identify high- and low-scoring outputs,
- translate reward signal into textual critique,
- revise the response,
- repeat for a small number of test-time iterations.

Recorded settings include 5 samples per iteration by default, 20 in the ultra setting, temperature 0.7, top_p 0.95, 2 benchmark iterations, and 5 curve/ultra iterations.

Unknown in the local metadata: benchmark license details and decontamination status.

## 5. How can it enter post-training?

Recorded use:

- test-time adaptation,
- evaluation.

Use TPO as a test-time feedback recipe. Do not describe it as releasing new preference-training data.

## 6. What should readers audit?

- Reward-model feedback can be overfit at inference time.
- Textual critiques may encode reward-model artifacts rather than human preference.
- The method depends on the policy following critique instructions.
- Benchmarks become part of the inference-time loop and should be audited for leakage.
- Improvements on evaluation sets do not prove that the generated critiques are high-quality labels.

## 7. What is missing or risky?

- Reward-model checkpoint and license.
- Textual feedback prompts.
- Search width and depth.
- Sampling settings.
- Benchmark prompt revisions and licenses.
- Whether any evaluation prompt is reused during tuning decisions.
- Whether refined outputs are stored as a reusable dataset.

## 8. Why it matters for post-training reasoning data

TPO broadens the atlas beyond static preference pairs. It treats reward feedback as a temporary inference-time supervision object that can steer a reasoning trace without updating weights.

## 9. Links and citation

- Institution: University of California, Santa Barbara; University of Southern California; Microsoft.
- arXiv: https://arxiv.org/abs/2501.12895
- Code: https://github.com/yafuly/TPO
- DOI: https://doi.org/10.48550/arXiv.2501.12895
- Data: null
- Data ID: `test-time-preference-optimization-on-the-fly-alignment-via-iterative-textual-feedback-2025`
- Citation status: verified
- Confidence: medium
