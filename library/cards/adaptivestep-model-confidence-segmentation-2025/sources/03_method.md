1. **Generate trajectories:** Sample complete reasoning trajectories for mathematics and code while preserving token probabilities.

2. **Detect boundaries:** Identify decision shifts from confidence changes and segment trajectories into adaptive steps.

3. **Estimate rewards:** Continue rollouts from each step prefix and use outcome success rates as process rewards.

4. **Train the verifier:** Build roughly 100K training records; reproduction must fix the model, confidence threshold, rollout count, and random seed.
