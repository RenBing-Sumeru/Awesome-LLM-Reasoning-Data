Long chains of thought are usually trained as continuous text, so models do not explicitly distinguish problem understanding, subgoal decomposition, calculation, verification, and synthesis. After a failure, supervision knows only the final answer and cannot identify which planning or execution level broke down.

MLR segments complete trajectories into structured steps with cognitive modes, subgoals, local outcomes, and source text, then models high-level modes and low-level execution separately.
