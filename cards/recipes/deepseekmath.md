<!-- entry_id: deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024 -->
<!-- card_type: recipes -->
# DeepSeekMath: Pushing the limits of mathematical reasoning in open language models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧱 Instruction / Demo / Rationale (Track 01) · 🤝 Preference & Reward Feedback (Track 02) · 🧮 Programmatic Verification (Track 03) · 🔁 Rollout / Search / TTC Trace (Track 05) · 🌐 Environment & Agent Trajectories (Track 06) · 🏗️ Construction & Open Releases (Track 08) · 🎯 Training Usage & Objectives (Track 09) · 📈 Scaling / RLVR / TTC (Track 10) · 🧰 Benchmarks & Evaluation (Track 11) · 🚀 Frontier Disclosure Ledger (Track 12) -->
> Subfield: 🧱 Instruction tuning / SFT data

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2402.03300) · [🐙 Code](https://github.com/deepseek-ai/deepseek-math) · [🤗 HF](https://huggingface.co/collections/deepseek-ai/deepseek-math)

## TL;DR

DeepSeekMath combines math-focused web-data selection with SFT, GRPO-style RL, and self-consistency evaluation for open mathematical reasoning.

It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: model_report, construction_recipe, scaling_study.
- Domains: math, rlvr, web-data.
- Current status: verified.
- Why it belongs: Math model-report and recipe entry for web-data mining, GRPO, and verifiable math evaluation.

## 2. What data object does it expose?

- Prompt/source: math-related web data, supervised math instructions, and benchmark/evaluation problems.
- Trace/action author: base/instruct/RL models generate mathematical solutions and final answers.
- Answer/artifact format: natural-language mathematical solution plus final answer, sometimes sampled multiple times.
- Process fields:
- data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.
- Environment or substrate: offline math training and benchmark evaluation pipeline.
- Terminal predicate: final answer and reasoning solve the math problem under benchmark rules.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, mixed.
- Recorded verifier/reward/environment: answer correctness and GRPO-style reward over math tasks.
- Supervision granularity: answer_level, scalar_reward.

## 4. How is the data constructed?

- Base model: DeepSeek-Coder-Base-v1.5 7B continued on math data.
- Teacher: math corpora, supervised examples, and verifiable benchmark answers.
- Generator: model produces solutions during SFT, RL, and self-consistency sampling.
- Filtering rule: web-data selection identifies math-related tokens from Common Crawl-style sources.
- Sampling protocol: report self-consistency sample count, benchmark split, and tool/no-tool setting.
- Inference budget: 64-sample self-consistency is reported as a separate compute condition.
- Optimizer/scaffold: continued pretraining, SFT, and GRPO-style reinforcement learning.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, rlvr, evaluation, test_time_compute.

Use it as a recipe reference for math data mining, GRPO-style RLVR, and inference-budget-aware evaluation.

## 6. What should readers audit?

- Which web-data filters define the math corpus?
- Are benchmark problems excluded from training and retrieval sources?
- Can Common Crawl mining include benchmark solutions?
- Which model stage produced the reported solutions?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Self-consistency can hide weak single-sample accuracy.
- Web-data mining may import benchmark leakage.
- Final-answer rewards can miss flawed derivations.

## 8. Why it matters for post-training reasoning data

It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2402.03300) · [🐙 Code](https://github.com/deepseek-ai/deepseek-math) · [🤗 HF](https://huggingface.co/collections/deepseek-ai/deepseek-math)

- Data ID: `deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024`
- Citation status: verified
- Confidence: high
