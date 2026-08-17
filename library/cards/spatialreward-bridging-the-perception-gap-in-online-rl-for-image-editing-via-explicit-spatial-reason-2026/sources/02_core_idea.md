SpatialReward is trained on 260K spatially aware reward records. It predicts relevant edit regions, reasons over pixel-level evidence, and provides a reward for online image-editing RL.

Each record links a source image, instruction, edited image, spatial region, and reward reasoning. The model first localizes the edit and then evaluates semantic change and preservation before scoring.
