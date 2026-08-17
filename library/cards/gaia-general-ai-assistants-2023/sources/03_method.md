Inputs are the task materials and metadata needed to form one record: a question, optional file or multimodal input, level metadata, and a final answer target; the released object is not state-action supervision, and 300 answers are retained for leaderboard use.

Pipeline: Curate questions that need reasoning, browsing, tools, and multimodal handling; assign answers and levels; release questions while withholding many answers; score submissions by final answer.

Outputs are scored benchmark records or evaluation summaries under this contract: final-answer correctness under the official answer set, answer normalization, and hidden-answer leaderboard policy. Reuse must pin source version, split, scorer or judge version, prompt/scaffold policy, runtime environment where relevant, and artifact license.
