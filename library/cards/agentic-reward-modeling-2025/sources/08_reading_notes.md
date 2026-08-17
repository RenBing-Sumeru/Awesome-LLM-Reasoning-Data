1. **Position.** Preference scores alone miss factuality and hard constraints; REWARDAGENT adds selectively invoked verifiers to the reward.
2. **Method lever.** Route first, verify response differences or executable constraints, then add scores; routing is the main gate and error surface.
3. **Artifact.** IFBench has 444 multi-constraint response pairs; the release also provides code, while the paper does not claim an open universal correctness dataset.
4. **Evidence anchor.** MINI scores 72.5 overall versus ArmoRM’s 56.5; removing factuality cuts RM-Bench 73.1→54.0. This is benchmark-specific, not universal correctness.
5. **Reuse decision.** Best for auditable ranking/DPO where evidence and hard checks exist; first audit router misses and human disagreements before trusting its final scalar.
