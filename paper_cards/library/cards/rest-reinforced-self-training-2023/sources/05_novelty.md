ReST makes the replay batch a first-class alignment artifact. Instead of treating rollouts only as transient online data, it preserves, scores, and reuses them in an offline improvement stage.

Its contribution is the explicit Grow/Improve division. That division exposes choices about rollout retention, reward thresholding, and batch lineage that are otherwise hidden inside an online RL implementation.
