The contribution is a benchmark whose average data length surpasses 100K tokens and whose tasks mix synthetic controllability with realistic long documents. The mechanism is to make success depend on long-range dependencies rather than only retrieving one short span.

The data object is a long context plus a task input and answer field; some tasks are multiple choice or exact-answer tasks, while QA and summarization use overlap-style metrics. The feedback contract is mixed: the official README records accuracy for retrieval, math, code, dialogue, and multiple-choice tasks; ROUGE F1 for English/Chinese QA; and rougeLsum for English summarization.

Closest comparisons are LongBench and needle-in-a-haystack style tests. InfiniteBench differs by pushing the context length and task mix beyond simpler retrieval probes. The direction label is long-context evaluation surface with metric-level audit requirements.
