Multimodal reasoning models lag behind text-only reasoning partly because open post-training corpora are fragmented, inconsistently formatted, and often lack reliable long reasoning traces. Simply pooling more records also wastes compute on duplicates, easy items, or teacher outputs whose final answers do not match the reference.

MMFineReason builds a data-centric pipeline: standardize public multimodal tasks, distill visually grounded reasoning from a large teacher, filter low-quality or duplicate records, and estimate student-relative difficulty. The result is both a large training corpus and a compact difficult subset for efficient SFT.

L4 facts: Primary source arXiv:2601.21821 (2026); status: arXiv preprint; decision boundary: retain after quality checks and optionally select by four-rollout difficulty; data object: multimodal prompt, teacher trace, answer, lineage, and selection signals; collection note: directly concerns instruction, demonstration, and rationale data.
