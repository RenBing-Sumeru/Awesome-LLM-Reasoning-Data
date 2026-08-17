Inputs are a benchmark task, an LLM agent or scaffold, the benchmark driver, available actions, and the environment state/observation interface. The paper and repository describe AgentQuest as a modular layer that can connect multiple benchmark families through common driver and metric abstractions.

The pipeline is:

1. Choose a benchmark module and initialize the task/environment state.
2. Let the agent observe the state, select an action, and receive the next observation or environment response.
3. Record the trajectory, including actions, observations, state transitions where available, and terminal outcome.
4. Apply task success metrics plus AgentQuest progress and repetition metrics to expose intermediate behavior.
5. Compare agents or scaffolds under the same benchmark module, metric definitions, and run budget.

Outputs are scored runs and trajectory-level diagnostics rather than a standalone training corpus. Reproducibility depends on pinning the repository commit, benchmark module version, model/scaffold prompts, run budget, API dependencies, and any task split or seed policy used by the underlying benchmark.
