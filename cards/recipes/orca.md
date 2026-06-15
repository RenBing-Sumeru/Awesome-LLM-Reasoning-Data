<!-- entry_id: orca-progressive-learning-from-complex-explanation-traces-of-gpt-4-2023 -->
<!-- card_type: recipes -->
# Orca: Progressive learning from complex explanation traces of GPT-4

> Curation level: L5_audit_ready
> Category: construction_recipes_open_reasoning_data, frontier_model_reports, foundations_instruction_preference_alignment
> Links: [📄 Paper](https://arxiv.org/abs/2306.02707) · [🌐 Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/)

## TL;DR

Orca studies progressive learning from complex teacher explanation traces rather than shallow imitation of final answers.

It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.

## 1. What is this work?

- Year / venue: 2023 · arXiv.
- Atlas role: construction_recipe, model_report.
- Domains: explanation-traces, distillation, synthetic-data.
- Current status: verified.
- Why it belongs: Distillation recipe entry for explanation-trace supervision and synthetic reasoning data.

## 2. What data object does it expose?

- Prompt/source: large-scale diverse instruction prompts sampled for complex reasoning and explanation learning.
- Trace/action author: large teacher models produce explanation traces and stepwise guidance for a smaller model.
- Answer/artifact format: instruction response with detailed explanation, intermediate reasoning, and final answer.
- Process fields:
- prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.
- Environment or substrate: offline synthetic-data distillation and evaluation pipeline.
- Terminal predicate: student model improves reasoning benchmarks without merely copying teacher style.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required, mixed.
- Recorded verifier/reward/environment: downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.
- Supervision granularity: step_level, answer_level.

## 4. How is the data constructed?

- Base model: 13B student model in the original report.
- Teacher: large foundation models that produce explanation traces and stepwise guidance.
- Generator: teacher-assisted data-generation pipeline over diverse instructions.
- Filtering rule: progressive learning emphasizes rich signals and diverse tasks instead of shallow responses.
- Sampling protocol: pin teacher, task mixture, explanation style, and evaluation suite.
- Inference budget: teacher generation budget controls dataset scale and trace richness.
- Optimizer/scaffold: supervised distillation on complex explanation traces.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, distillation, evaluation.

Use it as a reasoning-distillation reference and as a caution that explanation data needs provenance and evaluation beyond style matching.

## 6. What should readers audit?

- Which instruction sources and task types dominate the synthetic traces?
- Are teacher-generated training tasks separate from evaluation suites?
- Can benchmark tasks or explanations leak through teacher generation?
- Which teacher model and prompt template produced each trace?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Students can learn teacher style without robust reasoning.
- Synthetic traces can include teacher errors.
- Closed teacher data makes lineage hard to audit.

## 8. Why it matters for post-training reasoning data

It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2306.02707) · [🌐 Project](https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/)

- Data ID: `orca-progressive-learning-from-complex-explanation-traces-of-gpt-4-2023`
- Citation status: verified
- Confidence: high
