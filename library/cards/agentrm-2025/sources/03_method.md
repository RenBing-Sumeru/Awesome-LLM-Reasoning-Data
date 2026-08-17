1. **Initialize exploration.** The authors SFT LLaMA-3-8B-Instruct on expert trajectories from WebShop, Alfworld, and SciWorld.

2. **Estimate state values.** An MCTS-inspired loop selects with UCB, samples actions, rolls them to environment outcomes, and back-propagates values. States with too few visits are filtered.

3. **Train reward models.** Explicit RM regresses retained values with MSE; implicit RM learns from 16 complete trajectories per instruction and progress rewards. LLM-as-a-judge is a training-free baseline.

4. **Search at inference.** Best-of-N scores complete trajectories; beam search retains high-scoring states. Reproduction requires fixed environments, checkpoints, search widths, rollout budget, and reward definition.
