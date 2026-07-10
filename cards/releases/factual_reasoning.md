<!-- entry_id: learning-to-reason-for-factuality-2026 -->
<!-- card_type: releases -->
# Learning to Reason for Factuality

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=learning-to-reason-for-factuality-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=learning-to-reason-for-factuality-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=learning-to-reason-for-factuality-2026&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

Learning to Reason for Factuality releases selected factual-reasoning SFT data and DPO pairs, while its online GRPO trajectories and reward logs remain unreleased. Its mixed feedback combines retrieval-grounded claim verification with an LLM relevance judgment; it is not a simple ground-truth factuality label.

## 1. What is this work?

- Year / venue: 2026 · ICML 2026.
- Atlas roles: data release, construction recipe, and verifier/reward design.
- Domain / use: long-form factuality, SFT, and preference learning.
- Status: partial.

It combines synthetic factual prompts, candidate selection, preference pairs, and a distinct online GRPO reward server.

## 2. What data object does it expose?

The public offline objects are SFT Long-CoTs and DPO chosen/rejected pairs. Records include prompt, response, factual precision, supported claims, relevance, chosen/rejected role, and margin metadata. Prompts are 7,000 Llama-4 synthetic factual prompts grounded by WildChat and LongFact non-test demonstrations; candidate responses are from Llama 3.3. The released object does not include GRPO rollouts, candidate pools, or full retrieved-evidence histories.

## 3. What is the verifier / reward / judge / environment?

ScalableVeriScore extracts claims, retrieves evidence, and applies LLM verification; relevance is separately LLM judged. The combined signal uses factual precision, detail, and relevance. It is susceptible to retrieval gaps, claim-extraction mistakes, judge error, and reward hacking. The exact reward-server version, retrieval corpus, prompts, and component logs must be pinned before reuse.

## 4. How is the data constructed?

1. Ground synthetic factual prompts using WildChat and LongFact non-test demonstrations.
2. Generate ten Llama 3.3 candidate responses per prompt.
3. Score candidates with ScalableVeriScore and the relevance judge.
4. Keep the highest-precision response for SFT.
5. Form DPO pairs when margin is greater than 0.1 and relative length difference is at most 0.1.
6. Use separate fresh-policy rollouts for online GRPO; those trajectories are not released.

The reported offline split has 3,000 SFT prompts and 3,700 DPO pairs; the RL split has 4,000 prompts. GRPO uses four rollouts at temperature 1.0 and maximum 2,048 tokens.

## 5. How can it enter post-training?

The released SFT examples and DPO pairs can support their named offline objectives, subject to their CC-BY-NC-4.0, Llama, and third-party obligations. Online GRPO cannot be independently replayed from the release: it needs the reward server, retrieval state, candidate/rollout logs, and policy version.

## 6. What should readers audit?

- Reward-server, claim-extraction, retriever, judge, and prompt versions.
- Retrieved evidence URLs, snapshots, coverage/error analysis, and reward-component logs.
- Candidate pools, selection margins, rejected candidates, and online GRPO rollouts.
- WildChat/LongFact provenance, licenses, splits, and overlap with factuality benchmarks.
- Whether length/detail pressure creates unsupported but plausible claims.

## 7. What is missing or risky?

Verifier and retrieval error, judge disagreement, and reward hacking remain possible. Online rollouts, reward-component logs, candidate pools, and full evidence provenance are absent. LongFact is marked non-test, but a complete benchmark/retrieval-overlap audit is `unknown`; the paper's results therefore do not prove released-data quality or contamination freedom.

## 8. Why it matters for post-training reasoning data

It exposes a useful boundary between reusable selected offline data and unreleased online reward evidence. It also shows why factuality feedback is not binary: detail, relevance, retrieval coverage, and evaluator behavior reshape the effective training signal.

## 9. Links and citation

- [arXiv](https://arxiv.org/abs/2508.05618)
- [ICML 2026 / OpenReview](https://openreview.net/forum?id=byZ7DoyDNd)
- [Official data](https://huggingface.co/datasets/facebook/factual_reasoning)
- [Official code](https://github.com/facebookresearch/factual_reasoning)
- [DOI](https://doi.org/10.48550/arXiv.2508.05618)

Chen et al., *Learning to Reason for Factuality*, ICML 2026.

- Data ID: `learning-to-reason-for-factuality-2026`
- Citation status: verified
- Confidence: high
- Release status: partial
