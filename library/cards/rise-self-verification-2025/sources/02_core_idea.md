RISE first samples on-policy chain-of-thought solutions, then turns selected problem-solution pairs into verification prompts. The same policy produces a natural-language critique and a final score. Solution and verification trajectories are mixed for a joint PPO update.

The central feedback contract is narrower than “the model verifies its reasoning.” A rule-based outcome verifier labels solution correctness from the final answer and required format. The verification trajectory is rewarded when its extracted score agrees with that label. The prose critique is not independently checked for factual, logical, or error-localization validity.

