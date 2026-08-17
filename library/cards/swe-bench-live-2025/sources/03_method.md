Inputs include the task specification, repository or environment state, released context fields, and the model or human action/answer surface.

1. Collect fresh issues created since 2024.
2. Build repository snapshots, tests, image metadata, and log parsers.
3. Publish versioned live dataset splits.
4. Run submitted patches through Dockerized test evaluation.

Outputs are the paper initial release reports 1,319 tasks from 93 repositories; the live Hugging Face dataset is updated over time and must be versioned separately. The verifier, reward, judge, or environment is: The Docker/test harness executes fail-to-pass and pass-to-pass tests; success depends on the submitted patch satisfying the pinned test contract. Reproduction requires pinning artifact release, split, evaluator version, environment image, prompt/scaffold, budget, and redistribution terms.
