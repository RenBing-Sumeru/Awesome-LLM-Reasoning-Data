# 02 Core Idea

The one-sentence contribution is that OpenAI released PRM800K and used it to compare process supervision against outcome supervision on mathematical reasoning. The mechanism is to train a process reward model on human labels for individual solution steps, then use that reward model to select among many generated solutions.

The evaluation surface is a generated solution trajectory, not just a final numeric answer. The feedback contract is explicit: human annotators rate each step, while outcome supervision uses an answer grader and final correctness. The closest comparisons are outcome reward models, majority vote over sampled solutions, and earlier process-supervision work on GSM8K. The direction label is step-level verifier or reward supervision for reasoning.
