Inputs are real Python repository tasks, natural-language task specifications, executable environments, unit tests, and agent scaffolds capable of interacting with repository tools. The paper and repository connect these inputs to OpenHands and MoatlessTools reproduction paths.

The pipeline has two coupled loops. The training loop samples trajectories from SWE-Gym, filters or selects useful interactions, and fine-tunes language-model agents. The inference-time loop samples multiple candidate solutions and uses verifiers trained on SWE-Gym trajectories to rank or select patches.

Outputs include task instances, public models/data on Hugging Face, agent trajectories, verifier training data, and downstream resolve-rate measurements on SWE-bench Verified and Lite. The verifier/reward signal is grounded in repository tests and learned trajectory-based verifiers, depending on the experiment.

Artifacts to verify include the arXiv paper version, ICML 2025 status, GitHub repository, Hugging Face organization, environment constants in the SWE-Bench-Fork repository, Docker image namespace, and scaffold-specific reproduction docs. Reproducibility depends on pinned images, data splits, scaffold versions, and compute budget.
