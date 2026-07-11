Recorded training/evaluation use: process_supervision, reward_modeling, evaluation.

AutoPSV can supply process-supervision labels for verifier training, and the resulting verifier can be used for candidate selection among multiple rollouts. It is less directly a released training dataset than a labeling recipe, so reuse should preserve the verifier, generator, and evaluation setting.

AutoPSV helps connect answer-level verification, process-label construction, and rollout selection. It is a useful middle point between human step labels and search-derived process rewards, but it should be audited carefully before treating its labels as ground truth.
