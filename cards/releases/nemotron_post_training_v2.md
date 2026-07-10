<!-- entry_id: nemotron-post-training-dataset-v2-2025 -->
<!-- card_type: releases -->
# Nemotron-Post-Training-Dataset-v2

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=nemotron-post-training-dataset-v2-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=nemotron-post-training-dataset-v2-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=nemotron-post-training-dataset-v2-2025&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

A gated multilingual synthetic post-training release with useful release-level metadata but incomplete row-level RL provenance.

## 1. What is this work?

NVIDIA v2 release for math, code, STEM, chat, and five multilingual subsets.

## 2. What data object does it expose?

Rows expose uuid, license, generator, version, category, reasoning mode, and messages.

## 3. What is the verifier / reward / judge / environment?

Some reported subrecipes use tools, IFEval rules, guards, or reward models; public rows do not identify reward outcomes.

## 4. How is the data constructed?

Public/open or synthetic prompts are filtered and answered by named DeepSeek/Qwen-family generators.

## 5. How can it enter post-training?

It is an SFT-style mixture. Do not treat it as a released RL, DPO, or preference corpus without stage evidence.

## 6. What should readers audit?

Gated-file revision, per-row source/teacher/license fields, filtering rules, and stage mapping.

## 7. What is missing or risky?

Reward, rejected-candidate, rollout, and training-stage fields are absent; license exceptions require row-level review.

## 8. Why it matters for post-training reasoning data

It demonstrates the gap between a large versioned release and a reconstructable RL data lineage.

## 9. Links and citation

- [arXiv](https://arxiv.org/abs/2508.14444)
- [Official dataset](https://huggingface.co/datasets/nvidia/Nemotron-Post-Training-Dataset-v2)
