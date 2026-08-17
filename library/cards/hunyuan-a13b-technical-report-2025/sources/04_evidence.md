The strongest evidence is structural rather than record-level. The official technical report states the model scale, >20T foundation corpus, 250B STEM subset, 300B annealing stage, 150K reasoning-RL pool, 2:2:1:1 domain ratio, 10%/90% overlap statement, 24K-to-32K RL schedule, 0.6-0.8 sampling temperature, 36-language code sandbox, five-role agent engine, 20,000 format combinations, 16 RL subtopics, and more than 30 scoring services. These details support a stage-level recipe reconstruction.

The official GitHub repository and Hugging Face organization support the claim that model weights and inference/training-related code artefacts are available. They do not establish that the SFT records, on-policy rollouts, rejected samples, tool traces, reward logs, or complete source manifests were released.

Reported benchmark tables are evidence about the trained model under the authors' evaluation protocol. They are not direct evidence that individual training examples are correct, licensed, uncontaminated, diverse, or reproducible. No card claim should cross that boundary.

