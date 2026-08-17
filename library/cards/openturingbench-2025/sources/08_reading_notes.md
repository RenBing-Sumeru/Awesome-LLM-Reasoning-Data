1. OpenTuringBench tests whether machine-text detection and generator attribution survive realistic distribution shifts.
2. Its mechanism is labeled human/open-LLM text -> stress-task split -> Longformer triplet embeddings -> nearest-centroid decision.
3. The official dataset has 543,091 English texts from seven open LLMs plus humans; it exposes TT and AA tasks E0–E6.
4. Evidence anchor: all conventional TT F1 values exceed 0.90, but human continuation peaks at 0.15; OTBDetector reaches 0.871 after self-rewriting.
5. Reuse it for detector validation and audit screening, but first check language/domain fit and report the mixed-text failure mode.
