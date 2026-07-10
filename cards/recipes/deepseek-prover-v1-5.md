<!-- entry_id: deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learn-2024 -->
<!-- card_type: recipes -->
# DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learn-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learn-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learn-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: programmatically_verifiable_outcome_data, scaling_rlvr_test_time_compute, data_construction_open_release_recipes
> Links: [📄 Paper](https://arxiv.org/abs/2408.08152) · [🐙 Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [🤗 HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL)

## TL;DR

DeepSeek-Prover-V1.5 adds proof-assistant feedback, RL, and RMaxTS search on top of DeepSeek-Prover-style formal proof data.

It shows how proof-assistant feedback can become both a reward signal and a search guide for formal mathematical reasoning.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: construction_recipe, model_report, scaling_study.
- Domains: formal-math, lean, rl.
- Current status: verified.
- Why it belongs: Formal-proof RL recipe entry for proof-assistant feedback, reinforcement learning, and tree-search inference.

## 2. What data object does it expose?

- Prompt/source: formal theorem-proving tasks derived from DeepSeek-Prover data and benchmarks such as miniF2F and ProofNet.
- Trace/action author: model generates proof attempts and search trajectories under Lean feedback.
- Answer/artifact format: Lean proof script, proof-search path, feedback signal, and verification result.
- Process fields:
- theorem, proof attempt, Lean feedback, reward, search node, final proof, pass/fail result.
- Environment or substrate: Lean 4 proof assistant plus RMaxTS search procedure.
- Terminal predicate: proof is accepted by Lean within the inference/search budget.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, environmental.
- Recorded verifier/reward/environment: proof assistant feedback used for RL and search selection.
- Supervision granularity: step_level, scalar_reward, full_episode.

## 4. How is the data constructed?

- Base model: DeepSeek-Prover-V1 / DeepSeekMath-derived formal model.
- Teacher: Lean checker feedback and prior formal-proof dataset.
- Generator: model samples proof candidates and tree-search paths.
- Filtering rule: Lean feedback identifies valid, invalid, and useful proof states.
- Sampling protocol: pin search budget, theorem split, Lean version, and model checkpoint.
- Inference budget: RMaxTS and pass@k settings directly affect reported gains.
- Optimizer/scaffold: RL from proof-assistant feedback plus Monte-Carlo-style tree search.

## 5. How can it enter post-training?

Recorded training/evaluation use: rlvr, agent_training, evaluation, test_time_compute.

Use it as a proof-assistant-feedback RLVR reference and as a search-budget audit case.

## 6. What should readers audit?

- Which proofs come from V1 data versus newly generated attempts?
- Are ProofNet/miniF2F test theorems excluded from training and search tuning?
- Can theorem statements or formal proofs leak through public corpora?
- Which proof attempts received which Lean feedback?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Search budget can dominate model quality.
- Checker feedback is sparse and version-dependent.
- RL can optimize toward easy theorem families.

## 8. Why it matters for post-training reasoning data

It shows how proof-assistant feedback can become both a reward signal and a search guide for formal mathematical reasoning.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2408.08152) · [🐙 Code](https://github.com/deepseek-ai/DeepSeek-Prover-V1.5) · [🤗 HF](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL)

- Data ID: `deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learn-2024`
- Citation status: verified
- Confidence: high
