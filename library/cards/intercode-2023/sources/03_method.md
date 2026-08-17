1. Inputs: a task instruction, an environment definition, initial files/databases/challenge state where applicable, and an agent policy or prompting scaffold.
2. Pipeline: reset the environment, show the agent the observation, execute each submitted command or code action, return stdout/stderr/result feedback, and continue until success, failure, timeout, or step budget.
3. Outputs: full state-action-observation traces, final answer or artifact when applicable, environment logs, and task-level score.
4. Feedback contract: the environment provides intermediate execution feedback; terminal success is checked by task-specific evaluators such as tests, database answer checks, command outcomes, or challenge validators.
5. Reproducibility notes: pin InterCode release, Docker/runtime image, task split, dependency versions, step limits, timeout policy, prompt scaffold, parser, and any private/public task boundary.
