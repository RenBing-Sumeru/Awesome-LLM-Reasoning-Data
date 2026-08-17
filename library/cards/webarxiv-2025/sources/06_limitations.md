The paper's explicit limitation is domain and language coverage: WebArXiv focuses on the English-language arXiv interface. This makes the benchmark useful for stable academic-web tasks, but it does not test multilingual interfaces, non-academic sites, commerce flows, account-specific state, or high-stakes transactional tasks.

The benchmark reduces answer drift but does not remove all reproducibility risks. Browser versions, accessibility tree extraction, screenshot resolution, page rendering, prompt templates, retry policy, and model API changes can still affect scores. If the benchmark relies on live arXiv pages rather than preserved snapshots, even a stable domain can change labels or navigation paths over time.

The evaluator is final-answer oriented. That is appropriate for deterministic information retrieval, but it can miss process quality: an agent might arrive at the right answer through brittle shortcuts, or fail a strict string match despite retrieving substantially correct information. Partial-correct labels help diagnose near misses but are not the primary metric.

The artifact is listed as an anonymous 4open Science repository in the PDF. Until the repository is inspected, unknowns include license, exact task files, evaluator implementation, prompt templates, action schema, and whether all reported trajectories can be replayed.
