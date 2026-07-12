models repeatedly sample independent candidate solutions for each task. repeated independent sampling across sample budgets, including up to 10,000 samples for several benchmark tasks and 250 attempts for SWE-bench Lite. select candidates using automatic verifiers when available; compare majority voting and reward-model scoring when no automatic verifier is available.

The resulting record contains candidate solution set for each problem, with final answers, code submissions, Lean proofs, or repository patches depending on task. The reported use is evaluation, test time compute.
