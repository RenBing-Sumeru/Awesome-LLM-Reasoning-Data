Correctness is formal and toolchain-relative. A proof accepted by Lean is valid for the exact encoded theorem, imports, library versions, and kernel/tactic semantics, but it may be unreadable, brittle, overfit to library lemmas, or semantically distant from an informal theorem.

Evaluation can change with timeout, search budget, premise retriever, allowed tactics, hardware, and repository cache. Premise leakage is a central risk: a model should not retrieve proof artifacts that reveal held-out theorem solutions.

The GitHub repository is MIT licensed, but traced Lean repositories can have their own licenses and dependency constraints. Current LeanDojo documentation also distinguishes the original paper-era system from newer v2 support, so benchmark claims should pin the intended release.
