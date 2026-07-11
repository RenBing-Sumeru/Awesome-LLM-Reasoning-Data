- Verification contract: mixed. The method begins from final-answer correctness and derives step-level signals from verifier confidence dynamics.
- Recorded verifier/reward/environment: process-outcome verifier and automated process annotation.
- Supervision granularity: step_level and process_reward.

- Base model: unknown in the atlas entry; the paper evaluates across several response generators.
- Teacher: answer-trained verifier, not manual dense step labels.
- Generator: model-generated candidate reasoning traces.
- Filtering rule: relative changes in verifier confidence are converted into process annotations.
- Sampling protocol: multiple generated outputs are scored or selected by OSV/PSV-style verifiers in the reported evaluation.
- Optimizer/scaffold: train a process-enhanced verifier from automatically generated annotations.
