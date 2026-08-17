Correctness is only relative to the stated contract: BrowserGym tasks call task-specific validate functions that return reward, stop, message, and info based on ServiceNow state and predicates. The benchmark inherits ServiceNow instance assumptions, gated/restricted instance access, seeded data policy, evaluator coverage, browser backend, credentials, and license constraints.

The paper should not be read as unrestricted real-world reliability. Public artifacts can become training data, service-backed environments can drift, and judge/evaluator implementations can change across releases.
