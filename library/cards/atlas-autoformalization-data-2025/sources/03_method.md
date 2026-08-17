1. **Data lifting:** Reusable formal statements are extracted from Mathlib theorems, proof states, and dependent concepts to build a concept repository.  
2. **Parallel synthesis:** A teacher model generates natural-language statements from formal concepts, and a student translates them back into Lean to create candidate parallel pairs.  
3. **Structural augmentation:** Proof processes and formal structures such as contraposition generate related statements, expanding conceptual and linguistic coverage.  
4. **Validation filtering:** Lean compilation checks syntax; InternLM2-Math back-translates formal statements; Qwen2.5 performs NLI consistency checking, and only passing pairs are retained.  
5. **Iterative training:** Synthetic and augmented data train the student before the next round, for ten iterations. Model, Mathlib, and compiler versions must be fixed.
