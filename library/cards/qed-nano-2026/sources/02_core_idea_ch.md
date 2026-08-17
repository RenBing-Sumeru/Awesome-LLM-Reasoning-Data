QED-Nano 组合了三个后训练阶段。第一阶段由 DeepSeek-Math-V2 提供长篇自然语言证明轨迹，形成独立的 FineProofs-SFT 发布并用于初始化 QED-Nano-SFT。第二阶段在筛选后的 FineProofs-RL 题目上，以题目特定的 rubric reward 进行 asynchronous streaming GRPO。第三阶段的 Reasoning Cache 把一次极长证明尝试改写为若干轮局部尝试与紧凑文本状态摘要，使 policy 能依据显式的进展记录继续推理。

可复用的 FineProofs-RL 记录比完整流程小得多。每条记录只有八个字段：`problem`、`source`、`rubrics`、`scores`、`rewards`、`num_rewards`、`reward_mean` 与 `reward_std`。固定版本包含 5,227 条唯一记录，全部位于一个 `train` split，其中 3,794 条标为 `aops`，1,433 条标为 `olympiads`。每个已发布 reward 都等于相应整数 score 除以七。数据中没有 proof、reasoning、message、grader error 或 assessment text 字段。

其反馈契约是基于判断的 outcome reward。Gemini 3 Pro 针对每道题生成一份 0-7 分 rubric，其中包含正向检查点、零分条件和扣分项。GPT-OSS-20B 以 medium reasoning 阅读完整自然语言证明和 rubric，再给出一个整数分数。与题目级二值正确性相比，该信号包含更多结构，但对完整证明而言仍只是一个 scalar outcome；发布的 rubric 不是经过验证的逐步标签序列，judge 也不是 formal proof checker。

核心的 rollout 区分在于离线标注与在线优化。Qwen3-4B-Thinking-2507 名义上为每题生成 128 次尝试，以估计题目难度。发布数组保留了这些尝试的标量结果，但有 453 条记录只含 62-127 个值，另有一条含 256 个值。在线 GRPO 则为每个 prompt 采样 16 个当前 policy 的证明；64 个 prompt 构成 1,024 个样本的 batch。Reasoning Cache 在训练中增加三轮状态摘要。测试时，论文比较单轮生成与多种预算大得多的迭代 scaffold。

因此，该贡献是一套相互耦合的配方，而不是单一、完整的 trace release：SFT proof distillation 初始化证明风格，分数总体统计定义 curriculum，rubric judgment 提供 RL reward，文本 cache state 组织迭代推理，高预算 inference 进一步探索改进。相应的审计边界同样重要：FineProofs-RL 暴露题目、rubric 和标量总体，却不暴露重建这些总体所需的生成文本与证明特定反馈。
