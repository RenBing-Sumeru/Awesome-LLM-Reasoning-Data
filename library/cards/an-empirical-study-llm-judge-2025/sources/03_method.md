1. Select four publicly released fine-tuned judges—JudgeLM, PandaLM, Auto-J, and Prometheus—whose training data, base models, labels, and evaluation schemes differ.
2. Cross-validate each checkpoint on the other judges’ tests and on MT-Bench, making only minimal prompt changes when moving between pairwise selection, pointwise grading, and multi-turn evaluation.
3. Probe fairness with LLMBar, where a correct answer is paired with a more fluent or verbose but incorrect answer.
4. Probe aspect specificity on HaluEval, ToxicChat, and SALAD-Bench; adapt prompts or rubrics where required and select thresholds by grid search for binary tasks.
5. Test CoT and ICL prompts, then train generation-style Vicuna, classification-style Vicuna, and DeBERTa classifiers on the same judge data to determine whether generative architecture changes the outcome. Code, checkpoints, benchmark data, exact prompt templates, and environment details must be obtained from the official repository; new dataset release is not claimed.

The observed output is accuracy, F1, agreement, or correlation under the changed contract; the comparison checks whether a native score survives transfer rather than whether a newly trained system wins one leaderboard.
