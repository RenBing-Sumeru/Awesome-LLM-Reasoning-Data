<!-- entry_id: measuring-faithfulness-in-chain-of-thought-reasoning-2023 -->
<!-- card_type: failures -->
# Measuring Faithfulness in Chain-of-Thought Reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=measuring-faithfulness-in-chain-of-thought-reasoning-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=measuring-faithfulness-in-chain-of-thought-reasoning-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=measuring-faithfulness-in-chain-of-thought-reasoning-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, instruction_demonstration_rationale_data, audit_failure_contamination_verifier_attacks
> Links: [Paper](https://arxiv.org/abs/2307.13702) · [DOI](https://doi.org/10.48550/arXiv.2307.13702)

## TL;DR

This paper measures CoT faithfulness by intervening on reasoning text and observing answer changes.

It gives Track 01 a concrete audit lens for separating rationale text as a style target from rationale text as causal reasoning evidence.

## 1. What is this work?

- Year / venue: 2023 · arXiv.
- Atlas role: audit_failure.
- Track decision: Track 00 + Track 01 · Chain-of-thought / rationale data.
- Domains: chain_of_thought, faithfulness, interpretability.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Tasks used to test CoT intervention behavior.
- Trace/action author: Model-generated CoT modified by controlled interventions.
- Answer/artifact format: CoT text plus answer before/after intervention.
- Process fields: prompt, original_cot, cot_intervention, final_answer, answer_change.
- Environment or substrate: Offline CoT intervention benchmark.
- Terminal predicate: Whether answers change consistently with the intervened CoT.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed.
- Recorded verifier/reward/environment: Answer sensitivity to CoT interventions plus task correctness.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Not applicable.
- Generator: Prompted LLMs plus controlled CoT edits.
- Filtering rule: Interventions such as adding mistakes or paraphrasing CoT.
- Sampling protocol: Task and intervention mixture.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Evaluation-only faithfulness measurement protocol.

## 5. How can it enter post-training?

Recorded training/evaluation use: audit, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Check model/task dependence and intervention type.
- Separate final correctness from trace faithfulness.
- Pin prompts and model versions.

## 7. What is missing or risky?

- Official code/data/project links remain unknown.
- Full task mixture and prompt details require paper/artifact review.

## 8. Why it matters for post-training reasoning data

It gives Track 01 a concrete audit lens for separating rationale text as a style target from rationale text as causal reasoning evidence.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2307.13702) · [DOI](https://doi.org/10.48550/arXiv.2307.13702)

- Data ID: `measuring-faithfulness-in-chain-of-thought-reasoning-2023`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
