1. **Autoformalization training:** Use natural-language problems and multiple Lean statements for SFT, filter by compilation and quality, and evaluate compile rate plus human fidelity on unseen competitions.

2. **Prover benchmarking:** Generate proofs for compilable statements and let the Lean kernel decide success. Multiple candidates from the same natural-language problem must remain in one split to avoid leakage.

3. **Pipeline transfer:** Reuse multi-sampling, compiler feedback, and quality auditing in other Lean domains. Languages without stable compiler errors or problems containing unformalized diagrams require specialized parsing and human checks.
