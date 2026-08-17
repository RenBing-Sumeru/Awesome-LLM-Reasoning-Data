Use HumanEval as the minimal schema for executable code-generation evaluation: prompt, candidate code, task tests, timeout, sandbox result, and pass@k aggregation. It is a useful baseline before moving to harder repair, repository, or agent benchmarks.

For reasoning-data audit, preserve sample-level execution logs rather than only aggregate pass@k. The same task can serve different roles as prompt-only evaluation, supervised code data, or test-based reward data; those roles should be labeled separately.
