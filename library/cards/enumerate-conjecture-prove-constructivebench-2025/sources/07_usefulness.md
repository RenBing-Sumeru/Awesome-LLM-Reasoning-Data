1. **Construction-task evaluation:** Use ConstructiveBench to report candidate hit rate, proof success rate, and final admissibility separately rather than labeling every failure as a theorem-proving error.

2. **Verified training:** Collect enumerated candidates, rejection reasons, Lean conjectures, and proof states to train candidate rankers or perform RLVR from kernel outcomes. Rewards must not favor only trivial answers that are easy to formalize.

3. **Pipeline transfer:** Reuse the candidate–specification–proof–admissibility structure for program synthesis or combinatorial design. ECP is not a direct solution when reliable formal specifications are absent or the answer space cannot be effectively enumerated.
