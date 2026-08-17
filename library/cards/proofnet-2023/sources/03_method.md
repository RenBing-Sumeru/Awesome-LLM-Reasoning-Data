Inputs are undergraduate mathematics problems, mainly from analysis, linear algebra, abstract algebra, topology, and Putnam-style sources. Curators exclude exercises that depend on unusual notation, sequential subparts, computation-only answers, or immature parts of Lean mathlib.

Pipeline:
1. Select textbook/exam problems with self-contained undergraduate dependencies and low expected overlap with mathlib.
2. Transcribe problem statements into LaTeX.
3. Produce Lean 3 formal theorem statements and source headers with human annotators proficient in Lean.
4. Pair the formal statement with the natural-language statement and proof.
5. Evaluate models on formalization/informalization with typecheck or LaTeX compile rates, BLEU for diagnostic comparison, and human expert accuracy judgments.

Outputs are benchmark rows and experiment scripts. The verifier is Lean 3 for syntactic/type-theoretic acceptance, but semantic correctness is not fully automated. Reproducibility requires pinning the Lean 3/mathlib environment, prompts, OpenAI model endpoints used in the paper, prompt-retrieval corpus, and the Hugging Face/GitHub artifact version. The official GitHub README now warns that the repository hosts the original Lean 3 version and points users toward Lean 4 ports for new experiments.
