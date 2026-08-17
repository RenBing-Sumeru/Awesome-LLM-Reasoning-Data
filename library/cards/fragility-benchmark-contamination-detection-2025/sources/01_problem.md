Existing contamination detectors assume that benchmark members retain lower loss, higher confidence, or more recoverable text than non-members. That assumption can fail after the same SFT-and-RL pipelines used to turn base models into reasoning models, allowing inflated leaderboard performance to retain little detectable evidence.

This ICLR 2026 paper simulates two practical pipelines: contaminated SFT followed by RL, and CoT contamination applied late to mature LRMs. It tests member versus held-out benchmark records with generation-, perturbation-, reference-, and reference-free detectors.
