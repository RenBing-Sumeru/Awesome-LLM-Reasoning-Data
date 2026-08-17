1. Inputs: AtCoder task, faulty Java or Python submission, repaired version, test cases, task date, and difficulty level.
2. Pipeline: query metadata with `ConDefects.py info`, checkout a subset by language/time/difficulty/task, run selected tests, and optionally collect coverage matrices.
3. Outputs: localized fault fields, repaired statements or files, test result files, coverage matrices, and subset manifests.
4. Feedback: unit/test-case execution gives pass/fail; coverage output supports fault-localization scoring; repair success depends on passing the selected tests.
5. Reproducibility: pin repository revision, dataset update date, downloaded Test.zip source, runtime versions, coverage 4.5 requirement, language subset, time window, and difficulty filter.
