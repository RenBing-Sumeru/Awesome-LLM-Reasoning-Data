The prior RLVR baseline assumed by the paper still begins with an externally supplied distribution of questions and gold answers, even when it avoids rationale supervision or cold-start distillation. AZR changes that interface: the current policy proposes the task, a Python environment validates and completes it, the same policy attempts to solve it, and task learnability plus solver correctness jointly update the policy.

Three aspects are concrete rather than rhetorical:

1. **The data distribution is endogenous.** Deduction, abduction, and induction buffers grow from validated current-policy proposals instead of a fixed RL task-answer collection.
2. **The proposer receives competence-relative feedback.** Eight current-policy solver attempts turn a task's observed success rate into a learnability reward, so the curriculum is coupled to the learner rather than ranked only by static difficulty.
3. **One programmatic layer serves multiple roles.** The executor checks proposal validity, generates privileged outputs, scores solver terminals, and supplies the grounded environment for RLVR.

The work does not introduce reinforcement learning, self-play, program execution, PPO-style clipping, or procedural task generation in isolation. The identity seed, human-authored task templates, task taxonomy, denylist, reward equations, and optimizer are designed by people. All models also inherit pretrained data. “Absolute” therefore describes removal of the external task-answer corpus from this RL stage, not removal of human choices, prior model data, or evaluation datasets.

For reasoning-data research, the directional change is from a static dataset to an online, policy-dependent curriculum record. That change raises a corresponding release requirement: evaluating the recipe requires the evolving buffers, proposal contexts, solver samples, verifier outputs, rewards, failures, and model/checker versions. The current public package exposes seeds and code but not that episode ledger, so the recipe is more novel and inspectable than the released data object is complete.
