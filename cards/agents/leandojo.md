<!-- entry_id: leandojo-theorem-proving-with-retrieval-augmented-language-models-2023 -->
<!-- card_type: agents -->
# LeanDojo: Theorem proving with retrieval-augmented language models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=leandojo-theorem-proving-with-retrieval-augmented-language-models-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=leandojo-theorem-proving-with-retrieval-augmented-language-models-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=leandojo-theorem-proving-with-retrieval-augmented-language-models-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: programmatically_verifiable_outcome_data, environment_agent_trajectory_data, benchmarks_evaluation_surfaces
> Links: [📄 Paper](https://arxiv.org/abs/2306.15626) · [🏛️ Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [🐙 Code](https://github.com/lean-dojo/LeanDojo) · [🗂️ Data](https://zenodo.org/records/10114157) · [🌐 Project](https://leandojo.org/)

## TL;DR

LeanDojo releases an open Lean theorem-proving environment, benchmark, and retrieval-augmented prover pipeline.

It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.

## 1. What is this work?

- Year / venue: 2023 · NeurIPS Datasets and Benchmarks.
- Atlas role: data_release, benchmark, agent_environment.
- Domains: formal-math, lean, retrieval.
- Current status: verified.
- Why it belongs: Formal-proof agent-environment entry for open Lean data extraction, interaction, retrieval, and benchmark evaluation.

## 2. What data object does it expose?

- Prompt/source: Lean math-library theorems, proof states, accessible premises, and benchmark splits.
- Trace/action author: prover models select premises and produce Lean tactics/proofs.
- Answer/artifact format: Lean tactic sequence or proof script checked by Lean.
- Process fields:
- repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.
- Environment or substrate: Lean proof assistant environment and traced math-library repositories.
- Terminal predicate: proof completes and verifies in Lean.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: environmental, programmatic.
- Recorded verifier/reward/environment: Lean checker and environment feedback.
- Supervision granularity: state_action_level, step_level, full_episode.

## 4. How is the data constructed?

- Base model: retrieval-augmented prover trained/evaluated on LeanDojo benchmark data.
- Teacher: Lean math-library proofs and proof-assistant feedback.
- Generator: data-extraction toolkit traces repositories and prover generates tactics.
- Filtering rule: benchmark split stresses novel-premise generalization.
- Sampling protocol: pin repository versions, theorem splits, retrieval corpus, and Lean version.
- Inference budget: search steps, premise retrieval count, and tactic retries affect pass rate.
- Optimizer/scaffold: LeanDojo toolkit plus ReProver-style retrieval scaffold.

## 5. How can it enter post-training?

Recorded training/evaluation use: agent_training, sft, evaluation.

Use it for theorem-proving agent training, retrieval supervision, and environment-backed evaluation.

## 6. What should readers audit?

- Which Lean repositories and commits are traced?
- Are premises novel across train/test splits?
- Can theorem statements or proofs leak through math-library overlap?
- Are repository versions and extraction scripts reproducible?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- A prover can rely on retrieval leakage.
- Lean version drift can break proofs.
- Premise accessibility rules can change task difficulty.

## 8. Why it matters for post-training reasoning data

It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2306.15626) · [🏛️ Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [🐙 Code](https://github.com/lean-dojo/LeanDojo) · [🗂️ Data](https://zenodo.org/records/10114157) · [🌐 Project](https://leandojo.org/)

- Data ID: `leandojo-theorem-proving-with-retrieval-augmented-language-models-2023`
- Citation status: verified
- Confidence: high
