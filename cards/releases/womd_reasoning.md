<!-- entry_id: womd-reasoning-2025 -->
<!-- card_type: releases -->
# WOMD-Reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=womd-reasoning-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=womd-reasoning-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=womd-reasoning-2025&mode=compare)
<!-- ask_atlas:end -->

## TL;DR

WOMD-Reasoning converts Waymo Open Motion Dataset scenes into rule-grounded and LLM-authored driving Q&As, including future-trajectory context. Deterministic scene facts are distinguishable from generated interaction narratives; the latter have no released per-item formal verifier and may encode offline hindsight.

## 1. What is this work?

- Year / venue: 2025 · ICML 2025.
- Atlas roles: data release, benchmark, and construction recipe.
- Domain / use: autonomous-driving interaction reasoning, SFT, and evaluation.
- Status: partial.

It is a driving-language construction release tied to WOMD scene and agent identity, with optional MetaDrive visual rendering.

## 2. What data object does it expose?

The scene JSON joins WOMD map, traffic-signal, agent-motion, and future-trajectory fields to substituted Q&A IDs. It includes `scene_id`, ego/surrounding-agent IDs, interaction IDs, current/future times, questions, and answers across environment, ego, surrounding-agent, and interaction views. The reported construction covers about 63,000 scenes and 2.94M Q&As, including about 409,000 interaction/intention Q&As.

## 3. What is the verifier / reward / judge / environment?

Rule translation grounds map and motion facts. Azure GPT-4-Turbo generates interaction and intention Q&As; those narratives have no released per-item formal verifier or universal terminal predicate. The paper reports preliminary human evaluation around 90% accuracy, but that result is not a record-level quality certificate and does not verify all generated explanations.

## 4. How is the data constructed?

1. Select Objects-of-Interest and interaction-relevant WOMD scenes.
2. Convert map, traffic-signal, agent-motion, and future-state fields into rule-grounded natural-language context.
3. Prompt Azure GPT-4-Turbo to generate interaction and intention Q&As.
4. Store the scene/agent/time linkage and optionally render scenes in MetaDrive.

The exact rejection policy, API prompt/version, temperature, inference budget, and Waymo archive revision are not disclosed in the reusable record.

## 5. How can it enter post-training?

It can support driving-language SFT and evaluation, provided that deterministic grounding and LLM-authored narrative supervision are separately labeled. Any item using future trajectories must be marked as offline hindsight rather than a deployable real-time perception target. Commercial reuse requires review of both the repository's research/non-profit terms and Waymo terms.

## 6. What should readers audit?

- Pin the Waymo archive, repository commit, scene/split manifests, and MetaDrive rendering version.
- Preserve rule-translator version, Azure prompts/model/API settings, sampling failures, and rejection decisions.
- Identify which Q&As rely on future trajectories and whether that is valid for the proposed use.
- Audit LLM hallucinations, substituted-ID mapping, human-evaluation sampling/protocol, privacy, and source-rights obligations.
- Conduct semantic/pretraining and benchmark-overlap checks; decontamination is `unknown`.

## 7. What is missing or risky?

LLM narratives can hallucinate. Future trajectories can create hindsight leakage, and agent-ID substitution does not remove Waymo terms, privacy, or source-rights obligations. The Waymo archive is gated and its revision is unpinned; generated-data failures and the full filtering policy are unavailable. Reported human or benchmark performance cannot establish data quality for every Q&A.

## 8. Why it matters for post-training reasoning data

It makes a valuable separation visible: deterministic state grounding can coexist with generated explanatory supervision, and the two carry different error, causality, and reuse risks. That distinction is more informative than treating every Q&A as equally verified.

## 9. Links and citation

- [ICML/PMLR](https://proceedings.mlr.press/v267/li25l.html)
- [arXiv](https://arxiv.org/abs/2407.04281)
- [Official repository](https://github.com/yhli123/WOMD-Reasoning)
- [Waymo download](https://waymo.com/open/download/)
- [OpenReview](https://openreview.net/forum?id=lTBq5LOUKC)

Li et al., *WOMD-Reasoning: A Large-Scale Dataset for Interaction Reasoning in Driving*, ICML 2025.

- Data ID: `womd-reasoning-2025`
- Citation status: verified
- Confidence: medium
- Release status: partial
