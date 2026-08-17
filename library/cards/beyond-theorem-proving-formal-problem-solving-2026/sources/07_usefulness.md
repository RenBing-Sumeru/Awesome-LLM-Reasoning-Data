1. **Process-verifiable math evaluation:** Use FormalMath500 and related sets to test whether models can discover answers inside Lean rather than merely prove supplied conclusions.

2. **RL environment:** Treat Lean solution states as states, tactics as actions, and terminal completion as deterministic reward for formal RL agents.

3. **Answer verification:** Use RPE instead of string matching for sets, intervals, and functional answers. Tasks that are not formalizable or require numerical tolerance should retain domain-specific checkers rather than forcing FPS.
