<!-- entry_id: spurious-rewards-2025 -->
<!-- card_type: verifiers -->
# 🧪 Spurious Rewards

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spurious-rewards-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spurious-rewards-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spurious-rewards-2025&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧭 Foundations & Primers (Track 00) · 🧮 Programmatic Verification (Track 03) · 🎯 Training Usage & Objectives (Track 09) · 📈 Scaling / RLVR / TTC (Track 10) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->

## One-line takeaway

Reward-signal audit for spurious behavior in RLVR.

## Why this matters

This verifier card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `audit_failure, scaling_study`. Local verification contract: `programmatic`. Local training/evaluation use: `rlvr, evaluation`. The current atlas status is `partial`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Verifier card |
| Domains | math, rlvr |
| Prompt/source | unknown |
| Trace/action author | unknown |
| Answer/artifact format | unknown |
| Process fields | unknown |
| Environment/substrate | unknown |
| Verifier/reward | unknown |
| Terminal predicate | unknown |

## Verification contract

- Check parser behavior, answer extraction, unit-test strength, executable environment, and verifier false negatives.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `scalar_reward`.
- Recorded training/evaluation use: `rlvr, evaluation`.
- Construction layer: `reward_verifier_layer`.

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

Local audit note: Seed entry; fields intentionally remain unknown until checked. Deduplicated title collision; dropped lower-confidence id: spurious-rewards-2025.

## Links

- arXiv: [https://arxiv.org/abs/2506.10947](https://arxiv.org/abs/2506.10947)

## Citation

- Title: Spurious Rewards
- Year/source: 2025 · arXiv
- Authors in local data: unknown
- Local status: `partial`
- Citation status: `verified` · metadata status: `partial`
