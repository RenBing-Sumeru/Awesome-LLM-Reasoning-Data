<!-- entry_id: learning-to-reason-for-factuality-2026 -->
<!-- card_type: releases -->
# Learning to Reason for Factuality

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=learning-to-reason-for-factuality-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=learning-to-reason-for-factuality-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=learning-to-reason-for-factuality-2026&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

This release exposes selected SFT/DPO factual-reasoning data while its online GRPO evidence remains unreleased.

## 1. What is this work?

A factuality post-training recipe combining synthetic prompts, candidate selection, preference pairs, and a mixed reward.

## 2. What data object does it expose?

SFT Long-CoTs and DPO pairs with factuality-margin metadata; not GRPO trajectories.

## 3. What is the verifier / reward / judge / environment?

ScalableVeriScore uses claim extraction, retrieval, and LLM verification; relevance is separately LLM judged.

## 4. How is the data constructed?

Ten responses per prompt are scored; the highest precision response becomes SFT and qualifying margins form DPO pairs.

## 5. How can it enter post-training?

SFT and preference learning; online GRPO cannot be independently replayed from released data.

## 6. What should readers audit?

Reward-server version, retrieval corpus, evidence URLs, candidate pools, prompts, licenses, and overlap with factuality benchmarks.

## 7. What is missing or risky?

Verifier/retrieval error and reward hacking remain possible; online rollouts and reward-component logs are absent.

## 8. Why it matters for post-training reasoning data

It shows why factuality feedback is not a binary label: detail, relevance and evaluator behavior reshape the signal.

## 9. Links and citation

- [arXiv](https://arxiv.org/abs/2508.05618)
- [Official data](https://huggingface.co/datasets/facebook/factual_reasoning)
- [Official code](https://github.com/facebookresearch/factual_reasoning)
