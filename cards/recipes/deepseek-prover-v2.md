<!-- entry_id: deepseek-prover-v2-advancing-formal-mathematical-reasoning-via-reinforcement-lea-2025 -->
<!-- card_type: recipes -->
# DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v2-advancing-formal-mathematical-reasoning-via-reinforcement-lea-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v2-advancing-formal-mathematical-reasoning-via-reinforcement-lea-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v2-advancing-formal-mathematical-reasoning-via-reinforcement-lea-2025&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧱 Instruction / Demo / Rationale (Track 01) · 🤝 Preference & Reward Feedback (Track 02) · 🧮 Programmatic Verification (Track 03) · 🌐 Environment & Agent Trajectories (Track 06) · 🏗️ Construction & Open Releases (Track 08) · 🎯 Training Usage & Objectives (Track 09) · 📈 Scaling / RLVR / TTC (Track 10) · 🚀 Frontier Disclosure Ledger (Track 12) -->
> Subfield: 🧱 Instruction tuning / SFT data

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2504.21801) · [🐙 Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [🗂️ Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [🤗 HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B)

## TL;DR

DeepSeek-Prover-V2 uses recursive subgoal decomposition and RL to connect informal reasoning with formal Lean theorem proving.

It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: model_report, construction_recipe, data_release.
- Domains: formal-math, lean, subgoal-decomposition.
- Current status: verified.
- Why it belongs: Formal mathematical reasoning entry for subgoal-decomposition data, proof RL, and ProverBench-style evaluation.

## 2. What data object does it expose?

- Prompt/source: formal theorem-proving tasks, decomposed subgoals, and ProverBench-style evaluation problems.
- Trace/action author: DeepSeek-V3-powered pipeline decomposes problems; prover models synthesize formal proofs.
- Answer/artifact format: subgoal chain, informal reasoning trace, Lean proof, and checker result.
- Process fields:
- problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.
- Environment or substrate: Lean 4 environment plus recursive theorem-proving pipeline.
- Terminal predicate: formal proof verifies and solves the target theorem.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, environmental, mixed.
- Recorded verifier/reward/environment: Lean verification and RL reward over formal proof success.
- Supervision granularity: step_level, full_episode, scalar_reward.

## 4. How is the data constructed?

- Base model: DeepSeek-Prover-V2 7B/671B variants built on DeepSeek model families.
- Teacher: DeepSeek-V3-style decomposition and formal proof feedback.
- Generator: recursive pipeline creates subgoals and proof attempts.
- Filtering rule: resolved subgoals and successful formal proofs seed cold-start and RL training.
- Sampling protocol: pin model size, ProverBench version, Lean version, and search budget.
- Inference budget: formal proof success depends on search/sample count and subgoal decomposition budget.
- Optimizer/scaffold: cold-start training plus reinforcement learning for formal proof generation.

## 5. How can it enter post-training?

Recorded training/evaluation use: rlvr, sft, agent_training, evaluation.

Use it as a frontier formal-proof post-training stack and as an audit case for subgoal data lineage.

## 6. What should readers audit?

- Which theorem families enter cold-start and RL stages?
- Are ProverBench and AIME-style formalized examples separated from training?
- Can public formalizations leak benchmark proofs?
- Can every proof be traced through subgoal decomposition to Lean feedback?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Subgoal decomposition can introduce false intermediate claims.
- Formal and informal reasoning scores are not directly comparable.
- Large-model teacher lineage can hide data provenance.

## 8. Why it matters for post-training reasoning data

It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2504.21801) · [🐙 Code](https://github.com/deepseek-ai/DeepSeek-Prover-V2) · [🗂️ Data](https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench) · [🤗 HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B)

- Data ID: `deepseek-prover-v2-advancing-formal-mathematical-reasoning-via-reinforcement-lea-2025`
- Citation status: verified
- Confidence: high
