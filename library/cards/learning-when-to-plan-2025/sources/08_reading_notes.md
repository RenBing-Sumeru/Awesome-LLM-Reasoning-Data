

- The SFT object is 1,024 Llama-3.3-70B-Instruct Crafter trajectories with 16 uniformly sampled plan prompts and planning intervals sampled uniformly from 2 through 12.
- A timestep is labeled by its format: optional plan-tagged tokens followed by one action, or one action without replanning.
- Plan-aware SFT uses the same underlying actions as the action-only control; PPO then trains the optional plan/action policy with Crafter task reward.
- PPO batches contain 192 rollouts of length 16 at temperature 1.0; total rollout count, seeds, terminal predicate, and raw release remain unknown.
- Intermediate fixed planning frequencies outperform both extremes in the studied environments, but this is policy evidence rather than proof of trace-data quality.
