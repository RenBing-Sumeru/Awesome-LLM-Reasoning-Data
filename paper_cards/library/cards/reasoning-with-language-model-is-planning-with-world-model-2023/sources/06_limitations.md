- Are predicted next states checked against the real task environment?
- What is the branching, rollout, and LM-call budget?
- Does the reward test the intended outcome or a shortcut?
- How many invalid branches were filtered away?

World-model hallucinations can mislead search. A higher MCTS budget, a different reward definition, or a stronger base LM can each explain an apparent improvement.
