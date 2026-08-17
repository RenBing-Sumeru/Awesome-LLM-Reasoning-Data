Online RL for image editing lacks reliable fine-grained rewards, and current evaluators may ignore local changes between source and edited images. The paper asks how explicit spatial reasoning can close this perception gap.

SpatialReward is trained on 260K spatially aware reward records. It predicts relevant edit regions, reasons over pixel-level evidence, and provides a reward for online image-editing RL.
