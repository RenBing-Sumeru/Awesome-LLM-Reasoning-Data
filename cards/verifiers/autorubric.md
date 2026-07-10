<!-- entry_id: autorubric-unifying-rubric-based-llm-evaluation-2026 -->
<!-- card_type: verifiers -->
# Autorubric: Unifying Rubric-based LLM Evaluation

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autorubric-unifying-rubric-based-llm-evaluation-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autorubric-unifying-rubric-based-llm-evaluation-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autorubric-unifying-rubric-based-llm-evaluation-2026&mode=compare)
<!-- ask_atlas:end -->

<!-- track: ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🧑‍⚖️ Human/expert judgment

> Curation level: L4_carded

> Links: [Paper](https://arxiv.org/abs/2603.00077)

## TL;DR

Autorubric turns analytic rubrics into calibrated LLM-judge scoring contracts with criterion-level labels, explanations, ensembles, bias mitigations, and reliability checks.

It should be audited as an evaluator protocol, not just as another judge-model score.

## 1. What is this work?

- Year / venue: 2026 · arXiv preprint.
- Atlas role: benchmark, judge framework, rubric construction recipe.
- Domains: rubric evaluation, chemistry, chatbot evaluation, research evaluation.
- Current status: paper verified; official code/data artifact not pinned locally.
- Why it belongs: rubric design, judge configuration, calibration, and reliability are core Track 11 evaluation surfaces.

## 2. What data object does it expose?

- Prompt/source: rubric-defined evaluation tasks across chemistry, research, and chatbot settings.
- Trace/action author: candidate models produce responses; Autorubric produces criterion-level scores and explanations.
- Answer/artifact format: response plus analytic rubric criteria with binary, ordinal, or nominal labels.
- Process fields: prompt, candidate response, rubric criteria, criterion-level score, judge explanation.
- Environment/substrate: rubric-based LLM evaluation framework.
- Terminal predicate: a response satisfies rubric criteria according to calibrated judge scoring.

## 3. Verification / scoring contract

- Contract: criterion-level rubric scoring by single or ensemble LLM judges.
- Judge/rubric: analytic rubrics with binary, ordinal, and nominal criteria; few-shot calibration; bias mitigation; psychometric reliability metrics.
- Public/private/live status: public preprint; artifact release and hidden labels unknown locally.
- Contamination risk: rubric tasks and calibration examples can leak into judge or model training once public.

## 4. Construction recipe

Autorubric unifies scattered rubric-evaluation practices into an opinionated framework. The arXiv summary reports validation on RiceChem, ResearcherBench, and CHARM-100, and uses criterion-level scores and explanations as optimization signals in additional experiments.

For reproducibility, pin the rubric text, judge model, prompt template, few-shot examples, aggregation rule, reliability metric, and any bias-mitigation setting.

## 5. How it can be used

- Evaluate open-ended responses where exact-match scoring is inadequate.
- Compare judge configurations under a shared rubric.
- Produce criterion-level feedback for analysis or optimization.
- Audit whether an evaluation claim depends on one hidden judge prompt.

Reuse as an evaluator only when the full rubric and judge protocol are pinned.

## 6. Audit checklist

- Are rubric criteria observable, mutually clear, and domain-valid?
- Which judge model, version, prompt template, and decoding settings are used?
- Are few-shot calibration examples public and separated from evaluation items?
- How are multiple judges or criteria aggregated?
- Are position, verbosity, and style biases measured?
- Are reliability metrics reported per criterion, not only as one aggregate score?

## 7. Known limitations / failure modes

- LLM judges can show position, verbosity, and style bias.
- Rubric criteria may be underspecified, redundant, or correlated.
- Optimizing against judge explanations can overfit the evaluator.
- Cross-judge agreement does not guarantee domain correctness.

## 8. Why it matters for Track 11

Autorubric makes rubric evaluation inspectable. It moves Track 11 metadata from "LLM judge says score X" toward a reproducible scoring contract with criteria, calibration, reliability, and reuse boundaries.

## 9. Links and citation

- Paper: [https://arxiv.org/abs/2603.00077](https://arxiv.org/abs/2603.00077)
- Data ID: `autorubric-unifying-rubric-based-llm-evaluation-2026`
- Citation status: verified
- Confidence: high
