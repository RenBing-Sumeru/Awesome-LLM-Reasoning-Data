Prior-work baseline: BugsInPy provides Python bugs, while benchmark families such as Defects4J, BugSwarm, FuzzBench, and repair/test-generation corpora support controlled studies. A common weakness is that system-level functional oracles and generated-input interfaces are not uniformly available.

What changes: Tests4Py augments Python bug subjects with oracles, system interfaces, unit/system test generation support, and one framework for checkout, build, test, run, grammar access, and reports. This makes generated tests and generated system inputs comparable across subjects.

Direction signal: for reasoning-data curation, Tests4Py shows a clean executable contract that can turn a model's action into a verified outcome. An LLM agent can propose a unit test, a system input, or a debugging action, then receive a deterministic report from the benchmark.

What is not new: the work builds on BugsInPy and established testing/debugging methods; it is not an LLM benchmark by design, not a preference dataset, and not a repository-scale autonomous SWE task suite. Reuse should check project coverage, oracle adequacy, flaky behavior, and whether the selected subject represents the target domain.
