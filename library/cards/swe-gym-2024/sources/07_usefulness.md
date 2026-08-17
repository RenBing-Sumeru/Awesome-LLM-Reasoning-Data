Use SWE-Gym when the research question is agent improvement, not only benchmark reporting. It supplies a path from executable software tasks to trajectories, fine-tuning data, verifier training, and downstream SWE-bench evaluation.

It is especially useful for studying which component drives gains: better environment coverage, stronger scaffolds, teacher trajectories, rejection sampling, learned verifiers, or larger inference budgets.

For dataset curation, SWE-Gym is a good example of repository-level outcome supervision with optional process artifacts. Keep each released object separate: task environment, generated trajectory, trained agent, verifier, and evaluation result.
