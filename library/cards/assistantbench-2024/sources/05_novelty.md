The prior-work baseline is a static benchmark or qualitative evaluation that does not expose the same combination of task schema, scoring contract, artifact policy, and audit surface. AssistantBench changes that by making the evaluation object itself the reusable unit.

What changes is: official authors curate or construct realistic time-consuming web tasks with automatic answers; exact split, artifact, license, and evaluator details require source review. This is a direction signal because benchmark work increasingly depends on verifier quality, split freshness, release policy, and scaffold comparability, not only task difficulty.

What is not new is the broad idea of evaluating models on tasks. Reuse checks are concrete: pin the exact source version, artifact links, license, evaluator implementation, split, answer normalizer or judge prompt, and hidden/public policy.
