<!-- entry_id: re-po-robust-enhanced-policy-optimization-as-a-general-framework-for-llm-alignment-2025 -->
<!-- card_type: recipes -->
# RE-PO: Robust Enhanced Policy Optimization as a General Framework for LLM Alignment
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-po-robust-enhanced-policy-optimization-as-a-general-framework-for-llm-alignment-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-po-robust-enhanced-policy-optimization-as-a-general-framework-for-llm-alignment-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-po-robust-enhanced-policy-optimization-as-a-general-framework-for-llm-alignment-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2509.24159) - [Project](https://repo-alignment.github.io/) - [Code](https://github.com/XiaoyangCao1113/RE-PO)

## TL;DR

RE-PO robustifies preference optimization by inferring soft confidence weights for noisy preference labels through an EM-style loop.

Its main atlas value is the noisy-label audit contract, not a new preference data release.

## 1. What is this work?

RE-PO is a robust preference-optimization framework. It treats observed preference labels as potentially noisy and estimates label correctness or annotator reliability before weighting the preference loss.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- chosen response,
- rejected response,
- observed preference label,
- annotator ID if available,
- posterior label correctness,
- annotator reliability,
- weighted preference loss.

The paper resources list `mistral-instruct-ultrafeedback`, `llama3-ultrafeedback-armorm`, and MultiPref.

## 3. What is the verifier / reward / judge / environment?

The verifier is not a single external judge. RE-PO uses an EM-estimated posterior over label correctness and annotator reliability.

This makes the observed preference label and the inferred confidence weight separate objects. The confidence weight should not be treated as ground-truth cleanliness.

## 4. How is the data constructed?

The reported recipe includes:

- start with existing preference pairs,
- model observed labels as noisy,
- infer posterior label correctness,
- estimate annotator reliability when available,
- down-weight suspected corrupted labels,
- apply the robust weighting to DPO, IPO, SimPO, and CPO-style losses.

Recorded base models include Mistral-7B-Instruct-v0.2, Meta-Llama-3-8B-Instruct, and a Qwen2.5-0.5B-Instruct resource. Unknown locally: rollout count, temperature, inference budget, exact dataset revisions, dataset licenses, and decontamination.

## 5. How can it enter post-training?

Recorded use:

- preference learning,
- audit.

Use RE-PO to reason about noisy labels and preference reliability. Do not describe it as releasing a new cleaned preference dataset.

## 6. What should readers audit?

- Latent clean-label assumptions may not match real preference pluralism.
- Posterior confidence can be miscalibrated if the policy is poorly calibrated.
- Synthetic noise robustness may not transfer to real annotator disagreement.
- Down-weighting can suppress minority preferences.
- Benchmark gains should not be treated as proof that noisy labels were correctly identified.

## 7. What is missing or risky?

- Exact dataset revisions for UltraFeedback-derived resources and MultiPref.
- Whether annotator IDs are available.
- EM assumptions and initialization.
- How posterior weights are stored or recomputed.
- Dataset licenses and code license.
- Decontamination against target evaluation prompts.
- Whether robust weighting changes demographic or preference coverage.

## 8. Why it matters for post-training reasoning data

RE-PO gives curators a concrete way to represent preference-label uncertainty. It helps keep the observed label, inferred confidence, and optimization loss separate.

## 9. Links and citation

- Institution: The University of Hong Kong; University of Waterloo; Huawei Noah's Ark Lab.
- arXiv: https://arxiv.org/abs/2509.24159
- Project: https://repo-alignment.github.io/
- Code: https://github.com/XiaoyangCao1113/RE-PO
- DOI: https://doi.org/10.48550/arXiv.2509.24159
- Data: null
- Data ID: `re-po-robust-enhanced-policy-optimization-as-a-general-framework-for-llm-alignment-2025`
- Citation status: verified
- Confidence: medium
