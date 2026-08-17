训练使用 DeepScaleR 的 40K 数学问题，来源包括 AIME、AMC、Omni-Math 和 STILL。冻结参考策略对每题采样 16 次，以估计其二元正确率。在线训练期间，模式控制采样构造数量平衡的 Thinking 与 NoThinking 组。奖励是答案级 0/1 数学正确性；NoThinking 由输出首个控制 token 判断。只有当直接回答相对 Thinking 与参考策略的准确率差距足够小时，约束 advantage 才鼓励 NoThinking。

论文使用 DeepSeek-R1-Distill-Qwen-1.5B 和 7B 基座，在 VeRL 中训练一个 epoch 或 314 步，回答上限为 16,384 token，并在 GSM8K、MATH500 和 AIME 2024 上评测。代码仓库和模型 collection 已公开；完整原始回答组、参考估计、被拒 rollout 和逐记录训练清单未被说明为已发布。
