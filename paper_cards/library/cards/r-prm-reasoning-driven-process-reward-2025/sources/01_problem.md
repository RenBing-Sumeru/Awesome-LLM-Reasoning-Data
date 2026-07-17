Existing process reward models commonly emit a step score directly. A score can identify a suspicious step, but it does not expose why the step is wrong and is expensive to train when reliable step labels are scarce.

R-PRM asks how a process reward model can learn a more informative judgement from limited annotations. It makes the model reason about an intermediate step before deciding whether that step is correct, so the training target contains an explanation as well as a verdict.
