Prompt source: Two off-policy buffers constructed from 3,000 randomly sampled MATH problems and 4,000 NuminaMath problems.
Trace author: The reported base model self-generates candidate responses for every source problem; no separate teacher is used for the math-buffer construction.
Answer format: A mathematical problem, a model-generated candidate response/trajectory, final-answer correctness, and its signed scalar reward.
Process fields: source problem; self-generated candidate response or trajectory; final-answer correctness; positive or negative reward label; signed scalar reward
Environment or substrate: Offline self-generation and reward-informed fine-tuning on mathematical-reasoning problems.
Verifier or reward: For the reported math buffers, final-answer correctness assigns a positive reward to correct candidates and a negative reward to incorrect candidates; RIFT reweights learning with that signed scalar feedback.
Terminal predicate: The candidate final answer is correct for the source mathematical problem.
Generator: The base model samples candidate responses for each source problem.
Filtering rule: RIFT retains the complete signed-reward buffer; unlike rejection-sampling fine-tuning, it does not discard negative-reward candidates or require explicit preference pairs.
Sampling protocol: For each source problem, sample 8 candidate responses; the paper reports a maximum candidate sequence length of 4,096. Temperature is not recoverable from the reviewed HTML rendering.
Inference budget: Maximum candidate response sequence length: 4,096 tokens.
