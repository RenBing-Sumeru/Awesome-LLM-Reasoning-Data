1. **One-sentence position:** IMO-Steps decomposes a small number of extremely difficult complete IMO proofs into 1,329 independently compilable mathematical lemmas for fine-grained diagnosis.
2. **Method takeaway:** Complete Lean proofs are written manually, then decomposed by mathematical structure, supplied with context, and compiled lemma by lemma.
3. **Data takeaway:** The final version contains 1,329 lemmas and more than 40K lines of Lean code tied to a specified Lean/Mathlib version.
4. **Evidence anchor:** The best specialized prover reaches about 39%; o3-mini is correct in natural language on 75.5% but succeeds in Lean on only 23.8%.
5. **Reuse decision:** It is useful for proof-step training and error analysis; reference-path and proof-length distribution biases are the main risks.
