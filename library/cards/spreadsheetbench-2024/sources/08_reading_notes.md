Keep three distinctions separate while reading: instruction-level hard success is not the same as partial test-case success; checked answer ranges are not the same as whole-workbook semantic correctness; and public spreadsheet benchmark files are not automatically reusable training data.

Read the dataset construction and evaluator sections before comparing leaderboard numbers. The most important downstream label is the feedback contract: an output spreadsheet is accepted because the evaluator compares specified ranges against gold workbooks under a pinned runtime.
