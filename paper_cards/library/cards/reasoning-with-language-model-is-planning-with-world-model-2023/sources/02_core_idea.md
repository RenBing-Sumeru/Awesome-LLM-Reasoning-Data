Uses an LM as both reasoning agent and world model to build MCTS traces with predicted states and task-specific rewards.

An LM alternates between proposing actions/reasoning steps and predicting future states as a world model. The feedback contract is: Task-specific rewards and model-predicted state transitions guide MCTS selection. The terminal condition is: A selected plan or answer satisfies the task-specific outcome criterion.
