The contribution is a harder, updated ARC benchmark that preserves the original input-output grid format while adding newly curated tasks for finer-grained assessment of abstract reasoning. The official repository states that ARC-AGI-2 contains 1,000 public training tasks and 120 public evaluation tasks, plus semi-private and fully-private test tiers outside the repository.

The feedback contract is exact grid verification. A task is solved only when all test outputs match the expected outputs. This makes the score easy to audit at the artifact level, while still leaving open whether the solver found the intended human abstraction or an overfit search shortcut.

Closest comparisons are ARC-AGI-1, program-synthesis benchmarks, visual analogy tasks, Raven-style matrix reasoning, and general benchmark suites that mix many task types. ARC-AGI-2 is narrower but sharper: each item is a tiny visual rule-induction problem with minimal priors and exact output checking.
