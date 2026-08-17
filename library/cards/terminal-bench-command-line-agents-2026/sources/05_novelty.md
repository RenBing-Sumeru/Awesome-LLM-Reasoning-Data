Prior baselines include static coding benchmarks, repository-level repair benchmarks, desktop-agent benchmarks, and interactive code environments. Those settings test pieces of the same skill stack, but they do not isolate realistic command-line operation as the central interface with task-specific executable tests.

The change is the benchmark unit: a realistic terminal task with a unique environment, reference solution, and comprehensive verification. The agent must make a sequence of state-changing decisions under execution feedback. This turns the command line into a first-class environment substrate rather than a hidden implementation detail behind a code answer.

The 2026 direction signal is that agent evaluation is moving toward reproducible work environments where success depends on tool use, filesystem inspection, dependency management, and recovery from failed commands. Terminal-Bench is useful because it makes those behaviors observable and scoreable through a harness.

What is not new: using unit tests as verifiers, sandboxing code execution, and leaderboards for model comparison all predate this work. The novelty is the packaging and difficulty of terminal-centric tasks at benchmark scale. Before reuse, inspect task provenance, licenses, public/private split, hidden-test policy, whether traces are released, and whether public tasks have entered training corpora.
