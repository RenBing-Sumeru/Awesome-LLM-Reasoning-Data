1. **Fine-grained prover training:** Use lemma statement–proof pairs for SFT, splitting by source problem so neighboring steps from the same complete proof do not leak across train and test.

2. **Failure diagnosis:** Break failures down by proof length, mathematical domain, retrieval requirements, and cases with correct informal reasoning but invalid Lean code to distinguish planning failures from formalization failures.

3. **Curriculum learning:** Progress from short lemmas to longer dependency chains from the same problem and finally test whether they compose into complete proofs. Report both lemma accuracy and full-theorem success. The 1,329 examples are too small to serve alone as large-scale pretraining data.
