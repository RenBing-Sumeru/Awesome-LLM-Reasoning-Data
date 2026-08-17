WebArXiv is most useful for evaluating multimodal browser agents when the goal is stable comparison rather than live-web realism. The task set is compact enough for repeated runs, and the arXiv domain provides a controlled mix of navigation, metadata lookup, rules lookup, search behavior, and document-content extraction.

For model builders, the benchmark can reveal whether a web agent can interpret task instructions, use page state, operate advanced search interfaces, and recover information from dense academic pages. The reflection ablation is also useful as a simple diagnostic for whether recent-history handling helps or distracts the agent.

For dataset and benchmark maintainers, the construction recipe is a useful example of limiting drift through domain choice, task filtering, answer verification, and strict scoring. It also shows the tradeoff: the more stable the domain, the less the benchmark covers messy open-web variability.

Training-data claims need caution. The paper reports evaluation tasks and agent runs, but does not establish a reusable training corpus of trajectories with licensing and split controls. Before reuse, pin the artifact version, evaluator files, page snapshot policy, and contamination policy.
