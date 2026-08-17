The paper and official repository report 3,709 final questions and publish the benchmark release and leaderboard. Main table evidence shows GPT-4o-2024-05-13 at 70.9 average CE on MathBench-A and 87.0 on MathBench-T, with large drops for many smaller open-source chat and math-specialized models at higher stages.

Instance-level evidence is the answer key plus CircularEval verdict for multiple-choice items, not a proof certificate. The analysis also compares CE with ordinary accuracy and shows that CE penalizes unstable option-sensitive answers.

The evidence boundary is the official release and OpenCompass setup. Scores can shift with data version, prompt style, model snapshot, option shuffling, CE implementation, language subset, and whether a run reports MathBench-A, MathBench-T, or an average.
