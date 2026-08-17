**Lineage assumption.** The attack reveals tokenizer training membership only when tokenizer data represents the LLM pretraining corpus. A reused tokenizer, such as one borrowed from another model family, breaks that implication; check tokenizer lineage before attributing an LLM corpus.

**Ground-truth boundary.** Commercial tokenizers lack public training labels, so the main accuracy evidence comes from controlled, utility-comparable tokenizers. Treat commercial vocabulary differences as risk signals, not calibrated attack accuracy.

**Scope and defense boundary.** The study centers on LLM tokenizers, mostly BPE; min-count and DP-inspired mechanisms trade privacy for compression and are not a formal DP guarantee. Re-evaluate on the target tokenizer class, corpus scale, and threat model.

Set-level labels hide document variation, so a positive score guides investigation rather than identifying a copied record.
