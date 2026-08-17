Correctness is only relative to the tests in the chosen harness. A completion can pass HumanEval tests while failing edge cases, violating security expectations, or depending on undefined behavior.

The benchmark is small, Python-only, and function-level; it does not evaluate repository navigation, dependency management, multi-file changes, issue triage, or long-horizon agent behavior. Public tasks, canonical solutions, and tests are widely circulated, so modern evaluation needs contamination checks and ideally post-release or hidden variants.
