The agent generates candidate actions and reflections at search nodes. Tree expansion and rollout under an MCTS controller; exact budget varies by task. MCTS selects and expands nodes using visits, value estimates, reflection, and environmental outcomes.

The resulting record contains A search tree of observations, actions, self-reflections, value estimates, environment feedback, and terminal result. The reported use is agent training, evaluation, test time compute.
