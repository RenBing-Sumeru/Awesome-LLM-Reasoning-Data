1. **Create step instances:** Extract prefixes from mathematical reasoning trajectories and define continuation points for each target step.
2. **Estimate values cheaply:** Use a lightweight annotation model of about 1.5B parameters for Monte Carlo continuations and estimate step scores from final-answer pass rates.
3. **Apply self-denoising:** Detect systematic over- and underestimation around earliest-error regions and replace unstable hard labels with soft supervision.
4. **Train robustly:** Package about 197K SCAN-Pro records and train a PRM with a noise-tolerant objective; reproduction must fix rollout count, sampling temperature, and annotation model.
