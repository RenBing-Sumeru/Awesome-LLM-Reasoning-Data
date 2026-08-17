1. The fixed small training dataset may hide behaviors from larger RM corpora; the reported experiment cost is about 4,500 GPU-hours.
2. The post-SFT decline is observed on only limited public checkpoints, so its cause is unresolved.
3. Pre-training composition uses an inferred presence score on a subset, not verified provenance; reuse must not treat it as a clean training-data label.
