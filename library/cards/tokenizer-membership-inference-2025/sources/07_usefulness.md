For a public or internally released tokenizer, audit whether a documented candidate corpus likely shaped its vocabulary. Gather the tokenizer file, a candidate corpus, matched auxiliary corpora, and an explicit lineage hypothesis. Run the released shadow-tokenizer or frequency-estimation scripts, then output scores, ROC/AUC, TPR at a fixed FPR, compute time, and the distinctive tokens driving the score.

Use the result to prioritize provenance review or privacy hardening, and confirm it with corpus documentation and independent audits. Do not use it as sole evidence in a copyright, privacy, or contamination finding; stop if the tokenizer is reused, its training pipeline is unknown, or member/non-member controls cannot be constructed.

Preserve token evidence, script versions, and parameters so later reviewers can distinguish corpus change from implementation change.
