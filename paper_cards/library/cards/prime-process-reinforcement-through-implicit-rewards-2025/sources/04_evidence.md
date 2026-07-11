Recorded training/evaluation use: rlvr, process_supervision, reward_modeling.

PRIME can be reused as a recipe for training from rollout data when dense process labels are unavailable. The reusable record should preserve the prompt, rollout, outcome label, implicit process-reward estimate, and policy version, because all of those determine the training signal.
