1. Make member data. The authors use 10K OpenThoughts3 samples as clean SFT data, distill benchmark-member CoT with QwQ-32B (64 rollouts, temperature 0.6, top-p 0.95), and repeat members three times; Qwen2.5-7B-Instruct and Llama-3.1-8B-Instruct are base models.

2. Run the two pipelines. In Stage I, contaminated SFT is followed by one GRPO epoch mixed with 4,096 clean DeepMath-103K samples. In Stage II, mature LRMs receive extensive member CoT SFT. Correctness supplies the RL reward; PPO importance sampling and clipping are the claimed concealment mechanism.

3. Audit detection. Half of each benchmark is the member set and the remaining half the non-member set. Detectors score question/response/model combinations and report AUROC, including 8-rollout averages in Stage II. Reproduce with the released arena and exact benchmark split; license and seeds require verification.
