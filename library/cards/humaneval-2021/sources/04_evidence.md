The paper reports Codex performance on HumanEval and uses pass@k to estimate whether at least one of k sampled completions passes tests. The official repository provides the problem set and evaluation harness used by the benchmark.

Instance-level evidence is executable: a generated completion either passes the unit tests for that task under the selected harness or it does not. Aggregate pass@k is bounded by sampling count, temperature, timeout, dependency environment, and the exact estimator; it should not be read as proof that every generated program is robust beyond the test cases.
