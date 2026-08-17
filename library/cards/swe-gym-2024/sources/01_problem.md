SWE-Gym asks a different question from SWE-bench evaluation papers: how can real-world software engineering agents be trained, not only scored, with executable repository tasks and verifiable outcomes? The primary source is arXiv:2412.21139, last revised June 6, 2025 and accepted at ICML 2025.

The paper presents SWE-Gym as an environment containing 2,438 real-world Python task instances. Each instance pairs a codebase with an executable runtime environment, unit tests, and a natural-language task. The official repository describes a 2.4K-task environment from 11 Python repositories plus a Lite split of 234 instances.

The decision boundary is training and evaluating SWE agents and verifiers in repository-level environments. The reusable objects include task instances, executable environments, unit-test outcomes, sampled agent trajectories, fine-tuning data, and verifier-training signals.

Evaluation boundary: SWE-Gym should be treated as an environment and trajectory/verifier data source. Do not treat its downstream SWE-bench Verified/Lite scores as standalone evidence unless the agent scaffold, base model, trajectory source, verifier, compute budget, and evaluation split are recorded.
