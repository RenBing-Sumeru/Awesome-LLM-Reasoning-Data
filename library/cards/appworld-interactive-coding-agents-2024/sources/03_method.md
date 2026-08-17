1. Inputs: a natural-language task, initial world state, simulated users, documentation for apps/APIs, and a coding-agent scaffold.
2. Pipeline: the agent reads docs, writes code or tool calls, executes against the AppWorld environment, observes API results, and revises until it stops or reaches its budget.
3. Outputs: code/actions, API traces, final world state, task success labels, and collateral-damage checks.
4. Feedback contract: AppWorld uses robust state-based and execution-based unit tests to grade success and side effects.
5. Reproducibility notes: pin AppWorld package/data version, task split, API docs, sandbox, model scaffold, execution budget, and evaluator revision.
