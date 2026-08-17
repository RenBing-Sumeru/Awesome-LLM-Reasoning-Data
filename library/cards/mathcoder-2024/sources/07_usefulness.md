# Usefulness

- **Reasoning-data builder:** serialize each problem as typed text/code/execution blocks, execute code in a pinned sandbox, preserve observations, and keep teacher, source, answer-check, and interpolation metadata alongside the trajectory.
- **Data auditor:** rerun code, compare recorded and fresh execution, extract final answers, and report correctness separately for ground-truth seeds and self-consistent interpolation records.
- **Do not use when:** the deployment cannot safely execute generated Python, requires formally verified steps, or needs item-level provenance directly from the published file; MathCodeInstruct does not provide those guarantees.
