Keep three boundaries separate. First, `final_answer_correct` is a construction and analysis field, while `label` is the evaluation target. Second, expert earliest-error annotation is not a formal verifier result. Third, aggregate F1 is not row-level evidence that a model understands the proof or solution.

Read the paper in this order: task definition, data collection and annotation protocol, statistics on correct-final-answer traces with process errors, then evaluation setup. When comparing models, check whether the result uses PRM thresholding, majority voting, greedy decoding, or proprietary single-sampling.

The most important reuse reminder: a public ProcessBench row can be useful for audit but dangerous for training reuse if the target model has already seen the math problem, the generated trace, or the expert label.
