The one-sentence contribution is a benchmark that converts model answers into human-exam-style total and subject scores.

The core mechanism is zero-shot model prompting, subject-level grouping, objective scoring, subjective grading, and score conversion. The object being scored is 2,811 Gaokao questions from 2010-2022 across 9 subjects, including 1,781 objective and 1,030 subjective questions, with answer keys or scoring rubrics, and the feedback contract is objective exact or rule matching, plus subjective human scoring or GPT-4-turbo judge scoring with marking criteria.

The closest comparisons are C-Eval, CMMLU, MMLU, and other exam-style benchmarks with less direct Gaokao scoring structure. Its direction label is evaluation-surface and feedback-contract curation rather than generic dataset summarization.
