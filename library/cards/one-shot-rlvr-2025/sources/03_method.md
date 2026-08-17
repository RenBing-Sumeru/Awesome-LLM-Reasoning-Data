The paper randomly samples 1,209 problems from DeepScaleR-Preview-Dataset as DSR-sub, runs full-pool RLVR for 500 steps to compute a historical-variance ranking, and selects examples from that ranking. For one- or few-shot runs, selected records are duplicated to batch size 128. The author dataset release provides splits including `pi1`, `pi2`, `pi13`, `pi1209`, merged few-shot variants, and `dsr_sub`.

The default experiments use Qwen2.5-Math-1.5B, GRPO, eight responses per prompt, rollout temperature 0.6, and maximum prompt/response lengths of 1,024/3,072 tokens. The outcome reward is 1 only when the final answer matches ground truth; a format reward is used separately as a baseline rather than being added to outcome reward. The authors also report Qwen2.5-Math-7B, Llama-3.2-3B-Instruct, DeepSeek-R1-Distill-Qwen-1.5B, and PPO experiments.

The public repository is author-linked from arXiv and includes code, data pointers, training scripts, evaluation code, checkpoints, and W&B links. It says its setup instructions may be outdated. The Card does not assume that these components provide a fully pinned reproduction environment.

