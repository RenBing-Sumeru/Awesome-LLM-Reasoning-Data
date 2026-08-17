MathHay was released as arXiv:2410.04698 in 2024. It targets a gap between ordinary math benchmarks and long-context retrieval tests: real long-context math questions require finding numerical evidence in noisy documents and then computing the answer.

The evaluation surface is a document haystack with one or more relevant documents, many irrelevant documents, a generated mathematical question, and a numeric answer. Tasks vary by single- vs multi-document grounding and single- vs multi-step computation.

The decision boundary is long-context mathematical evaluation, not a general math dataset and not a training recipe. It belongs in the atlas because it combines retrieval, grounding, arithmetic reasoning, and context-length stress under an answer-level scoring contract.
