<!-- entry_id: star-bootstrapping-reasoning-with-reasoning-2022 -->
<!-- card_type: recipes -->
# STaR: Bootstrapping reasoning with reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: data_construction_open_release_recipes, instruction_demonstration_rationale_data
> Links: [📄 Paper](https://arxiv.org/abs/2203.14465)

## TL;DR

STaR iteratively generates rationales, keeps examples whose final answers are correct, and fine-tunes on the accepted reasoning traces.

It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.

## 1. What is this work?

- Year / venue: 2022 · NeurIPS.
- Atlas role: construction_recipe, survey_background.
- Domains: reasoning.
- Current status: verified.
- Why it belongs: Core bootstrapping recipe for synthetic rationale generation, correctness filtering, and iterative SFT.

## 2. What data object does it expose?

- Prompt/source: reasoning problems with final answers.
- Trace/action author: model-generated rationales, optionally regenerated with answer hints.
- Answer/artifact format: rationale plus final answer.
- Process fields: generated rationale, answer, correctness filter outcome.
- Environment or substrate: offline reasoning benchmarks.
- Terminal predicate: final answer matches gold label.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: answer_level programmatic or benchmark scoring.
- Recorded verifier/reward/environment: correctness filter over generated rationales.
- Supervision granularity: trace_level accepted through answer_level validation.

## 4. How is the data constructed?

- Base model: pretrained language model refined over iterations.
- Teacher: gold answers and accepted model rationales.
- Generator: current model produces rationales.
- Filtering rule: retain rationales that lead to correct answers.
- Sampling protocol: iterative generation and fine-tuning loop.
- Inference budget: multiple attempts can be used to find accepted rationales.
- Optimizer/scaffold: supervised fine-tuning on accepted rationale traces.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, distillation.

Use it as a warning that synthetic traces need acceptance evidence; rationale fluency alone is not a verifier.

## 6. What should readers audit?

- Are rejected rationales preserved?
- Does answer correctness imply step correctness?
- Does the loop amplify model-specific shortcuts?
- Are answer hints used and disclosed?
- How many iterations and samples were required?

## 7. What is missing or risky?

- Filtering by final answer can keep unfaithful or lucky rationales.
- Self-training may narrow diversity.
- Rejected examples are often more informative than the retained set.

## 8. Why it matters for post-training reasoning data

It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2203.14465)

- Data ID: `star-bootstrapping-reasoning-with-reasoning-2022`
- Citation status: verified
- Confidence: high
