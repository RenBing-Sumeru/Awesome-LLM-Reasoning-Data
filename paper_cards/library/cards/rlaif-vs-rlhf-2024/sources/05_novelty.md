Earlier RLAIF work established AI feedback as a possibility; this paper systematically compares it with RLHF across several alignment tasks and distinguishes reward-model-mediated feedback from direct AI rewards during RL. The latter moves the external judge from data preparation into the optimization loop.

The important data-lifecycle contribution is the explicit choice of feedback consumer. The same kind of AI judgment can be stored as a label for a reward model or queried online as policy reward, producing different costs, reproducibility properties, and opportunities for feedback drift.
