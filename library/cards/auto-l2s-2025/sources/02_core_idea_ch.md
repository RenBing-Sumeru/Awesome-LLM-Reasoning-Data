AutoL2S 分两阶段。SFT 阶段由 DeepSeek-R1 提供正确长推理，Qwen2.5-Math-7B-Instruct 生成 k 个短候选；在抽取答案与 reference 匹配的候选中，保留最短者。当长短两种模式都存在时，训练序列用 EASY routing token 标记该样本并同时包含长短推理；否则只使用长路径。推理时，SFT 模型先生成 long-mode trigger 或 EASY 决策，若选择短模式，再由 constrained decoding 注入 short-mode trigger。

第二阶段从 SFT policy 采样这些自动路由的 rollout，并使用 clipped GRPO-style objective。Utility 是 binary final-answer correctness；正负 advantage 强化正确 rollout、抑制错误 rollout，policy ratio 以 epsilon 0.2 截断，使新分布保持接近 SFT 模型。该 objective 没有显式 token-length reward；短输出行为来自 paired supervision 与路由决策。

反馈契约因此有两层：构造阶段用 programmatic answer correctness 选择最短有效 short trace，refinement 阶段用 answer-level binary utility 监督路由 rollout。它适合本 track 的 long-to-short 或 distill-from-search data；paired trace、被拒短候选、routing token 与 rollout mode 都应可见，不能只剩 final checkpoint。
