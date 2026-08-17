This addendum is a useful template for reporting model-update deltas. A strong incremental card should explicitly separate inherited family context, changed training interventions, refreshed evaluation data, new audit pipelines, deployment mitigations, and unknown checkpoint delta.

For automated-audit designers, the 290-seed/1,160-transcript pipeline shows which structural metadata to publish. A reusable version would additionally release seeds, generator prompts, random seeds, retry policy, scorer prompts and checkpoints, per-item scores, human calibration, and bootstrap code.

For agentic-safety researchers, the separation among prompt-injection RL, system instructions, real-time detectors, execution halting, and monitoring is a valuable systems view. Causal attribution requires component ablations and shared attack sets.

For benchmark curators, the training-distribution warning, held-out-test scope, evaluation-awareness observation, checkpoint mismatch, and corrected historical values offer a concise checklist for preventing overclaiming.
