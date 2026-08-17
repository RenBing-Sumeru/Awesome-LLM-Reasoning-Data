Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Select real resolved GitHub issues and associated pull requests.
2. Prepare repository snapshots, dependency setup, and test commands.
3. Have a model or agent inspect the repository and submit a patch.
4. Run the Docker/test harness and record resolved or unresolved outcomes.

Outputs are patches, edited files, execution logs, unit-test outcomes, split-level scores, and reproducibility artifacts. The verifier, reward, judge, or environment is: The evaluator applies a submitted patch inside the SWE-bench harness and runs repository tests; success is programmatic pass/fail under the pinned split, image, and harness version. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
