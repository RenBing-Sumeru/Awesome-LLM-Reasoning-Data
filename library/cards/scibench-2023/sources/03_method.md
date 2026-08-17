Inputs are college-level problems collected from instructional textbooks and course-style sources in mathematics, chemistry, and physics. The public Hugging Face viewer exposes fields such as `problem_text`, `solution`, `answer_latex`, `answer_number`, `problemid`, `unit`, and `source`; the GitHub README says the JSON files live under `dataset/original`, with one file per textbook, and that multimodal examples are available under `dataset/img`.

Pipeline:

1. Select problems that require college-level concepts, advanced calculation, detailed solutions, and, for part of the release, visual context.
2. Convert each textbook/source group into JSON records and release them through GitHub and Hugging Face.
3. Evaluate models under settings described in the repository, including zero-shot, chain-of-thought, few-shot, Python, and Wolfram-style tool settings.
4. Score model answers against reference answers or solutions with the repository evaluation code.
5. For incorrect answers, run the analysis protocol: human annotators compare model and reference solutions, summarize error reasons into ten scientific problem-solving skills, and use an LLM verifier to attribute failures.

Outputs are benchmark records, model answers, answer-level scores, prompt-setting comparisons, and error profiles. Reproducibility requires pinning arXiv version, Git commit or branch, Hugging Face revision, prompt setting, model snapshot, tool setting, evaluator scripts, numeric tolerance, and whether image-bearing examples are included. The GitHub README explicitly notes minor dataset updates and an `old` branch, so old and current scores should not be merged without version metadata.
