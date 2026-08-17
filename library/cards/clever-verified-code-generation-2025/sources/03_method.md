1. **Curate tasks manually:** Program problems expressible in Lean are selected with function signatures, docstrings, example tests, and natural-language requirements that do not reveal implementations.

2. **Create hidden specifications:** Experts author ground-truth formal specifications and check that they exclude constant answers, inconsistent assumptions, and other vacuous solutions.

3. **Evaluate specification generation:** Models output Lean specifications. The system requires an isomorphism or equivalence theorem to the hidden specification, and only Lean-accepted outputs proceed.

4. **Evaluate program generation:** Models generate Lean implementations, correctness proofs, and helper lemmas. End-to-end success requires every artifact to type-check.
