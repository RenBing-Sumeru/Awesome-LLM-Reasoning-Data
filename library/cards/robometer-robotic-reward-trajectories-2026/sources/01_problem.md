Binary success labels for robotic tasks cannot distinguish near completion, inefficient behavior, and complete failure, nor do they support learning general progress across robots, viewpoints, and policies. Single-frame judgment also misses recovery and degradation over a trajectory.

Robometer collects successful, failed, and suboptimal video trajectories from multiple robots and combines frame-level progress with pairwise comparisons to train a general reward model for policy selection and offline RL.
