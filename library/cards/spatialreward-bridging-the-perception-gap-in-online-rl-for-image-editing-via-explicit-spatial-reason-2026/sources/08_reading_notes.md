1. **Positioning:** Online RL for image editing lacks reliable fine-grained rewards, and current evaluators may ignore local changes between source and edited images.
2. **Method handle:** The decisive actions are construct spatially grounded edit records, predict relevant edit regions, reason over local and preserved content, followed by use spatialreward in online rl.
3. **Artifact handle:** SpatialReward is trained on 260K spatially aware reward records.
4. **Evidence anchor:** SpatialReward reaches state of the art on MMRB2 and EditReward-Bench and outperforms proprietary evaluators on MultiEditReward-Bench.
5. **Reuse decision:** Region and reasoning labels may be automatically generated and can miss global or nonlocal edits.
