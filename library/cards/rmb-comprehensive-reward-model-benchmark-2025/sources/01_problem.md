Pairwise accuracy only asks a reward model to choose between two responses and does not show whether it can rank the best response first among many candidates. A model may score well on local comparisons yet accumulate ranking errors in Best-of-N use, making offline conclusions misleading for deployment.

RMB covers forty-nine scenarios and provides both pairwise and multi-candidate Best-of-N protocols to compare local judgment, set-level ranking, and downstream performance.
