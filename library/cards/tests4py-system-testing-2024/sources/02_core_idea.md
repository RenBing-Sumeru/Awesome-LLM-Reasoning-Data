One-sentence contribution: Tests4Py packages Python bugs with executable oracles, system-test interfaces, unit-test interfaces, and CLI tooling so testing and debugging methods can be evaluated under controlled, reproducible conditions.

The mechanism is to extend BugsInPy-style faulty program subjects with a uniform framework. Users can query benchmark metadata, check out a subject, build the right environment, run original tests, generate or run unit tests, generate or run system tests, retrieve grammars, conduct statistical fault localization, and run inputs through an oracle.

The feedback contract is explicit: a candidate test or input is run against a checked-out subject, and the framework reports whether it passes, fails, or exposes functional behavior under the oracle. This makes Tests4Py valuable for programmatic evaluation even though it predates the current wave of LLM coding-agent benchmarks.

Closest comparisons include BugsInPy, Defects4J, FuzzBench, BugSwarm, TestEval, TestGenEval, and SWT-Bench. The category rationale is environment-agent trajectory data because an agent can interact with checkout/build/test/run commands and receive execution feedback; it also belongs near programmatically verifiable outcome data because the terminal signal is computed by tests and oracles.
