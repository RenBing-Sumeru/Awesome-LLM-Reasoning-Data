1. **Collect competition problems:** Olympiad-level natural-language problems are organized, formulas, symbols, and answer conditions normalized, and a small set of examples prepared for few-shot prompting.

2. **Sample multiple statements:** An LLM generates multiple Lean theorem statements per problem, explicitly adding variable types, assumptions, and goals without requiring proofs at the same time.

3. **Revise with compiler feedback:** Candidates are checked in a fixed Lean environment, and parsing, typing, and unknown-identifier errors are returned to the model for iterative repair. Uncompilable candidates are removed.

4. **Assess quality and release:** Compilable statements are evaluated for fidelity and difficulty, retaining scores and many-to-one mappings. Three ATP systems are then used to assess proof difficulty, but prover training is not required for construction.
