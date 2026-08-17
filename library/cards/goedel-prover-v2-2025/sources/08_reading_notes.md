- Read the pipeline as S1 whole proofs → S2 compiler-error corrections → S3 scaffolded statements → verifier-backed RL and model averaging.
- A self-correction sample contains a statement, a failed model output, and a Lean error message; the public release does not expose the full correction corpus.
- RL uses eight rollouts per input and removes prompts with pass rate 0 or above 0.75, so reward data are conditioned on a moving difficulty filter.
- Lean acceptance verifies the formal statement under the pinned environment, not the semantics or provenance of an autoformalized source.
- Treat official models, inference code, and MathOlympiadBench as released artifacts, not substitutes for the unreleased S1/S2/S3 and rollout ledgers.
- Reconcile the 32B RL input count (64K in the appendix, 67K in the main text) and pin all model/Lean/mathlib revisions before reproduction.

