1. Inputs: a benchmark adapter, a web task, browser runtime dependencies, an agent policy or scaffold, and experiment settings managed through AgentLab.
2. Environment setup: the adapter initializes the target site or dataset split, exposes observation and action spaces, and defines reset/step/termination behavior.
3. Rollout: the agent consumes observations, emits browser actions, and receives updated page state plus benchmark-specific feedback until termination or budget exhaustion.
4. Output: BrowserGym records trajectories, scores, metadata, and logs that can be aggregated into multi-benchmark reports or a leaderboard.
5. Evaluation: the verifier is adapter-specific; it may be a website state predicate, answer check, trace metric, or benchmark-defined success function.

Reproducibility requires pinning BrowserGym and AgentLab commits, Playwright/browser versions, site snapshots or live-service dates, benchmark package versions, public/hidden splits, prompts, model APIs, retry policy, timeouts, and any per-adapter evaluator code.
