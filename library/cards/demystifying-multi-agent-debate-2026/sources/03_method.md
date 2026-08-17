Experiments initialize five homogeneous Llama-3.1-8B-Instruct or Qwen-2.5-7B-Instruct agents and run five turns. In-domain data are GSM8K, CommonsenseQA, HellaSwag, and MMLU; GPQA-Main and ARC-Challenge are OOD. Inference uses temperature 1.0 and top-p 0.9; diversity initialization sets Ncand=10.

Confidence training begins with 5,000 examples sampled from combined training data; self-consistency produces numerical targets for short SFT. GRPO then uses 10,000 manually selected difficult examples. Confidence calibration uses LoRA rank 64, one epoch, sequence length 2,048, eight generations, learning rate 5e-6, top-p 0.9, and beta 0.01. Debate GRPO uses rank 64, one epoch, eight generations, learning rate 5e-5, top-p 1.0, beta 0.01, and maximum completion 1,024. Its reward scales are correctness 10, confidence 3, engagement 5, and wrong-format penalty -30.

The repository exposes code, configs, public-dataset loaders, and one example dialogue record. Complete 5K/10K manifests, candidate pools, trajectories, rewards, and LoRA adapters are not verified as released.

