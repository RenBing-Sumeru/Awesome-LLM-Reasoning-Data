Read the paper together with the official repository. The paper defines the 361-task evaluation, 158-tool construction process, 250/111 tool-benefit partition, TIR/ACS formulas, three-run protocol, and ablations. The repository is necessary to see the actual observation fields, per-application retrieval behavior, MCP client/server configuration, task-ID manifests, executable tool surface, and dependence on an external OSWorld checkout. The live project page is useful for current leaderboard status but should not replace the paper tables when citing the 2025 experiment.

Before reusing the environment or generating trajectories, record:

- paper version plus OSWorld-MCP/OSWorld commits; VM provider, image digest, snapshot, OS, and application versions;
- full task configuration, setup actions, expected-state getters, metric functions, and conjunction rules;
- exact 158-tool schema/code set, external server versions, application-based retrieval and fallback logic, and tool-description order;
- model API/version, GUI scaffold, prompt, grounding model, temperature, action/token budgets, seed, task order, and retries;
- every screenshot/application observation, tool request/result/error, GUI action, termination report, evaluator output, reset outcome, and retention reason for successes, failures, timeouts, invalid calls, and verifier exceptions;
- repository/component licenses, inherited task/fixture provenance, redaction, credential handling, network policy, and sandbox boundaries.

Unresolved questions are material rather than cosmetic: there is no complete paper-run trajectory archive, no immutable environment bundle, no train-safe split, no decontamination report, no root repository license, and no documented production-grade MCP threat model. The paper's ethics statement reduces some privacy uncertainty but does not replace record-level provenance, component licensing, or a security review of side-effectful tools.
