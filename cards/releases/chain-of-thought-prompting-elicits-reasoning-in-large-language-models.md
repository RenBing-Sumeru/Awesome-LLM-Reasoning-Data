<!-- entry_id: chain-of-thought-prompting-elicits-reasoning-in-large-language-models-2022 -->
<!-- card_type: releases -->
# Chain-of-thought prompting elicits reasoning in large language models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=chain-of-thought-prompting-elicits-reasoning-in-large-language-models-2022&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=chain-of-thought-prompting-elicits-reasoning-in-large-language-models-2022&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=chain-of-thought-prompting-elicits-reasoning-in-large-language-models-2022&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧭 Foundations & Primers (Track 00) · 🧱 Instruction / Demo / Rationale (Track 01) · 🌐 Environment & Agent Trajectories (Track 06) · 🏗️ Construction & Open Releases (Track 08) -->

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2201.11903)

## TL;DR

Shows that few-shot natural-language rationales can elicit multi-step reasoning behavior from sufficiently large language models.

It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets.

## 1. What is this work?

- Year / venue: 2022 · NeurIPS.
- Atlas role: survey_background.
- Domains: prompting, reasoning.
- Current status: verified.
- Why it belongs: Foundational trace-elicitation paper for understanding why reasoning data often stores intermediate natural-language steps rather than only final answers.

## 2. What data object does it expose?

- Prompt/source: few-shot exemplars containing questions, reasoning chains, and final answers.
- Trace/action author: human-written demonstration rationales and model-generated rationales at inference time.
- Answer/artifact format: chain-of-thought trace plus final answer.
- Process fields: exemplar reasoning steps, generated reasoning steps, answer.
- Environment or substrate: benchmark prompting setup.
- Terminal predicate: benchmark answer correctness after rationale-conditioned decoding.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: task-specific benchmark scoring.
- Recorded verifier/reward/environment: final-answer evaluation on arithmetic, commonsense, and symbolic reasoning benchmarks.
- Supervision granularity: trace_level for elicitation, answer_level for scoring.

## 4. How is the data constructed?

- Base model: large pretrained language models evaluated by prompting.
- Teacher: human-written exemplars.
- Generator: prompted model at inference time.
- Filtering rule: benchmark answer scoring.
- Sampling protocol: few-shot prompting with rationale exemplars.
- Inference budget: longer generations expose intermediate reasoning tokens.
- Optimizer/scaffold: prompt scaffold rather than parameter update.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation.

Use it to distinguish elicited traces from verified traces: a chain can improve accuracy without being faithful or reusable as ground-truth process supervision.

## 6. What should readers audit?

- Are rationales human-written, model-generated, or filtered?
- Is correctness checked only at the final answer?
- Does the prompt format control the result?
- Are trace faithfulness and shortcut behavior tested?
- Can generated rationales be separated from gold explanations?

## 7. What is missing or risky?

- Natural-language traces may be unfaithful to the model computation.
- Prompt sensitivity can look like data quality.
- Final-answer scoring does not certify every intermediate step.

## 8. Why it matters for post-training reasoning data

It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2201.11903)

- Data ID: `chain-of-thought-prompting-elicits-reasoning-in-large-language-models-2022`
- Citation status: verified
- Confidence: high
