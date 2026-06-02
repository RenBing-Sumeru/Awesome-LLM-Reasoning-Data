<!-- entry_id: spurious-rewards-2025 -->
<!-- card_type: failures -->
# 🧯 Spurious Rewards Failure Lens

## One-line takeaway

Reward-backed reasoning data can look stronger while optimizing a shortcut, so failure cards must track the reward pathology explicitly.

## Why this matters

This supplementary failure card makes the risk side of the atlas visible. Spurious reward cases are useful because they teach curators to ask whether a verifier is measuring reasoning, formatting, memorized answer style, or another shortcut. The card complements the verifier card by focusing on how the signal fails under optimization pressure.

## What is the data object?

| Field | Local value |
|---|---|
| Prompt/source | reasoning tasks exposed to reward-backed optimization |
| Trace/action author | policy model rollouts |
| Answer/artifact format | response plus reward/verifier outcome |
| Process fields | rollout, reward, final correctness, failure label |
| Environment/substrate | offline/online RLVR evaluation setting |
| Verifier/reward | imperfect or shortcut-sensitive reward signal |
| Terminal predicate | reward improvement that may diverge from true correctness |

## Verification contract

- Contract: programmatic or mixed depending on the verifier.
- Key audit move: compare reward score improvement with independent correctness and adversarial probes.
- Look for formatting hacks, answer-extraction quirks, benchmark leakage, and distribution-specific shortcuts.

## Supervision granularity

- Granularity: answer-level or scalar reward.
- Use: audit, evaluation, reward-model stress testing, and RLVR failure analysis.
- Do not use as a training recipe without also preserving failed examples and verifier diagnostics.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Failure source | reward/verifier mismatch |
| Probe protocol | compare optimized policy against independent checks |
| Required metadata | verifier version, reward logs, rejected rollouts, false-positive examples |

## How it can be used

- Add this card whenever a release claims RLVR/scaling gains.
- Use it to force a “what could the model be exploiting?” section in release cards.
- Pair with `docs/09_audit_and_failure_modes.md` before reusing reward-filtered data.

## Audit checklist

- [ ] Check the official source links before promoting new claims.
- [ ] Record source mixture, split policy, license, lineage, and decontamination status.
- [ ] Identify the verifier, judge, benchmark, or failure trigger that turns examples into feedback.
- [ ] Separate training use from evaluation use.
- [ ] Keep failed, rejected, and ambiguous cases visible when they explain risk.

## Known limitations / failure modes

- Local metadata remains partial until exact failure taxonomy and experimental setup are checked.
- Failure cards should not overgeneralize one reward pathology to every verifier-backed dataset.
- The main value is a checklist, not a final causal claim.

## Links

- arXiv: [https://arxiv.org/abs/2506.10947](https://arxiv.org/abs/2506.10947)
- Verifier card: [../verifiers/spurious_rewards.md](../verifiers/spurious_rewards.md)

## Citation

- Title: Spurious Rewards
- Year/source: 2025 · arXiv
- Local status: `partial` · citation status: `verified`
