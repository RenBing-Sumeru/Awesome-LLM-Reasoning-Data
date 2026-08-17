Inputs include the task specification, repository or environment state, released context fields, and the model or human action/answer surface.

1. Collect image-bearing software issues from JavaScript libraries.
2. Package repository state, image assets, patches, and tests.
3. Evaluate agents with the SWE-bench harness and private test split.
4. Report resolve rates under multimodal task conditions.

Outputs are the paper reports 617 task instances from 17 JavaScript libraries; public HF currently exposes a related row count and split view that should be versioned separately. The verifier, reward, judge, or environment is: The SWE-bench Multimodal/SWE-bench harness evaluates patches with repository tests while preserving image-bearing issue or test context; test split evaluation remains private. Reproduction requires pinning artifact release, split, evaluator version, environment image, prompt/scaffold, budget, and redistribution terms.
