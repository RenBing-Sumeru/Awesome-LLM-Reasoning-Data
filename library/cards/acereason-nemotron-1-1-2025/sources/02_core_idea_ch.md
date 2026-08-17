AceReason-Nemotron 1.1 将由 DeepSeek-R1 生成的数学/代码 SFT 初始化模型与分阶段、严格 on-policy 的 GRPO 课程结合，并研究数据规模、采样 temperature、response budget 和难度筛选如何改变所得 policy。其方向信号是联合分析 SFT 数据设计与 RL 动态，而不是孤立研究其中一个阶段。

公开 SFT 行是四字段 demonstration 对象：领域 `category`、上游 `source` 标签、任务 `input`，以及包含推理文本和最终 response 的单个教师 `output`。它不含逐行正确性标签、verifier output、reward、拒绝原因或混合版本。RL 对象则是同一 question-answer pair 的 8 或 16 个当前 policy rollout。每个 response 的规则 score 在组内标准化后成为 token-level advantage，并且训练不使用 KL 项。最终答案 verifier 可以观察解析后的数学正确性或编译加测试的代码行为，却不能证明隐藏的推理过程有效。

课程依次经过数学 8K、16K、24K 阶段，代码 24K、32K 阶段，以及最终数学 32K 阶段。后期会删除所有 rollout 都能解出的任务，因此任务筛选本身也是反馈环的一部分。论文把 AceReason-Nemotron 1.0 的分阶段 RL 配方应用到更强的 SFT 初始化，并新增 prompt/response 扩展、temperature-adjusted entropy、Stage-1 warm-up 和 overlong filtering 的受控研究。分阶段 GRPO、从前沿推理器蒸馏、程序化结果 reward 和难度过滤均来自既有组件；论文的具体贡献是对它们进行整合比较并披露，而不是发明每个组件。（论文 §2–4.5。）
