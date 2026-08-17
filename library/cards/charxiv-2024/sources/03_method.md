1. Inputs: scientific chart images selected from arXiv papers, plus curated natural-language questions and reference answers.
2. Pipeline: authors handpick charts, write or curate descriptive and reasoning questions, verify answers, and release validation/test files with chart assets and metadata.
3. Outputs: benchmark records for model prompting, model answers, and per-question correctness under the official evaluator.
4. Feedback: the decisive signal is answer-level agreement with the verified answer, implemented through the released evaluation scripts and GPT-4o grading for non-exact responses.
5. Reproducibility: pin the data split, image files, prompt template, evaluator code, GPT-4o model/date if used, and any leaderboard snapshot. The benchmark is evaluation-only; scores do not define a reward model without a separate audit.
