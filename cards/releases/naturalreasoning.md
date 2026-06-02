<!-- entry_id: naturalreasoning-reasoning-in-natural-language-with-large-scale-verifiable-data-2025 -->
<!-- card_type: releases -->
# 📦 NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions

## One-line takeaway

Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.

## Why this matters

This release card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `data_release, construction_recipe`. Local verification contract: `mixed`. Local training/evaluation use: `sft, distillation, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Release card |
| Domains | stem, economics, social_science, general_reasoning |
| Prompt/source | large-scale natural-domain question generation |
| Trace/action author | teacher/reasoning models and pipeline outputs |
| Answer/artifact format | question with reference answer or reasoning target |
| Process fields | question, reference answer, domain label |
| Environment/substrate | offline natural-language tasks |
| Verifier/reward | reference answers, reward models, or self-rewarding depending on split |
| Terminal predicate | answer judged correct for the question |

## Verification contract

- Locate the boundary between programmatic checks, environment feedback, human judgment, and model judgment.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `answer_level`.
- Recorded training/evaluation use: `sft, distillation, evaluation`.
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

Local audit note: Primary arXiv link verified; exact source mixture and verifier design need curator review before reuse.

## Links

- arXiv: [https://arxiv.org/abs/2502.13124](https://arxiv.org/abs/2502.13124)

## Citation

- Title: NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions
- Year/source: 2025 · arXiv
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
