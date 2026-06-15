<!-- entry_id: deepseek-prover-advancing-theorem-proving-in-llms-2024 -->
<!-- card_type: recipes -->
# DeepSeek-Prover: Advancing theorem proving in LLMs

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, construction_recipes_open_reasoning_data, frontier_model_reports
> Links: [📄 Paper](https://arxiv.org/abs/2405.14333) · [🗂️ Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [🤗 HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1)

## TL;DR

DeepSeek-Prover generates large-scale Lean 4 theorem-proving data from informal math problems and trains a formal proof model.

It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: data_release, construction_recipe, model_report.
- Domains: formal-math, lean, synthetic-data.
- Current status: verified.
- Why it belongs: Formal theorem-proving recipe entry for large-scale synthetic Lean data and model release.

## 2. What data object does it expose?

- Prompt/source: high-school and undergraduate mathematical competition problems translated into Lean 4 formal statements.
- Trace/action author: models translate problems, generate formal statements, and synthesize proofs.
- Answer/artifact format: Lean 4 theorem statement and proof script checked by Lean.
- Process fields:
- informal problem, formal statement, generated proof, Lean result, benchmark split.
- Environment or substrate: Lean 4 proof assistant and formal theorem-proving benchmark harness.
- Terminal predicate: proof verifies in Lean under the target theorem statement.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, environmental.
- Recorded verifier/reward/environment: Lean kernel/checker acceptance.
- Supervision granularity: step_level, answer_level.

## 4. How is the data constructed?

- Base model: DeepSeekMath 7B fine-tuned for Lean theorem proving.
- Teacher: formalization and proof-generation pipeline with Lean feedback.
- Generator: synthetic data pipeline translates informal math into formal statements and proofs.
- Filtering rule: low-quality formal statements and invalid proofs are filtered by Lean and pipeline rules.
- Sampling protocol: pin Lean version, benchmark split, and sample count for pass@k.
- Inference budget: whole-proof generation uses multiple samples; reported gains depend on sample budget.
- Optimizer/scaffold: SFT over synthetic formal statement/proof data.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, agent_training, evaluation.

Use it as a formal-proof data construction recipe and as a proof-assistant verification case.

## 6. What should readers audit?

- Which informal math sources seed formalization?
- Are miniF2F and FIMO examples excluded from training?
- Can synthetic statements duplicate benchmark theorems?
- Can each proof be traced to formalization and Lean checker output?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Formal statements can be wrong even if proofs verify.
- Pass@k hides low single-shot reliability.
- Lean/mathlib version drift can break reproducibility.

## 8. Why it matters for post-training reasoning data

It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2405.14333) · [🗂️ Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1) · [🤗 HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1)

- Data ID: `deepseek-prover-advancing-theorem-proving-in-llms-2024`
- Citation status: verified
- Confidence: high
