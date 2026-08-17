The paper reports three kinds of evidence that should remain separate.

- **Formalizer evidence.** On 300 OmniMath problems, Goedel-Formalizer-V2 yields 228 passing formalizations and Kimina-Autoformalizer 161. Passing the paper's checks supports the formalizer comparison, but does not quantify semantic error over the full synthesized statement pool.
- **Correction evidence.** On MiniF2F at pass@32, the 32B model rises from 88.1% in standard mode to 90.4% with self-correction; the 8B model rises from 84.6% to 86.7%. Removing compiler error messages substantially hurts the correction ablation, and removing previous chains of thought causes a smaller decline. This shows the feedback is operationally useful, not that every correction trace is mathematically informative.
- **Training and diversity evidence.** RL improves pass@1, while checkpoint averaging can recover pass@N diversity that declines in later training. Different averaging coefficients and RL checkpoints trade off pass@1 and pass@N, so the final model is not attributable to data alone.
- **Artifact evidence.** The official repository contains inference/self-correction scripts, a Lean compiler wrapper, a mathlib4 submodule, and benchmark JSONL files. Official 8B and 32B Hugging Face model pages exist. MathOlympiadBench exposes 360 rows with formal statements, informal prefixes, proof code/solved fields, source identifiers, and categories under an Apache-2.0 tag.

Benchmark results demonstrate end-to-end utility under the reported inference budgets. They do not certify the unreleased S1/S2/S3 records, prove faithful autoformalization, or substitute for data lineage and decontamination.

