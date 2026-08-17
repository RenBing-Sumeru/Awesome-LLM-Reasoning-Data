1. Specify a base environment with observations, actions, transitions, and reward, then enumerate the unintended behaviors to audit.

2. Wrap it with a mock filesystem and additional actions. The wrapper plants a hidden solution or exposed logical bug for single-player games, and opponent-prompt read/edit files for two-player games.

3. Define detection. Each hack is a predicate h(observation, action) that returns 1 exactly when the relevant file is read, altered, or bug is exploited; the agent cannot see the monitor.

4. Run TextArena agents. The release covers 13 hidden-solution, 5 logical-bug, and 8+8 two-player environments; five models are ReAct agents at temperature 1.

5. Report trajectory hack rate and conditional hack-free win rate. Reproduce with the repository's game, filesystem, prompt, and difficulty versions.
