<!-- entry_id: womd-reasoning-2025 -->
<!-- card_type: releases -->
# WOMD-Reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=womd-reasoning-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=womd-reasoning-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=womd-reasoning-2025&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

WOMD-Reasoning maps Waymo driving scenes to rule-grounded and LLM-authored Q&As, including future-dependent interaction labels.

## 1. What is this work?

An ICML driving-language construction release tied to WOMD scene and agent identity.

## 2. What data object does it expose?

Scene JSON joins map, traffic, ego/surrounding-agent, interaction, intention, timing, and substituted Q&A IDs.

## 3. What is the verifier / reward / judge / environment?

Rule translation grounds motion/map facts; generated interaction narratives have no row-level formal verifier.

## 4. How is the data constructed?

WOMD state is converted to raw language, then Azure GPT-4-Turbo generates interaction and intention Q&As.

## 5. How can it enter post-training?

It can support driving-language SFT/evaluation, but future trajectory dependence must be marked as offline hindsight.

## 6. What should readers audit?

Waymo archive revision, prompts, API configuration, scene splits, human-evaluation protocol, and rendering versions.

## 7. What is missing or risky?

LLM narratives can hallucinate; agent-ID substitution does not remove Waymo terms, privacy, or source-rights obligations.

## 8. Why it matters for post-training reasoning data

It cleanly separates deterministic grounding from generated explanatory supervision.

## 9. Links and citation

- [ICML/PMLR](https://proceedings.mlr.press/v267/li25l.html)
- [Official repository](https://github.com/yhli123/WOMD-Reasoning)
- [Waymo download](https://waymo.com/open/download/)
