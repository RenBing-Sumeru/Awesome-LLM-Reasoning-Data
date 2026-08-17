The prior-work baseline is an agent benchmark reported as a final success rate or task-level score, often with benchmark-specific harnesses that make progress and repetition hard to compare across environments.

What changes is the framework layer: AgentQuest turns the agent/environment interaction into a modular record with common driver abstractions and additional progress-style metrics. The direction signal is that agent evaluation should preserve enough trajectory structure to diagnose failure, not collapse every run into a terminal bit.

What is not new is the existence of agent tasks, tool-use benchmarks, or environment success predicates. Before reuse, inspect which benchmark modules are enabled, whether their licenses permit redistribution, how metrics define progress and repetition, whether state transitions are faithful to the original environment, and whether public tasks have leaked into model training.
