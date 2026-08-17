1. Inputs: a problem statement, constraints, examples or starter context, difficulty metadata, and hidden or released input/output tests.
2. Pipeline: prompt the model to write a Python solution, execute the solution in the APPS evaluation harness, compare outputs with tests, and aggregate pass/fail statistics.
3. Outputs: candidate programs, per-problem test outcomes, and benchmark-level accuracy/pass-rate metrics.
4. Feedback contract: the verifier is the execution harness plus problem tests; failure can come from syntax error, runtime error, wrong output, timeout, or unsupported environment.
5. Reproducibility notes: pin the APPS release, split, difficulty band, Python/runtime limits, prompt policy, sample count, and test visibility.
