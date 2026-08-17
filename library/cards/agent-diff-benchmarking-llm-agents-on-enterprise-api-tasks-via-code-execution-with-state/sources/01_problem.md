Enterprise API agents may complete the same task through different call orders, so matching a reference trace or arguments penalizes valid solutions. Connecting directly to services such as Slack or Calendar introduces side effects, rate limits, and irreproducible state. Benchmarks therefore often choose between ecological realism and determinism.

Agent-Diff provides sandboxed replicas with realistic API interfaces and defines success through declarative state-diff contracts over the environment before and after execution, constraining outcomes without fixing a particular call path.
