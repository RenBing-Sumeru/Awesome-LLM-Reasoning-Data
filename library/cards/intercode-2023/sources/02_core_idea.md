The contribution is a common interface for interactive coding tasks, so agents can observe execution feedback, decide the next action, and be scored by environment-specific predicates. The core mechanism is a loop over observation, action, execution, feedback, and termination.

The evaluation surface is a task environment plus a trace schema, not just a prompt. Success is determined by programmatic or environmental checks: SQL answers, shell task completion, code execution outcomes, tests, CTF validation, or SWE-specific scoring depending on the sub-environment.

Closest comparisons are HumanEval/APPS-style final-answer code benchmarks and WebArena-like interactive agent benchmarks. InterCode sits between them: the domain is coding, but the contract is an interactive environment with executable feedback.
