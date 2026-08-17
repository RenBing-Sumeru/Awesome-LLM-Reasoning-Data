Mathematical SFT usually distills only correct solutions, so models do not learn how their common first errors are repaired and continue propagating mistakes after divergence. Existing MCTS or high-temperature error collection is costly and can generate implausible errors the student would not make.

LEMMA first analyzes realistic error types and then constructs first-error prefixes, reflection links, and two kinds of corrected trajectories: fix-and-continue and fresh-and-restart.
