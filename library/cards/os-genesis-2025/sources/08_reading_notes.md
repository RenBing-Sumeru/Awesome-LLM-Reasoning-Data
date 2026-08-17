- Read Section 3 for interaction-driven discovery, reverse task synthesis, and reward-proportional trajectory sampling; Section 4 defines the two SFT objectives and controlled 1K-trajectory comparisons; Section 5 and Appendix F provide the strongest evidence about diversity, scaling, failure retention, and TRM alignment.

- Keep the object boundary explicit: exploration triples, complete trajectories, and 51.1K released SFT rows are different objects. A TRM score is soft feedback, not an environment-verifiable terminal label, and retaining an incomplete episode does not certify it as successful.

- Treat benchmark improvements as evidence about trained agents in specific environments, not as validation of release licensing, privacy, split hygiene, or replayability.

- For reproduction, pin code and dataset revisions, map each SFT row back to an episode and objective, preserve screenshot-to-observation linkage, and document reset. Rollout count, score distribution, optimizer, seed, construction split, decontamination, replay success, and upstream GUI rights remain unknown.
