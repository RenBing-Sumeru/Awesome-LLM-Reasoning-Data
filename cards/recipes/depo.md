<!-- entry_id: depo-2026 -->
<!-- card_type: recipes -->
# DEPO: Towards High Data Efficiency in Reinforcement Learning with Verifiable Reward

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=depo-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=depo-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=depo-2026&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

DEPO is an RLVR data-allocation recipe: it selects an offline prompt subset, filters online samples by explorability, and replays under-explored samples. It is not a released corpus. The selected IDs, scores, rollouts, replay state, concrete verifier, and DEPO-specific implementation/configuration remain unavailable.

## 1. What is this work?

- Year / venue: 2026 · ICLR 2026.
- Atlas roles: construction recipe and scaling study.
- Domain / use: mathematical-reasoning RLVR.
- Status: partial. The paper and linked repository are verified, but the repository did not expose identifiable DEPO artifacts.

Data-Efficient Policy Optimization treats offline curation, online rollout allocation, and replay as one data-construction loop. It does not establish that the retained samples are intrinsically higher quality.

## 2. What data object does it expose?

The effective object is dynamic rather than a downloadable corpus:

- an undisclosed upstream RLVR prompt pool;
- offline diversity, influence, and difficulty signals used to select a subset;
- answer-level online policy rollouts and their scalar rewards;
- per-sample explorability signals, retain/filter decisions, and replay status.

No public row schema, upstream IDs, splits, selected/rejected lists, or retention/replay history is available.

## 3. What is the verifier / reward / judge / environment?

The paper assumes verifiable rewards, but does not identify or release the answer extractor, verifier implementation, normalization rules, terminal predicate, or false-positive/false-negative analysis. Explorability routes samples; it is not a correctness certificate. A reported reduction in rollout cost or a downstream score does not validate the unseen verifier or the selected data.

## 4. How is the data constructed?

1. Rank the undisclosed offline RLVR pool by diversity, influence, and difficulty, then select a smaller subset.
2. Run online RLVR with the current policy on that subset.
3. Estimate explorability and filter low-explorability samples.
4. Replay under-explored samples during subsequent RLVR updates.

The reported recipe uses a 20% final subset. Its selected IDs, selection scores, rejected samples, replay buffer, rollout settings, and configuration are not public artifacts; the sampling protocol, inference budget, and base model are therefore `unknown` at the reusable-record level.

## 5. How can it enter post-training?

It can inform RLVR prompt curation, rollout allocation, and replay design. It is not directly reusable as training data without reconstructing a concrete verifier contract, upstream provenance, data-rights review, retention policy, and train/evaluation-overlap controls.

## 6. What should readers audit?

- Upstream prompt IDs, source mix, splits, deduplication, and licenses.
- Definitions and stability of diversity, influence, difficulty, and explorability.
- Retained, rejected, and replayed sample histories.
- Verifier version, parsing, normalization, false positives, and false negatives.
- Rollout-budget accounting and like-for-like baseline comparison.
- Selection bias, replay bias, semantic duplication, and benchmark contamination.

## 7. What is missing or risky?

The linked repository did not expose an identifiable DEPO implementation, configuration, processed subset, replay buffer, or trajectory archive at inspection. Filtering can remove rare but necessary skills; replay can amplify stale, noisy, or verifier-gamed samples. Source mixture, split, decontamination, terminal predicate, and repository/data/trajectory licenses are `unknown`. No train-evaluation overlap audit is available.

## 8. Why it matters for post-training reasoning data

DEPO makes an often hidden boundary visible: selection, rollout allocation, and replay jointly determine the effective RLVR corpus. The useful contribution is the auditable recipe boundary, not a claim that compute reduction proves reusable data quality.

## 9. Links and citation

- [ICLR 2026 / OpenReview](https://openreview.net/forum?id=sruA4AZmZI)
- [arXiv](https://arxiv.org/abs/2509.01321)
- [Official repository](https://github.com/RUCAIBox/DEPO)
- Official data release: `null`
- Official Hugging Face release: `null`

Tang et al., *Towards High Data Efficiency in Reinforcement Learning with Verifiable Reward*, ICLR 2026.

- Data ID: `depo-2026`
- Citation status: verified
- Confidence: medium
- Release status: partial
