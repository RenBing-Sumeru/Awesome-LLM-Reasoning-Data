# 07 Usefulness

Use TruthfulQA when the research question is whether a model resists common false beliefs rather than merely answering ordinary factual questions. It is especially useful as a sanity check for model scaling claims, alignment interventions, hallucination mitigation, and truthfulness-oriented post-training.

For data curation, record the item category, prompt template, answer mode, scorer, and whether the result comes from generation, MC1, MC2, or human annotation. For benchmark comparison, separate truthfulness from informativeness so that a model is not rewarded for evasive but uninformative responses.

For reuse, pin the official source version and evaluator implementation. Avoid treating the benchmark as training reward data unless a separate audit specifies how labels, answer sets, contamination controls, and evaluator error modes are handled.
