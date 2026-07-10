<!-- entry_id: rewardbench-2-2026 -->
<!-- card_type: benchmarks -->
# RewardBench 2: Advancing Reward Model Evaluation

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-2-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-2-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewardbench-2-2026&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🤝 Preference & Reward Feedback (Track 02) · ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🎚️ Scalar reward / ORM data

> Curation level: L4_carded

> Links: [Paper](https://arxiv.org/abs/2506.01937) · [Hugging Face collection](https://huggingface.co/collections/allenai/reward-bench-2-683d2612a4b3e38a3e53bb51)

## TL;DR

RewardBench 2 evaluates reward models on newly sourced multi-skill preference pairs and checks whether benchmark accuracy correlates with downstream best-of-N and RLHF use.

It is an evaluation surface for reward models, not a generic preference-data release to mix into training without split and license review.

## 1. What is this work?

- Year / venue: 2026 · ICLR 2026 / arXiv.
- Atlas role: benchmark, reward-model evaluation, data release.
- Domains: reward modeling, instruction following, reasoning, safety.
- Current status: paper verified; arXiv-listed Hugging Face collection verified as the official artifact lead.
- Why it belongs: it updates RewardBench-style evaluation with harder, newly sourced prompts and downstream-correlation analysis.

## 2. What data object does it expose?

- Prompt/source: newly sourced human prompts rather than prompts copied from downstream evaluations.
- Trace/action author: candidate models produce responses; reward models assign scores or rankings.
- Answer/artifact format: prompt with candidate responses and a preferred response label.
- Process fields: prompt, candidate responses, preferred response label, reward model score.
- Environment/substrate: static reward-model benchmark and public HF leaderboard/data collection.
- Terminal predicate: the reward model assigns higher score to the preferred response.

## 3. Verification / scoring contract

- Contract: reward-model accuracy on preferred-vs-rejected response pairs.
- Additional evidence: correlation with downstream use in inference-time scaling and RLHF-style optimization.
- Public/private/live status: public paper and HF collection; hidden/private split policy and leaderboard versioning need artifact review.
- Contamination risk: public preference pairs can be memorized by future reward models.

## 4. Construction recipe

The paper describes a multi-skill reward-model benchmark using newly sourced human prompts. The arXiv record states that data, models, and leaderboard are available through the linked AllenAI Hugging Face collection.

Before reuse, inspect the HF collection schema, license, model list, prompt provenance, response generators, labeling policy, and any hidden/evaluation-only split.

## 5. How it can be used

- Compare reward models before using them for best-of-N sampling or RLHF.
- Audit whether reward-model benchmark accuracy predicts downstream value.
- Identify skill-specific reward failures across instruction following, reasoning, and safety.

Do not treat it as ordinary SFT or preference-training data without checking the release boundary.

## 6. Audit checklist

- Are prompt sources newly collected and separated from downstream evaluations?
- Are chosen/rejected labels and labeler policy documented?
- Which reward-model interface and scoring template are used?
- Are leaderboard versions and evaluated model snapshots pinned?
- Are safety and reasoning subsets reported separately?
- Is public exposure tracked as future contamination risk?

## 7. Known limitations / failure modes

- Benchmark accuracy may not fully predict downstream alignment quality.
- Public preference pairs can be memorized by future reward models.
- Label ambiguity and domain mixture can hide skill-specific failures.
- Leaderboard comparisons depend on prompt templates, model interfaces, and score aggregation.

## 8. Why it matters for Track 11

RewardBench 2 makes reward-model evaluation a concrete scoring contract: the object is not just a response, but a preference pair plus a reward-model decision whose downstream usefulness must be tested.

## 9. Links and citation

- Paper: [https://arxiv.org/abs/2506.01937](https://arxiv.org/abs/2506.01937)
- Hugging Face collection: [https://huggingface.co/collections/allenai/reward-bench-2-683d2612a4b3e38a3e53bb51](https://huggingface.co/collections/allenai/reward-bench-2-683d2612a4b3e38a3e53bb51)
- Data ID: `rewardbench-2-2026`
- Citation status: verified
- Confidence: high
