Step labels rely on relevance and coverage heuristics, and good retrieval may not immediately improve answers. Corpus snapshots, retrievers, and top-k settings must be fixed.

These limitations directly affect reuse: verifier false positives convert erroneous steps into positive supervision, while false negatives remove difficult but valuable processes. Before reuse, labels should be audited by task type, error position, and source, with agreement, unverifiable rates, duplication, and replayability reported under fixed tool or environment versions.
