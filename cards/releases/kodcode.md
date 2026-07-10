<!-- entry_id: kodcode-a-diverse-challenging-and-verifiable-synthetic-dataset-for-coding-2025 -->
<!-- card_type: releases -->
# 📦 KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=kodcode-a-diverse-challenging-and-verifiable-synthetic-dataset-for-coding-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=kodcode-a-diverse-challenging-and-verifiable-synthetic-dataset-for-coding-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=kodcode-a-diverse-challenging-and-verifiable-synthetic-dataset-for-coding-2025&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧱 Instruction / Demo / Rationale (Track 01) · 🤝 Preference & Reward Feedback (Track 02) · 🧮 Programmatic Verification (Track 03) · 🏗️ Construction & Open Releases (Track 08) · 🎯 Training Usage & Objectives (Track 09) · 📈 Scaling / RLVR / TTC (Track 10) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🤖 Synthetic instruction data

## One-line takeaway

Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.

## Why this matters

This release card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `data_release, construction_recipe, benchmark`. Local verification contract: `programmatic`. Local training/evaluation use: `sft, rlvr, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Release card |
| Domains | code |
| Prompt/source | synthetic coding question generation |
| Trace/action author | reasoning model / synthetic pipeline |
| Answer/artifact format | question-solution-test triplet |
| Process fields | problem, solution, unit tests |
| Environment/substrate | code execution and unit-test substrate |
| Verifier/reward | test-based self-verification |
| Terminal predicate | solution passes generated tests |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `answer_level`.
- Recorded training/evaluation use: `sft, rlvr, evaluation`.
- Construction layer: `prompt_sourcing, trace_writing, reward_verifier_layer`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | unknown |
| Generator | unknown |
| Filtering rule | unknown |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | unknown |

When reproducing this release/data artifact, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

## How it can be used

- Reading map: compare it with neighboring entries in the same paper-category page.
- Engineering map: decide whether it supports SFT, distillation, RLVR, process supervision, reward modeling, agent training, evaluation, or audit.
- Audit map: open an issue for every `unknown` field that affects reproducibility, safety, or benchmark comparison.
- Teaching map: use it to show how reasoning data differs from plain instruction data.

## Audit checklist

- [ ] Official paper, code, data, project, and dataset links are checked.
- [ ] Source mixture, split policy, license, and lineage are recorded.
- [ ] Verifier, reward, judge, rubric, environment, or test suite is reproducible.
- [ ] Rejected/failed/ambiguous candidates are considered, not only successful examples.
- [ ] Contamination, benchmark leakage, false positives, false negatives, and reward hacking are documented.
- [ ] Training use is not broader than what the source supports.

## Known limitations / failure modes

- Source mixture: unknown.
- Split: unknown.
- Decontamination: unknown.
- License: unknown.
- Lineage: unknown.
- Known failure modes: unknown; add false positives, false negatives, leakage, judge drift, and reward hacking notes when known.

Local audit note: Primary arXiv link verified; generated test strength, contamination against benchmarks, and license should be checked.

## Links

- arXiv: [https://arxiv.org/abs/2503.02951](https://arxiv.org/abs/2503.02951)

## Citation

- Title: KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding
- Year/source: 2025 · ACL Findings
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
