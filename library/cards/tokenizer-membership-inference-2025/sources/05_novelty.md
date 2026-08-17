Prior LLM MIAs usually inspect a model’s loss, probabilities, or generated output. Their evaluation inherits uncertain labels, temporal distribution shifts, and a mismatch between affordable test models and closed, large deployment targets.

This paper changes the observable object to the tokenizer vocabulary and BPE merge process. It offers shadow-based Vocabulary Overlap plus a one-shadow Frequency Estimation variant, then measures a privacy–compression trade-off under defenses. MIA, shadow training, BPE, and threshold classification are not new; the contribution is a tokenizer-specific, reproducible attack surface. Before reuse, verify that the tokenizer was trained on data representative of the target LLM corpus.

Report vocabulary size, auxiliary-data source, and target-tokenizer implementation, since each changes the signal and its interpretation.

It moves contamination auditing to preprocessing, useful when a closed model exposes no probability interface.

Its cost is also closer to ordinary tokenizer training.
