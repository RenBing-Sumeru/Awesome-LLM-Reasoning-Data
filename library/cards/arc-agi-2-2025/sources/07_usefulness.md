Use ARC-AGI-2 as an exact-verifier benchmark for abstraction, few-shot rule induction, and solver search auditing. Preserve task id, split, input/output demonstration pairs, test inputs, predicted outputs, attempt count, search budget, and exact-match result.

It is useful for comparing program synthesis, neuro-symbolic search, test-time adaptation, visual reasoning, and frontier-model scaffolds under a compact task format. Because output checking is deterministic, failures can be inspected at the grid level.

For downstream evaluation, separate public training, public evaluation, semi-private, and fully-private claims. Public JSON tasks can support reproducible method development; private-tier results should be treated as a different evidence class with lower leakage risk.
