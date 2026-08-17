Inputs include the task specification, repository or environment state, released context fields, and the model or human action/answer surface.

1. Mine candidate Python repository issues.
2. Build install recipes and Docker images.
3. Generate or validate tests and quality labels.
4. Run agents through the SWE-bench fork and report fresh/decontaminated results.

Outputs are the paper reports over 21,000 interactive Python SWE tasks; current HF main data is larger and the leaderboard subset is separate. The verifier, reward, judge, or environment is: The SWE-bench fork runs run_evaluation over selected SWE-rebench datasets using install recipes, Docker images, and repository tests. Reproduction requires pinning artifact release, split, evaluator version, environment image, prompt/scaffold, budget, and redistribution terms.
