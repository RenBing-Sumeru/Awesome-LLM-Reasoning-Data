<!-- entry_id: depo-2026 -->
<!-- card_type: recipes -->
# DEPO: Towards High Data Efficiency in Reinforcement Learning with Verifiable Reward

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=depo-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=depo-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=depo-2026&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

DEPO combines offline subset selection with online explorability filtering and replay to reduce RLVR data and rollout cost. The paper is verified, but its selected subset, replay state, trajectories, and DEPO-specific executable artifacts are not released.

## 1. What is this work?

Data-Efficient Policy Optimization is an RLVR construction recipe. It selects a smaller offline prompt set using diversity, influence, and difficulty, then uses sample-level explorability to filter online training and replay under-explored samples.

## 2. What data object does it expose?

The described object is dynamic rather than a downloadable corpus: upstream RLVR prompts, offline selection signals, online explorability scores, replay status, rollouts, and answer-level rewards. The public sources do not provide their row schema, IDs, or retention history.

## 3. What is the verifier / reward / judge / environment?

DEPO assumes an RLVR verifier but does not release or identify the concrete answer extractor, verifier implementation, normalizer, or error rates. Explorability is a routing signal, not a correctness certificate.

## 4. How is the data constructed?

1. Select an offline subset by diversity, influence, and difficulty.
2. Run online RLVR on the subset.
3. Filter low-explorability samples.
4. Replay under-explored samples.

The reported recipe uses a 20% final subset, but the selected IDs, scores, rejected samples, replay buffer, and configuration are not public artifacts.

## 5. How can it enter post-training?

It can inform RLVR prompt curation, rollout allocation, and replay policies. A deployment still needs a concrete verifier contract, upstream provenance, data-rights review, retention policy, and evaluation-overlap controls.

## 6. What should readers audit?

- Upstream prompt IDs, splits, deduplication, and licenses.
- Definitions and stability of diversity, influence, difficulty, and explorability.
- Retained, rejected, and replayed sample histories.
- Verifier version, parsing, normalization, false positives, and false negatives.
- Rollout-budget accounting and like-for-like baseline comparison.
- Selection bias, replay bias, and benchmark contamination.

## 7. What is missing or risky?

The linked repository did not expose an identifiable DEPO implementation, configuration, processed subset, replay buffer, or trajectory archive at inspection. Filtering can remove rare but necessary skills; replay can amplify stale, noisy, or verifier-gamed samples. No decontamination or train-evaluation overlap audit is available.

## 8. Why it matters for post-training reasoning data

DEPO makes an often hidden boundary visible: data selection, rollout allocation, and replay jointly determine the effective RLVR corpus. A compute-reduction claim cannot establish reusable data quality without these dynamic artifacts.

## 9. Links and citation

- [ICLR 2026 OpenReview](https://openreview.net/forum?id=sruA4AZmZI)
- [arXiv](https://arxiv.org/abs/2509.01321)
- [Official repository](https://github.com/RUCAIBox/DEPO)

Tang et al., *Towards High Data Efficiency in Reinforcement Learning with Verifiable Reward*, ICLR 2026.
