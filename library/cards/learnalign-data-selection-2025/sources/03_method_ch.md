GSM8K 路径先用随机 300 条 training prompts 对 Qwen2.5-1.5B-Instruct 做 warmup，再对 7,473 条 train pool 评分，并选择 100、500、1,000 或 2,000 条。DAPO 路径用 1,000 条 DAPO-MATH-17K prompts 对 Qwen2.5-3B 或 Qwen2.5-7B warmup，再选择 1,000 条。两条路径都让 warmup 后 policy 以 temperature 1.0 为每题生成 8 条 rollouts，并依据 ground-truth matching 计算 p。

GSM8K generation 使用分开的 XML-style `think` 与 `answer` fields；DAPO 要求 boxed final answer。论文没有披露精确的 extraction/equivalence 实现。每个 prompt 的 GRPO gradient 都从 warmup checkpoint 计算并随机投影。高效 DAPO 配置使用一条正确 rollout，而不是所有 rollouts；如果某题没有正确 rollout，论文没有说明如何处理。

下游 GRPO 使用 AdamW、learning rate 1e-6、beta 0.9/0.999、epsilon 1e-8、KL coefficient 0.04、clip ratio 0.2、cosine warmup ratio 0.1 和 2 epochs。GSM8K batch size 为 48，DAPO-MATH-17K 为 64；两者最大 prompt length 都是 512，最大 response length 分别为 1,024 和 2,048。评估时 GSM8K 采用 greedy decoding，五 benchmark 设置采用 temperature 0.8、top-p 0.95。

投影后的名义 score matrix 需要 O(n^2 d) 时间和 O(n^2) 内存。在论文报告的 10^3–10^4 规模，Step 4 是一次 batched matrix multiplication；论文为更大 pool 提出 Nyström 和 cascade approximation，但没有把它们作为 LearnAlign 实验运行。Projection dimension、projection seed、training seeds、selected IDs、scores、rollouts 和 gradients 均未发布。
