训练样本是来自 GSM8K 或 MATH-500 的“问题—标准答案”对。Algorithm 1 先用一组完整策略输出初始化搜索树；在论文报告的三轮扩展中，每轮选择长度最短且被验证器判对的完整路径，找到其中尚未使用的最高熵 token，再以截至该 token 的前缀为条件采样一组新续写。已用过的回溯 token 会被排除，以促进不同分叉。论文没有披露可复用的逐题 rollout 数或训练采样温度，也没有发布生成的搜索树。

优化时，每条完整叶路径获得 DAPO 的正确性奖励与 Soft Overlong Punishment。内部节点奖励由子节点递归平均得到；分支优势将各分支价值与其回溯节点价值比较，并用子节点奖励的标准差归一化。训练把 DAPO 风格的裁剪目标应用于树中 token，共享前缀可复用 KV cache。基础模型包括 Qwen2.5-3B-Instruct、Qwen2.5-7B-Instruct 和 LLaMA-3.1-8B-Instruct，使用 LoRA rank 8/alpha 16 与 AdamW（学习率 1e-6、weight decay 0.01）微调。GSM8K 与 MATH-500 的最大训练 token 预算分别为 512 和 1024。论文报告使用 8 张 NVIDIA A100 SXM4 64GB GPU，训练分别耗时 12 与 24 小时。推理时，训练后的模型只生成一条普通链，不再构建搜索树。

