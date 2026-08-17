The one-sentence contribution is a compact general-assistant benchmark whose questions are easy for humans but difficult for tool-equipped models.

The core mechanism is human-authored tasks, optional external context, hidden answers, level metadata, and final-answer scoring. The object being scored is a question, optional file or multimodal input, level metadata, and a final answer target; the released object is not state-action supervision, and 300 answers are retained for leaderboard use, and the feedback contract is final-answer correctness under the official answer set, answer normalization, and hidden-answer leaderboard policy.

The closest comparisons are MMLU-style exams, web QA, and tool-use benchmarks that either lack hidden answers or lack broad assistant tasks. Its direction label is evaluation-surface and feedback-contract curation rather than generic dataset summarization.
