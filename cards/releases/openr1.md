<!-- entry_id: openr1-math-220k-2025 -->
<!-- card_type: releases -->
# 📦 OpenR1-Math-220k

## One-line takeaway

Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.

## Why this matters

This release card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `data_release, construction_recipe`. Local verification contract: `programmatic`. Local training/evaluation use: `sft, distillation, rlvr`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Release card |
| Domains | math |
| Prompt/source | Numina-style/open math problem pool |
| Trace/action author | reasoning model reproduction pipeline |
| Answer/artifact format | math problem with reasoning trace and final answer |
| Process fields | problem, reasoning trace, answer, verification metadata |
| Environment/substrate | offline math corpus |
| Verifier/reward | math answer verifier / filtering pipeline |
| Terminal predicate | accepted final answer or trace after filtering |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `answer_level`.
- Recorded training/evaluation use: `sft, distillation, rlvr`.
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

Local audit note: Official Hugging Face dataset and GitHub project links verified; no paper link is asserted here.

## Links

- Code: [https://github.com/huggingface/open-r1](https://github.com/huggingface/open-r1)
- Hugging Face: [https://huggingface.co/datasets/open-r1/OpenR1-Math-220k](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k)

## Citation

- Title: OpenR1-Math-220k
- Year/source: 2025 · Hugging Face / GitHub
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
