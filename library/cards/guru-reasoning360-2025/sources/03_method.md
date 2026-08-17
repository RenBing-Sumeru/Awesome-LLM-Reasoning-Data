### Source assembly

Mathematics draws from OR1, DAPO, and DeepScaler. Code uses LeetCode, TACO-Verified, PrimeIntellect, and historical LiveCodeBench subsets. Science comes from WebInstruct-Verified. Logic combines ARC-AGI, ARC-AGI-2, BARC, and synthesized Zebra, ordering, and graph-search tasks. Simulation uses Code I/O/PyEdu, and tabular reasoning uses HiTab and MultiHierTT after table linearization. The pipeline reduces roughly 684.9K raw candidates to 209.6K after deduplication and domain filters, then to 91.9K after difficulty filtering.

### Deduplication and domain filters

Rather than relying on broad similarity thresholds that produced false positives in pilot work, the pipeline removes the shorter question when it is a strict substring of another. The paper reports that this removed 27.2% of mathematics and 7.5% of code candidates. Domain rules then remove overlong prompts and weakly specified or trivial cases. Code reference solutions must pass their tests; standard input is capped at 1 MB; at most eight tests are randomly retained per example. Simulation retains one input-output pair per program. Science is restricted to university- or PhD-level physics, chemistry, and biology and excludes boolean, multiple-choice, and high-precision numerical questions. Logic families use size or look-ahead thresholds.

### Difficulty filtering

Each remaining candidate is sampled 16 times by Qwen2.5-7B-Instruct and 16 times by Qwen3-30B-A8B. The pipeline removes tasks that the weak model solves at least 15 times, that the strong model never solves, or for which the weak pass rate exceeds the strong pass rate. Mathematics also removes examples with a strong-model pass rate of at least 0.75 but a weak-strong gap of at most 6/16. Science requires a gap of at least 0.5. The retained pass rates are published as row fields, but candidate-level rejection records and random seeds are not.

### Reward and optimization contract

Rewards are binary and routed by `data_source`. Structured domains extract boxed answers, special tags, or JSON and normalize before matching; mathematics adds symbolic equivalence handling. Python code is run with a 30-second timeout and all selected tests must pass, with fuzzy comparison for standard input/output tasks. The science model verifier judges entailment against a reference answer.

The reported GURU-7B and GURU-32B runs start directly from Qwen2.5 base models, without SFT, and train for two epochs using GRPO in veRL. One RL step contains 512 prompts and 16 responses per prompt at temperature 1.0; mini-batches of 64 yield eight gradient updates. Limits are 4K prompt tokens and 8K generated tokens. The 7B run uses four nodes and the 32B run sixteen nodes, each with eight Hopper GPUs; each run takes about 2.5 days.
