The main controlled experiment trains tokenizers with commercial-scale vocabulary sizes on millions of Internet samples, then distinguishes candidate member datasets from non-members. At a 200,000-token vocabulary, Vocabulary Overlap reaches AUC 0.771 and Frequency Estimation reaches 0.740. On target datasets with 800–1,200 samples, their AUCs rise to 0.882 and 0.843, respectively (Tables 3–4).

These results support a real token-level membership signal and show that larger candidate datasets are easier to infer. They do not validate attacks on a commercial tokenizer with known ground-truth training data: the paper instead uses utility-comparable trained tokenizers and only observes distinctive tokens in commercial vocabularies. Real-world attribution therefore remains a qualified audit clue, not a definitive provenance verdict.

Vocabulary Overlap trains many shadow tokenizers; Frequency Estimation uses one, trading accuracy for lower cost.

Comparisons should also report thresholds, auxiliary-corpus count, and training budget rather than a single AUC.
