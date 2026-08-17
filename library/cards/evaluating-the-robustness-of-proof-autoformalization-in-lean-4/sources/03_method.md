1. **Select benchmark proofs:** Informal proofs from miniF2F and MATH-500 are paired with Lean targets, and original formalizations are checked.

2. **Generate global perturbations:** Style, order, and wording are rewritten without changing mathematical meaning, producing input pairs that should retain semantics.

3. **Generate local perturbations:** Numbers, variables, relations, or proof steps are changed deliberately, with required corresponding changes in formal output recorded.

4. **Run models and Lean:** Seven models produce Lean 4 formalizations. The compiler checks syntax and proof correctness, while structured rules compare consistency and reflection of local edits.

5. **Aggregate robustness:** Global correctness stability and local faithfulness are reported separately to distinguish wording sensitivity from ignored input changes.
