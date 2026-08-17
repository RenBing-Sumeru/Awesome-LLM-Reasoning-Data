The authors state that the implemented verifiers are imperfect: their best aggregate benchmark score is only 72.5%, so an emitted reward is not a correctness certificate. They also implement only factuality and instruction-following agents; other verifiable signals remain untested.

Curator audit: the reported judger fixes all weights to 1.0 and uses either search or parametric knowledge. Before reuse, measure router false negatives, disagreement with human labels, retrieval noise, and sensitivity to weights; do not deploy the scalar unreviewed in high-stakes domains.
