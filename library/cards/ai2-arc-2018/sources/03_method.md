1. Inputs: grade-school science exam questions, answer choices, a gold answer, and optional supporting corpora used by baseline solvers. 
2. Dataset construction: AI2 collects and cleans the questions, runs shallow retrieval and word-correlation solvers, assigns questions both baselines miss to ARC-Challenge, and releases Easy/Challenge train, dev, and test splits. 
3. Evaluation: a system receives the question and choices, predicts one option, and is scored by exact option accuracy. 
4. Outputs: per-split and per-subset accuracy; no process trace, proof, or retrieved evidence is required by the official contract. 
5. Reproducibility boundary: pin the official ARC release, split file, answer-label normalization, solver prompt or model wrapper, retrieval corpus if used, and whether evaluation is on ARC-Easy, ARC-Challenge, or both.
