GAIA evaluates general assistants with 466 hidden-answer real-world questions requiring reasoning, tools, browsing, files, and multimodal handling. The primary sources are the arXiv paper, ICLR/OpenReview record, and Hugging Face GAIA benchmark page.

The concrete problem is whether AI assistants can solve simple-to-state real-world questions that require robust orchestration rather than only parametric knowledge. The decision boundary is hidden-answer assistant evaluation, not a released state-action trajectory corpus.

The data object or evaluation surface is a question, optional file or multimodal input, level metadata, and a final answer target; the released object is not state-action supervision, and 300 answers are retained for leaderboard use. This is useful for the atlas because it makes the feedback contract explicit: final-answer correctness under the official answer set, answer normalization, and hidden-answer leaderboard policy.
