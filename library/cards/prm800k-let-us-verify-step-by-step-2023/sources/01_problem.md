# 01 Problem

"Let's Verify Step by Step" is an OpenAI paper and arXiv preprint from May 2023. It asks whether mathematical reasoning models should be supervised only on final answers, or whether each intermediate reasoning step should receive feedback.

The card belongs in the atlas as a process-supervision data and reward/verifier surface, not as a general math benchmark or a full RL recipe. The data object is a MATH problem paired with model-generated step-by-step solutions and human step labels; a label says whether a step is positive, neutral, or negative under the annotation instructions. The feedback contract is human process judgment plus final-answer grading for outcome comparisons. Its atlas value is that it exposes step-level reward data rather than only terminal correctness.
