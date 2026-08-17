MiMo-Embodied asks whether one vision-language foundation model can transfer across object affordance, egocentric planning, spatial grounding, autonomous-driving perception, status prediction, and trajectory planning. Its data objects range from text answers and action choices to points, masks, 2D/3D boxes, calibrated-camera geometry, CoT rationales, and continuous ego trajectories.

The work was released in 2025 as an arXiv preprint. Official paper: https://arxiv.org/abs/2511.16518

The report organizes these objects into four main stages: general-plus-embodied SFT, carried-forward data plus driving SFT, carried-forward data plus generated CoT SFT, and deterministic-rule GRPO. A distinct downstream NAVSIM experiment adds imitation learning and DiffGRPO to a diffusion trajectory planner. These two RL settings should not be conflated.

The strongest disclosure is the task/source map and training order. The weakest is exposure accounting: no selected sample, image, frame, hour, token, CoT, trajectory, or rollout total is given, and no stage mixture or immutable split manifest is released.
