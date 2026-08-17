1. Positioning: CoDeC audits dataset contamination from the direction of an in-context confidence change, not from answer accuracy.
2. Method handle: score a target alone and with random same-dataset context; only a negative delta counts toward the percentage.
3. Artifact handle: the paper exposes a public supplementary-material link, but this is a method and audit protocol rather than a new labeled training dataset.
4. Evidence anchor: on disclosed-corpus models, pooled dataset-level AUC is 99.9%, above zlib ratio at 89.6%.
5. Reuse decision: suitable with logits and matched controls; first test sampling, serialization, and related-distribution false alarms.
