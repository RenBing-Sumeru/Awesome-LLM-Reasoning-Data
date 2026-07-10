<!-- entry_id: step-dpo-step-wise-preference-optimization-for-long-chain-reasoning-of-llms-2024 -->
<!-- card_type: releases -->
# Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=step-dpo-step-wise-preference-optimization-for-long-chain-reasoning-of-llms-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=step-dpo-step-wise-preference-optimization-for-long-chain-reasoning-of-llms-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=step-dpo-step-wise-preference-optimization-for-long-chain-reasoning-of-llms-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, process_trace_supervision_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2406.18629) - [Code/Data](https://github.com/dvlab-research/Step-DPO)

## TL;DR

Step-DPO turns long-chain math reasoning into step-level preferred/rejected continuation pairs.

The useful object is the local reasoning-step preference. Reported benchmark gains should not be treated as proof that the step labels are complete or generally reusable.

## 1. What is this work?

Step-DPO is a data-construction and preference-optimization recipe for long-chain mathematical reasoning. Instead of comparing only full final answers, it treats an intermediate reasoning step as the preference unit.

## 2. What data object does it expose?

The relevant record is:

- problem,
- initial correct reasoning steps,
- preferred reasoning step,
- undesirable reasoning step,
- step position,
- final-answer context.

The source mixture recorded locally is MetaMath, MMIQC, and AQuA. The paper reports 374K filtered SFT examples, 299K used for SFT, and 10K Step-DPO preference pairs.

## 3. What is the verifier / reward / judge / environment?

The feedback signal is step-level preference over reasoning continuations. Error localization is described as manual or GPT-4-assisted in the construction pipeline.

This is a mixed verifier contract: it depends on ground-truth final answers, model-generated reasoning, and judgment over the first erroneous step.

## 4. How is the data constructed?

The reported recipe includes:

- start from filtered math SFT data,
- generate or collect wrong final-answer reasoning traces,
- localize the first erroneous step,
- create a preferred rectified continuation and an undesirable continuation,
- retain rectifications whose final answer matches ground truth,
- train with a Step-DPO objective.

Unknown in the local metadata: rollout count, temperature, inference budget, license, and decontamination.

## 5. How can it enter post-training?

Recorded use:

- preference learning.

Use Step-DPO as a bridge between pairwise preference data and process supervision. Do not collapse it into ordinary chosen/rejected answer-level DPO data.

## 6. What should readers audit?

- A locally preferred step may not guarantee final-answer correctness.
- Self-generated reasoning can preserve model-specific style and error patterns.
- GPT-4 or manual error localization details need version and prompt audit.
- The 10K pair count is useful provenance, not a data-quality guarantee.
- Math benchmark gains can reflect base model, prompting, or filtering choices.

## 7. What is missing or risky?

- Exact GitHub dataset revision.
- Whether the released data includes all fields needed to recover step context.
- Error-localization procedure and any GPT-4 prompts.
- Ground-truth answer source for each math problem.
- License of MetaMath, MMIQC, AQuA, and derived examples.
- Decontamination against target math evaluations.

## 8. Why it matters for post-training reasoning data

Step-DPO is a compact example of preference feedback moving inside the reasoning trace. It helps curators separate whole-answer preference data from step-level process preference data.

## 9. Links and citation

- Institution: The Chinese University of Hong Kong; Harbin Institute of Technology (Shenzhen); SmartMore.
- arXiv: https://arxiv.org/abs/2406.18629
- Code/Data/Models: https://github.com/dvlab-research/Step-DPO
- DOI: https://doi.org/10.48550/arXiv.2406.18629
- Data ID: `step-dpo-step-wise-preference-optimization-for-long-chain-reasoning-of-llms-2024`
- Citation status: verified
- Confidence: medium
