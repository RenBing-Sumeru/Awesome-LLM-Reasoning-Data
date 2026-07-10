<!-- entry_id: self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023 -->
<!-- card_type: recipes -->
# Self-consistency improves chain of thought reasoning in language models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧭 Foundations & Primers (Track 00) · 🧱 Instruction / Demo / Rationale (Track 01) · 🤝 Preference & Reward Feedback (Track 02) · 🧮 Programmatic Verification (Track 03) · 🔁 Rollout / Search / TTC Trace (Track 05) · 🌐 Environment & Agent Trajectories (Track 06) · 🎯 Training Usage & Objectives (Track 09) · 📈 Scaling / RLVR / TTC (Track 10) -->

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2203.11171) · [🏛️ OpenReview](https://openreview.net/forum?id=1PL1NIMMrw)

## TL;DR

Self-consistency samples multiple chain-of-thought reasoning paths and chooses the answer that is most consistent across samples.

It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.

## 1. What is this work?

- Year / venue: 2023 · ICLR.
- Atlas role: scaling_study, survey_background.
- Domains: reasoning, test_time_compute.
- Current status: verified.
- Why it belongs: Foundational decoding/test-time-scaling recipe connecting chain-of-thought traces, pass@k-style sampling, and answer aggregation.

## 2. What data object does it expose?

- Prompt/source: reasoning benchmark prompts with chain-of-thought exemplars.
- Trace/action author: model samples diverse reasoning paths at inference time.
- Answer/artifact format: multiple rationales and final answers for the same prompt.
- Process fields: sampling temperature, number of paths, answer extraction, aggregation rule.
- Environment or substrate: benchmark prompting setup.
- Terminal predicate: most-consistent final answer matches the benchmark target.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: benchmark answer scoring after sampled reasoning aggregation.
- Recorded verifier/reward/environment: majority or marginalization over sampled answers.
- Supervision granularity: trace-level generation with answer-level selection.

## 4. How is the data constructed?

- Base model: prompted language model; no parameter update required.
- Teacher: few-shot chain-of-thought exemplars.
- Generator: model samples many reasoning paths.
- Filtering rule: aggregate answers by consistency, not by individually verifying every step.
- Sampling protocol: sample diverse rationales and marginalize over answers.
- Inference budget: number of sampled paths is the main compute knob.
- Optimizer/scaffold: decoding-time search/aggregation scaffold.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, test_time_compute.

Use it as a test-time baseline before claiming a new dataset or RL method improves reasoning; extra samples alone may explain part of the gain.

## 6. What should readers audit?

- How many samples were used?
- Are traces diverse or near-duplicates?
- Is answer extraction reliable?
- Does majority vote fail on correlated wrong reasoning?
- Are comparisons matched for inference budget?

## 7. What is missing or risky?

- More samples can amplify benchmark-specific shortcuts.
- Aggregation does not guarantee step faithfulness.
- Unmatched inference budgets can make methods look better than they are.

## 8. Why it matters for post-training reasoning data

It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2203.11171) · [🏛️ OpenReview](https://openreview.net/forum?id=1PL1NIMMrw)

- Data ID: `self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023`
- Citation status: verified
- Confidence: high
