# Evidence

**Claim:** broad source coverage plus hybrid CoT/PoT targets improves math generalization over dataset-specific CoT tuning. **Controlled setup:** Figure 2 uses the same LLaMA-2-7B base and compares WizardMath-style data with MathInstruct CoT-only, PoT-only, and hybrid mixtures. **Result:** the hybrid mixture is best on the reported nine-dataset average, while Table 5 shows source ablations and larger out-of-domain gains. **Boundary:** mixture size, domains, and target format change together, so the result supports the full recipe but does not isolate PoT as the sole cause.

