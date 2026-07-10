LeanDojo extracts theorems, premises, tactics, and intermediate states from a pinned mathlib revision, then offers an interface that initializes a theorem and applies tactics. Invalid tactics are rejected by Lean; closing all goals gives terminal success.

The benchmark includes random and novel-premises splits. The latter requires test proofs to use at least one premise never used in training, reducing a memorization shortcut.
