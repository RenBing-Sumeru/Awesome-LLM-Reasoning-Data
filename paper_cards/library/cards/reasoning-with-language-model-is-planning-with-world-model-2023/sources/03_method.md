MCTS is guided by task-specific rewards and an LM world model. The terminal criterion is task-specific; intermediate transitions are predictions, not ground truth.

The LM alternates between agent and world-model roles. MCTS expands candidate reasoning states, rolls out predicted outcomes, and backpropagates value to select the next branch.
