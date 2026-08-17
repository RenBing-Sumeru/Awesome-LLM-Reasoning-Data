The diagnosis is supported on the models, tasks, and constructed clean/leaked conditions evaluated in the paper; different contamination routes may not yield the same geometric signature. Before deployment, test the signal on held-out models and independently verified leakage cases.

The recovery metric is consistency with the base model, so improvement does not by itself prove that every recovered answer is correct or that the base model is unbiased. Pair the intervention with task accuracy and safety checks.

The public repository provides code, but its page does not document a standalone dataset release, license, or full resource budget. Reproduction therefore requires checking the repository and obtaining or reconstructing the stated data conditions. These boundaries matter especially when a result is used to certify a benchmark, since the paper does not turn the signal into a provenance proof for any individual example.
