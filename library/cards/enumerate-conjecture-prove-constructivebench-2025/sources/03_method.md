1. **Formalize construction tasks:** Natural-language problems are converted into Lean specifications that explicitly define the object to construct, its constraints, and the success condition, forming ConstructiveBench entries.

2. **Enumerate bounded candidates:** A general LLM proposes computable candidates or narrows parameter ranges. Execution and inexpensive constraint checks remove clearly invalid objects.

3. **Form conjectures:** Surviving candidates are substituted into the formal specification to create Lean conjectures, while the system retains their search provenance and intermediate states.

4. **Prove and check admissibility:** A prover LLM generates proofs, and the Lean kernel determines formal validity. Separate checks reject circular answers, prohibited constants, or constructions that violate the intended task. Only records passing both checks count as solved.
