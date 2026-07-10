<!-- entry_id: aegis2-0-a-diverse-ai-safety-dataset-and-risks-taxonomy-for-alignment-of-llm-gua-2025 -->
<!-- card_type: verifiers -->
# Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=aegis2-0-a-diverse-ai-safety-dataset-and-risks-taxonomy-for-alignment-of-llm-gua-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=aegis2-0-a-diverse-ai-safety-dataset-and-risks-taxonomy-for-alignment-of-llm-gua-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=aegis2-0-a-diverse-ai-safety-dataset-and-risks-taxonomy-for-alignment-of-llm-gua-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: foundations_and_primers, preference_reward_feedback_data, environment_agent_trajectory_data, judgment_rubric_domain_expert_data, data_construction_open_release_recipes, training_usage_optimization_objectives, benchmarks_evaluation_surfaces
> Links: [arXiv](https://arxiv.org/abs/2501.09004) - [ACL](https://aclanthology.org/2025.naacl-long.306/) - [Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0)

## TL;DR

Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails releases a human-annotated AI-safety dataset and risk taxonomy for training and evaluating LLM guardrails.

The reusable object is a safety-labeled prompt or prompt-response record with taxonomy labels and annotation provenance. It should be reused with the policy taxonomy attached, not as a generic reward signal detached from its safety definitions.

## 1. What is this work?

Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails is a safety data release and benchmark surface for LLM guardrails. It combines human annotation, multi-LLM jury judgments, and a risk taxonomy for content-safety alignment.

For this atlas, it belongs in Preference & Reward Feedback Data because safety alignment often uses rubric-like labels, refusal/allow decisions, and guard-model feedback rather than exact-answer verification.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- response,
- top-level hazard category,
- fine-grained subcategory,
- safety label,
- annotation source,
- split.

The release reports 34,248 curated samples spanning 12 top-level hazard categories and 9 fine-grained subcategories.

## 3. What is the verifier / reward / judge / environment?

The verifier is mixed: human annotators and a multi-LLM jury contribute safety labels or judgments.

The terminal predicate is whether the interaction is categorized under the safety taxonomy and judged safe or unsafe for the intended guardrail policy.

## 4. How is the data constructed?

Reported construction details include:

- collect or generate safety prompts and human-LLM interactions,
- apply taxonomy-guided curation over top-level and fine-grained hazard categories,
- use human annotators and a multi-LLM jury for labels or adjudication,
- train/evaluate lightweight guard models downstream,
- blend safety data with topic-following data to track over-refusal behavior.

Unknown locally: temperature and exact multi-LLM jury scoring budget.

## 5. How can it enter post-training?

Recorded use:

- safety_alignment,
- evaluation,
- reward_modeling.

Use it for guardrail training, safety evaluation, or reward-model auditing. Keep category definitions, split metadata, and annotation source visible in any derived training mixture.

## 6. What should readers audit?

- Safety taxonomy labels are policy- and culture-dependent.
- Human and multi-LLM jury labels can disagree near policy boundaries.
- Guard models can overfit visible hazard categories and miss emerging harms.
- Safety tuning can increase over-refusal if topic-following data is not tracked.
- Dataset revision and license should be checked from the official Hugging Face page before reuse.

## 7. What is missing or risky?

- Exact Hugging Face dataset revision.
- License and policy constraints for the intended use.
- Train/validation/test split handling.
- Whether human labels and multi-LLM jury labels are separable.
- Whether the hazard taxonomy matches the target deployment policy.
- Over-refusal and topic-following tradeoffs after training.

## 8. Why it matters for post-training reasoning data

Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails shows how safety feedback becomes a structured data object: prompt, response, taxonomy label, annotation source, and split. Those fields matter when the same data is reused for guardrail training, evaluation, or reward modeling.

## 9. Links and citation

- Institution: NVIDIA.
- Paper title: Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails.
- Official links: arXiv, ACL Anthology, DOI, and Hugging Face dataset.
- arXiv: https://arxiv.org/abs/2501.09004
- ACL: https://aclanthology.org/2025.naacl-long.306/
- DOI: https://doi.org/10.18653/v1/2025.naacl-long.306
- Data: https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0
- Code: null
- Project: null
- Data ID: `aegis2-0-a-diverse-ai-safety-dataset-and-risks-taxonomy-for-alignment-of-llm-gua-2025`
- Citation status: verified
- Confidence: high
