1. **Complete missing proofs:** The authors select IMO problems from miniF2F plus three recent IMO problems, manually write original Lean 4 proofs from mathematical solutions, and compile every file in a fixed Mathlib environment.

2. **Decompose by proof structure:** Definitions, algebraic transformations, number-theoretic facts, and auxiliary claims are separated into standalone lemmas. Each lemma retains the required imports, variables, assumptions, and goal so it can be checked independently of later steps.

3. **Create evaluable records:** Lemma statements, reference proofs, source problems, and positions in the proof are stored, with proof length and difficulty summarized per problem. Lean compilation is the final correctness verifier.

4. **Evaluate models:** State-of-the-art general models and specialized Lean provers generate proofs under zero-shot, chain-of-thought, and retrieval settings. Lean success and natural-language correctness are recorded separately. Reproduction requires Lean 4.17.0, a fixed Mathlib version, and fixed prompts.
