LiveBench makes freshness and reproducibility part of the benchmark contract: every model score belongs to a dated task release and an explicit objective checker, while later releases replace stale material. Unlike a static leaderboard or an LLM-judged arena, the auditable object is the versioned prompt-response-score record; this places the work in foundations and evaluation auditing rather than training-data construction.

Google Scholar citations: 125（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=LiveBench%3A+A+Challenging%2C+Contamination-Limited+LLM+Benchmark&author=Colin+White&hl=en）

Open dataset: yes.

- Name and locations: LiveBench, https://huggingface.co/livebench and https://github.com/LiveBench/LiveBench.
- Paper-release scale: 1,000 questions across 18 tasks and six categories; newer releases change over time.
- Form: task prompts, answer data or task-specific scorers, release metadata, and evaluation harness files; category datasets are published separately on Hugging Face.
- License: the paper states that the official repository is Apache-2.0; source-specific dataset terms still need checking.
- Intended use: contamination-aware LLM evaluation, leaderboard reproduction, and release-to-release regression analysis.
