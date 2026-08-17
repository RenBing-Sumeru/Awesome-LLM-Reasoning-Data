1. **Position:** a cross-task process reward model, not another task-specific agent.
2. **Mechanism:** UCB search estimates state values; MSE trains explicit RM; search consumes scores at test time.
3. **Artifact:** code and data are released, but the useful object is the environment-plus-reward construction.
4. **Evidence:** explicit RM Best-of-5 is 61.5 versus greedy 52.7 over nine tasks.
5. **Reuse decision:** first audit whether terminal/progress reward really represents success in the target environment.
