对 **Rollout, Search, and Test-Time Trace Data** 而言，QED-Nano 提供了一份有用的预算账本。复用研究应区分四层：名义上每题 128 次的离线 Qwen3 难度统计尝试；每个 prompt 16 次、用于 GRPO 的在线 QED-Nano rollout；训练中的三轮 Reasoning-Cache refinement；以及可接近两百万 token 的 test-time scaffold 预算。若只报告“rollout 数量”，就会把这些不可比较的过程写成同一对象。

FineProofs-RL 可以支持 prompt-level 与统计型研究，但不能宣称能访问隐藏 trace。发布的题目文本、rubric、score population、数量、均值和标准差可以用于：

- 在已观察的难度与方差统计下研究 curriculum rule；
- 在保留每条记录实际 list length 的前提下，为新 rollout collection 分层采样题目；
- 使用另行记录的 judge，将新生成证明与发布的题目级 rubric 对照；
- 审计全失败过滤与过易过滤如何改变训练 prompt 分布；
- 设计更完整的发布，把每个 score 与 proof text、judge output、model revision、seed 和 token budget 对齐。

该数据不是现成的 SFT proof text、preference pair、process label 或 reward-model training data。FineProofs-SFT 才是用于 distillation 与 SFT 的独立证明文本 artifact。FineProofs-RL 只有在复用者提供 policy generator 和定义清楚的 rubric grader、记录新产生的尝试并重新检查 judge calibration 时，才能作为新 RLVR-style experiment 的题目来源。缺少对应 action 的历史 scalar score 列表无法训练论文中的 policy。

构建配方也适合受控 ablation。研究者可比较保留与排除零成功题目、固定与可变离线样本数、二值 outcome 与 0-7 rubric outcome、单轮 rollout 与摘要状态 rollout，以及预算匹配的 inference scaffolds。每项比较都应尽量固定模型、题目集合、judge、maximum response length、temperature 与总生成 token。

对 verifier 研究，论文提供了具体的 learned-judge audit surface。后续工作可重做人工对比，按 score band 衡量 false acceptance 与 false rejection，测试对冗长程度和写作风格变化的鲁棒性，并针对 rubric 条款探测 reward hacking。由于 FineProofs-RL 缺少逐尝试输入输出，这些研究必须重新生成证明，不能追溯验证已发布分数。

对 test-time compute 研究，应把生成 token、调用次数、并行宽度、顺序深度、truncation、latency 与计算成本和 proof score 一起报告。单轮约 93,690 token、RSA 约 2,045,764 token 的平均值说明为何必须做预算匹配比较。在约二十倍生成预算下得到的 scaffold 收益是组合系统的证据，不能证明 base model 或训练数据单独变好。

复用前，应固定官方 revisions，把 FineProofs-RL 与 FineProofs-RL-test 作为不同 repository 与 split 处理，保留来源标签，审查上游权利，并为所有新 proof/judge 记录发布稳定 ID。适当的复用等级是：**强配方及题目、rubric、统计参考；有条件的研究复用；若不重新采集则无法进行原始 trace 分析；再分发与生产使用须等待 source-rights 审查**。
