Inputs are a topic entity, a long-form model generation, a knowledge source, and evaluator settings. The official README states that input JSONL rows contain `topic` and `output`; prompt entities are supplied for 183 labeled people and 500 unlabeled people, and the default knowledge source is English Wikipedia dated 2023-04-01.

Pipeline:

1. generate or collect a long-form response for each topic, such as a biography prompt;
2. split the response into atomic facts, each intended to be independently checkable;
3. retrieve passages from the selected knowledge source for each atomic fact;
4. label each atomic fact as supported or unsupported by the retrieved/source evidence;
5. optionally detect abstentions and apply the `gamma` length penalty when a response contains too few facts;
6. aggregate supported atomic facts into `score`, keep `init_score` without length penalty, and report response ratio plus average number of facts.

The verifier is a judgment contract, not a compiler-like predicate. Human labels are the strongest row-level evidence; automatic labels depend on the decomposition model, retrieval index, support judge, prompt, cache, and package version. Reproducibility requires pinning the knowledge-source snapshot, estimator name, package version, atomic-fact generation mode, abstain detector, `gamma`, and whether released atomic facts are reused through `--use_atomic_facts`.
