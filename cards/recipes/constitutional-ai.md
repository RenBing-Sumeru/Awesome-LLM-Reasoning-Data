<!-- entry_id: constitutional-ai-harmlessness-from-ai-feedback-2022 -->
<!-- card_type: recipes -->
# Constitutional AI: Harmlessness from AI feedback

> Curation level: L5_audit_ready
> Category: foundations_instruction_preference_alignment, construction_recipes_open_reasoning_data
> Links: [📄 Paper](https://arxiv.org/abs/2212.08073) · [🌐 Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper)

## TL;DR

Constitutional AI trains harmless behavior from AI-generated critiques, revisions, and AI preference feedback guided by a written constitution.

It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.

## 1. What is this work?

- Year / venue: 2022 · arXiv preprint.
- Atlas role: construction_recipe, survey_background.
- Domains: safety, alignment.
- Current status: verified.
- Why it belongs: Foundational RLAIF and safety-alignment recipe for principle-guided critique/revision data and AI preference modeling.

## 2. What data object does it expose?

- Prompt/source: helpful/harmless assistant prompts and harmful-query scenarios.
- Trace/action author: model generates initial responses, critiques, and revisions using constitutional principles.
- Answer/artifact format: original answer, self-critique, revised answer, preference pair, reward-model score.
- Process fields: principle used, critique, revision, comparison, preference label.
- Environment or substrate: offline SL and RLHF/RLAIF alignment pipeline.
- Terminal predicate: AI or human preference for harmless but non-evasive responses.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: principle-guided AI feedback plus preference modeling.
- Recorded verifier/reward/environment: AI preference model trained from comparisons guided by constitutional principles.
- Supervision granularity: trace-level critique/revision and pairwise/scalar reward.

## 4. How is the data constructed?

- Base model: initial assistant model sampled for responses.
- Teacher: constitution/principles plus critique-and-revision model behavior.
- Generator: model produces critiques, revisions, and response pairs.
- Filtering rule: select/revise responses according to constitutional principles.
- Sampling protocol: supervised critique/revision phase followed by RL phase over AI preferences.
- Inference budget: model-generated critiques and pairwise comparisons add generation budget.
- Optimizer/scaffold: supervised learning on revisions plus RL from AI feedback.

## 5. How can it enter post-training?

Recorded training/evaluation use: preference_learning, safety_alignment, reward_modeling.

Use it to reason about AI-feedback data, but keep principles, critique prompts, and preference-model assumptions visible.

## 6. What should readers audit?

- What principles are in the constitution?
- Are critiques and revisions stored separately from final answers?
- Can AI feedback drift or self-reinforce blind spots?
- Are harmlessness and helpfulness tradeoffs measured?
- How much human oversight remains in prompts and evaluation?

## 7. What is missing or risky?

- AI feedback can encode model bias at scale.
- Principles may be underspecified or culturally narrow.
- A model can become safe-looking but evasive if helpfulness is not audited.

## 8. Why it matters for post-training reasoning data

It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2212.08073) · [🌐 Project](https://github.com/anthropics/ConstitutionalHarmlessnessPaper)

- Data ID: `constitutional-ai-harmlessness-from-ai-feedback-2022`
- Citation status: verified
- Confidence: high
