1. Inputs: Wikipedia article pairs, crowd-written questions, answer strings, and supporting sentences.
2. Construction: annotators write questions that connect two entities or pages, then supporting facts are marked at sentence level.
3. Task settings: the distractor setting gives a small set of paragraphs including gold and distractors; the full-wiki setting requires retrieval from Wikipedia.
4. Outputs: a model returns an answer and optionally supporting facts.
5. Scoring: official evaluation computes answer EM/F1, supporting-fact EM/F1, and joint EM/F1.

Reproducibility requires pinning the dataset split, Wikipedia snapshot or retrieval corpus, official evaluator, normalization rules, and whether leaderboard numbers are from distractor or full-wiki runs.
