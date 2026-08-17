Challenger 与 Solver 均从 Qwen3-4B-Base 或 Qwen3-8B-Base 初始化，并在 EasyR1 中使用 GRPO 优化。公开的 Challenger prompt 要求生成一道全新的竞赛数学题，目标难度是高级高中生解出率低于 30%，同时给出 boxed final answer；论文未披露 seed corpus。报告的训练共五轮 evolution iteration，每轮包含 5 个 Challenger 与 15 个 Solver optimization step。Global batch size 为 128，learning rate 为 1e-6，weight decay 与 KL coefficient 均为 1e-2。（论文 §4.1；Appendix A.1–A.2。）

每个问题产生五个 Solver rollout。提取的最终答案按等价关系分组，最大组占比定义 consistency，uncertainty 为 `min(s, 1-s)`。多数答案成为伪标签，Solver rollout 是否匹配它决定二元 reward。论文以 consistency 0.3 至 0.8 说明可进入记忆的有效 uncertainty 区间。附录公开了 GPT-4o Yes/No answer-check prompt，但没有说明它在流程中的精确位置、抽样覆盖、失败回退方式，以及与答案等价分组的关系。

SAM 以 temperature 0 请求 Qwen2.5-Coder-7B 把问题转换为无注释的 `solver` function，将数值放入默认参数并匿名化语义变量。该 prompt 明确要求：遇到含糊、有逻辑缺陷或措辞不佳的问题时，自行推断其预期的有效解释。Jina-Code-Embeddings-1.5B 对结果编码。这里的代码只是相似度表示；论文没有报告执行代码来验证答案。

MAP 组合最近历史项与全记忆平均余弦相似度，混合系数为 0.5，最大与平均相似度激活阈值为 0.5 和 0.25，各惩罚权重为 1.0。被接收的记忆 tuple 保存问题、embedding 与伪标签；历史问答对占 Solver 训练样本的 30%。Challenger training 使用四个 rollout，Solver training 使用五个，均采用 temperature 1.0 与 top-p 0.99。

实验使用八张 NVIDIA H20 GPU、BF16 与 FlashAttention 2。论文报告经 time-multiplexing 优化后，Qwen3-4B 每轮 evolution iteration 约六小时；其 R-Zero 对照为 7.5 小时。总成本、token 数、8B 时长、random seed、答案等价实现、记忆容量与淘汰、纠错策略、记录数量均未披露。官方仓库也未提供复现 recipe 所需的实现与数据记录。
