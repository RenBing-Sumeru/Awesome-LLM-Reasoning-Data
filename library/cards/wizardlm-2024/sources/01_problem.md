Instruction-tuning datasets built from a few seeds tend to preserve simple requests and a narrow difficulty distribution. Writing many complex instructions by hand is expensive, while ordinary Self-Instruct generation does not explicitly control how a task becomes harder.

WizardLM introduces Evol-Instruct: use an LLM to rewrite seed instructions through depth operations that add constraints or reasoning demands and breadth operations that create new task types, then generate teacher answers and train a student. Starting from Alpaca's 52K instructions, four evolution rounds produce 250K instructions; a matched 70K subset trains the reported LLaMA-13B WizardLM.

L4 facts: primary source https://arxiv.org/abs/2304.12244; ICLR 2024; boundary: synthetic post-training instruction-response data, not pretraining or verified reasoning; atlas value: explicit seed-to-evolution lineage; evaluation surface: nine benchmarks plus the 218-instruction WizardEval set.
