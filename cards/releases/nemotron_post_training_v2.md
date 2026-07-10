<!-- entry_id: nemotron-post-training-dataset-v2-2025 -->
<!-- card_type: releases -->
# Nemotron-Post-Training-Dataset-v2

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=nemotron-post-training-dataset-v2-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=nemotron-post-training-dataset-v2-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=nemotron-post-training-dataset-v2-2025&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

Nemotron-Post-Training-Dataset-v2 is a gated, 6.34M-row multilingual SFT-style release with generator and license fields. Its release-level documentation does not supply row-level reward, rejected-candidate, rollout, or training-stage lineage; it must not be recast as an auditable RL, DPO, or preference corpus.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas roles: data release, construction recipe, and verifier/reward documentation.
- Domains: math, code, STEM, chat, multilingual, and instruction following.
- Status: partial; public metadata is verified, while full parquet access is gated.

It is an NVIDIA v2 post-training mixture for math, code, STEM, chat, and five multilingual subsets.

## 2. What data object does it expose?

Rows expose `uuid`, `license`, `generator`, `version`, `category`, `reasoning`, and `messages`. Prompts are public/open or synthetic, and named DeepSeek and Qwen model-family outputs supply synthetic generations. The 6.34M-row release is divided into nine category/language splits, but it does not map individual rows to source, training stage, reward outcome, or rejected alternatives.

## 3. What is the verifier / reward / judge / environment?

Subset-specific procedures reportedly use tool rules, IFEval rules, guards, or reward models. The public row schema does not identify which verifier applied, its outcome, inputs, version, thresholds, or error rate. Hence the feedback contract is mixed at release level but `unknown` at the record level.

## 4. How is the data constructed?

1. Source public/open or synthetic prompts.
2. Generate responses with named DeepSeek and Qwen model families.
3. Apply reported quality/complexity, syntax, and target-language filters.
4. Publish v2.0 parquet under revision `5c89e01dd720ae0f4058445ed49c5fb68a03c76e`.

Sampling settings, temperature, inference budget, exact per-row prompts/sources, and mapping to SFT/GRPO/DPO/RLHF stages are unavailable.

## 5. How can it enter post-training?

It is an SFT-style mixture. The record-level fields can support SFT after gated-file access, revision pinning, and per-row license/provenance review. Do not treat it as released RL, DPO, or preference data without an explicit stage and comparison/reward mapping.

## 6. What should readers audit?

- Obtain and pin accessible files, checksums, and the stated v2 revision.
- Audit per-row prompt source, generator/version, license, language/category, and duplication.
- Require verifier/reward outcomes, rejected candidates, rollout lineage, and SFT/GRPO/DPO/RLHF stage mapping.
- Reconcile license exceptions (ODC-BY, CC-BY-SA, and model-license terms) with the CC-BY-4.0 repository claim.
- Check splits, decontamination, and benchmark/model-pretraining overlap, all presently `unknown`.

## 7. What is missing or risky?

Full parquet access is gated. Reward, rejected-candidate, rollout, and training-stage fields are absent from the visible schema; source mixture and decontamination are incomplete at row level. License exceptions require row-level review. The release's scale and any downstream benchmark scores are not evidence of uniform data quality.

## 8. Why it matters for post-training reasoning data

It demonstrates the difference between a versioned, metadata-rich release and a reconstructable RL data lineage. Generator and license columns help audit reuse, but they cannot substitute for reward, selection, and stage provenance.

## 9. Links and citation

- [arXiv](https://arxiv.org/abs/2508.14444)
- [Official dataset](https://huggingface.co/datasets/nvidia/Nemotron-Post-Training-Dataset-v2)
- [DOI](https://doi.org/10.48550/arXiv.2508.14444)
- Official code: `null`

Nathawani et al., *Nemotron-Post-Training-Dataset-v2*, 2025.

- Data ID: `nemotron-post-training-dataset-v2-2025`
- Citation status: verified
- Confidence: high
- Release status: partial
