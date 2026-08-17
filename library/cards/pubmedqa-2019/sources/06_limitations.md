Correctness is only defined relative to the dataset label. A model that matches yes/no/maybe may still give an unsupported explanation, and a disagreement with the label may reflect ambiguity in how the conclusion is interpreted.

PQA-A is noisy by design because it uses rule-based conversion and negation heuristics. PQA-U is not a labeled test set. PQA-L is the reliable evaluation core but has only 1,000 examples, so domain coverage and statistical precision are limited.

The benchmark should not be read as a clinical safety test, a retrieval benchmark, or a proof that a model understands biomedical causality. Reuse also has practical risks: public benchmark contamination, PubMed source-text licensing constraints, split drift, and prompt/scaffold differences can all change reported scores.
