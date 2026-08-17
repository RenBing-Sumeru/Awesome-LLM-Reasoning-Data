The construction and evaluation pipeline is:

1. Select implementation-focused GitHub repositories whose primary code language is Java, JavaScript, TypeScript, or Python. A repository must have at least 100 PRs, activity in the preceding 12 months, a permissive license, and primarily English project discussion. Repositories already in SWE-bench are excluded.
2. Collect PRs that close issues and contribute tests. The issue title/body becomes the problem statement; comments before the solution PR's first commit form hints. No cross-natural-language translation step is reported.
3. Split the solution PR diff into the gold code patch and test patch. Record the repository, issue/PR identifiers, base commit, timestamp, programming language, and LLM-derived task/informativeness categories.
4. Manually configure a Dockerfile for each repository and/or base commit. Run the tests before and after applying the gold patch; identify F2P tests that change from fail to pass and P2P tests that remain passing.
5. Keep tasks with at least 1 F2P test. Exclude cases where the gold code patch creates new files that the test patch tests, because alternate correct file/function names would be unfairly rejected.
6. Release 2,110 rows as one test split. Derive PB500 by selecting 125 tasks per programming language, with 200 Bug Fix, 200 Feature, and 100 Refactoring tasks, while preserving all repositories and their distribution. The later Verified artifact currently contains 382 rows.
7. For evaluation, start a fresh per-instance Docker container from a public GHCR image tagged v1.1 when available, otherwise build from the row's Dockerfile and checked-out base commit. Apply the test patch and candidate patch, run the test command, parse output, and store per-instance JSON plus raw logs.
8. Mark resolved when all F2P tests pass and no P2P test fails. Aggregate pass rate and optional file/CST node retrieval metrics. This reruns the final artifact; it does not replay an agent trajectory.
