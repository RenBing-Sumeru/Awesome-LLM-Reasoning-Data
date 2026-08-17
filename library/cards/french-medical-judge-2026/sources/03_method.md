1. Build labels. The authors take 100 French questions from S-Édition, generate Qwen-based candidate answers, and ask a clinician to label question–reference–answer triples for semantic equivalence. They add 42 swapped-answer negatives and 42 GPT-4o reference paraphrases as positives.

2. Form the held-out audit set. From 100 MediQAl questions, five generators produce one answer each; a neurovascular physician labels all 500 answers. A second clinician labels 10 items and agrees on 9. The binary expert label is the only acceptance target.

3. Audit judges and align a compact judge. The paper compares five existing judges, then trains Phi-3.5-mini on 166 training examples for 5 SFT epochs and 184 examples for 2 GRPO epochs. Training and evaluation data are disjoint; GRPO rewards correctness (+1.0/−1.0) and exactly formatted 0/1 output (+0.5). Code, data, license, sampling seeds, and released weights are unknown.
