<!-- entry_id: tinyv-2025 -->
<!-- card_type: verifiers -->
# 🧪 TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tinyv-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tinyv-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tinyv-2025&mode=compare)
<!-- ask_atlas:end -->

## One-line takeaway

Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

## Why this matters

This verifier card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `verifier_reward, audit_failure, construction_recipe`. Local verification contract: `programmatic, judgment_required, mixed`. Local training/evaluation use: `rlvr, reward_modeling, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Verifier card |
| Domains | math |
| Prompt/source | math RL outputs and verifier-disagreement cases |
| Trace/action author | policy model plus verifier model |
| Answer/artifact format | candidate answer with recovered reward decision |
| Process fields | original verifier verdict, TinyV verdict, reward correction |
| Environment/substrate | offline math verifier stack |
| Verifier/reward | small LLM verifier augmenting rules |
| Terminal predicate | false-negative correction accepted |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.
- Check rubric text, rater expertise, judge model/version, calibration, and disagreement policy.
- Locate the boundary between programmatic checks, environment feedback, human judgment, and model judgment.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `answer_level, scalar_reward`.
- Recorded training/evaluation use: `rlvr, reward_modeling, evaluation`.
- Construction layer: `reward_verifier_layer, release_audit`.

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

When reproducing this verifier or reward surface, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

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

Local audit note: Primary arXiv and GitHub links verified; false-negative estimates and extra compute cost should be independently checked.

## Links

- arXiv: [https://arxiv.org/abs/2505.14625](https://arxiv.org/abs/2505.14625)
- Code: [https://github.com/uw-nsl/TinyV](https://github.com/uw-nsl/TinyV)

## Citation

- Title: TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning
- Year/source: 2025 · arXiv
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
