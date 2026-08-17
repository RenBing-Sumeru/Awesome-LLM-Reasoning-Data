1. Inputs: an instance id, capability, task, instruction context, user input, reference answer, and score_rubric.
2. Pipeline: run candidate LMs to generate responses, feed each response plus the instance-specific rubric to evaluators, and aggregate 1-5 scores across tasks/capabilities.
3. Outputs: response records, evaluator scores, capability-level tables, and leaderboard entries.
4. Judge contract: the official data uses 5-point Likert descriptions per instance; evaluator behavior depends on the chosen LLM, prompt, and parsing script.
5. Reproducibility: pin the 765-row test set, GitHub evaluator code, evaluator model versions, API settings, prompt template, sampling, and any human/LLM calibration protocol.
