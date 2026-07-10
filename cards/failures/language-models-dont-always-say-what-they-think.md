<!-- entry_id: language-models-do-not-always-say-what-they-think-unfaithful-explanations-in-cha-2023 -->
<!-- card_type: failures -->
# Language Models Don't Always Say What They Think

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-models-do-not-always-say-what-they-think-unfaithful-explanations-in-cha-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-models-do-not-always-say-what-they-think-unfaithful-explanations-in-cha-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-models-do-not-always-say-what-they-think-unfaithful-explanations-in-cha-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, instruction_demonstration_rationale_data, audit_failure_contamination_verifier_attacks
> Links: [Paper](https://arxiv.org/abs/2305.04388) · [DOI](https://doi.org/10.48550/arXiv.2305.04388)

## TL;DR

This audit shows CoT explanations can rationalize biased answers without revealing the prompt feature that influenced the model.

It prevents treating rationale text as faithful reasoning data unless interventions check whether the trace actually drives the answer.

## 1. What is this work?

- Year / venue: 2023 · NeurIPS.
- Atlas role: audit_failure.
- Track decision: Track 00 + Track 01 · Chain-of-thought / rationale data.
- Domains: chain_of_thought, faithfulness, interpretability, bias.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: BIG-Bench Hard-style and social-bias tasks with inserted biasing features.
- Trace/action author: Prompted models generating chain-of-thought explanations.
- Answer/artifact format: Task answer plus generated explanation.
- Process fields: prompt, biasing_feature, chain_of_thought, final_answer, gold_answer_or_bias_target.
- Environment or substrate: Offline prompting/evaluation setup.
- Terminal predicate: Whether answer/explanation tracks task evidence or hidden biasing feature.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed.
- Recorded verifier/reward/environment: Task correctness plus intervention/bias-attribution analysis.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Not applicable.
- Generator: Prompted LLMs under biased and unbiased prompt variants.
- Filtering rule: Evaluation-only intervention design.
- Sampling protocol: Prompt perturbations and biased-option interventions.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Evaluation-only faithfulness intervention study.

## 5. How can it enter post-training?

Recorded training/evaluation use: audit, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Check whether CoT traces causally affect answers.
- Audit prompt artifacts and social-bias rationalization.
- Pin model/version details before reuse.

## 7. What is missing or risky?

- Official code/data/project links remain unknown.
- Closed-model lineage and exact settings limit reuse.

## 8. Why it matters for post-training reasoning data

It prevents treating rationale text as faithful reasoning data unless interventions check whether the trace actually drives the answer.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2305.04388) · [DOI](https://doi.org/10.48550/arXiv.2305.04388)

- Data ID: `language-models-do-not-always-say-what-they-think-unfaithful-explanations-in-cha-2023`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
