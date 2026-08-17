Correctness is relative to two layers: Lean 3 acceptance for well-formed formal statements, and expert judgment for semantic correspondence to the informal theorem. Lean acceptance of a statement is not a proof of the original natural-language claim, and it does not check whether a generated proof exists unless the proving task is separately run.

The artifact is anchored in Lean 3, which the official repository now marks as unmaintained. Ports to Lean 4 are useful but must be audited as new artifacts, not assumed equivalent row by row. The public dataset has a small scale of 371 examples and can be memorized by future models.

Other hidden assumptions include textbook solution provenance, exact mathlib imports, source-header handling, prompt design, and human-judge consistency. BLEU should not be reused as a reward for formalization quality without a separate audit because the paper itself shows it can move opposite to accuracy.
