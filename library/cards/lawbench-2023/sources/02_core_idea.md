The contribution is a Chinese legal benchmark that evaluates LLMs across legal memorization, understanding, and application rather than a single legal-QA score. The core mechanism is to curate representative legal tasks, standardize prompts, and run models through the OpenCompass evaluation pipeline.

Each data object is a task instance with legal text or question context, an expected answer, and task metadata. The feedback contract is answer-level scoring by the official evaluator, commonly exact-match or task-specific classification/extraction metrics, with aggregate results reported by task and level.

Closest comparisons are LegalBench, MMLU-style professional-law subsets, and Chinese law QA datasets. LawBench differs by focusing on Chinese legal materials and a tiered cognitive taxonomy. The direction label is domain-expert evaluation surface for jurisdiction-specific legal reasoning.
