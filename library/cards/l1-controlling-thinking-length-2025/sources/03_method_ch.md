训练来源是 DeepScaleR-Preview-Dataset，论文将其描述为从 AIME、AMC、Omni-Math 和 STILL 汇集的 40K 个数学问题—答案对。公开预处理脚本读取 DeepScaleR 训练切分，加入要求输出 `\boxed{}` 答案的指令，采样精确或最大 token 请求，并把提示、ground-truth 答案与请求长度序列化。其默认精确目标代码从 100 到 4,000 均匀采样整数长度；论文评测 512、1,024、2,048 和 3,600-token 请求。

主实验基座是 DeepScaleR-1.5B-Preview，它本身由 DeepSeek-R1-Distill-Qwen-1.5B 经 RL 微调而来。LCPO-Exact 在 VeRL 中运行 700 个 GRPO step，学习率为 1e-6、batch size 为 128、训练上下文为 4K；L1-Max 随后再进行 120 个 RL step。评测上下文扩展至 8K，论文附录还报告了 7B 模型扩展。

发布的奖励实现会在推理分隔符后抽取 boxed 答案，并使用 mathd 或 SymPy 做等价检查；同时单独计算实际 token 数，再按 Exact 或 Max 模式组合正确性与长度。官方仓库包含预处理、训练、评测、复现实验脚本、model outputs 和 MIT 许可证，官方 Hugging Face 集合提供多个 Exact/Max checkpoint。未核验到涵盖全部请求预算、在线 rollout、奖励分量、失败和随机种子的论文完整数据集。
