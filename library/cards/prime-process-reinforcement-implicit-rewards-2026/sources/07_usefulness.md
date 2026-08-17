For mathematical or programming problems with reliable answer checkers, users can reuse the PRIME code to convert multiple current-policy responses into outcome labels, learn token-level process rewards online, and produce an RL-optimized reasoning model.

For offline PRM training, users can directly employ the `response`, `label`, `instruction dataset`, and `generator model` fields in EurusPRM-Stage1-Data to train a response-supervised implicit reward model, then evaluate classification accuracy on held-out positive-negative response pairs. The original sources, deduplication, and benchmark contamination should be checked before use.

The method can also serve as a controlled extension of outcome-only RL: keep prompts, rollout counts, and PPO settings fixed while adding only the online implicit PRM. Its supervision contract should not be directly adopted when no trustworthy verifier exists or when incorrect processes frequently produce correct final results.
