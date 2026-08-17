1. Inputs: a benchmark task from one of the supported environments, the task instruction or goal, the environment state, available actions/tool schemas, and a model-specific prompting or agent scaffold.
2. Pipeline: initialize the environment, send the current observation and action specification to the model, parse the model output into an action, execute it in the environment, append the observation to the trajectory, and repeat until success, failure, timeout, or budget exhaustion.
3. Outputs: per-episode trajectories, terminal status, task-specific score, and aggregate model-level metrics.
4. Feedback contract: the verifier is not one universal judge; each environment supplies its own success predicate, scoring function, simulator, API wrapper, or answer checker. A trajectory is evidence only relative to that implementation.

Reproducibility requires the exact AgentBench revision, task split, environment dependencies, API/tool schemas, prompts, parsing rules, model versions, temperature and sampling settings, max turns, retries, and timeout policy. Any public release of tasks or trajectories creates contamination risk for later model training.
