1. **Evaluate feature-development agents:** Freeze repository images, context retrieval, and tool budgets, ask agents to implement feature requests, and report resolution rate from fail-to-pass/pass-to-pass execution.

2. **Build SFT/RLVR data:** Convert requirements, base trees, gold diffs, and tests into training examples. After sampling agent trajectories, construct layered rewards from new-feature tests and regressions.

3. **Curate enterprise tasks:** Reuse feature-pull-request filters on internal development history. Requirements depending on product judgment, UI acceptance, or non-programmatic validation require human rubrics rather than treating the existing unit-test contract as complete acceptance.
