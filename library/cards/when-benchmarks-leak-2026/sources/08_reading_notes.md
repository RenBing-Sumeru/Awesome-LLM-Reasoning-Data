1. Separate the paper's three contamination levels: exact, semantic-level, and domain-level leakage.
2. Read RC as distance from the matched clean model on contaminated data; it is not an estimate of a real model's unknown contamination rate.
3. Check the cross-benchmark BUD design: MMLU contamination is tested on TruthfulQA and vice versa.
4. Record the perturbation budget ζ, Daux size 400, occurrence o, reference checkpoint, and whether white-box gradients are available.
5. Treat the 30% reference-contamination result as an empirical tolerance in this setup, not a general safety threshold or a guarantee for an arbitrary reference. Also verify that Daux is disjoint from the stated test split and that the reported access regime matches the model being audited.
