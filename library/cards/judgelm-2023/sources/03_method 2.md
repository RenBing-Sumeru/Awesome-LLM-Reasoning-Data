Inputs are the official task prompts, metadata, reference answers, states, files, repositories, web contexts, multimodal inputs, long-context materials, or traces exposed by the benchmark. The expected output is the model answer, patch, action sequence, tool interaction, code artifact, grounded response, proof object, flag, or judge comparison required by the task.

Pipeline:
1. Start from the official paper, project, or artifact links.
2. Identify the benchmark record schema and split/version policy.
3. Inspect the evaluator, judge, verifier, answer key, hidden test, metric, or environment predicate.
4. Compare model outputs only under pinned prompt, scaffold, dependency, and leaderboard policy.

The feedback contract is: the official evaluator, answer key, judge, hidden test, metric, or environment predicate determines success. The recorded use is: evaluation and audit; no post-training reward use is recorded unless official artifacts explicitly support it. Artifacts to verify before reuse include Paper: https://arxiv.org/abs/2310.17631; Project: null; Code: null; Data: null; DOI/OpenReview/Conference page: https://doi.org/10.48550/arXiv.2310.17631.
