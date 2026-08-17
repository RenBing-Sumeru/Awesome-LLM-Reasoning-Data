1. **Curate programming tasks:** Tasks with clear functional behavior are selected, and natural-language descriptions and Lean signatures are written manually.

2. **Build four artifacts:** Each item receives reference code, a formal specification, a machine-checkable proof, and tests covering ordinary and boundary inputs.

3. **Evaluate tasks independently:** Models generate code, specifications, or proofs. Code is checked by tests and Lean typing, specifications for soundness and completeness, and proofs by kernel compilation.

4. **Test compositional context:** CodeGen receives reference or generated specifications, and SpecGen receives code, measuring how upstream artifact quality propagates.

5. **Aggregate results:** Code correctness, specification success, and proof success are reported per task under one or multiple samples.
