Use Terminal-Bench when the research question involves agents that must operate inside a shell, manipulate files, run tools, debug failures, and satisfy executable success criteria. It is especially useful for comparing agent scaffolds, command-planning strategies, tool-call policies, and recovery behavior after failed commands.

For curation, record it as both a benchmark/evaluation surface and an environment/trajectory-data source. The reusable object is not merely the final score; it is the task definition, sandbox configuration, interaction trace, test result, and version metadata.

For experiments, pin the exact dataset and harness versions and preserve logs. Report pass rate together with timeout, concurrency, model, scaffold, retry policy, and whether the agent had network access. For training-data work, keep public tasks separate from held-out evaluation and document any trace filtering or license restrictions.
