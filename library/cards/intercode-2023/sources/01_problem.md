InterCode is a 2023 arXiv paper and NeurIPS 2023 Datasets and Benchmarks work on interactive coding with execution feedback. The problem is that many coding benchmarks score only a final submitted program, while real debugging, data analysis, shell use, SQL work, and security tasks require iterative actions under environment feedback.

The data object is an interactive episode: a natural-language task, an environment state, an agent command or code action, an execution observation, and a terminal success signal. The official project and repository expose standardized environments such as Bash, SQL, Python, CTF-style tasks, and SWE-oriented interaction surfaces.

The decision boundary: InterCode is an agent-environment benchmark and trajectory/evaluation surface, not a static code-generation dataset and not a general desktop automation suite. It matters to the atlas because the feedback contract comes from execution and environment state transitions rather than a standalone answer key.
