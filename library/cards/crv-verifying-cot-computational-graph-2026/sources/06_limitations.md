First, attribution graphs depend on Llama-3.1-8B and specific Top-K transcoders, so representations and classifiers must be rebuilt for another model. Second, error structure is domain-specific, preventing direct transfer from arithmetic to natural-language logic. Third, graph construction and feature extraction cost more than text verification, while the strict dual-verifier intersection removes disputed hard cases and may overstate offline separability.

Reproduction must also fix graph-sparsification rules and feature thresholds.
