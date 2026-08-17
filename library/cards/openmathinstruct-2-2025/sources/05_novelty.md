The prior-work baseline is open mathematical instruction tuning built from existing benchmark questions plus teacher-generated worked solutions. Solution augmentation, synthetic question generation, final-answer filtering, SFT, and model-judge checks all predate this paper. The paper's contribution is not a new optimizer or verifier.

The concrete changes are the combination and scale of the data object:

- **Two augmentation axes:** many alternative solutions for original GSM8K/MATH questions, plus many new questions followed by 32 solutions each.
- **A strong 405B teacher:** Llama-3.1-405B-Instruct writes both new problems and worked solutions, with a matched-coverage comparison against 8B on-policy data.
- **Question diversity as a controlled variable:** the paper separates unique-question count from total pair count and measures more than a ten-point MATH-validation effect at fixed 256K pairs.
- **Answer construction for unlabeled synthetic questions:** a surface-form mode over 32 extracted answers becomes the proxy `expected_answer`, with minimum vote threshold zero.
- **Scale and packaging:** exact 13,972,791-row train data plus overlapping fair 1M/2M/5M subsets, public models, and operational Skills documentation.

The novelty is therefore a large, open recipe study that treats representation, teacher strength, filtering, unique-question coverage, and total SFT scale as interacting levers. The format ablation shows that a shorter OpenMath CoT target can beat a more verbose Llama CoT target; the teacher ablation shows that a strong off-policy teacher can beat weak on-policy data; and the diversity experiment shows that more unique tasks can matter even when pair count is fixed.

What is not new is equally important. The public row remains a conventional prompt/solution/answer/source tuple, and the student is optimized with full SFT. Majority aggregation supplies an answer proxy but not process supervision. The decontamination stage combines established embedding retrieval with an LLM paraphrase judge; it does not guarantee contamination-free data.

For reasoning-data research, the direction signal is that “data scale” should be decomposed into unique prompts, solutions per prompt, teacher capacity, and selection contract. The paper's rounded 607.3K unique-question total and exact 13,972,791 pair count exemplify why these axes must not be conflated.

Before reuse, researchers must inspect whether the historical build and current recipe match, recover candidate/vote/rejection lineage, retest answer equivalence beyond string forms, version all benchmark overlap checks, and verify how CC BY 4.0 dataset terms, Apache-2.0 code terms, upstream source rights, and teacher-model terms apply to their intended distribution.
