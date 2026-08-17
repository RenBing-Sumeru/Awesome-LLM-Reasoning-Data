UnifiedReward is trained on large-scale human preferences across image and video understanding and generation. It supports pairwise ranking and pointwise scoring and then automatically constructs high-quality DPO pairs for downstream vision models.

Human preference data from several visual tasks trains one shared reward model. Pair ranking and point sifting select high- and low-quality model outputs, which are converted into chosen–rejected records and consumed by DPO.
