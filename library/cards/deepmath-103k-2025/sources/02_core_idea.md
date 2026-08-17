DeepMath-103K retains difficult decontaminated questions, stores a verified final answer, and supplies three independent R1 reasoning traces for each problem. Relative to larger but weakly filtered math reasoning mixtures, it changes the reusable target to question, final_answer, difficulty, topic, and r1_solution_1 through r1_solution_3 and makes answer verification, difficulty scoring, topic labeling, deduplication, and benchmark decontamination the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Open dataset: yes
Dataset name: DeepMath-103K
Official URL: https://huggingface.co/datasets/zwhe99/DeepMath-103K
Scale: 103,000 math questions with three DeepSeek-R1 solutions per record
Record form: question, final_answer, difficulty, topic, and r1_solution_1 through r1_solution_3
File / storage format: Parquet records
Domains / languages: English competition and advanced mathematics
Construction and filtering: DeepSeek-R1 generates three long solutions for each retained problem; answer verification, difficulty scoring, topic labeling, deduplication, and benchmark decontamination
License / access constraints: MIT
Intended use: mathematical reasoning SFT and RL prompt preparation
