The official paper and repository present LawBench as 20 legal tasks, grouped into memorization, understanding, and application. The public repository supplies the data directory, prompt/evaluation materials, and OpenCompass integration, so row-level audit can start from a task file, prompt, target answer, and scoring script.

The decisive instance-level evidence is whether a model output matches the official target or metric for that task. Aggregate leaderboard-style numbers are useful only after pinning prompt templates, output parsers, and model settings, because legal tasks can be sensitive to Chinese wording and answer format.

The evidence boundary is Chinese legal-domain benchmarking. It does not validate legal advice, cross-jurisdiction transfer, or factual currency of laws after the dataset snapshot. Scores should not be compared across repository revisions without recording the commit.
